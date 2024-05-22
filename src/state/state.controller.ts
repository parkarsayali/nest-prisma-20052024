import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, state } from '@prisma/client';
import { StateService } from './state.service';

@Controller('states')
export class StatesController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getStates(): Promise<state[]> {
    return this.stateService.getStates();
  }

  @Get(':id')
  async getStateById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<state | null> {
    return this.stateService.getStateById(id);
  }

  @Post()
  async createState(@Body() data: Prisma.stateCreateInput): Promise<state> {
    return this.stateService.createState(data);
  }

  @Put(':id')
  async updateState(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.stateUpdateInput,
  ): Promise<state> {
    return this.stateService.updateState(id, data);
  }

  @Delete(':id')
  async deleteState(@Param('id', ParseIntPipe) id: number): Promise<state> {
    return this.stateService.deleteState(id);
  }
}
