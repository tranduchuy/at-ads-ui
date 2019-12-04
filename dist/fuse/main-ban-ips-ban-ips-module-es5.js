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

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG THEO IP - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Thông thường 1 người dùng chỉ click quảng cáo từ 1 đến 2 lần trước khi mua hàng. Việc chặn người dùng click quảng cáo\n      liên tục\n      giúp bạn tiết kiệm được chi phí lãng phí do những hành vi phá hoại gây ra.\n    </p>\n\n    <p class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n      </mat-checkbox>\n      <b>\n        Tự động chặn những IP đang phá hoại sử dụng <span style=\"color: crimson\">AI</span> và <span style=\"color: crimson\">Big\n          Data</span>.\n      </b>\n    </p>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"-20px\" fxLayoutGap=\"20px\" class=\"max-click\">\n      <div fxFlex=\"60\">\n        <p>\n          <b>\n            Chặn sau khi 1 IP nhấn quảng cáo <span style=\"color: crimson\">(thường là 2 lần)</span>\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn số lần click</mat-label>\n          <mat-select [(value)]=\"selectedMaxClick\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClick\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div fxFlex=\"40\">\n        <p>\n          <b>\n            Sau khoảng thời gian\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn khoảng thời gian</mat-label>\n          <mat-select [(value)]=\"selectedMaxClickHours\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClickHours\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n    </div>\n\n    <p>\n      <b>\n        Xóa hết IP đã chặn khi qua ngày mới <span style=\"color: crimson\">(xóa vào lúc 0h-1h sáng)</span>\n      </b>\n    </p>\n\n    <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n      <mat-label>Chọn hình thức</mat-label>\n      <mat-select [(value)]=\"selectedAutoRemove\" [disabled]=\"isProcessing\">\n        <mat-option *ngFor=\"let item of itemsSource.autoRemove\" [value]=\"item.value\">{{item.text}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\" (click)=\"setAutoBlockingIP()\"\n        [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG 3G & 4G - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\"> Bằng việc cấu hình này, quảng cáo sẽ <span style=\"color: crimson; font-weight: bold\">không hiển\n        thị</span> trên hầu hết\n      các thiết bị sử\n      dụng truy cập <span style=\"color: #40a5ec; font-weight: bold\">3G & 4G</span> của các nhà mạng di động tại Việt\n      Nam.</p>\n\n    <div class=\"checkbox-group\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around\">\n      <mat-checkbox [checked]=\"mobileNetworks.viettel\" (change)=\"selectNetwork($event,'viettel')\"\n        [disabled]=\"isProcessing\" class=\"viettel-animation\">\n        <img src=\"https://dangky3gviettel.vn/wp-content/uploads/2018/10/cropped-logo-dang-ky-3g-viettel.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.mobifone\" (change)=\"selectNetwork($event,'mobifone')\"\n        [disabled]=\"isProcessing\" class=\"mobifone-animation\">\n        <img src=\"https://brasol.vn/public/uploads/1521197514-brasol.vn-logo-mobifone-mobifone-logo.svg_.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vinafone\" (change)=\"selectNetwork($event,'vinafone')\"\n        [disabled]=\"isProcessing\" class=\"vinafone-animation\">\n        <img src=\"https://img2.thuthuatphanmem.vn/uploads/2018/12/13/logo-vinaphone_010429237.png\" class=\"network-logo\"\n          alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vietnammobile\" (change)=\"selectNetwork($event,'vietnammobile')\"\n        [disabled]=\"isProcessing\" class=\"vietnammobile-animation\">\n        <img src=\"https://css.vietnamobile.com.vn/images/logo.png\" class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.fpt\" (change)=\"selectNetwork($event,'fpt')\" [disabled]=\"isProcessing\"\n        class=\"fpt-animation\">\n        <img src=\"http://vinacorp.vn/uploads/news/FPT-ava_1828613.png\" class=\"fpt\" alt=\"\">\n      </mat-checkbox>\n    </div>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n        (click)=\"setAutoBlocking3G4G()\" [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 20px\">check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

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

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH THỬ CHẶN 1 IP - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn IP theo yêu cầu của bạn và <span style=\"color: crimson; font-weight: bold\">không cho hiển thị</span> quảng cáo trên thiết bị đang sử dụng IP này.\n    </p>\n\n    <form class=\"ban-ip-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n\n      <app-input-text [formControlName]=\"'bannedIP'\" [errors]=\"getMessageErrors('bannedIP')\" title=\"IP của bạn\"\n        [isDisabled]=\"isProcessing\">\n      </app-input-text>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">block</mat-icon> THỬ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </form>\n\n    <div class=\"banned-ip-info\" *ngIf=\"hasBlockedIP === true\">\n      <p>\n        IP <span [(ngModel)]=\"blockedIPs[0]\" ngDefaultControl\n          class=\"blocked-ip\">{{blockedIPs[0]}}</span> đã được chặn thành công\n        trong hệ thống Google Ads.\n        <br><br><b>Cách kiểm tra hệ thống hoạt động:</b>\n        <br><b>Bước 1:</b> Truy cập vào tài khoản Google Ads tại trang <a href=\"https://ads.google.com/intl/vi_VN/home/\"\n          target=\"blank\">Ads.google.com</a>\n        nhấn vào\n        <span class=\"step\">1 Chiến dịch</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Cài đặt</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Loại trừ 1 IP</span>\n        <br><b>Bước 2:</b> Truy cập vào trang <a href=\"https:/google.com.vn\" target=\"blank\">Google.com.vn</a> và tìm\n        kiếm\n        website của\n        bạn. Nếu bạn không thấy quảng cáo, hệ thống hoạt động tốt.\n        <br>Sau khi kiểm tra, bạn có thể bỏ IP đang bị chặn. Bấm vào nút dưới đây\n      </p>\n      <div>\n        <button mat-raised-button (click)=\"unblockSampleIP()\"\n          class=\"unblock-ip-button\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px\">lock_open</mat-icon>\n          MỞ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-device/ban-device.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-device/ban-device.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO THIẾT BỊ - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <div class=\"title2\">\n      <p>\n        Kết quả có được theo thống kê từ ngày <span class=\"highline\">{{startDate | date: 'dd/MM/yyyy'}}</span> đến ngày\n        <span class=\"highline\">{{endDate | date: 'dd/MM/yyyy'}}</span>\n      </p>\n      <p class=\"advise\">\n        <span class=\"success-badge\">MẸO</span> Bạn có thể dừng quảng cáo trên các thiết bị mang lại hiệu quả quảng cáo\n        thấp\n      </p>\n    </div>\n\n    <p *ngIf=\"deviceReports.length === 0 && !isProcessing\" class=\"empty-report-notification\">\n      Chúng tôi không tìm thấy thông tin thiết bị nào trên tài khoản Google Ads này.\n    </p>\n\n    <div class=\"table-wrapper\" *ngIf=\"deviceReports.length > 0\">\n      <mat-table [dataSource]=\"deviceReports\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"device\">\n          <mat-header-cell *matHeaderCellDef> Thiết bị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <span *ngIf=\"element.device === 'Điện thoại'\" fxLayout=\"row\" fxLayoutAlign=\"center start\"\n              fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">smartphone</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n            <span *ngIf=\"element.device === 'Máy tính bảng'\" fxLayout=\"row\" fxLayoutAlign=\"center start\"\n              fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">tablet_mac</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n            <span *ngIf=\"element.device === 'Máy tính'\" fxLayout=\"row\" fxLayoutAlign=\"center start\" fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">laptop_chromebook</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cost\">\n          <mat-header-cell *matHeaderCellDef> Chi phí </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.cost | number: '1.0-0'}} VNĐ</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"impressions\">\n          <mat-header-cell *matHeaderCellDef> Hiển thị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.impressions | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"clicks\">\n          <mat-header-cell *matHeaderCellDef> Click </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.clicks | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"avgPosition\">\n          <mat-header-cell *matHeaderCellDef> Vị trí trung bình </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.avgPosition}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ctr\">\n          <mat-header-cell *matHeaderCellDef> CTR </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.ctr}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"optimization\">\n          <mat-header-cell *matHeaderCellDef>Tối ưu</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Điện thoại'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.mobile\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30001)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.mobile\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính bảng'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.tablet\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30002)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.tablet\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.computer\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30000)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.computer\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO DANH SÁCH IP TÙY CHỈNH - TÀI KHOẢN <span\n      class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn một danh sách các IP theo yêu cầu của bạn và <span\n        style=\"color: crimson; font-weight: bold\">không cho hiển thị</span> quảng cáo\n      trên thiết bị đang sử dụng các IP này.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"60\">\n\n          <app-input-textarea [formControlName]=\"'listBannedIP'\" [errors]=\"getMessageErrors('listBannedIP')\"\n            title=\"Nhập danh sách IP cần chặn\" height=\"260px\" [isDisabled]=\"isProcessing\"></app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">HƯỚNG DẪN CHẶN IP TÙY CHỈNH</p>\n          <p>\n            Bạn có thể chặn <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <!-- <p>\n            Hoặc chặn <b>từng nhóm IP</b>, thêm dấu <span style=\"color: red\">(*)</span> tượng trưng cho nhóm IP muốn\n            chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p> -->\n          <span>\n            Hệ thống sẽ tự động chuyển đổi IP và chặn trong Google Ads sau một khoảng thời gian.\n          </span>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">block</mat-icon> CHẶN THỦ CÔNG DANH SÁCH IP\n        </button>\n      </div>\n    </form>\n\n    <div class=\"blacklist\">\n      <p class=\"table-title\">Danh sách IP đã chặn gần đây</p>\n\n      <div class=\"table-wrapper\">\n\n        <mat-table [dataSource]=\"blockedIPs\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\"> <span\n                [class.new]=\"element.order === 'MỚI'\">{{i+1}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"ip\">\n            <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span style=\"color: crimson; font-weight: bold\">{{element._id}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <p class=\"status\">\n                Đã chặn thành công vào tổng <span\n                  style=\"color: crimson; font-weight: bold\">{{element.campaignNumber}}</span> chiến dịch.\n              </p>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"task\">\n            <mat-header-cell *matHeaderCellDef>Tác vụ</mat-header-cell>\n            <mat-cell *matCellDef>\n              <span class=\"task\">\n                <mat-icon>verified_user</mat-icon>đã chặn\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"unlockButton\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button (click)=\"unblockSampleIP(element._id)\" [disabled]=\"isProcessing\" mat-icon-button color=\"accent\"\n                matTooltip=\"Nhấn để bỏ chặn\" class=\"unlock-button\">\n                <mat-icon>lock_open</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <div class=\"notification\" *ngIf=\"blockedIPs.length === 0 && isProcessing === false\">Chưa có ghi nhận nào.</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH WHITELIST IP - TÀI KHOẢN <span class=\"account-id\">{{sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ ghi nhận một danh sách các IP mà bạn không cho phép chặn. Thiết bị đang sử dụng các IP này sẽ được hệ\n      thống nhận diện là <span style=\"color: #40a5ec; font-weight: bold\">an toàn và không bị chặn</span>.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"60\">\n\n          <app-input-textarea [formControlName]=\"'whitelistIPs'\" [errors]=\"getMessageErrors('whitelistIPs')\"\n            title=\"Nhập danh sách IP không cho phép chặn\" height=\"260px\" [isDisabled]=\"isProcessing\">\n          </app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">HƯỚNG DẪN KHÔNG CHO PHÉP CHẶN IP TÙY CHỈNH</p>\n          <p>\n            Bạn có thể nhập <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <p>\n            Hoặc nhập <b>từng nhóm IP</b>, thêm dấu <span style=\"color: crimson\">(*)</span> tượng trưng cho nhóm IP không\n            muốn chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px; margin-top: 5px\">sync</mat-icon> CẬP NHẬT WHITELIST\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









var AnonymousBrowserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousBrowserComponent, _super);
    function AnonymousBrowserComponent(sessionService, _banIpsService, _fuseProgresBarService, _dialogService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this.sessionService = sessionService;
        _this._banIpsService = _banIpsService;
        _this._fuseProgresBarService = _fuseProgresBarService;
        _this._dialogService = _dialogService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.isProcessing = true;
        return _this;
    }
    AnonymousBrowserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    AnonymousBrowserComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this._fuseProgresBarService.hide();
                _this.getBlockingAnonymousBrowserSetting();
            }
            else {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    AnonymousBrowserComponent.prototype.getBlockingAnonymousBrowserSetting = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(function (res) {
            _this._fuseProgresBarService.hide();
            _this._fuseSplashScreenService.hide();
            _this.checked = res.data.setting.blockByPrivateBrowser;
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    };
    AnonymousBrowserComponent.prototype.checkSetting = function (event) {
        this.checked = event.checked;
    };
    AnonymousBrowserComponent.prototype.setBlockingAnonymousBrowser = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this._banIpsService.setBlockingAnonymousBrowser({ blockByPrivate: this.checked })
            .subscribe(function (res) {
            _this.getBlockingAnonymousBrowserSetting();
            _this._fuseProgresBarService.hide();
            _this._dialogService._openSuccessDialog(res);
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
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
    return AnonymousBrowserComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__["PageBaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









var AutoBanIPComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AutoBanIPComponent, _super);
    function AutoBanIPComponent(_banIpsService, _fuseProgresBarService, sessionService, _dialogService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._banIpsService = _banIpsService;
        _this._fuseProgresBarService = _fuseProgresBarService;
        _this.sessionService = sessionService;
        _this._dialogService = _dialogService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.isProcessing = true;
        _this.itemsSource = {
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
        return _this;
    }
    AutoBanIPComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    AutoBanIPComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this._fuseProgresBarService.hide();
                _this.getBlockingIPSettting();
            }
            else {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    AutoBanIPComponent.prototype.getBlockingIPSettting = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var getSettingsSub = this._banIpsService.getBlockingIPSettings()
            .subscribe(function (res) {
            _this.checked = res.data.setting.autoBlockWithAiAndBigData;
            _this.selectedMaxClick = res.data.setting.autoBlockByMaxClick;
            _this.selectedMaxClickHours = res.data.setting.countMaxClickInHours || 24;
            _this.selectedAutoRemove = res.data.setting.autoRemoveBlocking === false ? 1 : 2;
            _this.isProcessing = false;
            _this._fuseProgresBarService.hide();
            _this._fuseSplashScreenService.hide();
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
            //hide all options
            _this.checked = false;
            _this.selectedMaxClick = -2;
            _this.selectedMaxClickHours = -1;
            _this.selectedAutoRemove = -1;
        });
        this.subscriptions.push(getSettingsSub);
    };
    AutoBanIPComponent.prototype.checkSetting = function (e) {
        this.checked = e.checked;
    };
    AutoBanIPComponent.prototype.setAutoBlockingIP = function () {
        var _this = this;
        var params = this.generateAutoBlockingIpParams();
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this._banIpsService.autoBlockingIP(params).subscribe(function (res) {
            _this.getBlockingIPSettting();
            setTimeout(function () {
                _this._dialogService._openSuccessDialog(res);
                _this._fuseProgresBarService.hide();
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            if (error.error.messages) {
                _this._dialogService._openErrorDialog(error.error);
            }
            _this._fuseProgresBarService.hide();
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AutoBanIPComponent.prototype.generateAutoBlockingIpParams = function () {
        var params = {
            maxClick: this.selectedMaxClick,
            autoRemove: this.selectedAutoRemove === 1 ? false : true,
            autoBlockWithAiAndBigData: this.checked,
            countMaxClickInHours: this.selectedMaxClickHours
        };
        return params;
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
    return AutoBanIPComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .network-logo,\n.container .inner .mobifone,\n.container .inner .fpt {\n  height: 25px;\n  width: 80px;\n  margin-left: 10px;\n  -webkit-filter: drop-shadow(0.5px 1px 1px silver);\n          filter: drop-shadow(0.5px 1px 1px silver);\n}\n.container .inner .fpt {\n  height: 35px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  padding-top: 20px;\n}\n.container .inner .notification {\n  text-align: justify;\n}\n.container .inner .ban-ip-form {\n  margin-top: 30px;\n  padding: 15px;\n  box-shadow: 2px 2px 10px silver;\n}\n.container .inner .checkbox-group {\n  padding: 50px 20px 50px 20px;\n  padding-left: 0;\n}\n.container .inner .checkbox-group .viettel-animation {\n  -webkit-animation: checkboxAni 0.2s ease-out;\n}\n.container .inner .checkbox-group .mobifone-animation {\n  -webkit-animation: checkboxAni 0.4s ease-out;\n}\n.container .inner .checkbox-group .vinafone-animation {\n  -webkit-animation: checkboxAni 0.6s ease-out;\n}\n.container .inner .checkbox-group .vietnammobile-animation {\n  -webkit-animation: checkboxAni 0.8s ease-out;\n}\n.container .inner .checkbox-group .fpt-animation {\n  -webkit-animation: checkboxAni 1s ease-out;\n}\n@-webkit-keyframes checkboxAni {\n  from {\n    -webkit-transform: translateY(10vh);\n            transform: translateY(10vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes checkboxAni {\n  from {\n    -webkit-transform: translateY(10vh);\n            transform: translateY(10vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n@-webkit-keyframes submitBtnAni {\n  from {\n    -webkit-transform: translateY(10vh);\n            transform: translateY(10vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes submitBtnAni {\n  from {\n    -webkit-transform: translateY(10vh);\n            transform: translateY(10vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 0 15px 0 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n  .container .inner .checkbox-group {\n    width: 90%;\n    display: table;\n    margin: 0 auto;\n    line-height: 50px;\n    padding: 0 0 10px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBREdJOzs7RUFHRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsK0JBQUE7QUNOTjtBRFNJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDUE47QURXTTtFQUNFLDRDQUFBO0FDVFI7QURZTTtFQUNFLDRDQUFBO0FDVlI7QURhTTtFQUNFLDRDQUFBO0FDWFI7QURjTTtFQUNFLDRDQUFBO0FDWlI7QURlTTtFQUNFLDBDQUFBO0FDYlI7QURnQk07RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNkUjtFRGdCTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNkUjtBQUNGO0FEUU07RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNkUjtFRGdCTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNkUjtBQUNGO0FEa0JJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCTjtBRG1CSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUNsQk47QURxQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNuQk47QUR3Qk07RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUN0QlI7RUR3Qk07SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDdEJSO0FBQ0Y7QURnQk07RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUN0QlI7RUR3Qk07SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDdEJSO0FBQ0Y7QUQ0QkE7RUFFSTtJQUNFLHNCQUFBO0VDMUJKO0VENEJJO0lBQ0UsZUFBQTtFQzFCTjtFRDZCSTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUMzQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzL2F1dG8tYmxvY2tpbmctY2VsbHVsYXItbmV0d29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLm5ldHdvcmstbG9nbyxcbiAgICAubW9iaWZvbmUsXG4gICAgLmZwdCB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVweCAxcHggMXB4IHNpbHZlcik7XG4gICAgfVxuXG4gICAgLmZwdCB7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAuYmFuLWlwLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBzaWx2ZXI7XG4gICAgfVxuXG4gICAgLmNoZWNrYm94LWdyb3VwIHtcbiAgICAgIHBhZGRpbmc6IDUwcHggMjBweCA1MHB4IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgIFxuXG4gICAgICAudmlldHRlbC1hbmltYXRpb24ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2tib3hBbmkgMC4ycyBlYXNlLW91dDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlmb25lLWFuaW1hdGlvbiB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjRzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICAudmluYWZvbmUtYW5pbWF0aW9uIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrYm94QW5pIDAuNnMgZWFzZS1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC52aWV0bmFtbW9iaWxlLWFuaW1hdGlvbiB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjhzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICAuZnB0LWFuaW1hdGlvbiB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAxcyBlYXNlLW91dDtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBjaGVja2JveEFuaSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAvLy13ZWJraXQtYW5pbWF0aW9uOiBzdWJtaXRCdG5BbmkgMXMgZWFzZS1vdXQ7XG4gICAgICBAa2V5ZnJhbWVzIHN1Ym1pdEJ0bkFuaSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xuXG4gICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmNoZWNrYm94LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWNjb3VudC1pZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV0d29yay1sb2dvLFxuLmNvbnRhaW5lciAuaW5uZXIgLm1vYmlmb25lLFxuLmNvbnRhaW5lciAuaW5uZXIgLmZwdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDFweCAxcHggc2lsdmVyKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mcHQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNoZWNrYm94LWdyb3VwIHtcbiAgcGFkZGluZzogNTBweCAyMHB4IDUwcHggMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNoZWNrYm94LWdyb3VwIC52aWV0dGVsLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVja2JveEFuaSAwLjJzIGVhc2Utb3V0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNoZWNrYm94LWdyb3VwIC5tb2JpZm9uZS1hbmltYXRpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2tib3hBbmkgMC40cyBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaGVja2JveC1ncm91cCAudmluYWZvbmUtYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrYm94QW5pIDAuNnMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hlY2tib3gtZ3JvdXAgLnZpZXRuYW1tb2JpbGUtYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrYm94QW5pIDAuOHMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hlY2tib3gtZ3JvdXAgLmZwdC1hbmltYXRpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2tib3hBbmkgMXMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGNoZWNrYm94QW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuQGtleWZyYW1lcyBzdWJtaXRCdG5Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaGVja2JveC1ncm91cCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









var AutoBlockingCellularNetworksComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AutoBlockingCellularNetworksComponent, _super);
    function AutoBlockingCellularNetworksComponent(_banIpsService, sessionService, _fuseProgressBarService, _dialogService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._banIpsService = _banIpsService;
        _this.sessionService = sessionService;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this._dialogService = _dialogService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.isProcessing = true;
        _this.mobileNetworks = {
            viettel: false,
            mobifone: false,
            vinafone: false,
            vietnammobile: false,
            fpt: false
        };
        return _this;
    }
    AutoBlockingCellularNetworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    AutoBlockingCellularNetworksComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this.getAutoBlocking3G4GSetting();
            }
            else {
                _this._fuseProgressBarService.hide();
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    AutoBlockingCellularNetworksComponent.prototype.selectNetwork = function (event, network) {
        if (event.checked)
            this.mobileNetworks[network] = true;
        else
            this.mobileNetworks[network] = false;
    };
    AutoBlockingCellularNetworksComponent.prototype.getAutoBlocking3G4GSetting = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(function (res) {
            _this._fuseProgressBarService.hide();
            _this._fuseSplashScreenService.hide();
            _this.mobileNetworks = res.data.setting.mobileNetworks;
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    };
    AutoBlockingCellularNetworksComponent.prototype.setAutoBlocking3G4G = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._banIpsService.autoBlocking3G4G(this.mobileNetworks)
            .subscribe(function (res) {
            _this.getAutoBlocking3G4GSetting();
            setTimeout(function () {
                _this._fuseProgressBarService.hide();
                _this._dialogService._openSuccessDialog(res);
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
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
    return AutoBlockingCellularNetworksComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









var AutoBlockingRangeIpsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AutoBlockingRangeIpsComponent, _super);
    function AutoBlockingRangeIpsComponent(_banIpsService, sessionService, _fuseProgresBarService, _dialogService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._banIpsService = _banIpsService;
        _this.sessionService = sessionService;
        _this._fuseProgresBarService = _fuseProgresBarService;
        _this._dialogService = _dialogService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.isProcessing = true;
        _this.itemsSource = {
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
        return _this;
    }
    AutoBlockingRangeIpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    AutoBlockingRangeIpsComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this.getAutoBLockingIPRangeSetting();
            }
            else {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    AutoBlockingRangeIpsComponent.prototype.getAutoBLockingIPRangeSetting = function () {
        var _this = this;
        this._fuseProgresBarService.show();
        this.isProcessing = true;
        var sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(function (res) {
            _this._fuseProgresBarService.hide();
            _this.classC = res.data.setting.autoBlackListIpRanges.classC === false ? 1 : 2;
            _this.classD = res.data.setting.autoBlackListIpRanges.classD === false ? 1 : 2;
            _this.isProcessing = false;
            _this._fuseSplashScreenService.hide();
        }, function (error) {
            _this._fuseProgresBarService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
            _this.classC = -1;
            _this.classD = -1;
            _this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(sub);
    };
    AutoBlockingRangeIpsComponent.prototype.setAutoBlockingIPRange = function () {
        var _this = this;
        this.isProcessing = true;
        var params = this.generateAutoBlockingIPRangeParams();
        this._fuseProgresBarService.show();
        var sub = this._banIpsService.autoBlockingRangeIP(params)
            .subscribe(function (res) {
            _this.getAutoBLockingIPRangeSetting();
            setTimeout(function () {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openSuccessDialog(res);
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AutoBlockingRangeIpsComponent.prototype.generateAutoBlockingIPRangeParams = function () {
        var params = {
            classC: this.classC === 1 ? false : true,
            classD: this.classD === 1 ? false : true
        };
        return params;
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
    return AutoBlockingRangeIpsComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 60px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  background-color: white;\n  border-radius: 7px;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .step {\n  font-weight: bold;\n}\n.container .inner .banned-ip-info {\n  border-radius: 7px;\n  margin-top: 30px;\n  padding: 20px;\n  background: rgba(68, 181, 67, 0.2);\n  border-left: 6px solid green;\n  text-align: justify;\n  color: darkgreen;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n.container .inner .banned-ip-info .blocked-ip {\n  color: darkgreen;\n  font-weight: bold;\n}\n.container .inner .banned-ip-info .unblock-ip-button {\n  background-color: #4bb353;\n  color: white;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .next-icon {\n  font-size: 18px;\n  margin-left: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWFuLWlwL2Jhbi1hbi1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1hbi1pcC9iYW4tYW4taXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFlRSxXQUFBO0FDYkY7QURERTtFQUNFLDRCQUFBO0VBRUEsb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFJO0VBQ0UsYUFBQTtBQ0VOO0FESUU7RUFDRSw0QkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxnRUFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFFQSx3Q0FBQTtBQ1JOO0FEV0k7RUFDRSxnQkFBQTtBQ1ROO0FEWUk7RUFDRSxpQkFBQTtBQ1ZOO0FEYUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0NBQUE7QUNaTjtBRGNNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1pSO0FEZU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNiUjtBRGlCSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ2ZOO0VEaUJJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ZOO0FBQ0Y7QURTSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ2ZOO0VEaUJJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ZOO0FBQ0Y7QURrQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNoQk47QURtQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURzQkE7RUFFSTtJQUNFLGFBQUE7RUNwQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy9iYW4tYW4taXAvYmFuLWFuLWlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDk0cHggNjBweCAyN3B4IDMwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAuYmFuLWlwLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4ICNmZmZmZmYgaW5zZXQsIDAgMXB4IDNweCByZ2JhKDM0LCAyNSwgMjUsIDAuNCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjgsIDE4MSwgNjcsIDAuMik7XG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGNvbG9yOiBkYXJrZ3JlZW47XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG5cbiAgICAgIC5ibG9ja2VkLWlwIHtcbiAgICAgICAgY29sb3I6IGRhcmtncmVlbjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC51bmJsb2NrLWlwLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIzNTM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubmV4dC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCA2MHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbi1pcC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggI2ZmZmZmZiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxODEsIDY3LCAwLjIpO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogZGFya2dyZWVuO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIC5ibG9ja2VkLWlwIHtcbiAgY29sb3I6IGRhcmtncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8gLnVuYmxvY2staXAtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjM1MztcbiAgY29sb3I6IHdoaXRlO1xufVxuQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VjY2Vzcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV4dC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









var BanAnIPComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BanAnIPComponent, _super);
    function BanAnIPComponent(_banIpsService, sessionService, _fuseProgresBarService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._banIpsService = _banIpsService;
        _this.sessionService = sessionService;
        _this._fuseProgresBarService = _fuseProgresBarService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.blockedIPs = [];
        return _this;
    }
    BanAnIPComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        this.initForm();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    BanAnIPComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this.getBlockedSampleIP();
            }
            else {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    BanAnIPComponent.prototype.getBlockedSampleIP = function () {
        var _this = this;
        var blockedIPsSub = this._banIpsService.getBlockedSampleIP()
            .subscribe(function (res) {
            _this.blockedIPs = res.data.ips;
            if (_this.blockedIPs.length > 0)
                _this.hasBlockedIP = true;
            else
                _this.hasBlockedIP = false;
            _this._fuseProgresBarService.hide();
            _this.isProcessing = false;
            _this._fuseSplashScreenService.hide();
        }, function (error) {
            _this._fuseProgresBarService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
            _this.hasBlockedIP = false;
            _this.isProcessing = false;
            _this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(blockedIPsSub);
    };
    BanAnIPComponent.prototype.onSubmitForm = function () {
        this.onSubmit();
    };
    BanAnIPComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            bannedIP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validatorService.checkIP]]
        });
    };
    BanAnIPComponent.prototype.generateBlockSapmleIPParams = function () {
        var params = {
            ip: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value).bannedIP
        };
        return params;
    };
    BanAnIPComponent.prototype.post = function () {
        var _this = this;
        var params = this.generateBlockSapmleIPParams();
        this._fuseProgresBarService.show();
        var sub = this._banIpsService.blockSampleIP(params)
            .subscribe(function (res) {
            _this._fuseProgresBarService.hide();
            _this.blockedIPs[0] = params.ip;
            _this.hasBlockedIP = true;
            setTimeout(function () {
                _this._dialogService._openSuccessDialog(res);
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            if (error.error.messages) {
                _this._dialogService._openErrorDialog(error.error);
            }
            _this._fuseProgresBarService.hide();
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    BanAnIPComponent.prototype.generateUnblockeSampleIPParmas = function () {
        var parmas = {
            ip: this.blockedIPs[0]
        };
        return parmas;
    };
    BanAnIPComponent.prototype.unblockSampleIP = function () {
        var _this = this;
        this._dialogService._openConfirmDialog('Bỏ chặn IP này?')
            .subscribe(function (result) {
            if (result) {
                var params = _this.generateUnblockeSampleIPParmas();
                _this.isProcessing = true;
                _this._fuseProgresBarService.show();
                var sub = _this._banIpsService.unblockSampleIP(params)
                    .subscribe(function (res) {
                    _this._fuseProgresBarService.hide();
                    _this.blockedIPs = [];
                    _this.hasBlockedIP = false;
                    _this._dialogService._openSuccessDialog(res);
                    _this.isProcessing = false;
                }, function (error) {
                    _this._fuseProgresBarService.hide();
                    _this._dialogService._openErrorDialog(error.error);
                    _this.isProcessing = false;
                });
                _this.subscriptions.push(sub);
            }
        });
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
    return BanAnIPComponent;
}(_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_3__["EditableFormBaseComponent"]));



/***/ }),

/***/ "./src/app/main/ban-ips/ban-device/ban-device.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-device/ban-device.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: justify;\n}\n.container .inner .title2 .highline {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .inner .title2 .advise {\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .success-badge {\n  margin-right: 5px;\n  background-color: #44b543;\n  border-radius: 2px;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 2px silver;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  opacity: 0.9;\n}\n.container .inner .table-wrapper {\n  margin-top: 10px;\n  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  overflow: auto;\n  -webkit-animation: tableAni 0.4s ease-out;\n}\n@-webkit-keyframes tableAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes tableAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-wrapper mat-cell,\n.container .inner .table-wrapper mat-header-cell {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  justify-content: left;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(7),\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  flex: 0 0 20%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  padding-top: 10px;\n}\n.container .inner .table-wrapper .device-name {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: bold;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #40a5ec;\n  color: white;\n  font-weight: bold;\n}\n.container .inner .empty-report-notification {\n  background-color: lightyellow;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n  text-align: center;\n  -webkit-animation: notificationAni 0.2s ease-out;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLG1CQUFBO0FDRk47QURJTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNGUjtBREtNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNIUjtBRE9JO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEUUk7RUFDRSxnQkFBQTtFQUNBLGdFQUFBO0VBQ0EsY0FBQTtFQUVBLHlDQUFBO0FDUE47QURRTTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ05SO0VEUU07SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDTlI7QUFDRjtBREFNO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTlI7RURRTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNOUjtBQUNGO0FEU007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRFVNO0VBQ0UsZ0JBQUE7QUNSUjtBRFdNO0VBQ0UseUNBQUE7QUNUUjtBRFlNOztFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQ1ZSO0FEYU07O0VBRUUscUJBQUE7QUNYUjtBRGNNOztFQUVFLGFBQUE7QUNaUjtBRGVNO0VBQ0UsaUJBQUE7QUNiUjtBRGdCTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNkUjtBRGlCTTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUNmUjtBRGtCTTtFQUNFLGVBQUE7QUNoQlI7QURtQk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2pCUjtBRHFCSTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdEQUFBO0FDcEJOO0FEcUJNO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDbkJSO0VEcUJNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ25CUjtBQUNGO0FEYU07RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNuQlI7RURxQk07SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDbkJSO0FBQ0Y7QUR5QkE7RUFFSTtJQUNFLGFBQUE7RUN2Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy9iYW4tZGV2aWNlL2Jhbi1kZXZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXG4gICAgICAuaGlnaGxpbmUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIH1cblxuICAgICAgLmFkdmlzZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYmFkZ2Uge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG5cbiAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggI2ZmZmZmZiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGFibGVBbmkgMC40cyBlYXNlLW91dDtcbiAgICAgIEBrZXlmcmFtZXMgdGFibGVBbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsLFxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNyksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoNykge1xuICAgICAgICBmbGV4OiAwIDAgMjAlO1xuICAgICAgfVxuXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoNykge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRldmljZS1uYW1lIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3csXG4gICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBtYXQtY2VsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQwYTVlYztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZW1wdHktcmVwb3J0LW5vdGlmaWNhdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbiAgICAgIEBrZXlmcmFtZXMgbm90aWZpY2F0aW9uQW5pIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2aCk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWNjb3VudC1pZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiAuaGlnaGxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIgLmFkdmlzZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VjY2Vzcy1iYWRnZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4ICNmZmZmZmYgaW5zZXQsIDAgMXB4IDNweCByZ2JhKDM0LCAyNSwgMjUsIDAuNCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFibGVBbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgdGFibGVBbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNyksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoNykge1xuICBmbGV4OiAwIDAgMjAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDcpIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciAuZGV2aWNlLW5hbWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjNDBhNWVjO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmVtcHR5LXJlcG9ydC1ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBub3RpZmljYXRpb25Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");










var BanDeviceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BanDeviceComponent, _super);
    function BanDeviceComponent(_banIpsService, _fuseProgressBarService, sessionService, dialogService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._banIpsService = _banIpsService;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this.sessionService = sessionService;
        _this.dialogService = dialogService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.displayedColumns = ['device', 'cost', 'impressions', 'clicks', 'avgPosition', 'ctr', 'optimization'];
        _this.deviceReports = [];
        _this.isProcessing = true;
        _this.startDate = moment__WEBPACK_IMPORTED_MODULE_8__().subtract(1, 'months');
        _this.endDate = moment__WEBPACK_IMPORTED_MODULE_8__();
        _this.deviceSettings = {
            mobile: false,
            tablet: false,
            computer: false
        };
        _this.deviceSettingsItemsSource = {
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
        return _this;
    }
    BanDeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    BanDeviceComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this.getDeviceReport();
            }
            else {
                _this._fuseSplashScreenService.hide();
                _this._fuseProgressBarService.hide();
                _this.dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseSplashScreenService.hide();
            _this._fuseProgressBarService.hide();
            _this.dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    BanDeviceComponent.prototype.getDeviceSettings = function () {
        var _this = this;
        this._fuseProgressBarService.show();
        this.isProcessing = true;
        var sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(function (res) {
            _this.deviceSettings = res.data.setting.devices;
            _this._fuseProgressBarService.hide();
            _this._fuseSplashScreenService.hide();
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._fuseSplashScreenService.hide();
            _this.isProcessing = false;
            if (error.status === 404) {
                _this.dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this.dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    };
    BanDeviceComponent.prototype.getDeviceReport = function () {
        var _this = this;
        var sub = this._banIpsService.getDeviceReport()
            .subscribe(function (res) {
            _this.deviceReports = res.data.reportDevice;
            _this.getDeviceSettings();
        }, function (error) {
            _this._fuseSplashScreenService.hide();
            _this._fuseProgressBarService.hide();
            _this.dialogService._openErrorDialog(error.error);
            _this.deviceReports = [];
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    BanDeviceComponent.prototype.setDeviceCampaignRunning = function (event, deviceId) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._banIpsService.setDeviceCampaignRunning({ device: deviceId, isEnabled: event.value })
            .subscribe(function (res) {
            _this.getDeviceSettings();
            setTimeout(function () {
                _this._fuseProgressBarService.hide();
                _this.dialogService._openSuccessDialog(res);
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this.dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
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
    return BanDeviceComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ban_an_ip_ban_an_ip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ban-an-ip/ban-an-ip.component */ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.ts");
/* harmony import */ var _ban_optional_ip_ban_optional_ip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ban-optional-ip/ban-optional-ip.component */ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.ts");
/* harmony import */ var _auto_blocking_range_ips_auto_blocking_range_ips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-blocking-range-ips/auto-blocking-range-ips.component */ "./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.ts");
/* harmony import */ var _auto_ban_ip_auto_ban_ip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-ban-ip/auto-ban-ip.component */ "./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.ts");
/* harmony import */ var _auto_blocking_cellular_networks_auto_blocking_cellular_networks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-blocking-cellular-networks/auto-blocking-cellular-networks.component */ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.ts");
/* harmony import */ var _ban_device_ban_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ban-device/ban-device.component */ "./src/app/main/ban-ips/ban-device/ban-device.component.ts");
/* harmony import */ var _whitelist_ip_whitelist_ip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whitelist-ip/whitelist-ip.component */ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.ts");
/* harmony import */ var _anonymous_browser_anonymous_browser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./anonymous-browser/anonymous-browser.component */ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.ts");











var BanIPsRoutingModule = /** @class */ (function () {
    function BanIPsRoutingModule() {
    }
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
    return BanIPsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ban_ips_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ban-ips-routing.module */ "./src/app/main/ban-ips/ban-ips-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _whitelist_ip_whitelist_ip_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./whitelist-ip/whitelist-ip.component */ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.ts");
/* harmony import */ var _anonymous_browser_anonymous_browser_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./anonymous-browser/anonymous-browser.component */ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.ts");

























var BanIPsModule = /** @class */ (function () {
    function BanIPsModule() {
    }
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
    return BanIPsModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");





var BanIpsService = /** @class */ (function () {
    function BanIpsService(_http, _sessionService) {
        this._http = _http;
        this._sessionService = _sessionService;
    }
    BanIpsService.prototype.getActiveAccountId = function () {
        var activeAccountId = this._sessionService.activeAccountId;
        if (!activeAccountId) {
            return null;
        }
        return activeAccountId.toString();
    };
    BanIpsService.prototype.autoBlockingRangeIP = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.autoBlocking3G4G = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlocking3G4G.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.autoBlockingDevice = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlockingDevice.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.autoBlockingIP = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.autoBlockingIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.setDeviceCampaignRunning = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.setDeviceCampaignRunning.replace('{account_id}', activeAccountId);
        return this._http.put(url, param);
    };
    BanIpsService.prototype.blockIPs = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.blockSampleIP = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.blockSampleIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.getBlockedSampleIP = function () {
        var activeAccountId = this._sessionService.getValueOfAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getBlockedSampleIP.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    };
    BanIpsService.prototype.unblockSampleIP = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.unblockSampleIP.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.removeBlockedIPs = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
        return this._http.post(url, param);
    };
    BanIpsService.prototype.getDeviceReport = function () {
        var activeAccountId = this._sessionService.getValueOfAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getDeviceReport.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    };
    BanIpsService.prototype.setBlockingAnonymousBrowser = function (param) {
        var activeAccountId = this.getActiveAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.setBlockingAnonymousBrowser.replace('{account_id}', activeAccountId);
        return this._http.put(url, param);
    };
    BanIpsService.prototype.checkAccountAcceptance = function (params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    };
    BanIpsService.prototype.getBlockedCustomIPs = function () {
        var activeAccountId = this._sessionService.getValueOfAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getBlockedCustomIPs.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    };
    BanIpsService.prototype.getBlockingIPSettings = function () {
        var activeAccountId = this._sessionService.getValueOfAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getBlockingIPSettings.replace('{account_id}', activeAccountId);
        return this._http.get(url);
    };
    BanIpsService.prototype.getAdwordsAccountDetail = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    };
    BanIpsService.prototype.updateWhiteList = function (param) {
        var activeAccountId = this._sessionService.getValueOfAccountId();
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.updateWhitelist.replace('{account_id}', activeAccountId);
        return this._http.put(url, param);
    };
    BanIpsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], BanIpsService);
    return BanIpsService;
}());



/***/ }),

/***/ "./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n  padding-top: 10px;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  -webkit-animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -10px;\n  color: gray;\n  font-size: 12px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .blacklist {\n  background: white;\n  margin-top: 20px;\n  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  -webkit-animation: tableAni 0.6s ease-out;\n}\n@-webkit-keyframes tableAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes tableAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .blacklist .table-title {\n  padding: 15px;\n  padding-bottom: 0;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 14px;\n}\n.container .inner .blacklist .notification {\n  color: gray;\n}\n.container .inner .blacklist .table-wrapper {\n  max-height: 500px;\n  border: 0.5px solid #eee;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .blacklist .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .blacklist .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .blacklist .table-wrapper mat-row:hover {\n  background-color: rgba(217, 83, 79, 0.1);\n}\n.container .inner .blacklist .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .blacklist .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .blacklist .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .blacklist .table-wrapper mat-cell:nth-child(3) {\n  flex: 0 0 40%;\n}\n.container .inner .blacklist .table-wrapper mat-row,\n.container .inner .blacklist .table-wrapper mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .blacklist .table-wrapper mat-header-cell {\n  background: #d9534f;\n  color: white;\n  font-weight: bold;\n}\n.container .inner .blacklist .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .blacklist .table-wrapper mat-cell mat-icon {\n  font-size: 16px;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n  font-weight: bold;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .button-area button {\n    font-size: 12px;\n  }\n\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1vcHRpb25hbC1pcC9iYW4tb3B0aW9uYWwtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdFQUFBO0VBRUEsd0NBQUE7QUNQTjtBRFFNO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTlI7RURPUTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNMUjtBQUNGO0FEQU07RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNOUjtFRE9RO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ0xSO0FBQ0Y7QURTSTtFQUNFLFdBQUE7QUNQTjtBRFNNO0VBQ0UsYUFBQTtBQ1BSO0FEVU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1JSO0FEWUk7RUFDRSxhQUFBO0FDVk47QURZTTtFQUNFLFdBQUE7QUNWUjtBRGFNO0VBQ0UsVUFBQTtBQ1hSO0FEZUk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0JBQUE7QUNkTjtBRGlCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5Q0FBQTtBQ2hCTjtBRGlCTTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ2ZSO0VEZ0JRO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ2RSO0FBQ0Y7QURTTTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ2ZSO0VEZ0JRO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ2RSO0FBQ0Y7QURpQk07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNmUjtBRGtCTTtFQUNFLFdBQUE7QUNoQlI7QURtQk07RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDakJSO0FEbUJRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDakJWO0FEb0JRO0VBQ0UsZ0JBQUE7QUNsQlY7QURxQlE7RUFDRSx3Q0FBQTtBQ25CVjtBRHNCUTs7RUFFRSxhQUFBO0FDcEJWO0FEdUJROztFQUVFLGFBQUE7QUNyQlY7QUR3QlE7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDdEJWO0FEeUJRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUN2QlY7QUQwQlE7RUFDRSxlQUFBO0FDeEJWO0FEMEJVO0VBQ0UsZUFBQTtBQ3hCWjtBRDhCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUM1Qk47QUQrQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDOUJOO0FEaUNJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDL0JOO0FEa0NJO0VBQ0UsbUJBQUE7QUNoQ047QURtQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNqQ047QURvQ0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ2xDTjtBRHFDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnRUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ25DTjtBRHdDQTtFQUVJO0lBQ0UsZUFBQTtFQ3RDSjs7RUQwQ0U7SUFDRSxhQUFBO0VDdkNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC50aXRsZTMge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAjZmZmZmZmIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKVxuICAgICAgICB9IHRvIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0LWlwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxleC1ib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgfVxuXG4gICAgICAubGlzdCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0LWV4YW1wbGUge1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5ibGFja2xpc3Qge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggI2ZmZmZmZiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0YWJsZUFuaSAwLjZzIGVhc2Utb3V0O1xuICAgICAgQGtleWZyYW1lcyB0YWJsZUFuaSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aClcbiAgICAgICAgfSB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuXG4gICAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3csXG4gICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDgzLCA3OSwgMSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudGFzayB7XG4gICAgICBjb2xvcjogY3JpbXNvbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC51bmxvY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLm5ldyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggI2ZmZmZmZiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnV0dG9uLWFyZWEge1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAjZmZmZmZmIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpc3QtaXAgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDM2MHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpc3QtaXAgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAuZmxleC1pdGVtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3ggLmxpc3Qge1xuICB3aWR0aDogNjAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmlucHV0LWV4YW1wbGUge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3Qge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggI2ZmZmZmZiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFibGVBbmkgMC42cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgdGFibGVBbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXRpdGxlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDQwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC5ibGFja2xpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICNkOTUzNGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmxhY2tsaXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJsYWNrbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC51bmxvY2stYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5ldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAjZmZmZmZmIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnV0dG9uLWFyZWEgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");









var BanOptionalIPComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BanOptionalIPComponent, _super);
    function BanOptionalIPComponent(_banIpsService, _fuseProgresBarService, sessionService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._banIpsService = _banIpsService;
        _this._fuseProgresBarService = _fuseProgresBarService;
        _this.sessionService = sessionService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.displayedColumns = ['order', 'ip', 'status', 'task', 'unlockButton'];
        _this.blockedIPs = [];
        _this.isProcessing = true;
        return _this;
    }
    BanOptionalIPComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        this.initForm();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    BanOptionalIPComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            if (res.data.adsAccount.isConnected) {
                _this._fuseProgresBarService.hide();
                _this.getBlockedCustomIPs();
            }
            else {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    BanOptionalIPComponent.prototype.getBlockedCustomIPs = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var sub = this._banIpsService.getBlockedCustomIPs()
            .subscribe(function (res) {
            _this._fuseProgresBarService.hide();
            _this._fuseSplashScreenService.hide();
            _this.blockedIPs = res.data.ips;
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgresBarService.hide();
            _this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
            _this.blockedIPs = [];
        });
        this.subscriptions.push(sub);
    };
    BanOptionalIPComponent.prototype.onSubmitForm = function () {
        this.onSubmit();
    };
    BanOptionalIPComponent.prototype.post = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgresBarService.show();
        var params = this.generatePostObject();
        var sub = this._banIpsService.blockIPs(params)
            .subscribe(function (res) {
            _this.getBlockedCustomIPs();
            setTimeout(function () {
                _this._fuseProgresBarService.hide();
                _this._dialogService._openSuccessDialog(res);
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            _this._fuseProgresBarService.hide();
            if (error.status === 409) {
                if (error.error.messages[0] === 'Ip đang nằm trong whiteList.')
                    _this._dialogService._openErrorDialog({
                        messages: [error.error.data.ips.join(', ') + " \u0111\u00E3 c\u00F3 trong whitelist."]
                    });
                else
                    _this._dialogService._openErrorDialog({
                        messages: [error.error.data.ips.join(', ') + " \u0111\u00E3 c\u00F3 trong blacklist."]
                    });
            }
            else
                _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    BanOptionalIPComponent.prototype.initForm = function () {
        // this.form = this.fb.group({
        //   listBannedIP: ['']
        // });
        this.form = this.fb.group({
            listBannedIP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.validatorService.checkListIP]]
        });
    };
    BanOptionalIPComponent.prototype.generatePostObject = function () {
        // this.listIPs = [...new Set(this.listIPs)];
        // const ips = [];
        // for (let i = 81; i < this.listIPs.length; i++)
        //   ips.push(this.listIPs[i]);
        // const params = {
        //   action: 'ADD',
        //   ips
        // };
        var params = {
            action: 'ADD',
            ips: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value).listBannedIP.split(/\r?\n/)
        };
        params.ips = params.ips.filter(function (item) { return item; });
        return params;
    };
    BanOptionalIPComponent.prototype.unblockSampleIP = function (ip) {
        var _this = this;
        var openCofirmDialogSub = this._dialogService._openConfirmDialog('Bỏ chặn IP này?')
            .subscribe(function (res) {
            if (res) {
                _this.isProcessing = true;
                _this._fuseProgresBarService.show();
                var sub = _this._banIpsService.removeBlockedIPs({
                    action: 'REMOVE',
                    ips: [ip]
                })
                    .subscribe(function (res) {
                    _this.getBlockedCustomIPs();
                    setTimeout(function () {
                        _this._fuseProgresBarService.hide();
                        _this._dialogService._openSuccessDialog(res);
                        _this.isProcessing = false;
                    }, 0);
                }, function (error) {
                    _this._fuseProgresBarService.hide();
                    if (error.status === 404)
                        _this._dialogService._openErrorDialog({ messages: [error.error.data.ips[0] + " kh\u00F4ng n\u1EB1m trong danh s\u00E1ch IP \u0111\u00E3 b\u1ECB ch\u1EB7n"] });
                    else
                        _this._dialogService._openErrorDialog(error.error);
                    _this.isProcessing = false;
                });
                _this.subscriptions.push(sub);
            }
        });
        this.subscriptions.push(openCofirmDialogSub);
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
    return BanOptionalIPComponent;
}(_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"]));



/***/ }),

/***/ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n  background: white;\n  border-radius: 7px;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  color: gray;\n  font-size: 12px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .table-title {\n  margin-top: 30px;\n  color: gray;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 5px silver;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .button-area button {\n    font-size: 12px;\n  }\n\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvd2hpdGVsaXN0LWlwL3doaXRlbGlzdC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL3doaXRlbGlzdC1pcC93aGl0ZWxpc3QtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0hOO0FETUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLGdFQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUVBLHdDQUFBO0FDUk47QURTTTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ1BSO0VEU007SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDUFI7QUFDRjtBRENNO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDUFI7RURTTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNQUjtBQUNGO0FEV0k7RUFDRSxXQUFBO0FDVE47QURXTTtFQUNFLGFBQUE7QUNUUjtBRFlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNWUjtBRGNJO0VBQ0UsYUFBQTtBQ1pOO0FEY007RUFDRSxXQUFBO0FDWlI7QURlTTtFQUNFLFVBQUE7QUNiUjtBRGlCSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0JBQUE7QUNoQk47QURtQkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNqQk47QURvQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbEJOO0FEcUJJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ3BCTjtBRHVCSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ3JCTjtBRHdCSTtFQUNFLG1CQUFBO0FDdEJOO0FEeUJJO0VBQ0UsY0FBQTtBQ3ZCTjtBRDBCSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDeEJOO0FEMkJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDekJOO0FEOEJBO0VBRUk7SUFDRSxlQUFBO0VDNUJKOztFRGdDRTtJQUNFLGFBQUE7RUM3Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy93aGl0ZWxpc3QtaXAvd2hpdGVsaXN0LWlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAuYWNjb3VudC1pZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnRpdGxlMyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgYm94LXNoYWRvdzogMCAxcHggI2ZmZmZmZiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubGlzdC1pcCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZsZXgtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgLmxpc3Qge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dC1leGFtcGxlIHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudGFzayB7XG4gICAgICBjb2xvcjogY3JpbXNvbjtcbiAgICB9XG5cbiAgICAudW5sb2NrLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5uZXcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHNpbHZlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnV0dG9uLWFyZWEge1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RpZmljYXRpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5iYW4taXAtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4ICNmZmZmZmYgaW5zZXQsIDAgMXB4IDNweCByZ2JhKDM0LCAyNSwgMjUsIDAuNCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IC5mbGV4LWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAubGlzdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5wdXQtZXhhbXBsZSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVubG9jay1idXR0b24ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHNpbHZlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJ1dHRvbi1hcmVhIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _ban_ips_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ban-ips.service */ "./src/app/main/ban-ips/ban-ips.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");








var WhitelistIpComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WhitelistIpComponent, _super);
    function WhitelistIpComponent(sessionService, _fuseProgressBarService, _banIpsService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this.sessionService = sessionService;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this._banIpsService = _banIpsService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.isProcessing = true;
        _this.whiteList = [];
        return _this;
    }
    WhitelistIpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        this.initForm();
        var sub = this.sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getAccountDetail(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    WhitelistIpComponent.prototype.getAccountDetail = function (accountId) {
        var _this = this;
        var accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(function (res) {
            _this._fuseProgressBarService.hide();
            if (res.data.adsAccount.isConnected)
                _this.getWhitelistIPs();
            else {
                _this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
            }
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(accountDetailSub);
    };
    WhitelistIpComponent.prototype.getWhitelistIPs = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(function (res) {
            _this._fuseProgressBarService.hide();
            _this._fuseSplashScreenService.hide();
            _this.whiteList = Array.from(new Set(res.data.setting.customWhiteList));
            _this.form.patchValue({
                whitelistIPs: _this.getNormalizedWhiteList(Array.from(new Set(res.data.setting.customWhiteList)))
            });
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._fuseSplashScreenService.hide();
            if (error.status === 404) {
                _this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    };
    WhitelistIpComponent.prototype.getNormalizedWhiteList = function (list) {
        return (list || []).map(function (item) {
            if (item.includes('.0.0/16'))
                return item.replace('.0.0/16', '.*.*');
            if (item.includes('.0/24'))
                return item.replace('.0/24', '.*');
            return item;
        }).join('\n');
    };
    WhitelistIpComponent.prototype.onSubmitForm = function () {
        this.onSubmit();
    };
    WhitelistIpComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            whitelistIPs: ['', [this.validatorService.checkWhiteListIP]]
        });
    };
    WhitelistIpComponent.prototype.post = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var param = this.generatePostObject();
        var sub = this._banIpsService.updateWhiteList(param)
            .subscribe(function (res) {
            _this.getWhitelistIPs();
            _this._fuseProgressBarService.hide();
            _this._dialogService._openSuccessDialog(res);
            _this.isProcessing = false;
        }, function (error) {
            _this._fuseProgressBarService.hide();
            if (error.status === 409) {
                _this._dialogService._openErrorDialog({
                    messages: [error.error.data.ips.join(', ') + " \u0111\u00E3 n\u1EB1m trong blacklist."]
                });
            }
            else
                _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    WhitelistIpComponent.prototype.generatePostObject = function () {
        var param = {
            ips: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value).whitelistIPs.split('\n')
        };
        param.ips = param.ips.filter(function (item) { return item; });
        return param;
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
    return WhitelistIpComponent;
}(app_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=main-ban-ips-ban-ips-module-es5.js.map