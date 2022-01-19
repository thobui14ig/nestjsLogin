import { Users } from 'src/users/user.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    photo: string;

    @OneToOne(type => Users, user => user.profile)
    @JoinColumn()
    user: Users;

}