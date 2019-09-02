import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { ContentsRoutingModule} from './main/contents-routing.module'
import { IntegrationRountingModule} from './modules/integration-adapters/integration-rounting.module';
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
import { HeaderComponent,DialogPlatformSelector } from './main/components/header/header.component';
import { ContentsComponent } from './main/components/contents/contents.component';
import { IntegrationAdaptersExplorerComponent } from './modules/integration-adapters/components/integration-adapters-explorer/explorer.component';
import { AdapterContainerComponent } from './modules/integration-adapters/components/adapter-container/adapter-container.component';
import { ModuleKeystoreComponent } from './modules/integration-adapters/components/module-keystore/module-keystore.component';
import { KeystoreHandlerComponent } from './modules/integration-adapters/components/keystore-handler/keystore-handler.component';
import { SettingsComponent } from './main/components/settings/settings.component';
import { CertHandlerComponent } from './modules/integration-adapters/components/cert-handler/cert-handler.component';
import { NewCertComponent } from './modules/integration-adapters/components/new-cert/new-cert.component';
import { DndDirective } from './utils/dnd/dnd.directive';
import { HomePageComponent } from './main/components/home-page/home-page.component';
import { InvestigationContainerComponent } from './modules/investigation-tasks/components/investigation-container/investigation-container.component';
import { InvestigationsExplorerComponent } from './modules/investigation-tasks/components/investigations-explorer/investigations-explorer.component';
import { MiscellaneousExplorerComponent } from './modules/miscellaneous/components/miscellaneous-explorer/miscellaneous-explorer.component';
import { MiscellaneousContainerComponent } from './modules/miscellaneous/components/miscellaneous-container/miscellaneous-container.component';
import { ChangesContainerComponent,SingleInputDialog} from './modules/integration-adapters/components/changes-container/changes-container.component';
import { MessagesPanelComponent } from './main/components/messages-panel/messages-panel.component';
import {DatePipe} from '@angular/common';


@NgModule({
  entryComponents:[
    DialogPlatformSelector,
    HomePageComponent,
    IntegrationAdaptersExplorerComponent,
    AdapterContainerComponent,
    InvestigationContainerComponent,
    InvestigationsExplorerComponent,
    MiscellaneousExplorerComponent,
    MiscellaneousContainerComponent,
    ChangesContainerComponent,
    SingleInputDialog,
    SettingsComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogPlatformSelector,
    ContentsComponent,
    IntegrationAdaptersExplorerComponent,
    AdapterContainerComponent,
    ModuleKeystoreComponent,
    KeystoreHandlerComponent,
    SettingsComponent,
    CertHandlerComponent,
    NewCertComponent,
    DndDirective,
    HomePageComponent,
    InvestigationContainerComponent,
    InvestigationsExplorerComponent,
    MiscellaneousExplorerComponent,
    ChangesContainerComponent,
    SingleInputDialog,
    MiscellaneousContainerComponent,
    MessagesPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ContentsRoutingModule,
    IntegrationRountingModule,
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
