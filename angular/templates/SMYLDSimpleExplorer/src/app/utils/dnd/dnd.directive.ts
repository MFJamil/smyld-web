import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
import { DndFilesListener } from './DndFilesListener';
import { LogUtils } from '../LogUtils';

@Directive({
  exportAs: 'appDnd',
  selector: '[app-Dnd]'
})
export class DndDirective {

  @HostBinding('style.background') public background = null;
  dragBg :string = "#eee";
  filesListener:DndFilesListener;
  constructor(
    private el:ElementRef,
    private logger:LogUtils
    ) {
      this.logger.debug("The element background is " + this.el.nativeElement.style.backgroundColor);

   }


  @HostListener('drop', ['$event']) 
  onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
      this.filesListener.handleSelectedFiles(files);
      this.background = null;
    }
  }

  @HostListener('dragover', ['$event']) 
  onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.dragBg;
  }

  @HostListener('dragleave', ['$event']) 
  onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = null;
  }

  // TODO we need to change the code to expect list of listeners 
  public addFilesListener(filesListener:DndFilesListener){
    this.filesListener = filesListener;
  }

  public setDragBackground(dragColor:string):void{
    this.dragBg = dragColor;

  }


}
