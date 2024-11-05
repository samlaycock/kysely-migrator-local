# Kysely Migrator Local

A [Kysely](https://kysely.dev/) migrator for locally defining a migration within
your application code.

## Install

`npm i kysely kysely-migrator-local`

## Usage

```ts
import { Kysely, SqliteDialect, type Migration } from "kysely";
import { LocalMigrator } from "kysely-migrator-local";
import Database from "better-sqlite3";

interface ExampleDatabase {
  users: {
    id: number;
    name: string;
  };
}

const db = new Kysely<ExampleDatabase>({
  dialect: new SqliteDialect({
    database: new Database(':memory:'),
  }),
});

const migrations: Record<string, Migration> = {
  "1234567890_add_some_tables": {
    async up(db: Kysely<ExampleDatabase>) {
      //...
    },
    async down(db: Kysely<ExampleDatabase>) {
      //...
    },
  }
};

const migrator = new LocalMigrator({
  db,
  migrations,
});

await migrator.migrateToLatest();
```
