import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesModule } from './state/state.module';

@Module({
  imports: [StatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
