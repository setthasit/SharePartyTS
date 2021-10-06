import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      useUTC: true,
      host: configuration.postgres.host,
      port: configuration.postgres.port,
      username: configuration.postgres.username,
      password: configuration.postgres.password,
      database: configuration.postgres.database,
      autoLoadEntities: true,
      entities: [],
      migrations: ['src/migrations/*.ts'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
  ],
})
export class DatabaseModule {}
