import { Component, VERSION, Inject ,OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  constructor(
    
    @Inject(MAT_DIALOG_DATA) public data: any) {
   
}
ngOnInit() {}
}
