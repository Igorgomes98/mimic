import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginInput } from './dto/auth.input';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}
  
  private async validateUser({email, password}: {email:string, password: string}) : Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if(user && await bcrypt.compare(password, user.password_hash)){
      const {password_hash, ...result} = user;
      return result;
    }
    return null
  }

  async login(loginInput: LoginInput){
    const user = await this.validateUser(loginInput);
    if(!user){
      throw new NotFoundException('Credenciais invailidas');
    }

    const payload = {email: user.email, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
      user
    }
  }


  }
