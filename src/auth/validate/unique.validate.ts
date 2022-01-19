import { AuthService } from './../auth.service';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
  constructor( private readonly authService: AuthService){
    
  }


  async validate(email: any, args: ValidationArguments) {
    console.log(this.authService)
    const a = await this.authService.findOneByName(email)
    if(a === false) return false;
    return true;
  }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistConstraint,
    });
  };
}