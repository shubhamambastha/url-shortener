import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(1024)
  public longUrl: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(9)
  public shortCode!: string;
}

export class UpdateUrlDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(1024)
  public longUrl: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(9)
  public shortCode!: string;
}
