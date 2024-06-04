import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Faz Login' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async login(@Body() loginDto: { email: string; password: string }) {
    console.log("batatinha frita", loginDto)
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new NotFoundException('Credenciais inválidas');
    }
    return this.authService.login(user);
  }
}
