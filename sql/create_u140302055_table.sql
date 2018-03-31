CREATE TABLE public."u140302055"
(
    id serial,
    Department character varying,
    Manager character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."u140302055"
    OWNER to postgres;
