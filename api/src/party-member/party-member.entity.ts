import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { Party } from 'src/party/party.entitiy';

@Entity()
export class PartyMember {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Party, (party) => party.member)
  party: Party;

  @ManyToOne(() => User, (user) => user.members, { cascade: true })
  user: User;
}
