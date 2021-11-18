import { Component, VERSION } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<dialogData>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.issPosition = data;
  }
}
