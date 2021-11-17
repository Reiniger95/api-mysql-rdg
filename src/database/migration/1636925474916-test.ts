import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class test1636925474916 implements MigrationInterface {
  private table = new Table({
    name: 'base_relacionamento',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      { name: 'test', type: 'string', isNullable: true }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
