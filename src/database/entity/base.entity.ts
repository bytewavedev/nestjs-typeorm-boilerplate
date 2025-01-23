// import { ContextProvider } from 'src/providers/context.provider';
import { STATUS } from 'src/utils/constants';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({
    name: 'status',
    type: 'enum',
    enum: STATUS,
    default: STATUS.ACTIVE,
  })
  status: STATUS;

  @Column({ name: 'created_by', type: 'bigint', nullable: true })
  createdBy: number;
  @Column({ name: 'updated_by', type: 'bigint', nullable: true })
  updatedBy: number;
  //   @BeforeInsert()
  //   setCreatedBy() {
  //     const user = ContextProvider.getAuthUser();
  //     if (user) {
  //       this.createdBy = user.id;
  //     }
  //   }

  //   @BeforeUpdate()
  //   updateDates() {
  //     this.updatedAt = new Date();
  //   }
  //   @BeforeUpdate()
  //   setUpdatedBy() {
  //     const user = ContextProvider.getAuthUser();
  //     if (user) {
  //       this.updatedBy = user.id;
  //     }
  //   }
}
