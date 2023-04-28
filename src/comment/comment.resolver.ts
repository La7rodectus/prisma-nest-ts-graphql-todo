import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CreateCommentInput, UpdateCommentInput } from 'src/types/graphql';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation('createComment')
  create(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentService.create(createCommentInput);
  }

  @Query('comments')
  async findAll() {
    const comments = await this.commentService.findAll();
    return {
      __typename: 'Comment',
      ...comments
    };
  }

  @Query('comment')
  async findOne(@Args('id') id: number) {
    const comment = await this.commentService.findOne(id);
    if (!comment) {
      return {
        __typename: 'NotFoundError',
        message: 'Comment not found'
      };
    }
    return {
      __typename: 'Comment',
      ...comment
    };
  }

  @Mutation('updateComment')
  update(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentService.update(updateCommentInput.id, updateCommentInput);
  }

  @Mutation('removeComment')
  remove(@Args('id') id: number) {
    return this.commentService.remove(id);
  }
}
