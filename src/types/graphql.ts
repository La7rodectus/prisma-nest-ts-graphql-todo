
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export class Note {
    id: number;
    name: string;
    description: string;
    comments_list_id: number;
}

export abstract class IQuery {
    abstract notes(): Nullable<Note>[] | Promise<Nullable<Note>[]>;

    abstract note(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

export abstract class IMutation {
    abstract createNote(createNoteInput: CreateNoteInput): Note | Promise<Note>;

    abstract updateNote(updateNoteInput: UpdateNoteInput): Note | Promise<Note>;

    abstract removeNote(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

type Nullable<T> = T | null;
