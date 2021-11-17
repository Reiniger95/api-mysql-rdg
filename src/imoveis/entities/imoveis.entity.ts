import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'base_imoveis' })
export class Imoveis {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  tipo: string

  @Column()
  bairro: string

  @Column()
  quartos: number

  @Column()
  vagas: number

  @Column()
  suites: number

  @Column()
  area: number

  @Column()
  valor: number

  @Column()
  condominio: number

  @Column()
  iptu: number
}
