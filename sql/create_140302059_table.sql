CREATE TABLE public."140302059"
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

ALTER TABLE public."140302059" OWNER TO selma;
