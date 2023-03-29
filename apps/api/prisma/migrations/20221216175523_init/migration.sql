-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_storeConfigurationId_fkey";

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "storeConfigurationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_storeConfigurationId_fkey" FOREIGN KEY ("storeConfigurationId") REFERENCES "StoreConfiguration"("id") ON DELETE SET NULL ON UPDATE CASCADE;
