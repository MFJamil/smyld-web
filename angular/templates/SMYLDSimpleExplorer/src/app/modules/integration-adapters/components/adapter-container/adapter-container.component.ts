import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Adapter } from '../../model/adapter';
import { ActivatedRoute } from '@angular/router';
import { AdapterService } from '../../services/adapter.service';
import { LogUtils } from 'src/app/utils/LogUtils';

@Component({
  selector: 'app-adapter-container',
  templateUrl: './adapter-container.component.html',
  styleUrls: ['./adapter-container.component.sass']
})
export class AdapterContainerComponent implements OnInit,AfterViewInit,OnChanges {
  adapter:Adapter;
  constructor(
    private adapterService:AdapterService,
    private logger:LogUtils,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.logger.debug("Adapter Container On Init ......................... ")
    this.route.params.subscribe(qp => {
      this.logger.debug("Link params are updated .....");
      this.adapter = this.adapterService.getAdapterByName(this.route.snapshot.paramMap.get('name'));
    });
    this.adapter = this.adapterService.getAdapterByName(this.route.snapshot.paramMap.get('name'));
  }

  ngAfterViewInit(){
    this.logger.debug("Adapter Container After View Init ......................... ")

  }
  ngOnChanges(){
    this.logger.debug("Adapter Container On Change ......................... ")
  }
}
