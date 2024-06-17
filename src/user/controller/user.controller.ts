import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
@ApiTags('usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todos usuarios' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async findAll(): Promise<any[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuario pelo id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuario' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    if (!createUserDto || Object.keys(createUserDto).length === 0) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera usuario selecionado por id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    if (!updateUserDto || Object.keys(updateUserDto).length === 0) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta usuario selecionado por id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
