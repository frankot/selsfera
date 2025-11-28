-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "location" TEXT NOT NULL,
    "country" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'PLN',
    "priceIncludes" JSONB NOT NULL,
    "spotsTotal" INTEGER NOT NULL,
    "spotsLeft" INTEGER NOT NULL,
    "difficulty" TEXT,
    "hostName" TEXT NOT NULL,
    "hostAvatar" TEXT,
    "hostBio" TEXT,
    "heroImages" JSONB NOT NULL,
    "tags" TEXT[],
    "rating" DOUBLE PRECISION,
    "reviewsCount" INTEGER NOT NULL DEFAULT 0,
    "body" TEXT NOT NULL,
    "infoBlocks" JSONB NOT NULL,
    "mapEmbedUrl" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");
