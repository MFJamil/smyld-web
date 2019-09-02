import {ModulePath,ModuleName} from '../services.enum';
import { AdapterContainerComponent } from '../../modules/integration-adapters/components/adapter-container/adapter-container.component';
import { IntegrationAdaptersExplorerComponent } from '../../modules/integration-adapters/components/integration-adapters-explorer/explorer.component';
import { InvestigationContainerComponent } from '../../modules/investigation-tasks/components/investigation-container/investigation-container.component';
import { InvestigationsExplorerComponent } from '../../modules/investigation-tasks/components/investigations-explorer/investigations-explorer.component';
import { MiscellaneousContainerComponent } from '../../modules/miscellaneous/components/miscellaneous-container/miscellaneous-container.component';
import { MiscellaneousExplorerComponent } from '../../modules/miscellaneous/components/miscellaneous-explorer/miscellaneous-explorer.component';



export class Module {
    name: string;
    path: string;
    mainComponent: any;
    sideComponent: any;
}

export const modules: Module[]=[
    {
        name: ModuleName.IntegrationAdapters,
        path: ModulePath.integrationAdapters,
        mainComponent: <any>AdapterContainerComponent,
        sideComponent: <any>IntegrationAdaptersExplorerComponent
    },
    {
        name:ModuleName.InvestigationTasks,
        path:ModulePath.investigationTasks,
        mainComponent: <any>InvestigationContainerComponent,
        sideComponent: <any>InvestigationsExplorerComponent

    },
    {
        name: ModuleName.Miscellaneous,
        path: ModulePath.miscellaneous,
        mainComponent: <any>MiscellaneousContainerComponent,
        sideComponent: <any>MiscellaneousExplorerComponent

    }

];