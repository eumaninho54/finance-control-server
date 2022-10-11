/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transitions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "input_value" DECIMAL(65,30) NOT NULL,
    "output_value" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "transitions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transitions" ADD CONSTRAINT "transitions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
