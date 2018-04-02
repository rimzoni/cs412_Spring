CREATE TABLE public."140302067"
(
    ID serial,
    Department character varying,
    Manager character varying,
    PRIMARY KEY (ID)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."140302067"
    OWNER to postgres;
