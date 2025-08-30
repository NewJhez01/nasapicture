-- CreateTable
CREATE TABLE "public"."Picture" (
    "id" SERIAL NOT NULL,
    "copyright" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "hdUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);
