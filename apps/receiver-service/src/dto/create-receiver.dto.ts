import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateReceiverDto {
  @IsString()
  user: string;

  @IsString()
  class: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;
}
