import {
  Directive, ComponentFactoryResolver, ComponentRef, ViewContainerRef,
  Input
} from '@angular/core';
import {DatagridComponent} from './datagrid.component';

@Directive({
  selector: '[appDatagrid]'
})
export class DatagridDirective {

  constructor(private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  createDatagrid(datagridComponent: { new(): DatagridComponent }): ComponentRef<DatagridComponent> {
    this.viewContainer.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(datagridComponent);
    const datagridComponentRef = this.viewContainer.createComponent(componentFactory);

    return datagridComponentRef;
  }

}
