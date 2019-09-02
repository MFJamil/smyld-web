import { OnInit, ViewChild, Component, Inject } from '@angular/core';
import {  MatButton } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { SideNavService, SideNavListener } from '../../services/side-nav.service';
import { SettingsComponent } from '../settings/settings.component';
import {modules, Module} from '../../model/Module';
import { ModuleName } from '../../services.enum';
import { MessageService } from '../../services/message.service';
import { LogUtils } from 'src/app/utils/LogUtils';
import { environment } from 'src/environments/environment';

export interface DialogData{
  curPlatform:string;

}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})



export class HeaderComponent implements OnInit,SideNavListener {
  @ViewChild ('platform',{static:false}) btnPlatform:MatButton;
  sideNavIcon:string = 'chevron_right';
  doHideNav:boolean = true;
  appTitle :string = environment.appTitle;
  constructor(
    public dialog:MatDialog,
    public sideNavService:SideNavService,
    public messageService:MessageService,
    private logger: LogUtils) { 
    
  }

  showNav(visible: boolean): void {
    this.doHideNav = !visible;
    if(visible==false){
      this.sideNavIcon = 'chevron_right';
    }
  }


  moduleList():Module[]{
    return modules.filter(curModule => curModule.name!=ModuleName.Home);

  }

  ngOnInit() {
    this.sideNavService.addListener(this);
  }


  openSettingsDialog():void{
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '650px',
      height: '500px'});
      dialogRef.afterClosed().subscribe(result =>{
        this.logger.debug('Dialog was closed with the result : ' + result);
      });
  }

  toggetSideNav(){
    this.sideNavService.toggelSideNav();
    this.switchSideNavIcon(this.sideNavService.isOpened());
  }
  switchSideNavIcon(opened:boolean){
    this.sideNavIcon = opened?'chevron_left':'chevron_right';

  }

  sideNavToggle(opened: boolean): void {
    this.switchSideNavIcon(opened);
  }


}

