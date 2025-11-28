import { getEvent } from "@/app/actions/events";
import AdminPageWrapper from "@/app/admin/_components/AdminPageWrapper";
import EventForm from "../../_components/EventForm";

export default async function EditEventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);
  if (!event) {
    return (
      <AdminPageWrapper title="Edytuj wydarzenie">
        <div className="text-foreground1/70 text-sm">
          Nie znaleziono wydarzenia.
        </div>
      </AdminPageWrapper>
    );
  }
  const formEvent = {
    ...event,
    priceIncludes: (event.priceIncludes as unknown as string[]) ?? [],
    heroImages:
      (event.heroImages as unknown as {
        src: string;
        alt: string;
        publicId?: string;
      }[]) ?? [],
    infoBlocks:
      (event.infoBlocks as unknown as {
        title: string;
        type: "list" | "paragraphs" | "raw";
        items?: string[];
        content?: string;
      }[]) ?? [],
    subtitle: event.subtitle ?? "",
    country: event.country ?? "",
    hostAvatar: event.hostAvatar ?? "",
    hostBio: event.hostBio ?? "",
    difficulty: event.difficulty ?? "",
    mapEmbedUrl: event.mapEmbedUrl ?? "",
    tags: (event.tags as unknown as string[]) ?? [],
    rating: (event.rating ?? 0) as number,
  };
  return (
    <AdminPageWrapper title="Edytuj wydarzenie">
      <EventForm id={params.id} event={formEvent} />
    </AdminPageWrapper>
  );
}
