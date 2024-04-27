import { IsString, Length, IsInt, IsNumber, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';

export class CreateTarefaDto{

  @IsNumber()
  @Column()
  id_tarefa: number;

  @IsString()
  @Length(4,20, { message: 'tamanho minimo para o nome é de 4 caracteres'})
  nome: string;

  @IsString()
  @Length(20,100, { message: 'tamanho minimo de descrição é de 20 caracteres'})
  descricao: string;

  @IsDate()
  @Column()
  data_entrega: Date;

}

export class UpDateTarefaDto extends PartialType(CreateTarefaDto){}