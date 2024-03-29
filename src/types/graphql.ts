
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
}

export class UpdateNoteInput {
    id: number;
    name: string;
    description: string;
}

export interface BaseError {
    message: string;
}

export class Comment {
    id: number;
    text: string;
    noteId: number;
}

export abstract class IQuery {
    abstract comments(): Nullable<Nullable<Comment>[]> | Promise<Nullable<Nullable<Comment>[]>>;

    abstract comment(id: number): Nullable<GetCommentByIdResult> | Promise<Nullable<GetCommentByIdResult>>;

    abstract notes(): Nullable<Nullable<Note>[]> | Promise<Nullable<Nullable<Note>[]>>;

    abstract note(id: number): Nullable<GetNoteByIdResult> | Promise<Nullable<GetNoteByIdResult>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;

    abstract removeComment(id: number): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createNote(createNoteInput: CreateNoteInput): Note | Promise<Note>;

    abstract updateNote(updateNoteInput: UpdateNoteInput): Note | Promise<Note>;

    abstract removeNote(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

export class NotFoundError implements BaseError {
    message: string;
}

export class UnauthorizedError implements BaseError {
    message: string;
}

export class Note {
    id: number;
    name: name_String_NotNull_minLength_5;
    description: string;
    comments?: Nullable<Nullable<Comment>[]>;
}

export type name_String_NotNull_minLength_5 = any;
export type GetCommentByIdResult = Comment | UnauthorizedError | NotFoundError;
export type GetNoteByIdResult = Note | UnauthorizedError | NotFoundError;
type Nullable<T> = T | null;
