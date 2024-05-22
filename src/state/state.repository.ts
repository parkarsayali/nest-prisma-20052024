import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { state, Prisma } from '@prisma/client';

@Injectable()
export class StateRepository {
  constructor(private prisma: PrismaService) {}

  //   async getStates(): Promise<any> {
  //     try {
  //       const states = await this.prisma.state.findMany({
  //         // include: {
  //         //   country: true,
  //         // },
  //         // select: {
  //         //   name: true,
  //         // },
  //       });
  //       return states;
  //     } catch (error) {
  //       console.error('findManyError', error);
  //       throw new Error('Could not fetch states');
  //     }
  //   }

  async getStates(): Promise<any> {
    try {
      return this.prisma.state.findMany({
        include: {
          country: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error fetching states:', error);
      throw error;
    }
  }

  async getStateById(state_id: number): Promise<any> {
    try {
      return this.prisma.state.findUnique({
        where: { state_id },
        include: {
          country: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error fetching state by id:', error);
      throw error;
    }
  }

  async createState(data: Prisma.stateCreateInput): Promise<state> {
    return this.prisma.state.create({ data });
  }

  async updateState(
    state_id: number,
    data: Prisma.stateUpdateInput,
  ): Promise<state> {
    return this.prisma.state.update({ where: { state_id }, data });
  }

  async deleteState(state_id: number): Promise<state> {
    return this.prisma.state.delete({ where: { state_id } });
  }
}
