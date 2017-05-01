/**
 * Created by yuwenwu on 2017/4/30.
 */

import {Directive, AfterViewChecked} from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterViewChecked {

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}
