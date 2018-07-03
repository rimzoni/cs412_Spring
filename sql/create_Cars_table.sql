CREATE TABLE public."Cars"
(
    "ID" integer NOT NULL DEFAULT nextval('"Cars_ID_seq"'::regclass),
    "Model" character varying COLLATE pg_catalog."default",
    "Color" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Cars_pkey" PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Cars"
    OWNER to postgres;
