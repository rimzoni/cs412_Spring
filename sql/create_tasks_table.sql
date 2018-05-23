CREATE TABLE "public"."tasks" (
    "id" serial,
    "name" character varying,
    "description" character varying,
    "status" character varying,
    "userId" integer,
    "addr_031" character varying,
    PRIMARY KEY ("id")
);

ALTER TABLE public."tasks"
    OWNER to iuslab;
