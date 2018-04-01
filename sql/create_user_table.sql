CREATE TABLE public."s140302148"
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

ALTER TABLE public."s140302148"
    OWNER to cs412_user;
