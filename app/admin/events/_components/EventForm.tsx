"use client";

import { createEvent, updateEvent } from "@/app/actions/events";
import type { EventInput } from "@/lib/validation/event";
import { useState } from "react";

function dateToInput(d?: string | Date) {
  if (!d) return "";
  const v = typeof d === "string" ? d : d.toISOString();
  return v.slice(0, 10);
}

type Block = {
  title: string;
  type: "list" | "paragraphs" | "raw";
  items?: string[];
  content?: string;
};
function toBlocks(
  b?:
    | {
        title: string;
        type: "list" | "paragraphs" | "raw";
        items?: string[];
        content?: string;
      }[]
    | undefined
): Block[] {
  return (b ?? []).map(x => ({
    title: x.title,
    type: x.type ?? "list",
    items: x.items,
    content: x.content,
  }));
}

const empty: EventFormData = {
  slug: "",
  title: "",
  subtitle: "",
  location: "",
  country: "",
  startDate: "",
  endDate: "",
  price: 0,
  currency: "PLN",
  priceIncludes: [] as string[],
  spotsTotal: 0,
  spotsLeft: 0,
  difficulty: "",
  hostName: "",
  hostAvatar: "",
  hostBio: "",
  heroImages: [] as { src: string; alt: string; publicId?: string }[],
  tags: [] as string[],
  rating: 0,
  reviewsCount: 0,
  body: "",
  infoBlocks: [] as {
    title: string;
    type: "list" | "paragraphs" | "raw";
    items?: string[];
    content?: string;
  }[],
  mapEmbedUrl: "",
  active: true,
};

type EventFormData = Partial<EventInput>;
export default function EventForm({
  event,
  id,
}: {
  event?: EventFormData;
  id?: string;
}) {
  const [data, setData] = useState<EventFormData>(event ?? empty);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      if (id) await updateEvent(id, data);
      else await createEvent(data);
      window.location.href = "/admin/events";
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Błąd zapisu";
      setError(msg);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="rounded-sm border border-red-300 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <Text
          label="Slug"
          value={data.slug ?? ""}
          onChange={v => setData({ ...data, slug: v })}
          required
        />
        <Text
          label="Tytuł"
          value={data.title ?? ""}
          onChange={v => setData({ ...data, title: v })}
          required
        />
        <Text
          label="Podtytuł"
          value={data.subtitle ?? ""}
          onChange={v => setData({ ...data, subtitle: v })}
        />
        <Text
          label="Lokalizacja"
          value={data.location ?? ""}
          onChange={v => setData({ ...data, location: v })}
          required
        />
        <Text
          label="Kraj"
          value={data.country ?? ""}
          onChange={v => setData({ ...data, country: v })}
        />
        <Text
          label="Data rozpoczęcia"
          type="date"
          value={dateToInput(data.startDate)}
          onChange={v => setData({ ...data, startDate: v })}
          required
        />
        <Text
          label="Data zakończenia"
          type="date"
          value={dateToInput(data.endDate)}
          onChange={v => setData({ ...data, endDate: v })}
          required
        />
        <NumberField
          label="Cena"
          value={Number(data.price ?? 0)}
          onChange={v => setData({ ...data, price: v })}
        />
        <Text
          label="Waluta"
          value={data.currency ?? "PLN"}
          onChange={v => setData({ ...data, currency: v })}
        />
        <NumberField
          label="Miejsc łącznie"
          value={Number(data.spotsTotal ?? 0)}
          onChange={v => setData({ ...data, spotsTotal: v })}
        />
        <NumberField
          label="Miejsca wolne"
          value={Number(data.spotsLeft ?? 0)}
          onChange={v => setData({ ...data, spotsLeft: v })}
        />
        <Text
          label="Poziom"
          value={data.difficulty ?? ""}
          onChange={v => setData({ ...data, difficulty: v })}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Text
          label="Prowadzący - imię i nazwisko"
          value={data.hostName ?? ""}
          onChange={v => setData({ ...data, hostName: v })}
        />
        <Text
          label="Prowadzący - avatar URL"
          value={data.hostAvatar ?? ""}
          onChange={v => setData({ ...data, hostAvatar: v })}
        />
        <Text
          label="Mapa - embed URL"
          value={data.mapEmbedUrl ?? ""}
          onChange={v => setData({ ...data, mapEmbedUrl: v })}
        />
      </div>
      <TextArea
        label="Bio prowadzącego"
        value={data.hostBio ?? ""}
        onChange={v => setData({ ...data, hostBio: v })}
      />
      <TextArea
        label="Opis (body)"
        value={data.body ?? ""}
        onChange={v => setData({ ...data, body: v })}
        required
      />

      <TagInput
        label="Tagi"
        values={data.tags ?? []}
        onChange={vals => setData({ ...data, tags: vals })}
      />
      <TagInput
        label="Cena obejmuje"
        values={data.priceIncludes ?? []}
        onChange={vals => setData({ ...data, priceIncludes: vals })}
        placeholder="Dodaj punkt i zatwierdź Enter"
      />

      <BlockEditor
        blocks={toBlocks(data.infoBlocks)}
        onChange={blocks => setData({ ...data, infoBlocks: blocks })}
      />

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={!!data.active}
            onChange={e => setData({ ...data, active: e.target.checked })}
          />
          Aktywne
        </label>
        <button
          type="submit"
          disabled={saving}
          className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary rounded-sm px-5 py-2 text-sm font-semibold disabled:opacity-70"
        >
          {saving ? "Zapisywanie…" : "Zapisz"}
        </button>
      </div>
    </form>
  );
}

