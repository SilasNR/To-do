import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id_user: id },
    });

    if (!user) {
      throw new HttpException(`Usuário não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      console.log('User with email already exists:', createUserDto.email);
      throw new HttpException('Email já registrado.', HttpStatus.BAD_REQUEST);
    }
    try {
      console.log('Saving new user:', createUserDto);
      const saltOrRounds = 10; // o custo do processamento, 10 é geralmente suficiente
      const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
      createUserDto.password = hash; // substitui a senha original pelo hash
      return await this.userRepository.save(
        this.userRepository.create(createUserDto),
      );
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Email já registrado.', HttpStatus.BAD_REQUEST);
      } else {
        console.error('Erro ao salvar o usuario:', error);
        throw new HttpException(
          'Erro ao criar o registro. Tente novamente mais tarde.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    const result = await this.userRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new HttpException(`Usuário não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Usuário não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
