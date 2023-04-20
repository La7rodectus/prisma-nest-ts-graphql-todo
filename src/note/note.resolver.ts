import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NoteService } from './note.service';
import { CreateNoteInput, UpdateNoteInput } from 'src/types/graphql';

@Resolver('Note')
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation('createNote')
  create(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.create(createNoteInput);
  }

  @Query('notes')
  findAll() {
    return this.noteService.findAll();
  }

  @Query('note')
  async findOne(@Args('id') id: number) {
    const note = await this.noteService.findOne(id);
    console.log(typeof note);

    if (!note) {
      return {
        __typename: 'NotFoundError',
        message: 'Note not found!'
      };
    }
    return {
      __typename: 'Note',
      ...note
    };
  }

  @Mutation('updateNote')
  update(@Args('updateNoteInput') updateNoteInput: UpdateNoteInput) {
    return this.noteService.update(updateNoteInput.id, updateNoteInput);
  }

  @Mutation('removeNote')
  remove(@Args('id') id: number) {
    return this.noteService.remove(id);
  }
}
