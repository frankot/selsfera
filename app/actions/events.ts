"use server";

import prisma from "@/lib/prisma";
import { EventBaseSchema, type EventInput } from "@/lib/validation/event";
import type { Prisma } from "@prisma/client";

export async function listEvents() {
  return prisma.event.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getEvent(id: string) {
  return prisma.event.findUnique({ where: { id } });
}

export async function getEventBySlug(slug: string) {
  return prisma.event.findUnique({ where: { slug } });
}

export async function createEvent(payload: unknown) {
  const parsed = EventBaseSchema.parse(payload) as EventInput;
  const data = toPrismaEventData(parsed);
  return prisma.event.create({ data: data as Prisma.EventCreateInput });
}

export async function updateEvent(id: string, payload: unknown) {
  const parsed = EventBaseSchema.partial().parse(payload);
  const data = toPrismaEventData(parsed);
  return prisma.event.update({
    where: { id },
    data: data as Prisma.EventUpdateInput,
  });
}

export async function deleteEvent(id: string) {
  await prisma.event.delete({ where: { id } });
  return { ok: true };
}

export async function toggleEventActive(id: string, active: boolean) {
  return prisma.event.update({ where: { id }, data: { active } });
}

function toPrismaEventData(input: Partial<EventInput>) {
  const data: Record<string, unknown> = { ...input };
  if (input.startDate && typeof input.startDate === "string") {
    data.startDate = new Date(input.startDate);
  }
  if (input.endDate && typeof input.endDate === "string") {
    data.endDate = new Date(input.endDate);
  }
  if (input.heroImages) data.heroImages = input.heroImages;
  if (input.priceIncludes) data.priceIncludes = input.priceIncludes;
  if (input.tags) data.tags = input.tags;
  if (input.infoBlocks) data.infoBlocks = input.infoBlocks;
  return data;
}
