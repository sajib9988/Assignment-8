/*
  Warnings:

  - The `status` column on the `ServiceRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'in_progress', 'done');

-- AlterTable
ALTER TABLE "ServiceRecord" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';

-- DropEnum
DROP TYPE "ServiceStatus";
