import { Injectable } from '@angular/core';
import { Note } from './notes';
import { NOTES } from './mock-notes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): Observable<Note[]>  {
    const notes = of(NOTES);
    return notes;
  }

  addNote (note:Note): void {
    NOTES.push(note)    
  }
}
