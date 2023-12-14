import { CookedRawString } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  ngOnInit(): void {
  }


  notes: Note[] = [];
  newNote: string = '';
  topaxis = "50px";
  leftaxis = "50px";
  addNote() {
    if (this.newNote.trim() !== '') {
      const note: Note = {
        id: this.notes.length + 1,
        content: this.newNote,
        top: this.topaxis,
        left: this.leftaxis

      };
      this.notes.push(note);
      this.newNote = '';
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  handleDragEnd(event: DragEvent, note: Note) {
    note.top = event.clientY + "px";
    note.left = event.clientX + "px";
  }

}



interface Note {
  id: number;
  content: string;
  top: string;
  left: string;
}