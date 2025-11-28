import {
  deleteEvent,
  listEvents,
  toggleEventActive,
} from "@/app/actions/events";
import AdminPageWrapper from "@/app/admin/_components/AdminPageWrapper";
import Dropdown, { DropdownItem } from "@/app/admin/_components/Dropdown";
import { Table, TBody, TD, TH, THead, TR } from "@/app/admin/_components/Table";
import Link from "next/link";

import type { Event } from "@prisma/client";

export default async function EventsPage() {
  const events = (await listEvents()) as Event[];
  return (
    <AdminPageWrapper title="Wydarzenia">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-foreground1/70 text-sm">
          Łącznie: {events.length}
        </div>
        <Link
          href="/admin/events/dodaj"
          className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary rounded-sm px-4 py-2 text-sm font-semibold"
        >
          Dodaj
        </Link>
      </div>
      <Table>
        <THead>
          <TR>
            <TH>Tytuł</TH>
            <TH>Daty</TH>
            <TH>Lokalizacja</TH>
            <TH>Status</TH>
            <TH className="w-12">Akcje</TH>
          </TR>
        </THead>
        <TBody>
          {events.map((e: Event) => (
            <TR key={e.id}>
              <TD className="font-medium">{e.title}</TD>
              <TD>
                {new Date(e.startDate).toLocaleDateString()} –{" "}
                {new Date(e.endDate).toLocaleDateString()}
              </TD>
              <TD>{e.location}</TD>
              <TD>
                <span
                  className={`rounded-sm px-2 py-0.5 text-xs font-medium ${e.active ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-700"}`}
                >
                  {e.active ? "Aktywne" : "Nieaktywne"}
                </span>
              </TD>
              <TD>
                <RowActions id={e.id} active={e.active} />
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </AdminPageWrapper>
  );
}

function RowActions({ id, active }: { id: string; active: boolean }) {
  async function toggle() {
    "use server";
    await toggleEventActive(id, !active);
  }
  async function remove() {
    "use server";
    await deleteEvent(id);
  }
  return (
    <Dropdown trigger={<span>•••</span>}>
      <DropdownItem>
        <Link href={`/admin/events/${id}/edit`}>Edytuj</Link>
      </DropdownItem>
      <form action={toggle}>
        <DropdownItem>{active ? "Dezaktywuj" : "Aktywuj"}</DropdownItem>
      </form>
      <form action={remove}>
        <DropdownItem danger>Usuń</DropdownItem>
      </form>
    </Dropdown>
  );
}
