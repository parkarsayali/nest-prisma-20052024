import { Injectable } from '@nestjs/common';
import { Prisma, state } from '@prisma/client';
import { StateRepository } from './state.repository';

@Injectable()
export class StateService {
  constructor(private readonly stateRepo: StateRepository) {}

  async getStates(): Promise<state[]> {
    return this.stateRepo.getStates();
  }

  async getStateById(state_id: number): Promise<state> {
    return this.stateRepo.getStateById(state_id);
  }
  async createState(data: Prisma.stateCreateInput): Promise<state> {
    return this.stateRepo.createState(data);
  }

  async updateState(
    state_id: number,
    data: Prisma.stateUpdateInput,
  ): Promise<state> {
    return this.stateRepo.updateState(state_id, data);
  }

  async deleteState(state_id: number): Promise<state> {
    return this.stateRepo.deleteState(state_id);
  }
}
