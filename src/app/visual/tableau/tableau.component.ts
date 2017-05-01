import {Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy} from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  urls: string[];

  private options = {
    'hideTabs': true,
    'hideToolbar': true,
    'onFirstInteractive': function () {
    }
  };

  ngOnInit() {
    console.log('TableauComponent: ngOnInit');
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    console.log('TableauComponent: constructor');
  }

  ngAfterViewInit(): void {

    console.log('ngAfterViewInit');

    this.urls.forEach(function (url, index) {
      console.log('TableauComponent ngAfterViewInit : url: '+url);
      console.log('TableauComponent: tableauViz'+index);
      new tableau.Viz(document.getElementById('tableauViz' + index), url, {
        'hideTabs': true,
        'hideToolbar': true,
        'onFirstInteractive': function () {
        }
      });
    });


  }

  ngOnDestroy() {
  }

  // ngAfterContentInit(): void {
  //   var child = this.renderer.invokeElementMethod(this.vizContainer.nativeElement, 'querySelector', ['div']);
  //   console.log(child);
  // }

}
