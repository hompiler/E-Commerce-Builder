/*
  Warnings:

  - You are about to drop the column `ssn` on the `Trader` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Trader_ssn_key";

-- AlterTable
ALTER TABLE "Trader" DROP COLUMN "ssn",
ALTER COLUMN "policy" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
