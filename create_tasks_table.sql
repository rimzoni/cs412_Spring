CREATE TABLE "public"."tasks" (
    "id" serial,
    "name" character varying,
    "description" character varying,
    "status" character varying,
    "addr_102" character varying,
    PRIMARY KEY ("id")
);

ALTER TABLE public."tasks"
    OWNER to iuslab;
