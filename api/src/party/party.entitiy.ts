import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { PartyMember } from 'src/party-member/party-member.entity';

@Entity()
export class Party {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  memberNeeded: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.parties, { cascade: true })
  user: User;

  @OneToMany(() => PartyMember, (partyMember) => partyMember.party)
  member: PartyMember[];
}
