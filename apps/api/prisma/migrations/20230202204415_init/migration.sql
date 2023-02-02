/*
  Warnings:

  - You are about to drop the column `password` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Trader` table. All the data in the column will be lost.
  - Added the required column `password` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Trader" DROP COLUMN "password";
