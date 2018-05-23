ALTER TABLE "public"."tasks" ADD COLUMN "userId" integer,
ADD FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE;

ALTER TABLE "public"."tasks" ADD COLUMN "addr_059" character varying;

INSERT INTO public.tasks("id", "name", "description", "status", "userId", "addr_059")
VALUES(4, 'Component4', 'Add component4', 'In progress4', 3, 'test1');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(5, 'Component5', 'Add component5', 'In progress5', 3, 'test5');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(6, 'Component6', 'Add component6', 'In progress6', 3, 'test6');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(7, 'Component7', 'Add component7', 'In progress7', 3, 'test7');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(8, 'Component8', 'Add component8', 'In progress8', 4, 'test8');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(9, 'Component9', 'Add component9', 'In progress9', 4, 'test9');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(10, 'Component10', 'Add component10', 'In progress10', 4, 'test10');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(11, 'Component11', 'Add component11', 'In progress11', 4, 'test11');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(12, 'Component12', 'Add component12', 'In progress12', 2, 'test12');

INSERT INTO "public"."tasks"("id", "name", "description", "status", "userId", "addr_059")
VALUES(13, 'Component13', 'Add component13', 'In progress13', 2, 'test13');
