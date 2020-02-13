(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ban-ips-ban-ips-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TRÌNH DUYỆT ẨN DANH - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\">\n      Bằng việc cấu hình này, các quảng cáo sẽ <span style=\"color: crimson; font-weight: bold\">không hiển thị</span> trên các thiết bị sử dụng\n      <span style=\"color: #40a5ec; font-weight: bold\">trình duyệt ẩn danh</span>, giúp tiết kiệm chi phí với những người dùng muốn <span\n        style=\"color: crimson; font-weight: bold\">ẩn thông tin</span> khi truy cập vào quảng cáo.\n    </p>\n\n    <div class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n        <b>Chặn trình duyệt ẩn danh</b>\n      </mat-checkbox>\n    </div>\n\n    <p class=\"button-area\">\n      <button mat-raised-button color=\"accent\" [disabled]=\"isProcessing\" (click)=\"setBlockingAnonymousBrowser()\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG THEO IP - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Thông thường một người dùng chỉ click quảng cáo từ 1 đến 2 lần trước khi mua hàng. Việc chặn người dùng click quảng cáo\n      liên tục\n      giúp bạn tiết kiệm được chi phí lãng phí do những hành vi phá hoại gây ra.\n    </p>\n\n    <p class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n      </mat-checkbox>\n      <b>\n        Tự động chặn những IP đang phá hoại sử dụng <span style=\"color: crimson\">AI</span> và <span style=\"color: crimson\">Big\n          Data</span>.\n      </b>\n    </p>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"-20px\" fxLayoutGap=\"20px\" class=\"max-click\">\n      <div fxFlex=\"60\">\n        <p>\n          <b>\n            Chặn sau khi 1 IP nhấn quảng cáo <span style=\"color: crimson\">(thường là 2 lần)</span>\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn số lần click</mat-label>\n          <mat-select [(value)]=\"selectedMaxClick\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClick\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div fxFlex=\"40\">\n        <p>\n          <b>\n            Bắt đầu chặn sau\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn khoảng thời gian</mat-label>\n          <mat-select [(value)]=\"selectedMaxClickHours\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClickHours\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n    </div>\n\n    <p>\n      <b>\n        Xóa hết IP đã chặn khi qua ngày mới <span style=\"color: crimson\">(xóa vào lúc 0h-1h sáng)</span>\n      </b>\n    </p>\n\n    <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n      <mat-label>Chọn hình thức</mat-label>\n      <mat-select [(value)]=\"selectedAutoRemove\" [disabled]=\"isProcessing\">\n        <mat-option *ngFor=\"let item of itemsSource.autoRemove\" [value]=\"item.value\">{{item.text}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"warn\" class=\"submit-button\" aria-label=\"Kết nối\" (click)=\"setAutoBlockingIP()\"\n        [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG THEO MẠNG 3G & 4G - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\"> Bằng việc cấu hình này, quảng cáo sẽ <span style=\"color: crimson; font-weight: bold\">không hiển\n        thị</span> trên hầu hết\n      các thiết bị sử\n      dụng truy cập <span style=\"color: #40a5ec; font-weight: bold\">3G & 4G</span> của các nhà mạng di động tại Việt\n      Nam.</p>\n\n    <div class=\"checkbox-group\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around\">\n      <mat-checkbox [checked]=\"mobileNetworks.viettel\" (change)=\"selectNetwork($event,'viettel')\"\n        [disabled]=\"isProcessing\" class=\"viettel-animation\">\n        <img src=\"../../../../assets/images/vt.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.mobifone\" (change)=\"selectNetwork($event,'mobifone')\"\n        [disabled]=\"isProcessing\" class=\"mobifone-animation\">\n        <img src=\"../../../../assets/images/mbf.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vinafone\" (change)=\"selectNetwork($event,'vinafone')\"\n        [disabled]=\"isProcessing\" class=\"vinafone-animation\">\n        <img src=\"../../../../assets/images/vnp.png\" class=\"network-logo\"\n          alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vietnammobile\" (change)=\"selectNetwork($event,'vietnammobile')\"\n        [disabled]=\"isProcessing\" class=\"vietnammobile-animation\">\n        <img src=\"../../../../assets/images/vnm.png\" class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.fpt\" (change)=\"selectNetwork($event,'fpt')\" [disabled]=\"isProcessing\"\n        class=\"fpt-animation\">\n        <img src=\"../../../../assets/images/fpt.png\" class=\"fpt\" alt=\"\">\n      </mat-checkbox>\n    </div>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"warn\" class=\"submit-button\" aria-label=\"Kết nối\"\n        (click)=\"setAutoBlocking3G4G()\" [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"title1\">\n        CẤU HÌNH CHẶN TỰ ĐỘNG THEO NHÓM IP (NÂNG CAO) - TÀI KHOẢN <span\n            class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n    </div>\n\n    <div class=\"inner\">\n\n        <p class=\"notification\">\n            Nhóm IP là danh sách các IP có tiền tố giống nhau. Ví dụ IP 127.0.0.1 và 127.0.0.2 sẽ thuộc nhóm IP\n            127.0.0.<span style=\"color: crimson\">*</span>\n            <br>Bạn chỉ nên chọn chặn theo nhóm IP khi bị phá hoại với quy mô lớn vì có thể sẽ\n            gây ra việc <span style=\"color: crimson; font-weight: bold\"> chặn nhầm khách hàng</span> của bạn.\n        </p>\n\n        <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.xs=\"-20px\" fxLayout.xs=\"column\">\n            <div fxFlex=\"33.33\">\n                <p>\n                    <b>\n                        Chọn nhóm IP <span class=\"highline\">127.0.0.<span style=\"color: crimson\">*</span></span> (tối đa\n                        255 IP)\n                    </b>\n                </p>\n\n                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n                    <mat-label>Chọn hình thức</mat-label>\n                    <mat-select [(value)]=\"classD\" [disabled]=\"isProcessing\">\n                        <mat-option *ngFor=\"let item of itemsSource.classD\" [value]=\"item.value\">{{item.text}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"33.33\">\n                <p>\n                    <b>\n                        Chặn khi vượt quá\n                    </b>\n                </p>\n\n                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n                    <mat-label>Chọn số lần click</mat-label>\n                    <mat-select [(value)]=\"autoBlockIpClassDByMaxClick\" [disabled]=\"isProcessing\">\n                        <mat-option *ngFor=\"let item of itemsSource.autoBlockIpClassDByMaxClick\" [value]=\"item.value\">\n                            {{item.text}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"33.33\">\n                <p>\n                    <b>\n                        Bắt đầu chặn sau\n                    </b>\n                </p>\n\n                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n                    <mat-label>Chọn khoảng thời gian</mat-label>\n                    <mat-select [(value)]=\"countMaxClickClassDInMinnutes\" [disabled]=\"isProcessing\">\n                        <mat-option *ngFor=\"let item of itemsSource.countMaxClickClassDInMinnutes\" [value]=\"item.value\">\n                            {{item.text}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.xs=\"-20px\" fxLayout.xs=\"column\">\n            <div fxFlex=\"33.33\">\n                <p>\n                    <b>\n                        Chọn nhóm IP <span class=\"highline\">127.0.<span style=\"color: crimson\">*</span>.<span\n                                style=\"color: crimson\">*</span></span>\n                        (tối đa\n                        65.026 IP)\n                    </b>\n                </p>\n\n                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n                    <mat-label>Chọn hình thức</mat-label>\n                    <mat-select [(value)]=\"classC\" [disabled]=\"isProcessing\">\n                        <mat-option *ngFor=\"let item of itemsSource.classC\" [value]=\"item.value\">{{item.text}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"33.33\">\n                <p>\n                    <b>\n                        Chặn khi vượt quá\n                    </b>\n                </p>\n\n                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n                    <mat-label>Chọn số lần click</mat-label>\n                    <mat-select [(value)]=\"autoBlockIpClassCByMaxClick\" [disabled]=\"isProcessing\">\n                        <mat-option *ngFor=\"let item of itemsSource.autoBlockIpClassCByMaxClick\" [value]=\"item.value\">\n                            {{item.text}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div fxFlex=\"33.33\">\n                <p>\n                    <b>\n                        Bắt đầu chặn sau\n                    </b>\n                </p>\n\n                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n                    <mat-label>Chọn khoảng thời gian</mat-label>\n                    <mat-select [(value)]=\"countMaxClickClassCInMinnutes\" [disabled]=\"isProcessing\">\n                        <mat-option *ngFor=\"let item of itemsSource.countMaxClickClassCInMinnutes\" [value]=\"item.value\">\n                            {{item.text}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <p class=\"text-center\">\n            <button mat-raised-button color=\"warn\" class=\"submit-button\" aria-label=\"Kết nối\"\n                (click)=\"setAutoBlockingIPRange()\" [disabled]=\"isProcessing\">\n                <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n            </button>\n        </p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH THỬ CHẶN 1 IP - TÀI KHOẢN <span class=\"adsId\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\" *ngIf=\"isProcessing === false\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn IP theo yêu cầu của bạn và <span style=\"color: crimson; font-weight: bold\">không cho\n        hiển thị</span> quảng cáo trên thiết bị đang sử dụng IP này.\n    </p>\n\n    <form class=\"ban-ip-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n\n      <app-input-text [formControlName]=\"'bannedIP'\" [errors]=\"getMessageErrors('bannedIP')\" title=\"IP của bạn\"\n        [isDisabled]=\"isProcessing\">\n      </app-input-text>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"isProcessing\">\n          <mat-icon>block</mat-icon> THỬ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </form>\n\n    <mat-divider *ngIf=\"hasBlockedIP === true\"></mat-divider>\n\n    <div class=\"banned-ip-info\" *ngIf=\"hasBlockedIP === true\">\n      IP <span [(ngModel)]=\"blockedIPs[0]\" ngDefaultControl class=\"blocked-ip\">{{blockedIPs[0]}}</span> đã bị chặn\n      trong hệ thống Google Ads.\n      <p><b>Cách kiểm tra hệ thống hoạt động:</b></p>\n      <div>\n        <b>Bước 1:</b> Truy cập vào tài khoản Google Ads tại trang <a href=\"https://ads.google.com/intl/vi_VN/home/\"\n          target=\"blank\">Ads.google.com</a>\n        nhấn vào\n        <span class=\"step\">1 Chiến dịch</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Cài đặt</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Loại trừ 1 IP</span>\n      </div>\n      <div>\n        <b>Bước 2:</b> Truy cập vào trang <a href=\"https:/google.com.vn\" target=\"blank\">Google.com.vn</a> và tìm\n        kiếm\n        website của\n        bạn. Nếu bạn không thấy quảng cáo, hệ thống hoạt động tốt.\n      </div>\n      <br>\n      <div>\n        Sau khi kiểm tra, bạn có thể bấm vào nút dưới đây để bỏ chặn IP này.\n        <br><br>\n        <button mat-button (click)=\"unblockSampleIP()\" class=\"unblock-ip-button\" [disabled]=\"isProcessing\">\n          Bỏ chặn IP\n        </button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-device/ban-device.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-device/ban-device.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO THIẾT BỊ - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\" *ngIf=\"!onLoadDeviceReport\">\n    <div class=\"title2\">\n      <p>\n        Kết quả có được theo thống kê từ ngày <span class=\"highline\">{{startDate | date: 'dd/MM/yyyy'}}</span> đến ngày\n        <span class=\"highline\">{{endDate | date: 'dd/MM/yyyy'}}</span>\n      </p>\n      <p class=\"advise\">\n        <span class=\"success-badge\">MẸO</span> Bạn có thể dừng quảng cáo trên các thiết bị mang lại hiệu quả quảng cáo\n        thấp\n      </p>\n    </div>\n\n    <p *ngIf=\"deviceReports.length === 0 && !isProcessing\" class=\"empty-report-notification\">\n      Chúng tôi không tìm thấy thông tin thiết bị nào trên tài khoản Google Ads này.\n    </p>\n\n    <div class=\"table-wrapper\" *ngIf=\"deviceReports.length > 0\">\n      <mat-table [dataSource]=\"deviceReports\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"device\">\n          <mat-header-cell *matHeaderCellDef> Thiết bị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div *ngIf=\"element.device === 'Điện thoại'\" class=\"device-name-wrapper\">\n              <mat-icon color=\"accent\">smartphone</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </div>\n            <div *ngIf=\"element.device === 'Máy tính bảng'\" class=\"device-name-wrapper\">\n              <mat-icon color=\"accent\">tablet_mac</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </div>\n            <div *ngIf=\"element.device === 'Máy tính'\" class=\"device-name-wrapper\">\n              <mat-icon color=\"accent\">laptop_chromebook</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </div>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cost\">\n          <mat-header-cell *matHeaderCellDef> Chi phí </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.cost | number: '1.0-0'}} VNĐ</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"impressions\">\n          <mat-header-cell *matHeaderCellDef> Hiển thị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.impressions | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"clicks\">\n          <mat-header-cell *matHeaderCellDef> Click </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.clicks | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"avgPosition\">\n          <mat-header-cell *matHeaderCellDef> Vị trí trung bình </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.avgPosition}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ctr\">\n          <mat-header-cell *matHeaderCellDef> CTR </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.ctr}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"optimization\">\n          <mat-header-cell *matHeaderCellDef>Tối ưu</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Điện thoại'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.mobile\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30001)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.mobile\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính bảng'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.tablet\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30002)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.tablet\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.computer\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30000)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.computer\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO DANH SÁCH IP TÙY CHỈNH - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn một danh sách các IP theo yêu cầu của bạn và <span\n        style=\"color: crimson; font-weight: bold\">không cho hiển thị</span> quảng cáo\n      trên thiết bị đang sử dụng các IP này.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n        <div fxFlex=\"65\">\n\n          <app-input-textarea [formControlName]=\"'listBannedIP'\" [errors]=\"getMessageErrors('listBannedIP')\"\n            title=\"Nhập danh sách IP cần chặn\" height=\"260px\" [isDisabled]=\"isProcessing\"></app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">HƯỚNG DẪN CHẶN IP TÙY CHỈNH</p>\n          <p>\n            Bạn có thể chặn <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <p>\n            Hoặc chặn <b>từng nhóm IP</b>, thêm dấu <span style=\"color: crimson\">(*)</span> tượng trưng cho nhóm IP muốn\n            chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p>\n          <span>\n            Hệ thống sẽ tự động chuyển đổi IP và chặn trong Google Ads sau một khoảng thời gian.\n          </span>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">block</mat-icon> CHẶN THỦ CÔNG DANH SÁCH IP\n        </button>\n      </div>\n    </form>\n\n    <div class=\"blacklist\">\n      <div class=\"table-title\">Danh sách IP đã chặn gần đây</div>\n\n      <div class=\"table-wrapper\">\n\n        <mat-table [dataSource]=\"blockedIPs\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\"> <span\n                [class.new]=\"element.order === 'MỚI'\">{{i+1}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"ip\">\n            <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span style=\"color: crimson; font-weight: bold\">{{element._id}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <p class=\"status\">\n                Đã chặn thành công vào tổng <span\n                  style=\"color: crimson; font-weight: bold\">{{element.campaignNumber}}</span> chiến dịch.\n              </p>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"task\">\n            <mat-header-cell *matHeaderCellDef>Tác vụ</mat-header-cell>\n            <mat-cell *matCellDef>\n              <span class=\"task\">\n                <mat-icon style=\"margin-top: 5px\">verified_user</mat-icon>đã chặn\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"unlockButton\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button (click)=\"unblockSampleIP(element._id)\" [disabled]=\"isProcessing\" mat-icon-button\n                matTooltip=\"Nhấn để bỏ chặn\" class=\"unlock-button\">\n                <mat-icon style=\"color: silver\">delete</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <div class=\"no-notice\" *ngIf=\"blockedIPs.length === 0 && isProcessing === false\">Chưa có ghi nhận nào.</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH WHITELIST IP - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ ghi nhận một danh sách các IP mà bạn không cho phép chặn. Thiết bị đang sử dụng các IP này sẽ được hệ\n      thống nhận diện là <span style=\"color: #039be5; font-weight: bold\">an toàn và không bị chặn</span>.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"65\">\n\n          <app-input-textarea [formControlName]=\"'whitelistIPs'\" [errors]=\"getMessageErrors('whitelistIPs')\"\n            title=\"Nhập danh sách IP không cho phép chặn\" height=\"260px\" [isDisabled]=\"isProcessing\">\n          </app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">HƯỚNG DẪN KHÔNG CHO PHÉP CHẶN IP TÙY CHỈNH</p>\n          <p>\n            Bạn có thể nhập <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <p>\n            Hoặc nhập <b>từng nhóm IP</b>, thêm dấu <span style=\"color: crimson\">(*)</span> tượng trưng cho nhóm IP không\n            muốn chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p>\n          <span>\n            Hệ thống sẽ tự động chuyển đổi IP và không cho phép chặn trong Google Ads sau một khoảng thời gian.\n          </span>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"isProcessing\" class=\"submit-button\">\n          <mat-icon>sync</mat-icon> CẬP NHẬT WHITELIST\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .title2 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-align: justify;\n}\n.container .inner .config-checking {\n  font-size: 20px;\n  padding-left: 10%;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .inner .button-area {\n  text-align: center;\n  padding-top: 40px;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .config-checking {\n    padding: 0;\n    text-align: center;\n  }\n  .container .inner .button-area button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYW5vbnltb3VzLWJyb3dzZXIvYW5vbnltb3VzLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hbm9ueW1vdXMtYnJvd3Nlci9hbm9ueW1vdXMtYnJvd3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREdJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FETEk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNETjtFREdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ROO0FBQ0Y7QURJSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FES0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0hOO0FETUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDSk47QURTQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSw0QkFBQTtJQUNBLFlBQUE7RUNQSjtFRFNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUNQSjtFRFNJO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VDUE47RURXTTtJQUNFLGVBQUE7RUNUUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYW4taXBzL2Fub255bW91cy1icm93c2VyL2Fub255bW91cy1icm93c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgICBoZWlnaHQ6IDI3dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cblxuICAgIC5jb25maWctY2hlY2tpbmcge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnRpdGxlMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgICAgaGVpZ2h0OiAzM3ZoO1xuICAgIH1cbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbjogMTVweDtcblxuICAgICAgLmNvbmZpZy1jaGVja2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTV2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jb25maWctY2hlY2tpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICBoZWlnaHQ6IDMzdmg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jb25maWctY2hlY2tpbmcge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AnonymousBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousBrowserComponent", function() { return AnonymousBrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









let AnonymousBrowserComponent = class AnonymousBrowserComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__["PageBaseComponent"] {
    constructor(sessionService, _banIpsService, _fuseProgresBarService, _dialogService, _router, _fuseSplashScreenService) {
        super();
        this.sessionService = sessionService;
        this._banIpsService = _banIpsService;
        this._fuseProgresBarService = _fuseProgresBarService;
        this._dialogService = _dialogService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.isProcessing = true;
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                this._fuseProgresBarService.hide();
                this.getBlockingAnonymousBrowserSetting();
            }
            else {
                this._fuseProgresBarService.hide();
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getBlockingAnonymousBrowserSetting() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgresBarService.hide();
            this._fuseSplashScreenService.hide();
            this.checked = res.data.setting.blockByPrivateBrowser;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    checkSetting(event) {
        this.checked = event.checked;
    }
    setBlockingAnonymousBrowser() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this._banIpsService.setBlockingAnonymousBrowser({ blockByPrivate: this.checked })
            .subscribe((res) => {
            this.getBlockingAnonymousBrowserSetting();
            this._fuseProgresBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
};
AnonymousBrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anonymous-browser',
        template: __webpack_require__(/*! raw-loader!./anonymous-browser.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html"),
        styles: [__webpack_require__(/*! ./anonymous-browser.component.scss */ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
        _ban_ips_service__WEBPACK_IMPORTED_MODULE_3__["BanIpsService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["FuseProgressBarService"],
        app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], AnonymousBrowserComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 30px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 16px;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .config-checking {\n  padding-top: 10px;\n}\n.container .inner .max-click {\n  width: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1iYW4taXAvYXV0by1iYW4taXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hdXRvLWJhbi1pcC9hdXRvLWJhbi1pcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREdJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FETEk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNETjtFREdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ROO0FBQ0Y7QURJSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtBQ0hOO0FETUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNKTjtBRE9JO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0xOO0FEUUk7RUFDRSxpQkFBQTtBQ05OO0FEU0k7RUFDRSxXQUFBO0FDUE47QURZQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSw0QkFBQTtJQUNBLFlBQUE7RUNWSjtFRFlFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUNWSjtFRFlJO0lBQ0UsZUFBQTtFQ1ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1iYW4taXAvYXV0by1iYW4taXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICAgIGhlaWdodDogMjd2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDMwcHggMzBweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTV2aDtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudGl0bGUzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB9XG5cbiAgICAuY29uZmlnLWNoZWNraW5nIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5tYXgtY2xpY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogMzN2aDtcbiAgICB9XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDI3dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmNlYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RpZmljYXRpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvbmZpZy1jaGVja2luZyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1heC1jbGljayB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgIGhlaWdodDogMzN2aDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.ts ***!
  \*******************************************************************/
/*! exports provided: AutoBanIPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBanIPComponent", function() { return AutoBanIPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









let AutoBanIPComponent = class AutoBanIPComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__["PageBaseComponent"] {
    constructor(_banIpsService, _fuseProgresBarService, sessionService, _dialogService, _router, _fuseSplashScreenService) {
        super();
        this._banIpsService = _banIpsService;
        this._fuseProgresBarService = _fuseProgresBarService;
        this.sessionService = sessionService;
        this._dialogService = _dialogService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.isProcessing = true;
        this.itemsSource = {
            maxClick: [
                {
                    text: 'Không kích hoạt',
                    value: -1
                },
                {
                    text: '1 lần',
                    value: 1
                },
                {
                    text: '2 lần (được đề nghị)',
                    value: 2
                },
                {
                    text: '3 lần',
                    value: 3
                },
                {
                    text: '4 lần',
                    value: 4
                }
            ],
            maxClickHours: [
                {
                    text: '5 phút',
                    value: 5
                },
                {
                    text: '30 phút',
                    value: 30
                },
                {
                    text: '60 phút',
                    value: 60
                },
                {
                    text: '180 phút',
                    value: 180
                },
            ],
            autoRemove: [
                {
                    text: 'Không xóa (được đề nghị)',
                    value: 1
                },
                {
                    text: 'Cho phép xóa',
                    value: 2
                },
            ]
        };
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                this._fuseProgresBarService.hide();
                this.getBlockingIPSettting();
            }
            else {
                this._fuseProgresBarService.hide();
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getBlockingIPSettting() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const getSettingsSub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this.checked = res.data.setting.autoBlockWithAiAndBigData;
            this.selectedMaxClick = res.data.setting.autoBlockByMaxClick || 2;
            this.selectedMaxClickHours = res.data.setting.countMaxClickInHours || 60;
            this.selectedAutoRemove = res.data.setting.autoRemoveBlocking === false ? 1 : 2;
            this.isProcessing = false;
            this._fuseProgresBarService.hide();
            this._fuseSplashScreenService.hide();
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
            //hide all options
            this.checked = false;
            this.selectedMaxClick = -2;
            this.selectedMaxClickHours = -1;
            this.selectedAutoRemove = -1;
        });
        this.subscriptions.push(getSettingsSub);
    }
    checkSetting(e) {
        this.checked = e.checked;
    }
    setAutoBlockingIP() {
        const params = this.generateAutoBlockingIpParams();
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this._banIpsService.autoBlockingIP(params).subscribe((res) => {
            this.getBlockingIPSettting();
            setTimeout(() => {
                this._dialogService._openSuccessDialog(res);
                this._fuseProgresBarService.hide();
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            if (error.error.messages) {
                this._dialogService._openErrorDialog(error.error);
            }
            this._fuseProgresBarService.hide();
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    generateAutoBlockingIpParams() {
        const params = {
            maxClick: this.selectedMaxClick,
            autoRemove: this.selectedAutoRemove === 1 ? false : true,
            autoBlockWithAiAndBigData: this.checked,
            countMaxClickInHours: this.selectedMaxClickHours
        };
        return params;
    }
};
AutoBanIPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-ban-ip',
        template: __webpack_require__(/*! raw-loader!./auto-ban-ip.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html"),
        styles: [__webpack_require__(/*! ./auto-ban-ip.component.scss */ "./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ban_ips_service__WEBPACK_IMPORTED_MODULE_2__["BanIpsService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], AutoBanIPComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n}\n.container .inner .network-logo,\n.container .inner .mobifone,\n.container .inner .fpt {\n  height: 25px;\n  width: 80px;\n  margin-left: 10px;\n  -webkit-filter: drop-shadow(0.5px 1px 1px silver);\n          filter: drop-shadow(0.5px 1px 1px silver);\n}\n.container .inner .fpt {\n  height: 35px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  padding-top: 20px;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n}\n.container .inner .notification {\n  text-align: justify;\n}\n.container .inner .ban-ip-form {\n  margin-top: 30px;\n  padding: 15px;\n  box-shadow: 2px 2px 10px silver;\n}\n.container .inner .checkbox-group {\n  padding: 50px 20px 50px 20px;\n  padding-left: 0;\n}\n.container .inner .checkbox-group .viettel-animation {\n  -webkit-animation: checkboxAni 0.2s ease-out;\n  animation: checkboxAni 0.2s ease-out;\n}\n.container .inner .checkbox-group .mobifone-animation {\n  -webkit-animation: checkboxAni 0.4s ease-out;\n  animation: checkboxAni 0.4s ease-out;\n}\n.container .inner .checkbox-group .vinafone-animation {\n  -webkit-animation: checkboxAni 0.6s ease-out;\n  animation: checkboxAni 0.6s ease-out;\n}\n.container .inner .checkbox-group .vietnammobile-animation {\n  -webkit-animation: checkboxAni 0.8s ease-out;\n  animation: checkboxAni 0.8s ease-out;\n}\n.container .inner .checkbox-group .fpt-animation {\n  -webkit-animation: checkboxAni 1s ease-out;\n  animation: checkboxAni 1s ease-out;\n}\n@-webkit-keyframes checkboxAni {\n  from {\n    -webkit-transform: translateY(10vh);\n            transform: translateY(10vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes checkboxAni {\n  from {\n    -webkit-transform: translateY(10vh);\n            transform: translateY(10vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 0 15px 15px 15px;\n    margin: 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n  .container .inner .checkbox-group {\n    width: 90%;\n    display: table;\n    margin: 0 auto;\n    line-height: 50px;\n    padding: 0 0 10px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREo7QURHSTs7O0VBR0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRk47QURLSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLCtCQUFBO0FDTk47QURTSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEU007RUFDRSw0Q0FBQTtFQUNBLG9DQUFBO0FDUFI7QURVTTtFQUNFLDRDQUFBO0VBQ0Esb0NBQUE7QUNSUjtBRFdNO0VBQ0UsNENBQUE7RUFDQSxvQ0FBQTtBQ1RSO0FEWU07RUFDRSw0Q0FBQTtFQUNBLG9DQUFBO0FDVlI7QURhTTtFQUNFLDBDQUFBO0VBQ0Esa0NBQUE7QUNYUjtBRGNNO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDWlI7RURjTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNaUjtBQUNGO0FETU07RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNaUjtFRGNNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ1pSO0FBQ0Y7QURnQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZE47QURpQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDaEJOO0FEbUJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDakJOO0FEc0JBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtFQ3BCSjtFRHNCRTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtFQ3BCSjtFRHNCSTtJQUNFLGVBQUE7RUNwQk47RUR1Qkk7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VDckJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgICBoZWlnaHQ6IDI3dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG5cbiAgICAubmV0d29yay1sb2dvLFxuICAgIC5tb2JpZm9uZSxcbiAgICAuZnB0IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDFweCAxcHggc2lsdmVyKTtcbiAgICB9XG5cbiAgICAuZnB0IHtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAuYmFuLWlwLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBzaWx2ZXI7XG4gICAgfVxuXG4gICAgLmNoZWNrYm94LWdyb3VwIHtcbiAgICAgIHBhZGRpbmc6IDUwcHggMjBweCA1MHB4IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgIC52aWV0dGVsLWFuaW1hdGlvbiB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjJzIGVhc2Utb3V0O1xuICAgICAgICBhbmltYXRpb246IGNoZWNrYm94QW5pIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5tb2JpZm9uZS1hbmltYXRpb24ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2tib3hBbmkgMC40cyBlYXNlLW91dDtcbiAgICAgICAgYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjRzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICAudmluYWZvbmUtYW5pbWF0aW9uIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrYm94QW5pIDAuNnMgZWFzZS1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbjogY2hlY2tib3hBbmkgMC42cyBlYXNlLW91dDtcbiAgICAgIH1cblxuICAgICAgLnZpZXRuYW1tb2JpbGUtYW5pbWF0aW9uIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrYm94QW5pIDAuOHMgZWFzZS1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbjogY2hlY2tib3hBbmkgMC44cyBlYXNlLW91dDtcbiAgICAgIH1cblxuICAgICAgLmZwdC1hbmltYXRpb24ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2tib3hBbmkgMXMgZWFzZS1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbjogY2hlY2tib3hBbmkgMXMgZWFzZS1vdXQ7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgY2hlY2tib3hBbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuYmFubmVkLWlwLWluZm8ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogMzN2aDtcbiAgICB9XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuY2hlY2tib3gtZ3JvdXAge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDI3dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmNlYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5ldHdvcmstbG9nbyxcbi5jb250YWluZXIgLmlubmVyIC5tb2JpZm9uZSxcbi5jb250YWluZXIgLmlubmVyIC5mcHQge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVweCAxcHggMXB4IHNpbHZlcik7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnB0IHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNoZWNrYm94LWdyb3VwIHtcbiAgcGFkZGluZzogNTBweCAyMHB4IDUwcHggMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNoZWNrYm94LWdyb3VwIC52aWV0dGVsLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjJzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGNoZWNrYm94QW5pIDAuMnMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hlY2tib3gtZ3JvdXAgLm1vYmlmb25lLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGNoZWNrYm94QW5pIDAuNHMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hlY2tib3gtZ3JvdXAgLnZpbmFmb25lLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjZzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGNoZWNrYm94QW5pIDAuNnMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hlY2tib3gtZ3JvdXAgLnZpZXRuYW1tb2JpbGUtYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrYm94QW5pIDAuOHMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogY2hlY2tib3hBbmkgMC44cyBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaGVja2JveC1ncm91cCAuZnB0LWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAxcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBjaGVja2JveEFuaSAxcyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgY2hlY2tib3hBbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VjY2Vzcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLnRpdGxlMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgaGVpZ2h0OiAzM3ZoO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaGVja2JveC1ncm91cCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AutoBlockingCellularNetworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBlockingCellularNetworksComponent", function() { return AutoBlockingCellularNetworksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









let AutoBlockingCellularNetworksComponent = class AutoBlockingCellularNetworksComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"] {
    constructor(_banIpsService, sessionService, _fuseProgressBarService, _dialogService, _router, _fuseSplashScreenService) {
        super();
        this._banIpsService = _banIpsService;
        this.sessionService = sessionService;
        this._fuseProgressBarService = _fuseProgressBarService;
        this._dialogService = _dialogService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.isProcessing = true;
        this.mobileNetworks = {
            viettel: false,
            mobifone: false,
            vinafone: false,
            vietnammobile: false,
            fpt: false
        };
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                this.getAutoBlocking3G4GSetting();
            }
            else {
                this._fuseProgressBarService.hide();
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    selectNetwork(event, network) {
        if (event.checked)
            this.mobileNetworks[network] = true;
        else
            this.mobileNetworks[network] = false;
    }
    getAutoBlocking3G4GSetting() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            this.mobileNetworks = res.data.setting.mobileNetworks;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    setAutoBlocking3G4G() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._banIpsService.autoBlocking3G4G(this.mobileNetworks)
            .subscribe((res) => {
            this.getAutoBlocking3G4GSetting();
            setTimeout(() => {
                this._fuseProgressBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
};
AutoBlockingCellularNetworksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-blocking-cellular-networks',
        template: __webpack_require__(/*! raw-loader!./auto-blocking-cellular-networks.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html"),
        styles: [__webpack_require__(/*! ./auto-blocking-cellular-networks.component.scss */ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ban_ips_service__WEBPACK_IMPORTED_MODULE_2__["BanIpsService"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], AutoBlockingCellularNetworksComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 30px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background-color: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .highline {\n  font-weight: bold;\n  color: #40a5ec;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1yYW5nZS1pcHMvYXV0by1ibG9ja2luZy1yYW5nZS1pcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hdXRvLWJsb2NraW5nLXJhbmdlLWlwcy9hdXRvLWJsb2NraW5nLXJhbmdlLWlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREdJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FETEk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNETjtFREdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ROO0FBQ0Y7QURJSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FES0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNKTjtBRE9JO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDTE47QURRSTtFQUNFLGdCQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNQTjtBRFVJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ1ROO0FEWUk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNWTjtBRGVBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtFQ2JKO0VEZUU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQ2JKO0VEZUk7SUFDRSxlQUFBO0VDYk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy9hdXRvLWJsb2NraW5nLXJhbmdlLWlwcy9hdXRvLWJsb2NraW5nLXJhbmdlLWlwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDYwcHggMzBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiAyN3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmNlYzU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmY2VjNSAwJSwgIzE0NTU3YiA3NCUpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNXZoO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGlnaGxpbmUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICB9XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuYmFubmVkLWlwLWluZm8ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogMzN2aDtcbiAgICB9XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDI3dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmNlYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmhpZ2hsaW5lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VjY2Vzcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLnRpdGxlMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgaGVpZ2h0OiAzM3ZoO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AutoBlockingRangeIpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBlockingRangeIpsComponent", function() { return AutoBlockingRangeIpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









let AutoBlockingRangeIpsComponent = class AutoBlockingRangeIpsComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"] {
    constructor(_banIpsService, sessionService, _fuseProgresBarService, _dialogService, _router, _fuseSplashScreenService) {
        super();
        this._banIpsService = _banIpsService;
        this.sessionService = sessionService;
        this._fuseProgresBarService = _fuseProgresBarService;
        this._dialogService = _dialogService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.isProcessing = true;
        this.itemsSource = {
            classC: [
                {
                    text: 'Không kích hoạt (được đề nghị)',
                    value: 1
                },
                {
                    text: 'Kích hoạt',
                    value: 2
                }
            ],
            classD: [
                {
                    text: 'Không kích hoạt (được đề nghị)',
                    value: 1
                },
                {
                    text: 'Kích hoạt',
                    value: 2
                }
            ],
            countMaxClickClassCInMinnutes: [
                {
                    text: '10 phút',
                    value: 10
                },
                {
                    text: '20 phút',
                    value: 20
                },
                {
                    text: '30 phút',
                    value: 30
                },
                {
                    text: '60 phút',
                    value: 60
                },
                {
                    text: '90 phút',
                    value: 90
                }
            ],
            autoBlockIpClassCByMaxClick: [
                {
                    text: '10 click',
                    value: 10
                },
                {
                    text: '20 click',
                    value: 20
                },
                {
                    text: '30 click',
                    value: 30
                },
                {
                    text: '50 click',
                    value: 50
                },
                {
                    text: '90 click',
                    value: 90
                }
            ],
            countMaxClickClassDInMinnutes: [
                {
                    text: '5 phút',
                    value: 5
                },
                {
                    text: '10 phút',
                    value: 10
                },
                {
                    text: '15 phút',
                    value: 15
                },
                {
                    text: '20 phút',
                    value: 20
                },
                {
                    text: '30 phút',
                    value: 30
                },
                {
                    text: '50 phút',
                    value: 50
                }
            ],
            autoBlockIpClassDByMaxClick: [
                {
                    text: '5 click',
                    value: 5
                },
                {
                    text: '10 click',
                    value: 10
                },
                {
                    text: '15 click',
                    value: 15
                },
                {
                    text: '20 click',
                    value: 20
                },
                {
                    text: '30 click',
                    value: 30
                },
                {
                    text: '60 click',
                    value: 60
                },
            ],
        };
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
        this.countMaxClickClassCInMinnutes = this.itemsSource.countMaxClickClassCInMinnutes[1].value;
        this.autoBlockIpClassCByMaxClick = this.itemsSource.autoBlockIpClassCByMaxClick[1].value;
        this.countMaxClickClassDInMinnutes = this.itemsSource.countMaxClickClassDInMinnutes[1].value;
        this.autoBlockIpClassDByMaxClick = this.itemsSource.autoBlockIpClassDByMaxClick[1].value;
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                this.getAutoBLockingIPRangeSetting();
            }
            else {
                this._fuseProgresBarService.hide();
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getAutoBLockingIPRangeSetting() {
        this._fuseProgresBarService.show();
        this.isProcessing = true;
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgresBarService.hide();
            this.classC = res.data.setting.autoBlackListIpRanges.classC === false ? 1 : 2;
            this.classD = res.data.setting.autoBlackListIpRanges.classD === false ? 1 : 2;
            this.countMaxClickClassCInMinnutes = res.data.setting.autoBlackListIpRanges.countMaxClickClassCInMinnutes
                || this.itemsSource.countMaxClickClassCInMinnutes[1].value;
            this.autoBlockIpClassCByMaxClick = res.data.setting.autoBlackListIpRanges.autoBlockIpClassCByMaxClick
                || this.itemsSource.autoBlockIpClassCByMaxClick[1].value;
            this.countMaxClickClassDInMinnutes = res.data.setting.autoBlackListIpRanges.countMaxClickClassDInMinnutes
                || this.itemsSource.countMaxClickClassDInMinnutes[1].value;
            this.autoBlockIpClassDByMaxClick = res.data.setting.autoBlackListIpRanges.autoBlockIpClassDByMaxClick
                || this.itemsSource.autoBlockIpClassDByMaxClick[1].value;
            this.isProcessing = false;
            this._fuseSplashScreenService.hide();
        }, (error) => {
            this._fuseProgresBarService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
            this.classC = -1;
            this.classD = -1;
            this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(sub);
    }
    setAutoBlockingIPRange() {
        this.isProcessing = true;
        const params = this.generateAutoBlockingIPRangeParams();
        this._fuseProgresBarService.show();
        const sub = this._banIpsService.autoBlockingRangeIP(params)
            .subscribe((res) => {
            this.getAutoBLockingIPRangeSetting();
            setTimeout(() => {
                this._fuseProgresBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    generateAutoBlockingIPRangeParams() {
        const params = {
            classC: this.classC === 1 ? false : true,
            classD: this.classD === 1 ? false : true,
            countMaxClickClassCInMinnutes: this.countMaxClickClassCInMinnutes,
            autoBlockIpClassCByMaxClick: this.autoBlockIpClassCByMaxClick,
            countMaxClickClassDInMinnutes: this.countMaxClickClassDInMinnutes,
            autoBlockIpClassDByMaxClick: this.autoBlockIpClassDByMaxClick,
        };
        return params;
    }
};
AutoBlockingRangeIpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-blocking-range-ips',
        template: __webpack_require__(/*! raw-loader!./auto-blocking-range-ips.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html"),
        styles: [__webpack_require__(/*! ./auto-blocking-range-ips.component.scss */ "./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ban_ips_service__WEBPACK_IMPORTED_MODULE_2__["BanIpsService"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], AutoBlockingRangeIpsComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n  width: 100%;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 30px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner mat-divider {\n  margin-top: 30px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  background-color: white;\n  border-radius: 7px;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .button-area mat-icon {\n  font-size: 18px;\n  margin-top: 3px;\n}\n.container .inner .step {\n  font-weight: bold;\n}\n.container .inner .banned-ip-info {\n  border-radius: 7px;\n  margin-top: 30px;\n  padding: 30px 15px 15px 30px;\n  background: rgba(3, 155, 229, 0.05);\n  border-left: 6px solid #039be5;\n  text-align: justify;\n  font-size: 12px;\n  -webkit-animation: infoAni 0.4s ease-in;\n  animation: infoAni 0.4s ease-in;\n}\n@-webkit-keyframes infoAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes infoAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .banned-ip-info .blocked-ip {\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .banned-ip-info .unblock-ip-button {\n  background: rgba(0, 0, 0, 0.05);\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .next-icon {\n  font-size: 14px;\n  margin-left: 7px;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .banned-ip-info {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWFuLWlwL2Jhbi1hbi1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1hbi1pcC9iYW4tYW4taXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQWtCQSxXQUFBO0FDaEJGO0FEQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7QURBSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0VOO0FESUU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSx3Q0FBQTtFQUNBLGdDQUFBO0FDSEo7QURLSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDTE47QURRSTtFQUNFLGdCQUFBO0FDTk47QURTSTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ1BOO0FEVUk7RUFDRSxnQkFBQTtBQ1JOO0FEVU07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEWUk7RUFDRSxpQkFBQTtBQ1ZOO0FEYUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsdUNBQUE7RUFDQSwrQkFBQTtBQ1pOO0FEYU07RUFDRTtJQUNFLFVBQUE7RUNYUjtFRGFNO0lBQ0UsVUFBQTtFQ1hSO0FBQ0Y7QURLTTtFQUNFO0lBQ0UsVUFBQTtFQ1hSO0VEYU07SUFDRSxVQUFBO0VDWFI7QUFDRjtBRGNNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDWlI7QURlTTtFQUNFLCtCQUFBO0FDYlI7QURpQkk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNmTjtFRGlCSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNmTjtBQUNGO0FEU0k7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNmTjtFRGlCSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNmTjtBQUNGO0FEa0JJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDaEJOO0FEbUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDakJOO0FEc0JBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtFQ3BCSjtFRHVCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VDckJKO0VEdUJJO0lBQ0UsZUFBQTtFQ3JCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1hbi1pcC9iYW4tYW4taXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICAgIGhlaWdodDogMjd2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hZHNJZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICB3aWR0aDogMTAwJTtcblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAzMHB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICAuYmFuLWlwLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMzBweCAxNXB4IDE1cHggMzBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDM5YmU1O1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGluZm9BbmkgMC40cyBlYXNlLWluO1xuICAgICAgYW5pbWF0aW9uOiBpbmZvQW5pIDAuNHMgZWFzZS1pbjtcbiAgICAgIEBrZXlmcmFtZXMgaW5mb0FuaSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJsb2NrZWQtaXAge1xuICAgICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC51bmJsb2NrLWlwLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm5leHQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAudGl0bGUxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgICBoZWlnaHQ6IDMzdmg7XG4gICAgfVxuXG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDYwcHggMzBweCAwIDQ1cHg7XG4gIGhlaWdodDogMjd2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmY2VjNSAwJSwgIzE0NTU3YiA3NCUpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRzSWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC5pbm5lciBtYXQtZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5iYW5uZWQtaXAtaW5mbyB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMzBweCAxNXB4IDE1cHggMzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAzOWJlNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogaW5mb0FuaSAwLjRzIGVhc2UtaW47XG4gIGFuaW1hdGlvbjogaW5mb0FuaSAwLjRzIGVhc2UtaW47XG59XG5Aa2V5ZnJhbWVzIGluZm9Bbmkge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8gLmJsb2NrZWQtaXAge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8gLnVuYmxvY2staXAtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5leHQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICBoZWlnaHQ6IDMzdmg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.ts ***!
  \***************************************************************/
/*! exports provided: BanAnIPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanAnIPComponent", function() { return BanAnIPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









let BanAnIPComponent = class BanAnIPComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_3__["EditableFormBaseComponent"] {
    constructor(_banIpsService, sessionService, _fuseProgresBarService, _router, _fuseSplashScreenService) {
        super();
        this._banIpsService = _banIpsService;
        this.sessionService = sessionService;
        this._fuseProgresBarService = _fuseProgresBarService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.blockedIPs = [];
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        this.initForm();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                this.getBlockedSampleIP();
            }
            else {
                this._fuseProgresBarService.hide();
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getBlockedSampleIP() {
        const blockedIPsSub = this._banIpsService.getBlockedSampleIP()
            .subscribe(res => {
            this.blockedIPs = res.data.ips;
            if (this.blockedIPs.length > 0)
                this.hasBlockedIP = true;
            else
                this.hasBlockedIP = false;
            this._fuseProgresBarService.hide();
            this.isProcessing = false;
            this._fuseSplashScreenService.hide();
        }, (error) => {
            this._fuseProgresBarService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
            this.hasBlockedIP = false;
            this.isProcessing = false;
            this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(blockedIPsSub);
    }
    onSubmitForm() {
        this.onSubmit();
    }
    initForm() {
        this.form = this.fb.group({
            bannedIP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validatorService.checkIP]]
        });
    }
    generateBlockSapmleIPParams() {
        const params = {
            ip: Object.assign({}, this.form.value).bannedIP
        };
        return params;
    }
    post() {
        const params = this.generateBlockSapmleIPParams();
        this._fuseProgresBarService.show();
        const sub = this._banIpsService.blockSampleIP(params)
            .subscribe((res) => {
            this._fuseProgresBarService.hide();
            this.blockedIPs[0] = params.ip;
            this.hasBlockedIP = true;
            setTimeout(() => {
                this._dialogService._openSuccessDialog({ messages: ['Chặn IP thành công'] });
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            if (error.error.messages) {
                this._dialogService._openErrorDialog(error.error);
            }
            this._fuseProgresBarService.hide();
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    generateUnblockeSampleIPParmas() {
        const parmas = {
            ip: this.blockedIPs[0]
        };
        return parmas;
    }
    unblockSampleIP() {
        this._dialogService._openConfirmDialog('Bỏ chặn IP này?')
            .subscribe((result) => {
            if (result) {
                const params = this.generateUnblockeSampleIPParmas();
                this.isProcessing = true;
                this._fuseProgresBarService.show();
                const sub = this._banIpsService.unblockSampleIP(params)
                    .subscribe((res) => {
                    this._fuseProgresBarService.hide();
                    this.blockedIPs = [];
                    this.hasBlockedIP = false;
                    this._dialogService._openSuccessDialog({ messages: ['Bỏ chặn IP thành công'] });
                    this.isProcessing = false;
                }, (error) => {
                    this._fuseProgresBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this.isProcessing = false;
                });
                this.subscriptions.push(sub);
            }
        });
    }
};
BanAnIPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ban-an-ip',
        template: __webpack_require__(/*! raw-loader!./ban-an-ip.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html"),
        styles: [__webpack_require__(/*! ./ban-an-ip.component.scss */ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ban_ips_service__WEBPACK_IMPORTED_MODULE_4__["BanIpsService"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__["FuseProgressBarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], BanAnIPComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-device/ban-device.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-device/ban-device.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 45px 30px 0 45px;\n  height: 25vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 30px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAnimation 0.4s ease-out;\n  animation: formAnimation 0.4s ease-out;\n}\n@-webkit-keyframes formAnimation {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAnimation {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .title2 {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: justify;\n}\n.container .inner .title2 .highline {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .title2 .advise {\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .success-badge {\n  margin-right: 5px;\n  background-color: #44b543;\n  border-radius: 2px;\n  color: white;\n  padding: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  font-size: 10px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  opacity: 0.9;\n}\n.container .inner .table-wrapper {\n  margin-top: 10px;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-wrapper mat-cell,\n.container .inner .table-wrapper mat-header-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1) .device-name-wrapper,\n.container .inner .table-wrapper mat-cell:nth-child(1) .device-name-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1) .device-name-wrapper .device-name,\n.container .inner .table-wrapper mat-cell:nth-child(1) .device-name-wrapper .device-name {\n  margin-left: 10px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(7),\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  padding-top: 10px;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .empty-report-notification {\n  background-color: lightyellow;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n  text-align: center;\n  -webkit-animation: fadeIn 0.2s ease-in-out;\n  animation: fadeIn 0.2s ease-in-out;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .title2 .advise {\n    line-height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsOENBQUE7RUFDQSxzQ0FBQTtBQ0ZKO0FER0k7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNETjtFREdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ROO0FBQ0Y7QURMSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0ROO0VER0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRE47QUFDRjtBRElJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLG1CQUFBO0FDSE47QURLTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNIUjtBRE1NO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNKUjtBRFFJO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtBQ05OO0FEU0k7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUE47QURTTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEVU07RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsNENBQUE7RUFDQSxvQ0FBQTtBQ1RSO0FEVVE7RUFDRTtJQUNFLFVBQUE7RUNSVjtFRFVRO0lBQ0UsVUFBQTtFQ1JWO0FBQ0Y7QURFUTtFQUNFO0lBQ0UsVUFBQTtFQ1JWO0VEVVE7SUFDRSxVQUFBO0VDUlY7QUFDRjtBRFdRO0VBQ0UseUNBQUE7QUNUVjtBRGFNOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNYUjtBRGNNOztFQUVFLHVCQUFBO1VBQUEsMkJBQUE7QUNaUjtBRGFROztFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVlY7QURXVTs7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNSWjtBRGFNOztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQ1hSO0FEY007RUFDRSxpQkFBQTtBQ1pSO0FEZU07O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FDYlI7QURnQk07RUFDRSxlQUFBO0FDZFI7QURpQk07RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNmUjtBRG1CSTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLDBDQUFBO0VBQ0Esa0NBQUE7QUNsQk47QURtQk07RUFDRTtJQUNFLFVBQUE7RUNqQlI7RURtQk07SUFDRSxVQUFBO0VDakJSO0FBQ0Y7QURXTTtFQUNFO0lBQ0UsVUFBQTtFQ2pCUjtFRG1CTTtJQUNFLFVBQUE7RUNqQlI7QUFDRjtBRHVCQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSw0QkFBQTtJQUNBLFlBQUE7RUNyQko7RUR1QkU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQ3JCSjtFRHdCTTtJQUNFLGlCQUFBO0VDdEJSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogNDVweCAzMHB4IDAgNDVweDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAzMHB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaW1hdGlvbiAwLjRzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogZm9ybUFuaW1hdGlvbiAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaW1hdGlvbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZTIge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAgIC5oaWdobGluZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgfVxuXG4gICAgICAuYWR2aXNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1iYWRnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGI1NDM7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cblxuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICBhbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgIEBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsLFxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC5kZXZpY2UtbmFtZS13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC5kZXZpY2UtbmFtZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93LFxuICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lbXB0eS1yZXBvcnQtbm90aWZpY2F0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAudGl0bGUxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgICBoZWlnaHQ6IDMzdmg7XG4gICAgfVxuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgbWFyZ2luOiAxNXB4O1xuXG4gICAgICAudGl0bGUyIHtcbiAgICAgICAgLmFkdmlzZSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogNDVweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDMwcHggMzBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTV2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmltYXRpb24gMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pbWF0aW9uIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1BbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIgLmhpZ2hsaW5lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIC5hZHZpc2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgb3BhY2l0eTogMC45O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwsXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpIC5kZXZpY2UtbmFtZS13cmFwcGVyLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIC5kZXZpY2UtbmFtZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSAuZGV2aWNlLW5hbWUtd3JhcHBlciAuZGV2aWNlLW5hbWUsXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkgLmRldmljZS1uYW1lLXdyYXBwZXIgLmRldmljZS1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoNykge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5lbXB0eS1yZXBvcnQtbm90aWZpY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLWluLW91dDtcbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgIGhlaWdodDogMzN2aDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiAuYWR2aXNlIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/ban-ips/ban-device/ban-device.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-device/ban-device.component.ts ***!
  \*****************************************************************/
/*! exports provided: BanDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanDeviceComponent", function() { return BanDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");










let BanDeviceComponent = class BanDeviceComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"] {
    constructor(_banIpsService, _fuseProgressBarService, sessionService, dialogService, _router, _fuseSplashScreenService) {
        super();
        this._banIpsService = _banIpsService;
        this._fuseProgressBarService = _fuseProgressBarService;
        this.sessionService = sessionService;
        this.dialogService = dialogService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.displayedColumns = ['device', 'cost', 'impressions', 'clicks', 'avgPosition', 'ctr', 'optimization'];
        this.deviceReports = [];
        this.isProcessing = true;
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_8__().subtract(1, 'months');
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_8__();
        this.deviceSettings = {
            mobile: false,
            tablet: false,
            computer: false
        };
        this.onLoadDeviceReport = true;
        this.deviceSettingsItemsSource = {
            mobile: [
                {
                    text: 'Chạy quảng cáo',
                    value: true
                },
                {
                    text: 'Dừng quảng cáo',
                    value: false
                }
            ],
            tablet: [
                {
                    text: 'Chạy quảng cáo',
                    value: true
                },
                {
                    text: 'Dừng quảng cáo',
                    value: false
                }
            ],
            computer: [
                {
                    text: 'Chạy quảng cáo',
                    value: true
                },
                {
                    text: 'Dừng quảng cáo',
                    value: false
                }
            ]
        };
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                this.getDeviceReport();
            }
            else {
                this._fuseSplashScreenService.hide();
                this._fuseProgressBarService.hide();
                this.dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseSplashScreenService.hide();
            this._fuseProgressBarService.hide();
            this.dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getDeviceSettings() {
        this._fuseProgressBarService.show();
        this.isProcessing = true;
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this.deviceSettings = res.data.setting.devices;
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            this.isProcessing = false;
            this.onLoadDeviceReport = false;
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            this.isProcessing = false;
            this.onLoadDeviceReport = false;
            if (error.status === 404) {
                this.dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this.dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    getDeviceReport() {
        this._fuseProgressBarService.show();
        const sub = this._banIpsService.getDeviceReport()
            .subscribe(res => {
            this.deviceReports = res.data.reportDevice;
            // this.deviceReports = [
            //   {
            //     avgPosition: null,
            //     clicks: 326,
            //     cost: 4343464.627782,
            //     ctr: 0.055,
            //     device: "Máy tính",
            //     impressions: 5962
            //   },
            //   {
            //     avgPosition: null,
            //     clicks: 326,
            //     cost: 4343464.627782,
            //     ctr: 0.055,
            //     device: "Điện thoại",
            //     impressions: 5962
            //   },
            //   {
            //     avgPosition: null,
            //     clicks: 326,
            //     cost: 4343464.627782,
            //     ctr: 0.055,
            //     device: "Máy tính bảng",
            //     impressions: 5962
            //   }
            // ];
            this.getDeviceSettings();
        }, (error) => {
            this._fuseSplashScreenService.hide();
            this._fuseProgressBarService.hide();
            this.dialogService._openErrorDialog(error.error);
            this.deviceReports = [];
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    setDeviceCampaignRunning(event, deviceId) {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._banIpsService.setDeviceCampaignRunning({ device: deviceId, isEnabled: event.value })
            .subscribe((res) => {
            this._fuseProgressBarService.hide();
            this.dialogService._openSuccessDialog(res);
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressBarService.hide();
            this.dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
};
BanDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ban-device',
        template: __webpack_require__(/*! raw-loader!./ban-device.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-device/ban-device.component.html"),
        styles: [__webpack_require__(/*! ./ban-device.component.scss */ "./src/app/main/ban-ips/ban-device/ban-device.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ban_ips_service__WEBPACK_IMPORTED_MODULE_2__["BanIpsService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["FuseSplashScreenService"]])
], BanDeviceComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-ips-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/ban-ips/ban-ips-routing.module.ts ***!
  \********************************************************/
/*! exports provided: BanIPsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanIPsRoutingModule", function() { return BanIPsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ban_an_ip_ban_an_ip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ban-an-ip/ban-an-ip.component */ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.ts");
/* harmony import */ var _ban_optional_ip_ban_optional_ip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ban-optional-ip/ban-optional-ip.component */ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.ts");
/* harmony import */ var _auto_blocking_range_ips_auto_blocking_range_ips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-blocking-range-ips/auto-blocking-range-ips.component */ "./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.ts");
/* harmony import */ var _auto_ban_ip_auto_ban_ip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-ban-ip/auto-ban-ip.component */ "./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.ts");
/* harmony import */ var _auto_blocking_cellular_networks_auto_blocking_cellular_networks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-blocking-cellular-networks/auto-blocking-cellular-networks.component */ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.ts");
/* harmony import */ var _ban_device_ban_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ban-device/ban-device.component */ "./src/app/main/ban-ips/ban-device/ban-device.component.ts");
/* harmony import */ var _whitelist_ip_whitelist_ip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whitelist-ip/whitelist-ip.component */ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.ts");
/* harmony import */ var _anonymous_browser_anonymous_browser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./anonymous-browser/anonymous-browser.component */ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.ts");











let BanIPsRoutingModule = class BanIPsRoutingModule {
};
BanIPsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'chan-1-ip',
                    pathMatch: 'full',
                    component: _ban_an_ip_ban_an_ip_component__WEBPACK_IMPORTED_MODULE_3__["BanAnIPComponent"]
                },
                {
                    path: 'chan-ip-tuy-chinh',
                    pathMatch: 'full',
                    component: _ban_optional_ip_ban_optional_ip_component__WEBPACK_IMPORTED_MODULE_4__["BanOptionalIPComponent"]
                },
                {
                    path: 'whitelist-ip',
                    pathMatch: 'full',
                    component: _whitelist_ip_whitelist_ip_component__WEBPACK_IMPORTED_MODULE_9__["WhitelistIpComponent"]
                },
                {
                    path: 'chan-ip-tu-dong',
                    pathMatch: 'full',
                    component: _auto_ban_ip_auto_ban_ip_component__WEBPACK_IMPORTED_MODULE_6__["AutoBanIPComponent"]
                },
                {
                    path: 'chan-ip-theo-nhom',
                    pathMatch: 'full',
                    component: _auto_blocking_range_ips_auto_blocking_range_ips_component__WEBPACK_IMPORTED_MODULE_5__["AutoBlockingRangeIpsComponent"]
                },
                {
                    path: 'chan-ip-theo-mang-di-dong',
                    pathMatch: 'full',
                    component: _auto_blocking_cellular_networks_auto_blocking_cellular_networks_component__WEBPACK_IMPORTED_MODULE_7__["AutoBlockingCellularNetworksComponent"]
                },
                {
                    path: 'chan-ip-theo-thiet-bi',
                    pathMatch: 'full',
                    component: _ban_device_ban_device_component__WEBPACK_IMPORTED_MODULE_8__["BanDeviceComponent"]
                },
                {
                    path: 'chan-trinh-duyet-an-danh',
                    pathMatch: 'full',
                    component: _anonymous_browser_anonymous_browser_component__WEBPACK_IMPORTED_MODULE_10__["AnonymousBrowserComponent"]
                }
            ])
        ]
    })
], BanIPsRoutingModule);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-ips.module.ts":
/*!************************************************!*\
  !*** ./src/app/main/ban-ips/ban-ips.module.ts ***!
  \************************************************/
/*! exports provided: BanIPsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanIPsModule", function() { return BanIPsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ban_ips_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ban-ips-routing.module */ "./src/app/main/ban-ips/ban-ips-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _ban_an_ip_ban_an_ip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ban-an-ip/ban-an-ip.component */ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.ts");
/* harmony import */ var _ban_optional_ip_ban_optional_ip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ban-optional-ip/ban-optional-ip.component */ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.ts");
/* harmony import */ var _auto_ban_ip_auto_ban_ip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auto-ban-ip/auto-ban-ip.component */ "./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.ts");
/* harmony import */ var _auto_blocking_range_ips_auto_blocking_range_ips_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auto-blocking-range-ips/auto-blocking-range-ips.component */ "./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.ts");
/* harmony import */ var _auto_blocking_cellular_networks_auto_blocking_cellular_networks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auto-blocking-cellular-networks/auto-blocking-cellular-networks.component */ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.ts");
/* harmony import */ var _ban_device_ban_device_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ban-device/ban-device.component */ "./src/app/main/ban-ips/ban-device/ban-device.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _whitelist_ip_whitelist_ip_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./whitelist-ip/whitelist-ip.component */ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.ts");
/* harmony import */ var _anonymous_browser_anonymous_browser_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./anonymous-browser/anonymous-browser.component */ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.ts");

























let BanIPsModule = class BanIPsModule {
};
BanIPsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ban_an_ip_ban_an_ip_component__WEBPACK_IMPORTED_MODULE_16__["BanAnIPComponent"],
            _ban_optional_ip_ban_optional_ip_component__WEBPACK_IMPORTED_MODULE_17__["BanOptionalIPComponent"],
            _auto_blocking_range_ips_auto_blocking_range_ips_component__WEBPACK_IMPORTED_MODULE_19__["AutoBlockingRangeIpsComponent"],
            _auto_ban_ip_auto_ban_ip_component__WEBPACK_IMPORTED_MODULE_18__["AutoBanIPComponent"],
            _auto_blocking_cellular_networks_auto_blocking_cellular_networks_component__WEBPACK_IMPORTED_MODULE_20__["AutoBlockingCellularNetworksComponent"],
            _ban_device_ban_device_component__WEBPACK_IMPORTED_MODULE_21__["BanDeviceComponent"],
            _whitelist_ip_whitelist_ip_component__WEBPACK_IMPORTED_MODULE_23__["WhitelistIpComponent"],
            _anonymous_browser_anonymous_browser_component__WEBPACK_IMPORTED_MODULE_24__["AnonymousBrowserComponent"]
        ],
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__["CheckboxGroupModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
            _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
            _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__["SelectTextModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__["FuseSharedModule"],
            _ban_ips_routing_module__WEBPACK_IMPORTED_MODULE_2__["BanIPsRoutingModule"],
        ],
        providers: []
    })
], BanIPsModule);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-ips.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/ban-ips/ban-ips.service.ts ***!
  \*************************************************/
/*! exports provided: BanIpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanIpsService", function() { return BanIpsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");





let BanIpsService = class BanIpsService {
    constructor(_http, _sessionService) {
        this._http = _http;
        this._sessionService = _sessionService;
    }
    getActiveAccountId() {
        const activeAccountId = this._sessionService.activeAccountId;
        if (!activeAccountId) {
            return null;
        }
        return activeAccountId.toString();
    }
    autoBlockingRangeIP(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    autoBlocking3G4G(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlocking3G4G.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    autoBlockingDevice(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlockingDevice.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    autoBlockingIP(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlockingIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    setDeviceCampaignRunning(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.setDeviceCampaignRunning.replace('{account_id}', activeAccountId);
        return this._http.put(url, param);
    }
    blockIPs(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    blockSampleIP(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.blockSampleIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    getBlockedSampleIP() {
        const activeAccountId = this._sessionService.getValueOfAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getBlockedSampleIP.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    }
    unblockSampleIP(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.unblockSampleIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    removeBlockedIPs(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    }
    getDeviceReport() {
        const activeAccountId = this._sessionService.getValueOfAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getDeviceReport.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    }
    setBlockingAnonymousBrowser(param) {
        const activeAccountId = this.getActiveAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.setBlockingAnonymousBrowser.replace('{account_id}', activeAccountId);
        return this._http.put(url, param);
    }
    checkAccountAcceptance(params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    }
    getBlockedCustomIPs() {
        const activeAccountId = this._sessionService.getValueOfAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getBlockedCustomIPs.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    }
    getBlockingIPSettings() {
        const activeAccountId = this._sessionService.getValueOfAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getBlockingIPSettings.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    }
    getAdwordsAccountDetail(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    }
    updateWhiteList(param) {
        const activeAccountId = this._sessionService.getValueOfAccountId();
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.updateWhitelist.replace('{account_id}', activeAccountId);
        return this._http.put(url, param);
    }
};
BanIpsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], BanIpsService);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #e0455f;\n  background-image: linear-gradient(147deg, #e0455f 0%, #44000b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 30px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n  padding-top: 10px;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  background-color: white;\n  border-radius: 7px;\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: -webkit-box;\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -15px;\n  color: gray;\n  font-size: 11px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .button-area mat-icon {\n  font-size: 18px;\n  margin-top: 3px;\n}\n.container .inner .blacklist {\n  margin-top: 40px;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n}\n.container .inner .blacklist .table-title {\n  padding: 15px;\n  font-size: 14px;\n  color: white;\n  font-weight: bold;\n  background: #d9534f;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  text-align: center;\n}\n.container .inner .blacklist .no-notice {\n  color: gray;\n  padding: 10px;\n}\n.container .inner .blacklist .table-wrapper {\n  max-height: 500px;\n  background-color: white;\n  overflow: auto;\n  border-radius: 7px;\n}\n.container .inner .blacklist .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .blacklist .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n.container .inner .blacklist .table-wrapper mat-row:nth-child(odd) {\n  background: whitesmoke;\n}\n.container .inner .blacklist .table-wrapper mat-row:hover {\n  background-color: rgba(217, 83, 79, 0.1);\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .blacklist .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .blacklist .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.container .inner .blacklist .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .blacklist .table-wrapper mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n}\n.container .inner .blacklist .table-wrapper mat-row,\n.container .inner .blacklist .table-wrapper mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .blacklist .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n  font-size: 12px;\n}\n.container .inner .blacklist .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .blacklist .table-wrapper mat-cell mat-icon {\n  font-size: 16px;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n  font-weight: bold;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .button-area {\n    text-align: center;\n  }\n  .container .inner .button-area button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1vcHRpb25hbC1pcC9iYW4tb3B0aW9uYWwtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSx3Q0FBQTtFQUNBLGdDQUFBO0FDRko7QURHSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0ROO0VER0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRE47QUFDRjtBRExJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FESUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNITjtBRE1JO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNMTjtBRFFJO0VBQ0UsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FDUE47QURZSTtFQUNFLFdBQUE7QUNWTjtBRFlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNWUjtBRGNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDWk47QURjTTtFQUNFLFdBQUE7QUNaUjtBRGVNO0VBQ0UsVUFBQTtBQ2JSO0FEaUJJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNmTjtBRGtCSTtFQUNFLGdCQUFBO0FDaEJOO0FEa0JNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNoQlI7QURvQkk7RUFFRSxnQkFBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7QUNwQk47QURzQk07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDcEJSO0FEdUJNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNyQlI7QUR3Qk07RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdEJSO0FEd0JRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDdEJWO0FEeUJRO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQVVBLDRDQUFBO0VBQ0Esb0NBQUE7QUNoQ1Y7QUR1QlU7RUFDRSxzQkFBQTtBQ3JCWjtBRHdCVTtFQUNFLHdDQUFBO0FDdEJaO0FEMkJVO0VBQ0U7SUFDRSxVQUFBO0VDekJaO0VEMkJVO0lBQ0UsVUFBQTtFQ3pCWjtBQUNGO0FEbUJVO0VBQ0U7SUFDRSxVQUFBO0VDekJaO0VEMkJVO0lBQ0UsVUFBQTtFQ3pCWjtBQUNGO0FENkJROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQzNCVjtBRDhCUTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7QUM1QlY7QUQrQlE7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDN0JWO0FEZ0NRO0VBRUUsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQy9CVjtBRGtDUTtFQUNFLGVBQUE7QUNoQ1Y7QURrQ1U7RUFDRSxlQUFBO0FDaENaO0FEc0NJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3BDTjtBRHVDSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUN0Q047QUR5Q0k7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUN2Q047QUQwQ0k7RUFDRSxtQkFBQTtBQ3hDTjtBRDJDSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ3pDTjtBRDRDSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDMUNOO0FENkNJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDM0NOO0FEZ0RBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtFQzlDSjtFRGdERTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VDOUNKO0VEZ0RJO0lBQ0Usa0JBQUE7RUM5Q047RUQrQ007SUFDRSxlQUFBO0VDN0NSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDYwcHggMzBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiAyN3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NWY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgI2UwNDU1ZiAwJSwgIzQ0MDAwYiA3NCUpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNXZoO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC50aXRsZTMge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB9XG5cbiAgICAuYmFuLWlwLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIC8vcGFkZGluZzogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgICAvL2JveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG5cbiAgICAubGlzdC1pcCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mbGV4LWJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAuZmxleC1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5saXN0IHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5wdXQtZXhhbXBsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJsYWNrbGlzdCB7XG4gICAgICAvL2JhY2tncm91bmQ6IHJnYmEoMjE3LCA4MywgNzksIDEpO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIC8vYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgICAudGFibGUtdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjE3LCA4MywgNzksIDEpO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm5vLW5vdGljZSB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgICAgQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3csXG4gICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDIxNywgODMsIDc5LCAxKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudGFzayB7XG4gICAgICBjb2xvcjogY3JpbXNvbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC51bmxvY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLm5ldyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogMzN2aDtcbiAgICB9XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIC5idXR0b24tYXJlYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0NTVmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjZTA0NTVmIDAlLCAjNDQwMDBiIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDMwcHggMzBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTV2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5iYW4taXAtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpc3QtaXAgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAuZmxleC1pdGVtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3ggLmxpc3Qge1xuICB3aWR0aDogNjAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmlucHV0LWV4YW1wbGUge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtdGl0bGUge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICNkOTUzNGY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAubm8tbm90aWNlIHtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICBhbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbn1cbkBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDQwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC51bmxvY2stYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5ldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLnRpdGxlMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgaGVpZ2h0OiAzM3ZoO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.ts ***!
  \***************************************************************************/
/*! exports provided: BanOptionalIPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanOptionalIPComponent", function() { return BanOptionalIPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









let BanOptionalIPComponent = class BanOptionalIPComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_banIpsService, _fuseProgresBarService, sessionService, _router, _fuseSplashScreenService) {
        super();
        this._banIpsService = _banIpsService;
        this._fuseProgresBarService = _fuseProgresBarService;
        this.sessionService = sessionService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.displayedColumns = ['order', 'ip', 'status', 'task', 'unlockButton'];
        this.blockedIPs = [];
        this.isProcessing = true;
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        this.initForm();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            if (res.data.adsAccount.isConnected) {
                // this._fuseProgresBarService.hide();
                this.getBlockedCustomIPs();
            }
            else {
                this._fuseProgresBarService.hide();
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getBlockedCustomIPs() {
        this.isProcessing = true;
        // this._fuseProgresBarService.show();
        const sub = this._banIpsService.getBlockedCustomIPs()
            .subscribe(res => {
            this._fuseProgresBarService.hide();
            this._fuseSplashScreenService.hide();
            this.blockedIPs = res.data.ips;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgresBarService.hide();
            this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
            this.blockedIPs = [];
        });
        this.subscriptions.push(sub);
    }
    onSubmitForm() {
        this.onSubmit();
    }
    post() {
        const params = this.generatePostObject();
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const sub = this._banIpsService.blockIPs(params)
            .subscribe((res) => {
            this.getBlockedCustomIPs();
            setTimeout(() => {
                this._fuseProgresBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgresBarService.hide();
            if (error.status === 409) {
                if (error.error.messages[0] === 'Ip đang nằm trong whiteList.')
                    this._dialogService._openErrorDialog({
                        messages: [`${error.error.data.ips.join(', ')} đã có trong whitelist.`]
                    });
                else
                    this._dialogService._openErrorDialog({
                        messages: [`${error.error.data.ips.join(', ')} đã có trong blacklist.`]
                    });
            }
            else
                this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    initForm() {
        this.form = this.fb.group({
            listBannedIP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.validatorService.checkWhiteListIP]]
        });
    }
    parseIP(ip) {
        if (ip.includes('.*.*'))
            return ip.replace('.*.*', '.0.0') + '/16';
        if (ip.includes('.*'))
            return ip.replace('.*', '.0') + '/24';
        return ip;
    }
    generatePostObject() {
        const params = {
            action: 'ADD',
            ips: Object.assign({}, this.form.value).listBannedIP.split(/\r?\n/)
        };
        params.ips = params.ips.filter((ip) => ip);
        params.ips = params.ips.map((ip) => this.parseIP(ip));
        return params;
    }
    unblockSampleIP(ip) {
        const openCofirmDialogSub = this._dialogService._openConfirmDialog('Bỏ chặn IP này?')
            .subscribe((res) => {
            if (res) {
                this.isProcessing = true;
                this._fuseProgresBarService.show();
                const sub = this._banIpsService.removeBlockedIPs({
                    action: 'REMOVE',
                    ips: [this.parseIP(ip)]
                })
                    .subscribe((res) => {
                    this.getBlockedCustomIPs();
                    setTimeout(() => {
                        this._fuseProgresBarService.hide();
                        this._dialogService._openSuccessDialog(res);
                        this.isProcessing = false;
                    }, 1000);
                }, (error) => {
                    this._fuseProgresBarService.hide();
                    if (error.status === 404)
                        this._dialogService._openErrorDialog({ messages: [`${error.error.data.ips[0]} không nằm trong danh sách IP đã bị chặn`] });
                    else
                        this._dialogService._openErrorDialog(error.error);
                    this.isProcessing = false;
                });
                this.subscriptions.push(sub);
            }
        });
        this.subscriptions.push(openCofirmDialogSub);
    }
};
BanOptionalIPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ban-optional-ip',
        template: __webpack_require__(/*! raw-loader!./ban-optional-ip.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html"),
        styles: [__webpack_require__(/*! ./ban-optional-ip.component.scss */ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ban_ips_service__WEBPACK_IMPORTED_MODULE_4__["BanIpsService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__["FuseProgressBarService"],
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], BanOptionalIPComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 15px 30px 30px 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .submit-button mat-icon {\n  font-size: 20px;\n  margin-top: 5px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  background: white;\n  border-radius: 7px;\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: -webkit-box;\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -5px;\n  color: gray;\n  font-size: 11px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .table-title {\n  margin-top: 30px;\n  color: gray;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 5px silver;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 15px;\n    margin: 15px;\n  }\n  .container .inner .button-area {\n    text-align: center;\n  }\n  .container .inner .button-area button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvd2hpdGVsaXN0LWlwL3doaXRlbGlzdC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL3doaXRlbGlzdC1pcC93aGl0ZWxpc3QtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSx3Q0FBQTtFQUNBLGdDQUFBO0FDRko7QURHSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0ROO0VER0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRE47QUFDRjtBRExJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FES007RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0hSO0FET0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNOTjtBRFNJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ1BOO0FEVUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDUk47QURXSTtFQUNFLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZOO0FEYUk7RUFDRSxXQUFBO0FDWE47QURhTTtFQUNFLGFBQUE7QUNYUjtBRGNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNaUjtBRGdCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ2ROO0FEZ0JNO0VBQ0UsV0FBQTtBQ2RSO0FEaUJNO0VBQ0UsVUFBQTtBQ2ZSO0FEbUJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtBQ2xCTjtBRHFCSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ25CTjtBRHNCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNwQk47QUR1Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDdEJOO0FEeUJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDdkJOO0FEMEJJO0VBQ0UsbUJBQUE7QUN4Qk47QUQyQkk7RUFDRSxjQUFBO0FDekJOO0FENEJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUMxQk47QUQ2Qkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMzQk47QURnQ0E7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsNEJBQUE7SUFDQSxZQUFBO0VDOUJKO0VEZ0NFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUM5Qko7RURnQ0k7SUFDRSxrQkFBQTtFQzlCTjtFRCtCTTtJQUNFLGVBQUE7RUM3QlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy93aGl0ZWxpc3QtaXAvd2hpdGVsaXN0LWlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgICBoZWlnaHQ6IDI3dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAzMHB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudGl0bGUzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB9XG5cbiAgICAubGlzdC1pcCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZsZXgtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgLmxpc3Qge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dC1leGFtcGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuc3RhdHVzIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgLnRhc2sge1xuICAgICAgY29sb3I6IGNyaW1zb247XG4gICAgfVxuXG4gICAgLnVubG9jay1idXR0b24ge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAubmV3IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBzaWx2ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnRpdGxlMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgICAgaGVpZ2h0OiAzM3ZoO1xuICAgIH1cbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbjogMTVweDtcblxuICAgICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDI3dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmNlYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Ym1pdC1idXR0b24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RpZmljYXRpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbi1pcC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IC5mbGV4LWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAubGlzdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5wdXQtZXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVubG9jay1idXR0b24ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHNpbHZlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICBoZWlnaHQ6IDMzdmg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.ts ***!
  \*********************************************************************/
/*! exports provided: WhitelistIpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitelistIpComponent", function() { return WhitelistIpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");








let WhitelistIpComponent = class WhitelistIpComponent extends app_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(sessionService, _fuseProgressBarService, _banIpsService, _router, _fuseSplashScreenService) {
        super();
        this.sessionService = sessionService;
        this._fuseProgressBarService = _fuseProgressBarService;
        this._banIpsService = _banIpsService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.isProcessing = true;
        this.whiteList = [];
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        this.initForm();
        const sub = this.sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    getAccountDetail(accountId) {
        const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe((res) => {
            this._fuseProgressBarService.hide();
            if (res.data.adsAccount.isConnected)
                this.getWhitelistIPs();
            else {
                this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    }
    getWhitelistIPs() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            this.whiteList = Array.from(new Set(res.data.setting.customWhiteList));
            this.form.patchValue({
                whitelistIPs: this.getNormalizedWhiteList(Array.from(new Set(res.data.setting.customWhiteList)))
            });
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    getNormalizedWhiteList(list) {
        return (list || []).map(item => {
            if (item.includes('.0.0/16'))
                return item.replace('.0.0/16', '.*.*');
            if (item.includes('.0/24'))
                return item.replace('.0/24', '.*');
            return item;
        }).join('\n');
    }
    onSubmitForm() {
        this.onSubmit();
    }
    initForm() {
        this.form = this.fb.group({
            whitelistIPs: ['', [this.validatorService.checkWhiteListIP]]
        });
    }
    post() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const param = this.generatePostObject();
        const sub = this._banIpsService.updateWhiteList(param)
            .subscribe((res) => {
            this.getWhitelistIPs();
            this._fuseProgressBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressBarService.hide();
            if (error.status === 409) {
                this._dialogService._openErrorDialog({
                    messages: [`${error.error.data.ips.join(', ')} đã nằm trong blacklist.`]
                });
            }
            else
                this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    generatePostObject() {
        const param = {
            ips: Object.assign({}, this.form.value).whitelistIPs.split('\n')
        };
        param.ips = param.ips.filter((ip) => ip);
        return param;
    }
};
WhitelistIpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whitelist-ip',
        template: __webpack_require__(/*! raw-loader!./whitelist-ip.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html"),
        styles: [__webpack_require__(/*! ./whitelist-ip.component.scss */ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["FuseProgressBarService"],
        _ban_ips_service__WEBPACK_IMPORTED_MODULE_5__["BanIpsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["FuseSplashScreenService"]])
], WhitelistIpComponent);



/***/ })

}]);
//# sourceMappingURL=main-ban-ips-ban-ips-module-es2015.js.map