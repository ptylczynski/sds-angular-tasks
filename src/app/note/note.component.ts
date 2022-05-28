import { Component, OnInit } from '@angular/core';
import { Note } from '../notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  notes: Note[] = [];
  
  selectedNote?: Note;
  onSelect(note: Note): void {
    this.selectedNote = note;
  }
  constructor(private notesService: NotesService) {}
 
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes()
    .subscribe(notes => this.notes = notes)
  }

}
