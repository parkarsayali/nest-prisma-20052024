import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { StateRepository } from './state.repository';
import { StateService } from './state.service';
import { StatesController } from './state.controller';

@Module({
  imports: [PrismaModule],
  providers: [StateRepository, StateService],
  controllers: [StatesController],
})
export class StatesModule {}
