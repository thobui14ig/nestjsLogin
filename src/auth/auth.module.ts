import { Profile } from './../profile/modle/profile.entity';
import { RolesGuard } from './guards/roles/.guard';
import { UsersModule } from '../users/users.module';
import { IsUserAlreadyExistConstraint } from './validate/unique.validate';
import { Users } from './../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module, Controller } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Profile]),
        JwtModule.register({
          secret: "reset",
        }),
       
      ],
      
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy,IsUserAlreadyExistConstraint, RolesGuard],
    exports: [AuthService],
})

export class AuthModule{}
