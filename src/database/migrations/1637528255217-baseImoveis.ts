import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class baseImoveis1637528255217 implements MigrationInterface {
    private table = new Table({
    name: 'base_imoveis',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'tipo',
        type: 'varchar',
        length: '210',
        isNullable: true
      },
      {
        name: 'bairro',
        type: 'varchar',
        length: '210',
        isNullable: true
      },

      { name: 'quartos', type: 'double', isNullable: true },
      { name: 'vagas', type: 'double', isNullable: true },
      { name: 'suites', type: 'double', isNullable: true },
      { name: 'area', type: 'double', isNullable: true },
      { name: 'valor', type: 'double', isNullable: true },
      { name: 'condominio', type: 'double', isNullable: true },
      { name: 'iptu', type: 'double', isNullable: true }
      
    ]
  })

  public async up(queryRunner:QueryRunner) :Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner:QueryRunner) :Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}

