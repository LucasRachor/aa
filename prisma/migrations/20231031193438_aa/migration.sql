-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Placas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_reparo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serial" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "defeito" TEXT NOT NULL,
    "causa" TEXT NOT NULL,
    "posto" TEXT NOT NULL,
    "pos_mec" TEXT NOT NULL,
    "acumulado" TEXT NOT NULL,
    "tecnico" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Placas_serial_key" ON "Placas"("serial");
