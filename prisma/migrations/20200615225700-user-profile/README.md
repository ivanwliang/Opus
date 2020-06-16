# Migration `20200615225700-user-profile`

This migration has been generated by Ivan Liang at 6/15/2020, 10:57:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP TABLE "public"."Post";

DROP TABLE "public"."Profile";

DROP TABLE "public"."User";

CREATE TABLE "public"."User" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"displayName" text   ,"email" text  NOT NULL ,"id" text  NOT NULL ,"photoURL" text   ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200615170513-test..20200615225700-user-profile
--- datamodel.dml
+++ datamodel.dml
@@ -2,35 +2,18 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
 }
-model Post {
-  id        Int      @default(autoincrement()) @id
-  createdAt DateTime @default(now())
-  title     String
-  content   String?
-  published Boolean  @default(false)
-  author    User     @relation(fields: [authorId], references: [id])
-  authorId  Int
-}
-
-model Profile {
-  id     Int     @default(autoincrement()) @id
-  bio    String?
-  user   User    @relation(fields: [userId], references: [id])
-  userId Int     @unique
-}
-
 model User {
-  id      Int      @default(autoincrement()) @id
-  email   String   @unique
-  name    String?
-  posts   Post[]
-  profile Profile?
+  id          String   @id
+  email       String   @unique
+  displayName String?
+  photoURL    String?
+  createdAt   DateTime @default(now())
 }
```

