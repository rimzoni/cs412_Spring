CREATE TABLE public."150302023"
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

ALTER TABLE public."150302023"
    OWNER to lejlahodzic;