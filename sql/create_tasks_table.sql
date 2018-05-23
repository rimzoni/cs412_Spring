CREATE TABLE "public"."tasks" (
    "id" serial,
    "name" character varying,
    "description" character varying,
    "status" character varying,
    "action" character varying,
    "addr_150" character varying,
    PRIMARY KEY ("id")
);

ALTER TABLE public."tasks"
    OWNER to postgres;
