import { Component, OnInit } from '@angular/core';
import { Note } from '../notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-note-component',
  templateUrl: './add-note.component.html',
  // styleUrls: ['./add-note-component.component.scss']
})
export class AddNoteComponent implements OnInit {
  note: Note = {
    id: Math.floor(Math.random() * (10000 - 20 + 1) + 10000),
    text: '',
    date: new Date()
  };
  constructor(    
    private notesService: NotesService,

    ) { }

  ngOnInit(): void {
  }
  saveNote(): void {
    this.notesService.addNote(this.note);
  }
}
