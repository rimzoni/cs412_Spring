CREATE TABLE public."140302101"
(
    Id serial,
    Department character varying,
    Manager character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."140302101"
    OWNER to postgres;
