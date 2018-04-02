CREATE TABLE public."150302075"
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

ALTER TABLE public."150302075"
    OWNER to postgres;
