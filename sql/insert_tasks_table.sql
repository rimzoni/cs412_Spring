INSERT INTO "public"."tasks"("id", "name", "description", "status") VALUES(1, 'Routes', 'Add routes for tasks', 'In Progress') RETURNING "id", "name", "description", "status";
INSERT INTO "public"."tasks"("id", "name", "description", "status") VALUES(2, 'Model', 'Add model for tasks', 'In progress') RETURNING "id", "name", "description", "status";
INSERT INTO "public"."tasks"("id", "name", "description", "status") VALUES(3, 'Component', 'Add component', 'In progress') RETURNING "id", "name", "description", "status";

