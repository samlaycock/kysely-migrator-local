import { Migrator, type MigratorProps, type Migration } from "kysely";
import { LocalMigrationProvider } from "./providers";

export interface LocalMigratorProps extends MigratorProps {
  migrations: Record<string, Migration>;
}

export class LocalMigrator extends Migrator {
  constructor(props: LocalMigratorProps) {
    const {
      migrations,
      provider = new LocalMigrationProvider({ migrations }),
    } = props;

    super({ ...props, provider });
  }
}
