import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/main/services/message.service';

@Component({
  selector: 'app-module2-container',
  templateUrl: './module2-container.component.html',
  styleUrls: ['./module2-container.component.sass']
})
export class Module2ContainerComponent implements OnInit {

  constructor(private logger:MessageService) { }

  ngOnInit() {
    this.logger.info("Module 2 is successfully initialized .....");
  }

}
