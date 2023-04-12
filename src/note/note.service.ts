import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteInput, UpdateNoteInput } from 'src/types/graphql';

@Injectable()
export class NoteService {
  private prisma: PrismaService = new PrismaService();
  create(createNoteInput: CreateNoteInput) {
    return this.prisma.note.create({
      data: createNoteInput
    });
  }

  findAll() {
    return this.prisma.note.findMany();
  }

  findOne(id: number) {
    return this.prisma.note.findUnique({
      where: { id }
    });
  }

  update(id: number, updateNoteInput: UpdateNoteInput) {
    return this.prisma.note.update({
      where: { id },
      data: updateNoteInput
    });
  }

  remove(id: number) {
    return this.prisma.note.delete({
      where: { id }
    });
  }
}
