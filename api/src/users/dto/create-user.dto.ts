// eslint-disable-next-line prettier/prettier
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  User_firstname: string;
  User_lastname: string;
  User_dob: Date;
  @IsEmail()
  @IsNotEmpty()
  User_email: string;
  User_phone: string;
  User_address: string;
  User_image: string;
  User_verification: boolean;
  @IsString()
  @IsNotEmpty()
  User_password: string;
}
