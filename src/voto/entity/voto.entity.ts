import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class VotoEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeAluno: string;
    
    @Column()
    raAluno: string;

    @Column()
    votoProf: string;
}