import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput, UpdateCommentInput } from 'src/types/graphql';

@Injectable()
export class CommentService {
  private prisma: PrismaService = new PrismaService();

  create(createCommentInput: CreateCommentInput) {
    return this.prisma.comment.create({
      data: createCommentInput
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: { id }
    });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentInput
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({
      where: { id }
    });
  }
}