function Text({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value?: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="text-foreground1/80 mb-1 block">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        className="w-full rounded-sm border border-black/10 bg-white px-3 py-2 shadow-sm dark:bg-black/40"
        type={type}
        value={value ?? ""}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
    </label>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="text-foreground1/80 mb-1 block">{label}</span>
      <input
        className="w-full rounded-sm border border-black/10 bg-white px-3 py-2 shadow-sm dark:bg-black/40"
        type="number"
        value={Number.isFinite(value) ? String(value) : "0"}
        onChange={e =>
          onChange(Number((e.currentTarget as HTMLInputElement).value))
        }
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value?: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-foreground1/80 mb-1 block">
        {label}
        {required ? " *" : ""}
      </span>
      <textarea
        className="w-full rounded-sm border border-black/10 bg-white px-3 py-2 shadow-sm dark:bg-black/40"
        rows={5}
        value={value ?? ""}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
    </label>
  );
}

function TagInput({
  label,
  values,
  onChange,
  placeholder,
}: {
  label: string;
  values?: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");
  function addTag() {
    const v = input.trim();
    if (!v) return;
    onChange([...(values ?? []), v]);
    setInput("");
  }
  return (
    <div className="text-sm">
      <div className="text-foreground1/80 mb-1">{label}</div>
      <div className="flex flex-wrap items-center gap-2">
        {(values ?? []).map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="bg-tertiary text-primary rounded-sm px-2 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          className="flex-1 rounded-sm border border-black/10 bg-white px-3 py-2 shadow-sm dark:bg-black/40"
          value={input}
          placeholder={placeholder}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag();
            }
          }}
        />
        <button
          type="button"
          onClick={addTag}
          className="hover:bg-tertiary/40 rounded-sm border border-black/10 bg-white px-3 py-2 text-sm shadow-sm dark:bg-black/40"
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}

function BlockEditor({
  blocks,
  onChange,
}: {
  blocks?: Block[];
  onChange: (b: Block[]) => void;
}) {
  function addBlock() {
    onChange([...(blocks ?? []), { title: "Sekcja", type: "list", items: [] }]);
  }
  function updateBlock(i: number, patch: Partial<Block>) {
    const next = [...(blocks ?? [])];
    next[i] = { ...next[i], ...patch };
    onChange(next);
  }
  function removeBlock(i: number) {
    const next = [...(blocks ?? [])];
    next.splice(i, 1);
    onChange(next);
  }
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">
          Sekcje informacyjne (elastyczne)
        </div>
        <button
          type="button"
          onClick={addBlock}
          className="hover:bg-tertiary/40 rounded-sm border border-black/10 bg-white px-3 py-1.5 text-sm shadow-sm dark:bg-black/40"
        >
          Dodaj sekcję
        </button>
      </div>
      <div className="space-y-4">
        {(blocks ?? []).map((b, i) => (
          <div key={i} className="rounded-sm border border-black/10 p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <input
                className="w-full rounded-sm border border-black/10 bg-white px-3 py-2 shadow-sm dark:bg-black/40"
                value={b.title}
                onChange={e => updateBlock(i, { title: e.target.value })}
              />
              <select
                className="rounded-sm border border-black/10 bg-white px-2 py-2 text-sm shadow-sm dark:bg-black/40"
                value={b.type ?? "list"}
                onChange={e =>
                  updateBlock(i, {
                    type: e.target.value as "list" | "paragraphs" | "raw",
                  })
                }
              >
                <option value="list">Lista</option>
                <option value="paragraphs">Akapity</option>
                <option value="raw">Dowolny HTML/MD</option>
              </select>
              <button
                type="button"
                onClick={() => removeBlock(i)}
                className="text-xs text-red-600 hover:underline"
              >
                Usuń
              </button>
            </div>
            {b.type === "list" && (
              <TagInput
                label="Elementy"
                values={b.items ?? []}
                onChange={vals => updateBlock(i, { items: vals })}
                placeholder="Dodaj punkt i Enter"
              />
            )}
            {b.type === "paragraphs" && (
              <TextArea
                label="Akapity (oddziel \n\n)"
                value={b.content ?? ""}
                onChange={v => updateBlock(i, { content: v })}
              />
            )}
            {b.type === "raw" && (
              <TextArea
                label="Treść (MD/HTML)"
                value={b.content ?? ""}
                onChange={v => updateBlock(i, { content: v })}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
