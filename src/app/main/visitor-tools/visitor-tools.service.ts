import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'app/shared/constants/api.constant';

export interface IUpdatePopupConfigParams {
  themeColor: string;
  supporterAvatar: string;
  supporterName: string;
  supporterMajor: string;
}

export interface IPopupDisplaySettings {
  popupStatus?: boolean;
  popupPosition?: number;
  autoShowPopupRepeatTime?: number;
  autoShowPopup?: number;
}

export interface IUpdateFakeCustomerParams {
  isEnable?: boolean;
  runningDevices?: any;
  positionOnPage?: number;
  avatarType?: number;
  title?: string;
  body?: string;
  pageUrl?: string;
  themeColor?: string;
  shape?: number
}

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

@Injectable({
  providedIn: 'root'
})
export class VisitorToolsService {

  constructor(
    private _http: HttpClient
  ) { }

  updatePopupConfig(params: IUpdatePopupConfigParams, websiteId: string): Observable<any> {
    const url = API.Website.updateWebsiteSendInfoPopupConfig.replace('{website_id}', websiteId);
    return this._http.put(url, params);
  }

  setPopupDislay(params: IPopupDisplaySettings, websiteId: string): Observable<any> {
    const url = API.Website.enablePopupDisplay.replace('{website_id}', websiteId);
    return this._http.put(url, params);
  }

  updateFakeCustomer(params: IUpdateFakeCustomerParams, websiteId: string): Observable<any> {
    const url = API.Website.updateFakeCustomer.replace('{website_id}', websiteId);
    return this._http.put(url, params);
  }

  getDataRenderedWidget(data: Widget): Widget {
    let { sampleTemplate, category, code, components, size } = data;

    let textIndexes = [];

    for (const i in components) {

      switch (components[i].type) {
        case 'TEXT':
          textIndexes.push(i);
          break;

        case 'BUTTON':
          const re1 = new RegExp(`<!-- BUTTON_URL -->`, 'g');
          const re2 = new RegExp(`<!-- BUTTON_TEXT -->`, 'g');
          sampleTemplate = sampleTemplate
            .replace(re1, components[i].url)
            .replace(re2, components[i].text);
          break;

        case 'BACKGROUND_IMAGE':
          const re = new RegExp(`<!-- BACKGROUND_IMAGE -->`, 'g');
          sampleTemplate = sampleTemplate.replace(re, components[i].url);
          break;

        default:
          break;
      }

    }

    textIndexes.forEach((index, count) => {
      const reText = new RegExp(`<!-- TEXT_${count} -->`, 'g');
      sampleTemplate = sampleTemplate.replace(reText, components[index].text);

      const reColor = new RegExp(`<!-- TEXT_${count}_COLOR -->`, 'g');
      const color = components[index].color || components[index].defaultColor;
      sampleTemplate = sampleTemplate.replace(reColor, color);
    });

    return {
      sampleTemplate,
      category,
      code,
      components,
      size
    } as Widget;
  }  
}
