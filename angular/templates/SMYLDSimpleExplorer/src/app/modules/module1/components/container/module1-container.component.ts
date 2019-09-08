import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/main/services/message.service';

@Component({
  selector: 'app-module1-container',
  templateUrl: './module1-container.component.html',
  styleUrls: ['./module1-container.component.sass']
})
export class Module1ContainerComponent implements OnInit {

  constructor(private logger:MessageService) { }

  ngOnInit() {
    this.logger.info("Module 1 successfully initialized ....");
  }

}
