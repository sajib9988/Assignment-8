/*
  Warnings:

  - The primary key for the `Bike` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Bike` table. All the data in the column will be lost.
  - You are about to drop the column `licensePlate` on the `Bike` table. All the data in the column will be lost.
  - The primary key for the `ServiceRecord` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ServiceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `ServiceRecord` table. All the data in the column will be lost.
  - The required column `bikeId` was added to the `Bike` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `year` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - The required column `serviceId` was added to the `ServiceRecord` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_bikeId_fkey";

-- DropIndex
DROP INDEX "Bike_licensePlate_key";

-- AlterTable
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_pkey",
DROP COLUMN "id",
DROP COLUMN "licensePlate",
ADD COLUMN     "bikeId" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ADD CONSTRAINT "Bike_pkey" PRIMARY KEY ("bikeId");

-- AlterTable
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_pkey",
DROP COLUMN "id",
DROP COLUMN "isCompleted",
ADD COLUMN     "serviceId" TEXT NOT NULL,
ADD CONSTRAINT "ServiceRecord_pkey" PRIMARY KEY ("serviceId");

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
