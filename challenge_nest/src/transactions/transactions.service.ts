import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.create({
      type: createTransactionDto.type,
      amount: createTransactionDto.amount,
    });
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionModel.findAll();
  }

  findOne(id: string): Promise<Transaction> {
    return this.transactionModel.findByPk(id, { rejectOnEmpty: true });
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionModel.findByPk(id, {
      rejectOnEmpty: true,
    });
    transaction.type = updateTransactionDto.type;
    transaction.amount = updateTransactionDto.amount;
    return transaction.save();
  }

  async remove(id: string) {
    const transaction = await this.transactionModel.findByPk(id, {
      rejectOnEmpty: true,
    });
    return transaction.destroy();
  }
}
