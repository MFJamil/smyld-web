import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/main/services/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module1-container',
  templateUrl: './module1-container.component.html',
  styleUrls: ['./module1-container.component.sass']
})
export class Module1ContainerComponent implements OnInit {
  itemName:string;
  constructor(
    private logger:MessageService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.logger.info("Module 1 successfully initialized ....");
    this.route.params.subscribe(qp => {
      this.logger.info("Link params are updated .....");
      this.itemName = this.route.snapshot.paramMap.get('name');
    });

  }

}
