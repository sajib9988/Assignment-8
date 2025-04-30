/*
  Warnings:

  - Added the required column `brand` to the `Bike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bike" ADD COLUMN     "brand" TEXT NOT NULL;
