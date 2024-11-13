import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Envio {
  @PrimaryGeneratedColumn()
  id_envio: number;

  @Column()
  destinatario: string;

  @Column()
  remitente: string;

  @Column()
  contenido: string;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  fecha_envio: Date;

  @Column('float')
  distancia: number;

  @Column('float')
  tarifa: number;
}
