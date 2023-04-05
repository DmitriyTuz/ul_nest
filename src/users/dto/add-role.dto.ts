import { IsInt, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Must be a string" })
  readonly value: string;
  @IsInt({ message: "Must be a number" })
  readonly userId: number;
}
