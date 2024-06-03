import {
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
  @ApiResponse({ status: 200, description: 'Success.' })
  async findAll(): Promise<any[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuario pelo id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuario' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera usuario selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta usuario selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
