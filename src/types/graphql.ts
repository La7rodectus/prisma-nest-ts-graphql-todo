
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCommentInput {
    text: string;
    noteId: number;
}

export class UpdateCommentInput {
    id: number;
    text: string;
}

export class CreateNoteInput {
    name: string;
    description: string;
    comments_list_id: number;
}

export class UpdateNoteInput {
    id: number;
    name: string;
    description: string;
}

export class Comment {
    id: number;
    text: string;
    noteId: number;
}

export abstract class IQuery {
    abstract comments(): Nullable<Comment>[] | Promise<Nullable<Comment>[]>;

    abstract comment(id: number): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract notes(): Nullable<Note>[] | Promise<Nullable<Note>[]>;

    abstract note(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;

    abstract removeComment(id: number): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createNote(createNoteInput: CreateNoteInput): Note | Promise<Note>;

    abstract updateNote(updateNoteInput: UpdateNoteInput): Note | Promise<Note>;

    abstract removeNote(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

export class Note {
    id: number;
    name: string;
    description: string;
    comments?: Nullable<Nullable<Comment>[]>;
}

type Nullable<T> = T | null;
