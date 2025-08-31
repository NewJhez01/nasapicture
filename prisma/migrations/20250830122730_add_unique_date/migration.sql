/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Picture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Picture_date_key" ON "public"."Picture"("date");
