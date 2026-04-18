-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('CLIENTE', 'REVENDEDOR');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAGO', 'PENDENTE', 'PARCIAL');

-- CreateEnum
CREATE TYPE "FreightPayer" AS ENUM ('CLIENTE', 'EMPRESA');

-- CreateEnum
CREATE TYPE "MovementType" AS ENUM ('ENTRADA', 'SAIDA', 'AJUSTE', 'DEVOLUCAO');

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "birthdate" TIMESTAMP(3),
ADD COLUMN     "customer_type" "CustomerType" NOT NULL DEFAULT 'CLIENTE';

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "min_stock_level" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "stock_quantity" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "freight_cost" DECIMAL(65,30) DEFAULT 0,
ADD COLUMN     "freight_paid_by" "FreightPayer" DEFAULT 'CLIENTE',
ADD COLUMN     "payment_status" "PaymentStatus" NOT NULL DEFAULT 'PENDENTE',
ADD COLUMN     "total_amount" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "stock_movements" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "type" "MovementType" NOT NULL,
    "reason" TEXT,
    "reference_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_movements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "sale_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stock_movements" ADD CONSTRAINT "stock_movements_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
