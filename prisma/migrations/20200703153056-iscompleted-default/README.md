# Migration `20200703153056-iscompleted-default`

This migration has been generated by Ivan Liang at 7/3/2020, 3:30:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."AnnualGoal" DROP COLUMN "status",
ADD COLUMN "isCompleted" boolean  NOT NULL DEFAULT false;

ALTER TABLE "public"."MonthlyGoal" DROP COLUMN "status",
ADD COLUMN "isCompleted" boolean  NOT NULL DEFAULT false;

ALTER TABLE "public"."WeeklyGoal" DROP COLUMN "status",
ADD COLUMN "isCompleted" boolean  NOT NULL DEFAULT false;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200703152638-goal-description-status..20200703153056-iscompleted-default
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -26,9 +26,9 @@
   id              Int           @id @default(autoincrement())
   goalStatement   String
   goalDescription String?
   nickname        String
-  status          Boolean
+  isCompleted     Boolean       @default(false)
   createdAt       DateTime      @default(now())
   year            DateTime
   completionDate  DateTime?
   user            User          @relation(fields: [userId], references: [id])
@@ -41,9 +41,9 @@
   id              Int          @id @default(autoincrement())
   goalStatement   String
   goalDescription String?
   nickname        String
-  status          Boolean
+  isCompleted     Boolean      @default(false)
   createdAt       DateTime     @default(now())
   month           DateTime
   completionDate  DateTime?
   user            User         @relation(fields: [userId], references: [id])
@@ -57,9 +57,9 @@
   id              Int         @id @default(autoincrement())
   goalStatement   String
   goalDescription String?
   nickname        String
-  status          Boolean
+  isCompleted     Boolean     @default(false)
   createdAt       DateTime    @default(now())
   week            DateTime
   completionDate  DateTime?
   user            User        @relation(fields: [userId], references: [id])
```

