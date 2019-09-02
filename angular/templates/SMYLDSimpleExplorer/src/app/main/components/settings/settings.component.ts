import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  public bgColors:string[]=[
    '#009999','#004f99','#527a7a','#264d73','#6b6b47','#993333','#47476b','#2d8658','#660033','#595959','#000000',
    '#1f4718','#3d143a','#3d1714','#1a1d52','#4c71b1','#670eab','#78046e','#9c9719','#193b10','#91231d','#020233']
    constructor(public dialogRef:MatDialogRef<SettingsComponent>) {

  }

  ngOnInit() {
    this.dialogRef.updatePosition({ top: '60px', right: '0px' });
  }
  setBGTheme(color:string){
    document.documentElement.style.setProperty('--nav-bg', color);
    
  }

}
