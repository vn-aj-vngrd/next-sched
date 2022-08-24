-- CreateTable
CREATE TABLE "Schedule" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "classes" STRING NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);
