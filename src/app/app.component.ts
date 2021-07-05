import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from 'fu/Basic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fu-mfe-test';

  constructor(private vcr:ViewContainerRef, private cfr:ComponentFactoryResolver){}

   ngOnInit(){
    const factory = this.cfr.resolveComponentFactory(ButtonComponent);
    const textNode = document.createElement('span');
    textNode.innerText = 'My Button';
    this.vcr.createComponent(factory, 0, undefined , [[textNode]]);
  }
}
