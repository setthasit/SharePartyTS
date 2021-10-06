import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1633535046870 implements MigrationInterface {
  name = 'initial1633535046870';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "party" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "memberNeeded" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_e6189b3d533e140bb33a6d2cec1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "party_member" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "partyId" integer, "userId" integer, CONSTRAINT "PK_f2f75ff1c8358327891c602ff27" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "party" ADD CONSTRAINT "FK_860bc1524bbf2c8c40e26cf9df8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "party_member" ADD CONSTRAINT "FK_50ff22262763692de27f9e65540" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "party_member" ADD CONSTRAINT "FK_94a08667c134fab21b3ed819757" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "party_member" DROP CONSTRAINT "FK_94a08667c134fab21b3ed819757"`,
    );
    await queryRunner.query(
      `ALTER TABLE "party_member" DROP CONSTRAINT "FK_50ff22262763692de27f9e65540"`,
    );
    await queryRunner.query(
      `ALTER TABLE "party" DROP CONSTRAINT "FK_860bc1524bbf2c8c40e26cf9df8"`,
    );
    await queryRunner.query(`DROP TABLE "party_member"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "party"`);
  }
}
