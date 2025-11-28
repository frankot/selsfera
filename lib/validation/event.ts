import { z } from 'zod'

export const HeroImageSchema = z.object({
  src: z.string().url().or(z.string().min(1)),
  alt: z.string().min(1),
  publicId: z.string().optional(),
})

export const InfoBlockSchema = z.object({
  title: z.string().min(1),
  type: z.enum(['list', 'paragraphs', 'raw']).default('list'),
  items: z.array(z.string()).optional(),
  content: z.string().optional(),
})

export const EventBaseSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  location: z.string().min(1),
  country: z.string().optional(),
  startDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()),
  price: z.coerce.number().int().nonnegative(),
  currency: z.string().min(1).default('PLN'),
  priceIncludes: z.array(z.string()).default([]),
  spotsTotal: z.coerce.number().int().nonnegative(),
  spotsLeft: z.coerce.number().int().nonnegative(),
  difficulty: z.string().optional(),
  hostName: z.string().min(1),
  hostAvatar: z.string().url().optional(),
  hostBio: z.string().optional(),
  heroImages: z.array(HeroImageSchema).default([]),
  tags: z.array(z.string()).default([]),
  rating: z.number().min(0).max(5).optional(),
  reviewsCount: z.coerce.number().int().nonnegative().default(0),
  body: z.string().min(1),
  infoBlocks: z.array(InfoBlockSchema).default([]),
  mapEmbedUrl: z.string().url().optional(),
  active: z.boolean().default(true),
})

export type EventInput = z.infer<typeof EventBaseSchema>
export type InfoBlock = z.infer<typeof InfoBlockSchema>
export type HeroImage = z.infer<typeof HeroImageSchema>
