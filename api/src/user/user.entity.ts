import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Party } from 'src/party/party.entitiy';
import { PartyMember } from 'src/party-member/party-member.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Party, (party) => party.user)
  parties: Party[];

  @OneToMany(() => PartyMember, (partyMember) => partyMember.user)
  members: PartyMember[];
}
