import { configuration } from 'src/config/config';
import { PartyMember } from 'src/party-member/party-member.entity';
import { Party } from 'src/party/party.entitiy';
import { User } from 'src/user/user.entity';
import { ConnectionOptions } from 'typeorm';

export const cliDbConfig: ConnectionOptions = {
  type: 'postgres',
  useUTC: true,
  host: configuration.postgres.host,
  port: Number(configuration.postgres.port),
  username: configuration.postgres.username,
  password: configuration.postgres.password,
  database: configuration.postgres.database,
  entities: [User, Party, PartyMember],
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default cliDbConfig;
