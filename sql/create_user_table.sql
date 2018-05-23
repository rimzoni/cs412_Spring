CREATE TABLE public."User"
(
    id serial,
    name character varying,
    email character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."User"
  ADD COLUMN "token" character varying,
  ADD COLUMN "password" character varying;
    OWNER to iuslab;
