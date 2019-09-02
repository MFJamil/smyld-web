import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { ContentsRoutingModule} from './main/contents-routing.module'
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatTreeModule,
  MatSelectModule,
  MatIconModule,
  MatDialogModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatTabsModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './main/components/header/header.component';
import { ContentsComponent } from './main/components/contents/contents.component';
import { SettingsComponent } from './main/components/settings/settings.component';
import { DndDirective } from './utils/dnd/dnd.directive';
import { HomePageComponent } from './main/components/home-page/home-page.component';
import { Module1ContainerComponent } from './modules/module1/components/container/module1-container.component';
import { Module1ExplorerComponent } from './modules/module1/components/explorer/module1-explorer.component';
import { Module2ExplorerComponent } from './modules/module2/components/explorer/module2-explorer.component';
import { Module2ContainerComponent } from './modules/module2/components/container/module2-container.component';
import { MessagesPanelComponent } from './main/components/messages-panel/messages-panel.component';
import {DatePipe} from '@angular/common';


@NgModule({
  entryComponents:[
    HomePageComponent,
    Module1ContainerComponent,
    Module1ExplorerComponent,
    Module2ExplorerComponent,
    Module2ContainerComponent,
    SettingsComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    SettingsComponent,
    DndDirective,
    HomePageComponent,
    Module1ContainerComponent,
    Module1ExplorerComponent,
    Module2ExplorerComponent,
    Module2ContainerComponent,
    MessagesPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ContentsRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatTreeModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTabsModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
