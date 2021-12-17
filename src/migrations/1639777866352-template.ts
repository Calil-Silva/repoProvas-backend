import { MigrationInterface, QueryRunner } from 'typeorm';

export class template1639777866352 implements MigrationInterface {
  name = 'template1639777866352';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "categories" ("id" SERIAL NOT NULL, "category_name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "names" ("id" SERIAL NOT NULL, "test_name" character varying NOT NULL, CONSTRAINT "PK_d2e97a54ee33765c4d2ff2b8c79" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "periods" ("id" SERIAL NOT NULL, "period_name" character varying NOT NULL, CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "professors" ("id" SERIAL NOT NULL, "professor_name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "professors_by_subject" ("id" SERIAL NOT NULL, "subject_id" integer NOT NULL, "professor_id" integer NOT NULL, CONSTRAINT "PK_a814f8d18cde036f5f37b4c8a31" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "subject_name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "tests" ("id" SERIAL NOT NULL, "test_name_id" integer NOT NULL, "category_id" integer NOT NULL, "sub_pro_id" integer NOT NULL, "link" character varying NOT NULL, "period_id" integer NOT NULL, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "tests"');
    await queryRunner.query('DROP TABLE "subjects"');
    await queryRunner.query('DROP TABLE "professors_by_subject"');
    await queryRunner.query('DROP TABLE "professors"');
    await queryRunner.query('DROP TABLE "periods"');
    await queryRunner.query('DROP TABLE "names"');
    await queryRunner.query('DROP TABLE "categories"');
  }
}
