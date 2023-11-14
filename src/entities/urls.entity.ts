import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Urls } from '@interfaces/urls.interface';
import { UserEntity } from './users.entity';

@Entity({ name: 'urls' })
export class UrlEntity extends BaseEntity implements Urls {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'long_url', length: 1024, nullable: false })
  @IsNotEmpty()
  longUrl: string;

  @Column({ name: 'short_url', length: 9, nullable: false })
  @IsNotEmpty()
  shortCode: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity)
  owner!: UserEntity;
}
