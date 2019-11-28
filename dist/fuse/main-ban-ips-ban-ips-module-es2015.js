(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ban-ips-ban-ips-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TRÌNH DUYỆT ẨN DANH - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\">\n      Bằng việc cấu hình này, các quảng cáo sẽ <span style=\"color: crimson; font-weight: bold\">không hiển thị</span> trên các thiết bị sử dụng\n      <span style=\"color: #0093e5; font-weight: bold\">trình duyệt ẩn danh</span>, giúp tiết kiệm chi phí với những người dùng muốn <span\n        style=\"color: crimson; font-weight: bold\">ẩn thông tin</span> khi truy cập vào quảng cáo.\n    </p>\n\n    <div class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n        <b>Chặn trình duyệt ẩn danh</b>\n      </mat-checkbox>\n    </div>\n\n    <p class=\"button-area\">\n      <button mat-raised-button color=\"accent\" [disabled]=\"isProcessing\" (click)=\"setBlockingAnonymousBrowser()\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG THEO IP - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Thông thường 1 người dùng chỉ click quảng cáo từ 1 đến 2 lần trước khi mua hàng. Việc chặn người dùng click quảng cáo\n      liên tục\n      giúp bạn tiết kiệm được chi phí lãng phí do những hành vi phá hoại gây ra.\n    </p>\n\n    <p class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n      </mat-checkbox>\n      <b>\n        Tự động chặn những IP đang phá hoại sử dụng <span style=\"color: crimson\">AI</span> và <span style=\"color: crimson\">Big\n          Data</span>.\n      </b>\n    </p>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"-20px\" fxLayoutGap=\"20px\" class=\"max-click\">\n      <div fxFlex=\"60\">\n        <p>\n          <b>\n            Chặn sau khi 1 IP nhấn quảng cáo <span style=\"color: crimson\">(thường là 2 lần)</span>\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn số lần click</mat-label>\n          <mat-select [(value)]=\"selectedMaxClick\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClick\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div fxFlex=\"40\">\n        <p>\n          <b>\n            Sau khoảng thời gian\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn khoảng thời gian</mat-label>\n          <mat-select [(value)]=\"selectedMaxClickHours\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClickHours\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n    </div>\n\n    <p>\n      <b>\n        Xóa hết IP đã chặn khi qua ngày mới <span style=\"color: crimson\">(xóa vào lúc 0h-1h sáng)</span>\n      </b>\n    </p>\n\n    <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n      <mat-label>Chọn hình thức</mat-label>\n      <mat-select [(value)]=\"selectedAutoRemove\" [disabled]=\"isProcessing\">\n        <mat-option *ngFor=\"let item of itemsSource.autoRemove\" [value]=\"item.value\">{{item.text}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\" (click)=\"setAutoBlockingIP()\"\n        [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG 3G & 4G - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\"> Bằng việc cấu hình này, quảng cáo sẽ <span style=\"color: crimson; font-weight: bold\">không hiển thị</span> trên hầu hết\n      các thiết bị sử\n      dụng truy cập <span style=\"color: #0093e5; font-weight: bold\">3G & 4G</span> của các nhà mạng di động tại Việt Nam.</p>\n\n    <div class=\"checkbox-group\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around\">\n      <mat-checkbox [checked]=\"mobileNetworks.viettel\" (change)=\"selectNetwork($event,'viettel')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://dangky3gviettel.vn/wp-content/uploads/2018/10/cropped-logo-dang-ky-3g-viettel.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.mobifone\" (change)=\"selectNetwork($event,'mobifone')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://brasol.vn/public/uploads/1521197514-brasol.vn-logo-mobifone-mobifone-logo.svg_.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vinafone\" (change)=\"selectNetwork($event,'vinafone')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://img2.thuthuatphanmem.vn/uploads/2018/12/13/logo-vinaphone_010429237.png\" class=\"network-logo\"\n          alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vietnammobile\" (change)=\"selectNetwork($event,'vietnammobile')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://css.vietnamobile.com.vn/images/logo.png\" class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.fpt\" (change)=\"selectNetwork($event,'fpt')\" [disabled]=\"isProcessing\">\n        <img src=\"http://vinacorp.vn/uploads/news/FPT-ava_1828613.png\" class=\"fpt\" alt=\"\">\n      </mat-checkbox>\n    </div>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n        (click)=\"setAutoBlocking3G4G()\" [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"title1\">\n        CẤU HÌNH CHẶN TỰ ĐỘNG THEO NHÓM IP (NÂNG CAO) - TÀI KHOẢN <span\n            class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n    </div>\n\n    <div class=\"inner\">\n\n        <p class=\"notification\">\n            Nhóm IP là danh sách các IP có tiền tố giống nhau. Ví dụ IP 127.0.0.1 và 127.0.0.2 sẽ thuộc nhóm IP\n            127.0.0.<span style=\"color: crimson\">*</span>\n            <br>Bạn chỉ nên chọn chặn theo nhóm IP khi bị phá hoại với quy mô lớn vì có thể sẽ\n            gây ra việc <span style=\"color: crimson; font-weight: bold\"> chặn nhầm khách hàng</span> của bạn.\n        </p>\n\n        <p>\n            <b>\n                Chọn nhóm IP 127.0.0.<span style=\"color: crimson\">*</span> (255 IP)\n            </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n            <mat-label>Chọn hình thức</mat-label>\n            <mat-select [(value)]=\"classC\" [disabled]=\"isProcessing\">\n                <mat-option *ngFor=\"let item of itemsSource.classC\" [value]=\"item.value\">{{item.text}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <p>\n            <b>\n                Chọn nhóm IP 127.0.<span style=\"color: crimson\">*</span>.<span style=\"color: crimson\">*</span> (65.026 IP)\n            </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n            <mat-label>Chọn hình thức</mat-label>\n            <mat-select [(value)]=\"classD\" [disabled]=\"isProcessing\">\n                <mat-option *ngFor=\"let item of itemsSource.classD\" [value]=\"item.value\">{{item.text}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <p class=\"text-center\">\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n                (click)=\"setAutoBlockingIPRange()\" [disabled]=\"isProcessing\">\n                <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n            </button>\n        </p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH THỬ CHẶN 1 IP - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn IP theo yêu cầu của bạn và <span style=\"color: crimson; font-weight: bold\">không cho hiển thị</span> quảng cáo trên thiết bị đang sử dụng IP này.\n    </p>\n\n    <form class=\"ban-ip-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n\n      <app-input-text [formControlName]=\"'bannedIP'\" [errors]=\"getMessageErrors('bannedIP')\" title=\"IP của bạn\"\n        [isDisabled]=\"isProcessing\">\n      </app-input-text>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">block</mat-icon> THỬ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </form>\n\n    <div class=\"banned-ip-info\" *ngIf=\"hasBlockedIP === true\">\n      <p>\n        IP <span [(ngModel)]=\"blockedIPs[0]\" ngDefaultControl\n          style=\"color: crimson; font-weight: bolder\">{{blockedIPs[0]}}</span> đã được chặn thành công\n        trong hệ thống Google Ads.\n        <br><br><b>Cách kiểm tra hệ thống hoạt động:</b>\n        <br><b>Bước 1:</b> Truy cập vào tài khoản Google Ads tại trang <a href=\"https://ads.google.com/intl/vi_VN/home/\"\n          target=\"blank\">Ads.google.com</a>\n        nhấn vào\n        <span class=\"step\">1 Chiến dịch</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Cài đặt</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Loại trừ 1 IP</span>\n        <br><b>Bước 2:</b> Truy cập vào trang <a href=\"https:/google.com.vn\" target=\"blank\">Google.com.vn</a> và tìm\n        kiếm\n        website của\n        bạn. Nếu bạn không thấy quảng cáo, hệ thống hoạt động tốt.\n        <br>Sau khi kiểm tra, bạn có thể bỏ IP đang bị chặn. Bấm vào nút dưới đây\n      </p>\n      <div>\n        <button mat-raised-button style=\"background-color: #4bb353; color: white\" (click)=\"unblockSampleIP()\"\n          class=\"unblock-ip-button\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px\">lock_open</mat-icon>\n          MỞ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-device/ban-device.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-device/ban-device.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO THIẾT BỊ - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <div class=\"title2\">\n      <p>\n        Kết quả có được theo thống kê từ ngày <span\n          style=\"color: #0093e5; font-weight: bold\">{{startDate | date: 'dd/MM/yyyy'}}</span> đến ngày\n        <span style=\"color: #0093e5; font-weight: bold\">{{endDate | date: 'dd/MM/yyyy'}}</span>\n      </p>\n      <p class=\"advise\">\n        <span class=\"success-badge\">MẸO</span> Bạn có thể dừng quảng cáo trên các thiết bị mang lại hiệu quả quảng cáo\n        thấp\n      </p>\n    </div>\n\n    <p *ngIf=\"deviceReports.length === 0 && !isProcessing\" class=\"empty-report-notification\">\n      Chúng tôi không tìm thấy thông tin thiết bị nào trên tài khoản Google Ads này.\n    </p>\n\n    <div class=\"table-wrapper\" *ngIf=\"deviceReports.length > 0\">\n      <mat-table [dataSource]=\"deviceReports\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"device\">\n          <mat-header-cell *matHeaderCellDef> Thiết bị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <span *ngIf=\"element.device === 'Điện thoại'\" fxLayout=\"row\" fxLayoutAlign=\"center start\"\n              fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">smartphone</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n            <span *ngIf=\"element.device === 'Máy tính bảng'\" fxLayout=\"row\" fxLayoutAlign=\"center start\"\n              fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">tablet_mac</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n            <span *ngIf=\"element.device === 'Máy tính'\" fxLayout=\"row\" fxLayoutAlign=\"center start\" fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">laptop_chromebook</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cost\">\n          <mat-header-cell *matHeaderCellDef> Chi phí </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.cost | number: '1.0-0'}} VNĐ</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"impressions\">\n          <mat-header-cell *matHeaderCellDef> Hiển thị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.impressions | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"clicks\">\n          <mat-header-cell *matHeaderCellDef> Click </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.clicks | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"avgPosition\">\n          <mat-header-cell *matHeaderCellDef> Vị trí trung bình </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.avgPosition}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ctr\">\n          <mat-header-cell *matHeaderCellDef> CTR </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.ctr}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"optimization\">\n          <mat-header-cell *matHeaderCellDef>Tối ưu</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Điện thoại'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.mobile\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30001)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.mobile\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính bảng'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.tablet\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30002)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.tablet\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.computer\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30000)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.computer\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO DANH SÁCH IP TÙY CHỈNH - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn một danh sách các IP theo yêu cầu của bạn và <span style=\"color: crimson; font-weight: bold\">không cho hiển thị</span> quảng cáo\n      trên thiết bị đang sử dụng các IP này.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"60\">\n\n          <app-input-textarea [formControlName]=\"'listBannedIP'\" [errors]=\"getMessageErrors('listBannedIP')\"\n            title=\"Nhập danh sách IP cần chặn\" height=\"260px\" [isDisabled]=\"isProcessing\"></app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">HƯỚNG DẪN CHẶN IP TÙY CHỈNH</p>\n          <p>\n            Bạn có thể chặn <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <!-- <p>\n            Hoặc chặn <b>từng nhóm IP</b>, thêm dấu <span style=\"color: red\">(*)</span> tượng trưng cho nhóm IP muốn\n            chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p> -->\n          <span>\n            Hệ thống sẽ tự động chuyển đổi IP và chặn trong Google Ads sau một khoảng thời gian.\n          </span>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">block</mat-icon> CHẶN THỦ CÔNG DANH SÁCH IP\n        </button>\n      </div>\n    </form>\n\n    <p class=\"table-title\">DANH SÁCH IP ĐÃ CHẶN GẦN ĐÂY</p>\n\n    <div class=\"table-wrapper\">\n\n      <mat-table [dataSource]=\"blockedIPs\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"order\">\n          <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n          <mat-cell *matCellDef=\"let element; let i = index\"> <span [class.new]=\"element.order === 'MỚI'\">{{i+1}}</span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ip\">\n          <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <span style=\"color: crimson; font-weight: bold\">{{element._id}}</span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <p class=\"status\">\n              Đã chặn thành công vào tổng <span\n                style=\"color: crimson; font-weight: bold\">{{element.campaignNumber}}</span> chiến dịch.\n            </p>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef>Tác vụ</mat-header-cell>\n          <mat-cell *matCellDef>\n            <span class=\"task\">\n              <mat-icon style=\"font-size: 20px\">verified_user</mat-icon> đã chặn\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"unlockButton\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button (click)=\"unblockSampleIP(element._id)\" [disabled]=\"isProcessing\" mat-icon-button color=\"accent\"\n              matTooltip=\"Nhấn để mở chặn\" class=\"unlock-button\">\n              <mat-icon>lock_open</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH WHITELIST IP - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ ghi nhận một danh sách các IP mà bạn không cho phép chặn. Thiết bị đang sử dụng các IP này sẽ được hệ\n      thống nhận diện là <span style=\"color: #0093e5; font-weight: bold\">an toàn và không bị chặn</span>.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"60\">\n\n          <app-input-textarea [formControlName]=\"'whitelistIPs'\" [errors]=\"getMessageErrors('whitelistIPs')\"\n            title=\"Nhập danh sách IP không cho phép chặn\" height=\"260px\" [isDisabled]=\"isProcessing\">\n          </app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">HƯỚNG DẪN KHÔNG CHO PHÉP CHẶN IP TÙY CHỈNH</p>\n          <p>\n            Bạn có thể nhập <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <p>\n            Hoặc nhập <b>từng nhóm IP</b>, thêm dấu <span style=\"color: red\">(*)</span> tượng trưng cho nhóm IP không\n            muốn chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">sync</mat-icon> CẬP NHẬT WHITELIST\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: justify;\n}\n.container .inner .config-checking {\n  font-size: 20px;\n  padding-left: 10%;\n}\n.container .inner .button-area {\n  text-align: center;\n  padding-top: 40px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .config-checking {\n    padding: 0;\n    text-align: center;\n  }\n\n  .button-area button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYW5vbnltb3VzLWJyb3dzZXIvYW5vbnltb3VzLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hbm9ueW1vdXMtYnJvd3Nlci9hbm9ueW1vdXMtYnJvd3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURFSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0hOO0FEUUE7RUFFSTtJQUNFLGFBQUE7RUNOSjtFRFFJO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VDTk47O0VEWUU7SUFDRSxlQUFBO0VDVEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy9hbm9ueW1vdXMtYnJvd3Nlci9hbm9ueW1vdXMtYnJvd3Nlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cblxuICAgIC5jb25maWctY2hlY2tpbmcge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLmNvbmZpZy1jaGVja2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWFyZWEge1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jb25maWctY2hlY2tpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNvbmZpZy1jaGVja2luZyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYnV0dG9uLWFyZWEgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 16px;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .config-checking {\n  padding-top: 10px;\n}\n.container .inner .max-click {\n  width: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n\n  .submit-button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1iYW4taXAvYXV0by1iYW4taXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hdXRvLWJhbi1pcC9hdXRvLWJhbi1pcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtBQ0ZOO0FES0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxpQkFBQTtBQ0xOO0FEUUk7RUFDRSxXQUFBO0FDTk47QURXQTtFQUVJO0lBQ0UsYUFBQTtFQ1RKOztFRGFBO0lBQ0UsZUFBQTtFQ1ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1iYW4taXAvYXV0by1iYW4taXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudGl0bGUzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5jb25maWctY2hlY2tpbmcge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLm1heC1jbGljayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY29uZmlnLWNoZWNraW5nIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWF4LWNsaWNrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

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
                },
                {
                    text: '5 lần',
                    value: 5
                },
            ],
            maxClickHours: [
                {
                    text: '6 giờ',
                    value: 6
                },
                {
                    text: '12 giờ',
                    value: 12
                },
                {
                    text: '24 giờ',
                    value: 24
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
            this.selectedMaxClick = res.data.setting.autoBlockByMaxClick;
            this.selectedMaxClickHours = res.data.setting.countMaxClickInHours || 24;
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .network-logo,\n.container .inner .mobifone,\n.container .inner .fpt {\n  height: 25px;\n  width: 80px;\n  margin-left: 10px;\n  -webkit-filter: drop-shadow(0.5px 1px 1px silver);\n          filter: drop-shadow(0.5px 1px 1px silver);\n}\n.container .inner .fpt {\n  height: 35px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  padding-top: 20px;\n}\n.container .inner .notification {\n  text-align: justify;\n}\n.container .inner .ban-ip-form {\n  margin-top: 30px;\n  padding: 15px;\n  box-shadow: 2px 2px 10px silver;\n}\n.container .inner .checkbox-group {\n  padding: 50px 20px 50px 20px;\n  padding-left: 0;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n\n  .submit-button {\n    font-size: 12px;\n  }\n\n  .checkbox-group {\n    width: 90%;\n    display: table;\n    margin: 0 auto;\n    line-height: 50px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBREdJOzs7RUFHRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsK0JBQUE7QUNOTjtBRFNJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDUE47QURVSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSTjtBRFdJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ1ZOO0FEYUk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNYTjtBRGdCQTtFQUVJO0lBQ0UsYUFBQTtFQ2RKOztFRGtCQTtJQUNFLGVBQUE7RUNmRjs7RURrQkE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ2ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC5uZXR3b3JrLWxvZ28sXG4gICAgLm1vYmlmb25lLFxuICAgIC5mcHQge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cHggMXB4IDFweCBzaWx2ZXIpO1xuICAgIH1cblxuICAgIC5mcHQge1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgLmJhbi1pcC1mb3JtIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggc2lsdmVyO1xuICAgIH1cblxuICAgIC5jaGVja2JveC1ncm91cCB7XG4gICAgICBwYWRkaW5nOiA1MHB4IDIwcHggNTBweCAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuYmFubmVkLWlwLWluZm8ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY2hlY2tib3gtZ3JvdXAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWNjb3VudC1pZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV0d29yay1sb2dvLFxuLmNvbnRhaW5lciAuaW5uZXIgLm1vYmlmb25lLFxuLmNvbnRhaW5lciAuaW5uZXIgLmZwdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDFweCAxcHggc2lsdmVyKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mcHQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNoZWNrYm94LWdyb3VwIHtcbiAgcGFkZGluZzogNTBweCAyMHB4IDUwcHggMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VjY2Vzcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5jaGVja2JveC1ncm91cCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufSJdfQ== */"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n\n  .submit-button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1yYW5nZS1pcHMvYXV0by1ibG9ja2luZy1yYW5nZS1pcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hdXRvLWJsb2NraW5nLXJhbmdlLWlwcy9hdXRvLWJsb2NraW5nLXJhbmdlLWlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtBQ0ZOO0FES0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNITjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0FDTE47QURRSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ1JOO0FEV0k7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNUTjtBRGNBO0VBRUk7SUFDRSxhQUFBO0VDWko7O0VEZ0JBO0lBQ0UsZUFBQTtFQ2JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1yYW5nZS1pcHMvYXV0by1ibG9ja2luZy1yYW5nZS1pcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWFyZWEge1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cblxuICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbi1pcC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5iYW5uZWQtaXAtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWNjZXNzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"

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
            classD: this.classD === 1 ? false : true
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 60px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  background-color: white;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .step {\n  font-weight: bold;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: rgba(217, 83, 79, 0.1);\n  border-left: 7px solid #d9534f;\n  text-align: justify;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n}\n.container .inner .banned-ip-info button {\n  border-radius: 0;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .next-icon {\n  font-size: 18px;\n  margin-left: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWFuLWlwL2Jhbi1hbi1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1hbi1pcC9iYW4tYW4taXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFlRSxXQUFBO0FDYkY7QURERTtFQUNFLDRCQUFBO0VBRUEsb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFJO0VBQ0UsYUFBQTtBQ0VOO0FESUU7RUFDRSw0QkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxnRUFBQTtFQUNBLHVCQUFBO0FDTk47QURTSTtFQUNFLGdCQUFBO0FDUE47QURVSTtFQUNFLGlCQUFBO0FDUk47QURXSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLHdDQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUVBLGdFQUFBO0FDWk47QURjTTtFQUNFLGdCQUFBO0FDWlI7QURnQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNkTjtBRGlCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2ZOO0FEb0JBO0VBRUk7SUFDRSxhQUFBO0VDbEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWFuLWlwL2Jhbi1hbi1pcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDYwcHggMjdweCAzMHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmJhbi1pcC1mb3JtIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgODMsIDc5LCAwLjEpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCByZ2JhKDIxNywgODMsIDc5LCAxKTtcblxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubmV4dC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXJ7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA5NHB4IDYwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZDk1MzRmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VjY2Vzcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV4dC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufSJdfQ== */"

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
                this._dialogService._openSuccessDialog(res);
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
        this._dialogService._openConfirmDialog('Mở chặn IP này?')
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
                    this._dialogService._openSuccessDialog(res);
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: justify;\n}\n.container .inner .title2 .advise {\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .success-badge {\n  margin-right: 5px;\n  background-color: #44b543;\n  border-radius: 2px;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 2px silver;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  opacity: 0.9;\n}\n.container .inner .table-wrapper {\n  margin-top: 10px;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-cell,\n.container .inner .table-wrapper mat-header-cell {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  justify-content: left;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(7),\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  flex: 0 0 20%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  padding-top: 10px;\n}\n.container .inner .table-wrapper .device-name {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: bold;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #0093e5;\n  color: white;\n  font-weight: bold;\n}\n.container .inner .empty-report-notification {\n  background-color: #eee;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLG1CQUFBO0FDRk47QURJTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRlI7QURNSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLGNBQUE7QUNMTjtBRE9NO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDTFI7QURRTTtFQUNFLGdCQUFBO0FDTlI7QURTTTtFQUNFLHdDQUFBO0FDUFI7QURVTTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNSUjtBRFdNOztFQUVFLHFCQUFBO0FDVFI7QURZTTs7RUFFRSxhQUFBO0FDVlI7QURhTTtFQUNFLGlCQUFBO0FDWFI7QURjTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNaUjtBRGVNOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ2JSO0FEZ0JNO0VBQ0UsZUFBQTtBQ2RSO0FEaUJNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNmUjtBRG1CSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FDakJOO0FEc0JBO0VBRUk7SUFDRSxhQUFBO0VDcEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICAgLmFkdmlzZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYmFkZ2Uge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuXG4gICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4ICNGRkZGRkYgaW5zZXQsIDAgMXB4IDNweCByZ2JhKDM0LCAyNSwgMjUsIDAuNCk7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGwsXG4gICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLW5hbWUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgbWF0LXJvdyxcbiAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5M2U1O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lbXB0eS1yZXBvcnQtbm90aWZpY2F0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWNjb3VudC1pZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiAuYWR2aXNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWNjZXNzLWJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGI1NDM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNyksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoNykge1xuICBmbGV4OiAwIDAgMjAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDcpIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciAuZGV2aWNlLW5hbWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDA5M2U1O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmVtcHR5LXJlcG9ydC1ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
            this.isProcessing = false;
            if (error.status === 404) {
                this.dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this.dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    getDeviceReport() {
        const sub = this._banIpsService.getDeviceReport()
            .subscribe(res => {
            this.deviceReports = res.data.reportDevice;
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
            this.getDeviceSettings();
            setTimeout(() => {
                this._fuseProgressBarService.hide();
                this.dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n  padding-top: 10px;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  background-color: white;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -10px;\n  color: gray;\n  font-size: 12px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .table-title {\n  padding-top: 20px;\n  font-weight: bold;\n  color: gray;\n}\n.container .inner .table-wrapper {\n  max-height: 500px;\n  border: 0.5px solid #eee;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(217, 83, 79, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .table-wrapper mat-cell:nth-child(3) {\n  flex: 0 0 40%;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #d9534f;\n  color: white;\n  font-weight: bold;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n  font-weight: bold;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .button-area button {\n    font-size: 12px;\n  }\n\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1vcHRpb25hbC1pcC9iYW4tb3B0aW9uYWwtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxnRUFBQTtBQ05OO0FEU0k7RUFDRSxXQUFBO0FDUE47QURTTTtFQUNFLGFBQUE7QUNQUjtBRFVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNSUjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEWU07RUFDRSxXQUFBO0FDVlI7QURhTTtFQUNFLFVBQUE7QUNYUjtBRGVJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNiTjtBRGdCSTtFQUNFLGdCQUFBO0FDZE47QURpQkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2ZOO0FEa0JJO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2hCTjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ2hCUjtBRG1CTTtFQUNFLGdCQUFBO0FDakJSO0FEb0JNO0VBQ0Usd0NBQUE7QUNsQlI7QURxQk07O0VBRUUsYUFBQTtBQ25CUjtBRHNCTTs7RUFFRSxhQUFBO0FDcEJSO0FEdUJNOztFQUVFLGlCQUFBO0VBQ0EsV0FBQTtBQ3JCUjtBRHdCTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDdEJSO0FEeUJNO0VBQ0UsZUFBQTtBQ3ZCUjtBRDJCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Qk47QUQ0Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDM0JOO0FEOEJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDNUJOO0FEK0JJO0VBQ0UsbUJBQUE7QUM3Qk47QURnQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUM5Qk47QURpQ0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQy9CTjtBRGtDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnRUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2hDTjtBRHFDQTtFQUVJO0lBQ0UsZUFBQTtFQ25DSjs7RUR1Q0U7SUFDRSxhQUFBO0VDcENKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC50aXRsZTMge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICAgIH1cblxuICAgIC5saXN0LWlwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMzYwcHg7O1xuICAgICAgfVxuXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZsZXgtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgLmxpc3Qge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dC1leGFtcGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWFyZWEge1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IDAgMCAxMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICAgICAgICBmbGV4OiAwIDAgNDAlO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93LFxuICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICBtaW4td2lkdGg6IDEwMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjE3LCA4MywgNzksIDEpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICBtYXQtY2VsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudGFzayB7XG4gICAgICBjb2xvcjogY3JpbXNvbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC51bmxvY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLm5ldyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnV0dG9uLWFyZWEge1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IC5mbGV4LWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAubGlzdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5wdXQtZXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgODMsIDc5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDQwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICNkOTUzNGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC51bmxvY2stYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5ldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnV0dG9uLWFyZWEgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufSJdfQ== */"

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
                this._fuseProgresBarService.hide();
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
        this._fuseProgresBarService.show();
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
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        const params = this.generatePostObject();
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
        // this.form = this.fb.group({
        //   listBannedIP: ['']
        // });
        this.form = this.fb.group({
            listBannedIP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.validatorService.checkListIP]]
        });
    }
    generatePostObject() {
        // this.listIPs = [...new Set(this.listIPs)];
        // const ips = [];
        // for (let i = 81; i < this.listIPs.length; i++)
        //   ips.push(this.listIPs[i]);
        // const params = {
        //   action: 'ADD',
        //   ips
        // };
        const params = {
            action: 'ADD',
            ips: Object.assign({}, this.form.value).listBannedIP.split(/\r?\n/)
        };
        params.ips = params.ips.filter(item => item);
        return params;
    }
    unblockSampleIP(ip) {
        const openCofirmDialogSub = this._dialogService._openConfirmDialog('Mở chặn IP này?')
            .subscribe((res) => {
            if (res) {
                this.isProcessing = true;
                this._fuseProgresBarService.show();
                const sub = this._banIpsService.removeBlockedIPs({
                    action: 'REMOVE',
                    ips: [ip]
                })
                    .subscribe((res) => {
                    this.getBlockedCustomIPs();
                    setTimeout(() => {
                        this._fuseProgresBarService.hide();
                        this._dialogService._openSuccessDialog(res);
                        this.isProcessing = false;
                    }, 0);
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  background: white;\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -10px;\n  color: gray;\n  font-size: 12px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .table-title {\n  margin-top: 30px;\n  color: gray;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 5px silver;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .button-area button {\n    font-size: 12px;\n  }\n\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvd2hpdGVsaXN0LWlwL3doaXRlbGlzdC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL3doaXRlbGlzdC1pcC93aGl0ZWxpc3QtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0hOO0FETUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLGdFQUFBO0VBQ0EsaUJBQUE7QUNOTjtBRFNJO0VBQ0UsV0FBQTtBQ1BOO0FEU007RUFDRSxhQUFBO0FDUFI7QURVTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDUlI7QURZSTtFQUNFLGFBQUE7QUNWTjtBRFlNO0VBQ0UsV0FBQTtBQ1ZSO0FEYU07RUFDRSxVQUFBO0FDWFI7QURlSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDYk47QURnQkk7RUFDRSxnQkFBQTtBQ2ROO0FEaUJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDZk47QURrQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ2xCTjtBRHFCSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ25CTjtBRHNCSTtFQUNFLG1CQUFBO0FDcEJOO0FEdUJJO0VBQ0UsY0FBQTtBQ3JCTjtBRHdCSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDdEJOO0FEeUJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDdkJOO0FENEJBO0VBRUk7SUFDRSxlQUFBO0VDMUJKOztFRDhCRTtJQUNFLGFBQUE7RUMzQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy93aGl0ZWxpc3QtaXAvd2hpdGVsaXN0LWlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnRpdGxlMyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cblxuICAgIC5saXN0LWlwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxleC1ib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgfVxuXG4gICAgICAubGlzdCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0LWV4YW1wbGUge1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuc3RhdHVzIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgLnRhc2sge1xuICAgICAgY29sb3I6IGNyaW1zb247XG4gICAgfVxuXG4gICAgLnVubG9jay1idXR0b24ge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAubmV3IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBzaWx2ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJ1dHRvbi1hcmVhIHtcbiAgICBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWNjb3VudC1pZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IC5mbGV4LWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAubGlzdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5wdXQtZXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5iYW5uZWQtaXAtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWNjZXNzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGF0dXMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhc2sge1xuICBjb2xvcjogY3JpbXNvbjtcbn1cbi5jb250YWluZXIgLmlubmVyIC51bmxvY2stYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5ldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBzaWx2ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5idXR0b24tYXJlYSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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
        param.ips = param.ips.filter(item => item);
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