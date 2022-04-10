import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateTransactionDto {
  @IsString()
  @IsEnum(['credit', 'debit'])
  type: 'credit' | 'debit';

  @IsNumber()
  @IsPositive()
  amount: number;
}
