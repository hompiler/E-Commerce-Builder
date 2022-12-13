-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_traderId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "storeId" DROP NOT NULL,
ALTER COLUMN "traderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "Trader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
