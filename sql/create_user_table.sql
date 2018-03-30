CREATE TABLE public."992450"
(
    id serial,
    department character varying,
    manager character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."992450"
    OWNER to postgres;
