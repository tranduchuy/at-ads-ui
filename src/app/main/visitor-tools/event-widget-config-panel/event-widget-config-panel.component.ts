import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { VisitorToolsService } from '../visitor-tools.service';

interface WidgetSize {
  width: string;
  height: string;
}

interface Widget {
  _id: string;
  name: string;
  sampleTemplate: string;
  sampleImage: string;
  code: string;
  category: string;
  components: any[];
  size: {
    pc: WidgetSize,
    mobile: WidgetSize
  }
}

@Component({
  selector: 'app-event-widget-config-panel',
  templateUrl: './event-widget-config-panel.component.html',
  styleUrls: ['./event-widget-config-panel.component.scss']
})
export class EventWidgetConfigPanelComponent implements OnInit {
  @Input() widget: Widget;
  @Output() close: EventEmitter<any> = new EventEmitter();

  widgetWidth: string;
  widgetHeight: string;
  isMobileMode: boolean;
  isContentPanelOpened: boolean;
  panelOpenState: boolean;

  constructor(
    private _visitorToolsService: VisitorToolsService
  ) {
    this.isMobileMode = false;
    this.isContentPanelOpened = true;
    this.panelOpenState = false;
  }

  ngOnInit() {
    this.loadWidget(this.widget);
  }

  loadWidget(widget: Widget) {
    const newWidget: Widget = this._visitorToolsService.getDataRenderedWidget(widget);
    const { sampleTemplate, size } = newWidget;

    this.loadWidgetSampleIframe(sampleTemplate);
    this.setWidgetSampleIframeSize(size);
  }

  loadWidgetSampleIframe(template: string) {
    let iframe = document.getElementById('event-widget-sample-iframe');
    let doc = (<HTMLIFrameElement>iframe).contentDocument || (<HTMLIFrameElement>iframe).contentWindow.document;
    doc.open();
    doc.write(template);
    doc.close();
  }

  onChangeTitleInput(text: string, index: number) {
    let newWidget: Widget = Object.assign({}, this.widget);
    newWidget.components[index].text = text;
    this.loadWidget(newWidget);
  }

  onChangeTitleColor(e: any, index: number) {
    const hexColor = e.color.hex;
    
    const newWidget = Object.assign({}, this.widget);
    newWidget.components[index].color = hexColor;
    this.loadWidget(newWidget);
  }

  setWidgetSampleIframeSize(size: any) {
    if (size) {
      let realSize = Object.assign({}, size.pc);

      this.widgetWidth = realSize.width || '0';
      this.widgetHeight = realSize.height || '0';
    }
  }

  closePanel() {
    this.close.emit("panel was closed !!!");
  }
}
