CREATE TABLE "public"."tasks" (
    "id" serial,
    "name" character varying,
    "description" character varying,
    "status" character varying,
    "userIs" integer,
    "add_008" character varying,
    PRIMARY KEY ("id")
);

ALTER TABLE public."tasks"
    OWNER to iuslab;
