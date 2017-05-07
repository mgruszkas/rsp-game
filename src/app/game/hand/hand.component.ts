import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { SHAPES, ShapeComponent } from './../../index';


@Component({
  selector: 'rsp-hand',
  template: `<aside class="hand">
      <ng-template #shapeContainer ></ng-template>
    </aside>
  `,
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @ViewChild('shapeContainer', {read: ViewContainerRef}) public shapeContainer: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  public showShape(shape: SHAPES): void {
    this.shapeContainer.clear();
    let componentFactory = this.cfr.resolveComponentFactory(ShapeComponent);
    let componentRef = this.shapeContainer.createComponent(componentFactory);
    componentRef.instance.shape = shape;
  }

  public clear(): void {
    this.shapeContainer.clear();
  }

}
