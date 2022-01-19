import { GetCurrentUserById } from './../../../utils/get-user-by-id';


import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/model/role.enum';
import { Users } from 'src/users/user.entity';



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
      
    ])
    const { user }: { user: Users } = context.switchToHttp().getRequest();

    // console.log("hihi")
    // console.log(user)
    if (!requiredRoles) {
      return true;
    }
   
    

    
    return requiredRoles.some((role) => user.role?.includes(role));
    

  }
}
