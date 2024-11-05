import { type Migration, type MigrationProvider } from "kysely";

export interface LocalMigrationProviderProps {
  migrations: Record<string, Migration>;
}

export class LocalMigrationProvider implements MigrationProvider {
  private _migrations: Record<string, Migration>;

  constructor({ migrations }: LocalMigrationProviderProps) {
    this._migrations = migrations;
  }

  getMigrations(): Promise<Record<string, Migration>> {
    return Promise.resolve(this._migrations);
  }
}
