CREATE TABLE public."150302165"
(
    "ID" integer NOT NULL DEFAULT nextval('"150302165_ID_seq"'::regclass),
    "Department" character varying COLLATE pg_catalog."default",
    "Manager" character varying COLLATE pg_catalog."default",
    CONSTRAINT "150302165_pkey" PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."150302165"
    OWNER to postgres;
