import { plainToInstance } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsUUID,
  Max,
  Min,
  validateSync,
} from 'class-validator';

class Member {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(20)
  @Max(100)
  age: number;
}

export const validateCls = (value: any) => {
  const entity = plainToInstance(Member, value, {
    excludeExtraneousValues: false,
    exposeUnsetFields: false, // ! must be false
  });

  const errors = validateSync(entity, {
    forbidUnknownValues: false,
  });

  if (!errors || errors.length === 0) {
    return true;
  }
  return false;
};
