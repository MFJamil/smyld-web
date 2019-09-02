import { OnInit, ViewChild, Component, Inject } from '@angular/core';
import {  MatButton } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { SideNavService, SideNavListener } from '../../services/side-nav.service';
import { SettingsComponent } from '../settings/settings.component';
import { PlatformService, Platform } from '../../services/platform.service';
import {modules, Module} from '../../model/Module';
import { ModuleName } from '../../services.enum';
import { MessageService } from '../../services/message.service';
import { LogUtils } from 'src/app/utils/LogUtils';

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
  curPlatform:Platform = this.platformService.platform;
  sideNavIcon:string = 'chevron_right';
  doHideNav:boolean = true;
  constructor(
    public dialog:MatDialog,
    public sideNavService:SideNavService,
    public messageService:MessageService,
    private logger: LogUtils,
    public platformService:PlatformService) { 
    
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
    this.platformService.doChangePlatform(Platform.Prod);
    this.sideNavService.addListener(this);
  }

  openPlatformDialog():void{
    const dialogRef = this.dialog.open(DialogPlatformSelector, {
      width: '160px',
      height: '100px',
      data:{curPlatform:this.curPlatform}});
      dialogRef.afterClosed().subscribe(result =>{
        this.logger.debug('Dialog was closed with the result : ' + result);
        if (result){
          let  selectedPlatform:Platform = this.platformService.parsePlatform(result);
          if (this.curPlatform!=selectedPlatform){
            this.platformService.doChangePlatform(selectedPlatform);
            this.curPlatform = selectedPlatform;
          }
        }
      });
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

@Component({
  selector: 'dialog-platform-selector',
  templateUrl: 'dialog-platform-selector.html'
})

export class DialogPlatformSelector implements OnInit{
  constructor(public dialogRef:MatDialogRef<DialogPlatformSelector>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){
      
    }
    ngOnInit(){
      this.dialogRef.updatePosition({ top: '60px', right: '0px' });
    }
    onNoClick():void{
      this.dialogRef.close();
    }
    platformSelected(platformName:string){
      this.dialogRef.close(platformName);
    }
}
