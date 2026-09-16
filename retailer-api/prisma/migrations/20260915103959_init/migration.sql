-- CreateTable
CREATE TABLE "Consumer" (
    "cid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "mailId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "itemCode" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemName" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "units" TEXT NOT NULL,
    "stock" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_mobile_key" ON "Consumer"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_mailId_key" ON "Consumer"("mailId");
