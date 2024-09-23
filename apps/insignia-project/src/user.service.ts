import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(data: { email: string; password: string }) {
    return this.prisma.user.create({ data });
  }

  findAllUsers() {
    return this.prisma.user.findMany();
  }

  updateUser(id: number, data: { email?: string; password?: string }) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
