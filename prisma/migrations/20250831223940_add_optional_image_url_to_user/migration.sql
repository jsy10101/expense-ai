-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
