import { Module1ContainerComponent } from '../../modules/module1/components/container/module1-container.component';
import { Module1ExplorerComponent } from '../../modules/module1/components/explorer/module1-explorer.component';
import { Module2ContainerComponent } from '../../modules/module2/components/container/module2-container.component';
import { Module2ExplorerComponent } from '../../modules/module2/components/explorer/module2-explorer.component';



export class Module {
    name: string;
    path: string;
    mainComponent: any;
    sideComponent: any;
}

export const modules: Module[]=[
    {
        name:'Module 1',
        path:'openModule1',
        mainComponent: <any>Module1ContainerComponent,
        sideComponent: <any>Module1ExplorerComponent

    },
    {
        name: 'Module 2',
        path: 'openModule2',
        mainComponent: <any>Module2ContainerComponent,
        sideComponent: <any>Module2ExplorerComponent

    }

];