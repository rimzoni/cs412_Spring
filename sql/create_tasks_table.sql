CREATE TABLE "public"."tasks" (
    "id" serial,
    "name" character varying,
    "description" character varying,
    "status" character varying,
    PRIMARY KEY ("id")
);

ALTER TABLE public."tasks"
    OWNER to iuslab;

ALTER TABLE public.”tasks”
  ADD COLUMN “userId” integer,
  ADD FOREIGN KEY (“userId”) REFERENCES “public”.”User”(“id”) ON DELETE CASCADE; 

ALTER TABLE public.”tasks”
  ADD COLUMN "addr_140" character varying;