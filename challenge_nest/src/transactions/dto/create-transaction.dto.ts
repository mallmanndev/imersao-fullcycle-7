import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(['credit', 'debit'])
  type: 'credit' | 'debit';

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;
}
