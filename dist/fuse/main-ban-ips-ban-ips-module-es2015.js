(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ban-ips-ban-ips-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TRÌNH DUYỆT ẨN DANH - TÀI KHOẢN <span class=\"account-id\">{{_sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\">\n      Bằng việc cấu hình này, các quảng cáo sẽ <span style=\"color: red\">không hiển thị</span> trên các thiết bị sử dụng\n      <span style=\"color: #039be5\">trình duyệt ẩn danh</span>, giúp tiết kiệm chi phí với những người dùng muốn <span\n        style=\"color: red\">ẩn thông tin</span> khi truy cập vào quảng cáo.\n    </p>\n\n    <div class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n        <b>Chặn trình duyệt ẩn danh</b>\n      </mat-checkbox>\n    </div>\n\n    <p class=\"button-area\">\n      <button mat-raised-button color=\"accent\" [disabled]=\"isProcessing\" (click)=\"setBlockingAnonymousBrowser()\">\n        <mat-icon>check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-ban-ip/auto-ban-ip.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG THEO IP - TÀI KHOẢN <span\n      class=\"account-id\">{{_sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Thông thường 1 người dùng chỉ click quảng cáo từ 1 đến 2 lần trước khi mua hàng. Việc chặn người dùng click quảng cáo\n      liên tục\n      giúp bạn tiết kiệm được chi phí lãng phí do những hành vi phá hoại gây ra.\n    </p>\n\n    <p class=\"config-checking\">\n      <mat-checkbox [checked]=\"checked\" (change)=\"checkSetting($event)\" [disabled]=\"isProcessing\">\n      </mat-checkbox>\n      <b>\n        Tự động chặn những IP đang phá hoại sử dụng <span style=\"color: red\">AI</span> và <span style=\"color: red\">Big\n          Data</span>.\n      </b>\n    </p>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"-20px\" fxLayoutGap=\"20px\" class=\"max-click\">\n      <div fxFlex=\"60\">\n        <p>\n          <b>\n            Chặn sau khi 1 IP nhấn quảng cáo <span style=\"color: red\">(thường là 2 lần)</span>\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn số lần click</mat-label>\n          <mat-select [(value)]=\"selectedMaxClick\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClick\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div fxFlex=\"40\">\n        <p>\n          <b>\n            Sau khoảng thời gian\n          </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n          <mat-label>Chọn khoảng thời gian</mat-label>\n          <mat-select [(value)]=\"selectedMaxClickHours\" [disabled]=\"isProcessing\">\n            <mat-option *ngFor=\"let item of itemsSource.maxClickHours\" [value]=\"item.value\">{{item.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n    </div>\n\n    <p>\n      <b>\n        Xóa hết IP đã chặn khi qua ngày mới <span style=\"color: red\">(xóa vào lúc 0h-1h sáng)</span>\n      </b>\n    </p>\n\n    <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n      <mat-label>Chọn hình thức</mat-label>\n      <mat-select [(value)]=\"selectedAutoRemove\" [disabled]=\"isProcessing\">\n        <mat-option *ngFor=\"let item of itemsSource.autoRemove\" [value]=\"item.value\">{{item.text}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\" (click)=\"setAutoBlockingIP()\"\n        [disabled]=\"isProcessing\">\n        <mat-icon>check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN TỰ ĐỘNG 3G & 4G - TÀI KHOẢN <span\n      class=\"account-id\">{{_sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"title2\"> Bằng việc cấu hình này, quảng cáo sẽ <span style=\"color: red\">không hiển thị</span> trên hầu hết\n      các thiết bị sử\n      dụng truy cập <span style=\"color: #039be5\">3G & 4G</span> của các nhà mạng di động tại Việt Nam.</p>\n\n    <div class=\"checkbox-group\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around\">\n      <mat-checkbox [checked]=\"mobileNetworks.viettel\" (change)=\"selectNetwork($event,'viettel')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://dangky3gviettel.vn/wp-content/uploads/2018/10/cropped-logo-dang-ky-3g-viettel.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.mobifone\" (change)=\"selectNetwork($event,'mobifone')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://brasol.vn/public/uploads/1521197514-brasol.vn-logo-mobifone-mobifone-logo.svg_.png\"\n          class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vinafone\" (change)=\"selectNetwork($event,'vinafone')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://img2.thuthuatphanmem.vn/uploads/2018/12/13/logo-vinaphone_010429237.png\" class=\"network-logo\"\n          alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.vietnammobile\" (change)=\"selectNetwork($event,'vietnammobile')\"\n        [disabled]=\"isProcessing\">\n        <img src=\"https://css.vietnamobile.com.vn/images/logo.png\" class=\"network-logo\" alt=\"\">\n      </mat-checkbox>\n      <mat-checkbox [checked]=\"mobileNetworks.fpt\" (change)=\"selectNetwork($event,'fpt')\" [disabled]=\"isProcessing\">\n        <img src=\"http://vinacorp.vn/uploads/news/FPT-ava_1828613.png\" class=\"fpt\" alt=\"\">\n      </mat-checkbox>\n    </div>\n\n    <p class=\"text-center\">\n      <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n        (click)=\"setAutoBlocking3G4G()\" [disabled]=\"isProcessing\">\n        <mat-icon>check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n      </button>\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/auto-blocking-range-ips/auto-blocking-range-ips.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"title1\">\n        CẤU HÌNH CHẶN TỰ ĐỘNG THEO NHÓM IP (NÂNG CAO) - TÀI KHOẢN <span\n            class=\"account-id\">{{_sessionService.activeAdsAccountId || ''}}</span>\n    </div>\n\n    <div class=\"inner\">\n\n        <p class=\"notification\">\n            Nhóm IP là danh sách các IP có tiền tố giống nhau. Ví dụ IP 127.0.0.1 và 127.0.0.2 sẽ thuộc nhóm IP\n            127.0.0.<span style=\"color: red\">*</span>\n            <br>Bạn chỉ nên chọn chặn theo nhóm IP khi bị phá hoại với quy mô lớn vì có thể sẽ\n            gây ra việc <span style=\"color: red\"> chặn nhầm khách hàng</span> của bạn.\n        </p>\n\n        <p>\n            <b>\n                Chọn nhóm IP 127.0.0.<span style=\"color: red\">*</span> (255 IP)\n            </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n            <mat-label>Chọn hình thức</mat-label>\n            <mat-select [(value)]=\"classC\" [disabled]=\"isProcessing\">\n                <mat-option *ngFor=\"let item of itemsSource.classC\" [value]=\"item.value\">{{item.text}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <p>\n            <b>\n                Chọn nhóm IP 127.0.<span style=\"color: red\">*</span>.<span style=\"color: red\">*</span> (65.026 IP)\n            </b>\n        </p>\n\n        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\n            <mat-label>Chọn hình thức</mat-label>\n            <mat-select [(value)]=\"classD\" [disabled]=\"isProcessing\">\n                <mat-option *ngFor=\"let item of itemsSource.classD\" [value]=\"item.value\">{{item.text}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <p class=\"text-center\">\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n                (click)=\"setAutoBlockingIPRange()\" [disabled]=\"isProcessing\">\n                <mat-icon>check</mat-icon> KÍCH HOẠT VÀ CẬP NHẬT CẤU HÌNH\n            </button>\n        </p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH THỬ CHẶN 1 IP - TÀI KHOẢN <span\n      class=\"account-id\">{{_sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn IP theo yêu cầu của bạn và <span style=\"color: red\">không cho hiển thị</span> quảng cáo trên thiết bị đang sử dụng IP này.\n    </p>\n\n    <form class=\"ban-ip-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n\n      <app-input-text [formControlName]=\"'bannedIP'\" [errors]=\"getMessageErrors('bannedIP')\" title=\"IP của bạn\"\n        [isDisabled]=\"isProcessing\">\n      </app-input-text>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon>block</mat-icon> THỬ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </form>\n\n    <div class=\"banned-ip-info\" *ngIf=\"hasBlockedIP === true\">\n      <p>\n        IP <span [(ngModel)]=\"blockedIPs[0]\" ngDefaultControl\n          style=\"color: crimson; font-weight: bolder\">{{blockedIPs[0]}}</span> đã được chặn thành công\n        trong hệ thống Google Ads.\n        <br><br><b>Cách kiểm tra hệ thống hoạt động:</b>\n        <br><b>Bước 1:</b> Truy cập vào tài khoản Google Ads tại trang <a href=\"https://ads.google.com/intl/vi_VN/home/\"\n          target=\"blank\">Ads.google.com</a>\n        nhấn vào\n        <span class=\"step\">1 Chiến dịch</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Cài đặt</span>\n        <mat-icon class=\"next-icon\">arrow_forward</mat-icon>\n        <span class=\"step\">Loại trừ 1 IP</span>\n        <br><b>Bước 2:</b> Truy cập vào trang <a href=\"https:/google.com.vn\" target=\"blank\">Google.com.vn</a> và tìm\n        kiếm\n        website của\n        bạn. Nếu bạn không thấy quảng cáo, hệ thống hoạt động tốt.\n        <br>Sau khi kiểm tra, bạn có thể bỏ IP đang bị chặn. Bấm vào nút dưới đây\n      </p>\n      <div>\n        <button mat-raised-button style=\"background-color: #4bb353; color: white\" (click)=\"unblockSampleIP()\"\n          class=\"unblock-ip-button\" [disabled]=\"isProcessing\">\n          <mat-icon>lock_open</mat-icon>\n          MỞ CHẶN IP CỦA BẠN\n        </button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-device/ban-device.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-device/ban-device.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO THIẾT BỊ - TÀI KHOẢN <span class=\"account-id\">{{_sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <div class=\"title2\">\n      <p>\n        Kết quả có được theo thống kê từ ngày <b>{{startDate | date: 'dd/MM/yyyy'}}</b> đến ngày\n        <b>{{endDate | date: 'dd/MM/yyyy'}}</b>\n      </p>\n      <p class=\"advise\">\n        <span class=\"success-badge\">MẸO</span> Bạn có thể dừng quảng cáo trên các thiết bị mang lại hiệu quả quảng cáo\n        thấp\n      </p>\n    </div>\n\n    <p *ngIf=\"deviceReports.length === 0 && !isProcessing\" class=\"empty-report-notification\">\n      Chúng tôi không tìm thấy thông tin thiết bị nào trên tài khoản Google Ads này.\n    </p>\n\n    <div class=\"table-wrapper\" *ngIf=\"deviceReports.length > 0\">\n      <mat-table [dataSource]=\"deviceReports\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"device\">\n          <mat-header-cell *matHeaderCellDef> Thiết bị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <span *ngIf=\"element.device === 'Điện thoại'\" fxLayout=\"row\" fxLayoutAlign=\"center start\"\n              fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">smartphone</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n            <span *ngIf=\"element.device === 'Máy tính bảng'\" fxLayout=\"row\" fxLayoutAlign=\"center start\"\n              fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">tablet_mac</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n            <span *ngIf=\"element.device === 'Máy tính'\" fxLayout=\"row\" fxLayoutAlign=\"center start\" fxLayoutGap=\"10px\">\n              <mat-icon color=\"accent\">laptop_chromebook</mat-icon>\n              <span class=\"device-name\">{{element.device}}</span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cost\">\n          <mat-header-cell *matHeaderCellDef> Chi phí </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.cost | number: '1.0-0'}} VNĐ</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"impressions\">\n          <mat-header-cell *matHeaderCellDef> Hiển thị </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.impressions | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"clicks\">\n          <mat-header-cell *matHeaderCellDef> Click </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.clicks | number: '1.0-0'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"avgPosition\">\n          <mat-header-cell *matHeaderCellDef> Vị trí trung bình </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.avgPosition}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ctr\">\n          <mat-header-cell *matHeaderCellDef> CTR </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.ctr}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"optimization\">\n          <mat-header-cell *matHeaderCellDef>Tối ưu</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Điện thoại'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.mobile\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30001)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.mobile\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính bảng'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.tablet\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30002)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.tablet\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 100%\" appearance=\"outline\" *ngIf=\"element.device === 'Máy tính'\">\n              <mat-label>Chọn hình thức</mat-label>\n              <mat-select [(value)]=\"deviceSettings.computer\" [disabled]=\"isProcessing\"\n                (selectionChange)=\"setDeviceCampaignRunning($event,30000)\">\n                <mat-option *ngFor=\"let item of deviceSettingsItemsSource.computer\" [value]=\"item.value\">{{item.text}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/ban-optional-ip/ban-optional-ip.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH CHẶN THEO DANH SÁCH IP TÙY CHỈNH - TÀI KHOẢN <span\n      class=\"account-id\">{{_sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ thực hiện chặn một danh sách các IP theo yêu cầu của bạn và <span style=\"color: red\">không cho hiển thị</span> quảng cáo\n      trên thiết bị đang sử dụng các IP này.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"60\">\n\n          <app-input-textarea [formControlName]=\"'listBannedIP'\" [errors]=\"getMessageErrors('listBannedIP')\"\n            title=\"Nhập danh sách IP cần chặn\" height=\"260px\" [isDisabled]=\"isProcessing\"></app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">Hướng Dẫn Chặn IP Tùy Chỉnh</p>\n          <p>\n            Bạn có thể chặn <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <!-- <p>\n            Hoặc chặn <b>từng nhóm IP</b>, thêm dấu <span style=\"color: red\">(*)</span> tượng trưng cho nhóm IP muốn\n            chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p> -->\n          <span>\n            Hệ thống sẽ tự động chuyển đổi IP và chặn trong Google Ads sau một khoảng thời gian.\n          </span>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"warn\" [disabled]=\"isProcessing\">\n          <mat-icon>block</mat-icon> CHẶN THỦ CÔNG DANH SÁCH IP\n        </button>\n      </div>\n    </form>\n\n    <p class=\"table-title\">DANH SÁCH IP ĐÃ CHẶN GẦN ĐÂY</p>\n\n    <div class=\"table-wrapper\">\n\n      <mat-table [dataSource]=\"blockedIPs\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"order\">\n          <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n          <mat-cell *matCellDef=\"let element; let i = index\"> <span [class.new]=\"element.order === 'MỚI'\">{{i+1}}</span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ip\">\n          <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <span style=\"color: crimson; font-weight: bold\">{{element._id}}</span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <p class=\"status\">\n              Chặn thành công <span style=\"color: gray; font-weight: bold\">{{element._id}}</span> vào tổng <span\n                style=\"color: crimson; font-weight: bold\">{{element.campaignNumber}}</span> chiến dịch.\n            </p>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef>Tác vụ</mat-header-cell>\n          <mat-cell *matCellDef>\n            <span class=\"task\">\n              <mat-icon>verified_user</mat-icon> đã chặn\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"unlockButton\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button (click)=\"unblockSampleIP(element._id)\" [disabled]=\"isProcessing\" mat-icon-button color=\"accent\"\n              matTooltip=\"Nhấn để mở chặn\" class=\"unlock-button\">\n              <mat-icon>lock_open</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    CẤU HÌNH WHITELIST IP - TÀI KHOẢN <span class=\"account-id\">{{_sessionService.activeAdsAccountId || ''}}</span>\n  </div>\n\n  <div class=\"inner\">\n\n    <p class=\"notification\">\n      Hệ thống sẽ ghi nhận một danh sách các IP mà bạn không cho phép chặn. Thiết bị đang sử dụng các IP này sẽ được hệ\n      thống nhận diện là <span style=\"color: green; font-weight: bold\">an toàn và không bị chặn</span>.\n    </p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"ban-ip-form\">\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\n        <div fxFlex=\"60\">\n\n          <app-input-textarea [formControlName]=\"'whitelistIPs'\" [errors]=\"getMessageErrors('whitelistIPs')\"\n            title=\"Nhập danh sách IP không cho phép chặn\" height=\"260px\" [isDisabled]=\"isProcessing\">\n          </app-input-textarea>\n\n        </div>\n        <div class=\"input-example\" fxFlex=\"auto\">\n          <p class=\"title3\">Hướng Dẫn Không Cho Phép Chặn IP Tùy Chỉnh</p>\n          <p>\n            Bạn có thể nhập <b>từng IP riêng lẻ</b>, vui lòng điền mỗi IP 1 dòng\n          </p>\n          <b>Ví dụ IP riêng lẻ:</b>\n          <p>\n            127.0.0.1\n            <br>127.0.0.2\n            <br>127.0.0.3\n          </p>\n          <p>\n            Hoặc nhập <b>từng nhóm IP</b>, thêm dấu <span style=\"color: red\">(*)</span> tượng trưng cho nhóm IP không\n            muốn chặn\n          </p>\n          <b>Ví dụ nhóm IP:</b>\n          <p>\n            IP4: 127.0.0.*\n            <br>IP4: 127.0.*.*\n          </p>\n        </div>\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"isProcessing\">\n          <mat-icon>sync</mat-icon> CẬP NHẬT WHITELIST\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/ban-ips/anonymous-browser/anonymous-browser.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: justify;\n}\n.container .inner .config-checking {\n  font-size: 20px;\n  padding-left: 10%;\n}\n.container .inner .button-area {\n  text-align: center;\n  padding-top: 40px;\n}\n.container .inner .button-area button {\n  border-radius: 0;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .config-checking {\n    padding: 0;\n    text-align: center;\n  }\n\n  .button-area button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYW5vbnltb3VzLWJyb3dzZXIvYW5vbnltb3VzLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYmFuLWlwcy9hbm9ueW1vdXMtYnJvd3Nlci9hbm9ueW1vdXMtYnJvd3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURFSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0hOO0FES007RUFDRSxnQkFBQTtBQ0hSO0FEU0E7RUFFSTtJQUNFLGFBQUE7RUNQSjtFRFNJO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VDUE47O0VEYUU7SUFDRSxlQUFBO0VDVko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmFuLWlwcy9hbm9ueW1vdXMtYnJvd3Nlci9hbm9ueW1vdXMtYnJvd3Nlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cblxuICAgIC5jb25maWctY2hlY2tpbmcge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLmNvbmZpZy1jaGVja2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWFyZWEge1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jb25maWctY2hlY2tpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY29uZmlnLWNoZWNraW5nIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5idXR0b24tYXJlYSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

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








let AnonymousBrowserComponent = class AnonymousBrowserComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__["PageBaseComponent"] {
    constructor(_sessionService, _banIpsService, _fuseProgressiveBarService, _dialogService, _router) {
        super();
        this._sessionService = _sessionService;
        this._banIpsService = _banIpsService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._router = _router;
        this.isProcessing = true;
    }
    ngOnInit() {
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        this._fuseProgressiveBarService.hide();
                        this.getBlockingAnonymousBrowserSetting();
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
    }
    getBlockingAnonymousBrowserSetting() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgressiveBarService.hide();
            this.checked = res.data.setting.blockByPrivateBrowser;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.setBlockingAnonymousBrowser({ blockByPrivate: this.checked })
            .subscribe((res) => {
            this.getBlockingAnonymousBrowserSetting();
            this._fuseProgressiveBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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








let AutoBanIPComponent = class AutoBanIPComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_7__["PageBaseComponent"] {
    constructor(_banIpsService, _fuseProgressiveBarService, _sessionService, _dialogService, _router) {
        super();
        this._banIpsService = _banIpsService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._sessionService = _sessionService;
        this._dialogService = _dialogService;
        this._router = _router;
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
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        this._fuseProgressiveBarService.hide();
                        this.getBlockingIPSettting();
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
    }
    getBlockingIPSettting() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const getSettingsSub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this.checked = res.data.setting.autoBlockWithAiAndBigData;
            this.selectedMaxClick = res.data.setting.autoBlockByMaxClick;
            this.selectedMaxClickHours = res.data.setting.countMaxClickInHours || 24;
            this.selectedAutoRemove = res.data.setting.autoRemoveBlocking === false ? 1 : 2;
            this.isProcessing = false;
            this._fuseProgressiveBarService.hide();
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.autoBlockingIP(params).subscribe((res) => {
            this.getBlockingIPSettting();
            setTimeout(() => {
                this._dialogService._openSuccessDialog(res);
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            if (error.error.messages) {
                this._dialogService._openErrorDialog(error.error);
            }
            this._fuseProgressiveBarService.hide();
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
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AutoBanIPComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/ban-ips/auto-blocking-cellular-networks/auto-blocking-cellular-networks.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .network-logo,\n.container .inner .mobifone,\n.container .inner .fpt {\n  height: 25px;\n  width: 80px;\n  margin-left: 10px;\n}\n.container .inner .fpt {\n  height: 35px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  padding-top: 20px;\n}\n.container .inner .notification {\n  text-align: justify;\n}\n.container .inner .ban-ip-form {\n  margin-top: 30px;\n  padding: 15px;\n  box-shadow: 2px 2px 10px silver;\n}\n.container .inner .checkbox-group {\n  padding: 20px;\n  padding-left: 0;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n\n  .submit-button {\n    font-size: 12px;\n  }\n\n  .checkbox-group {\n    width: 90%;\n    display: table;\n    margin: 0 auto;\n    line-height: 50px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy9hdXRvLWJsb2NraW5nLWNlbGx1bGFyLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBREdJOzs7RUFHRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRE47QURJSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FES0k7RUFDRSxpQkFBQTtBQ0hOO0FETUk7RUFDRSxtQkFBQTtBQ0pOO0FET0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSwrQkFBQTtBQ05OO0FEU0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEVUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUk47QURXSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUNWTjtBRGFJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDWE47QURnQkE7RUFFSTtJQUNFLGFBQUE7RUNkSjs7RURrQkE7SUFDRSxlQUFBO0VDZkY7O0VEa0JBO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNmRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYW4taXBzL2F1dG8tYmxvY2tpbmctY2VsbHVsYXItbmV0d29ya3MvYXV0by1ibG9ja2luZy1jZWxsdWxhci1uZXR3b3Jrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG5cbiAgICAubmV0d29yay1sb2dvLFxuICAgIC5tb2JpZm9uZSxcbiAgICAuZnB0IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmZwdCB7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAuYmFuLWlwLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBzaWx2ZXI7XG4gICAgfVxuXG4gICAgLmNoZWNrYm94LWdyb3VwIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5jaGVja2JveC1ncm91cCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uZXR3b3JrLWxvZ28sXG4uY29udGFpbmVyIC5pbm5lciAubW9iaWZvbmUsXG4uY29udGFpbmVyIC5pbm5lciAuZnB0IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnB0IHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RpZmljYXRpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbi1pcC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaGVja2JveC1ncm91cCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY2hlY2tib3gtZ3JvdXAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn0iXX0= */"

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








let AutoBlockingCellularNetworksComponent = class AutoBlockingCellularNetworksComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"] {
    constructor(_banIpsService, _sessionService, _fuseProgressiveBarService, _dialogService, _router) {
        super();
        this._banIpsService = _banIpsService;
        this._sessionService = _sessionService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._router = _router;
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
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        this._fuseProgressiveBarService.hide();
                        this.getAutoBlocking3G4GSetting();
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
    }
    selectNetwork(event, network) {
        if (event.checked)
            this.mobileNetworks[network] = true;
        else
            this.mobileNetworks[network] = false;
    }
    getAutoBlocking3G4GSetting() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgressiveBarService.hide();
            this.mobileNetworks = res.data.setting.mobileNetworks;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.autoBlocking3G4G(this.mobileNetworks)
            .subscribe((res) => {
            this.getAutoBlocking3G4GSetting();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
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








let AutoBlockingRangeIpsComponent = class AutoBlockingRangeIpsComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"] {
    constructor(_banIpsService, _sessionService, _fuseProgressiveBarService, _dialogService, _router) {
        super();
        this._banIpsService = _banIpsService;
        this._sessionService = _sessionService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._router = _router;
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
        this._fuseProgressiveBarService.show();
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        this._fuseProgressiveBarService.hide();
                        this.getAutoBLockingIPRangeSetting();
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
    }
    getAutoBLockingIPRangeSetting() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgressiveBarService.hide();
            this.classC = res.data.setting.autoBlackListIpRanges.classC === false ? 1 : 2;
            this.classD = res.data.setting.autoBlackListIpRanges.classD === false ? 1 : 2;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
            this.classC = -1;
            this.classD = -1;
        });
        this.subscriptions.push(sub);
    }
    setAutoBlockingIPRange() {
        this.isProcessing = true;
        const params = this.generateAutoBlockingIPRangeParams();
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.autoBlockingRangeIP(params)
            .subscribe((res) => {
            this.getAutoBLockingIPRangeSetting();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AutoBlockingRangeIpsComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-an-ip/ban-an-ip.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 60px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  box-shadow: 1px 1px 5px silver;\n  background-color: white;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .button-area button {\n  border-radius: 0;\n}\n.container .inner .step {\n  font-weight: bold;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: rgba(217, 83, 79, 0.1);\n  border-left: 7px solid #d9534f;\n  text-align: justify;\n  box-shadow: 2px 2px 5px silver;\n}\n.container .inner .banned-ip-info button {\n  border-radius: 0;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .next-icon {\n  font-size: 18px;\n  margin-left: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWFuLWlwL2Jhbi1hbi1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1hbi1pcC9iYW4tYW4taXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFlRSxXQUFBO0FDYkY7QURERTtFQUNFLDRCQUFBO0VBRUEsb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFJO0VBQ0UsYUFBQTtBQ0VOO0FESUU7RUFDRSw0QkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSw4QkFBQTtFQUNBLHVCQUFBO0FDTk47QURTSTtFQUNFLGdCQUFBO0FDUE47QURTTTtFQUNFLGdCQUFBO0FDUFI7QURXSTtFQUNFLGlCQUFBO0FDVE47QURZSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLHdDQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUVBLDhCQUFBO0FDYk47QURlTTtFQUNFLGdCQUFBO0FDYlI7QURpQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNmTjtBRGtCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2hCTjtBRHFCQTtFQUVJO0lBQ0UsYUFBQTtFQ25CSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1hbi1pcC9iYW4tYW4taXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCA2MHB4IDI3cHggMzBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICB3aWR0aDogMTAwJTtcblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggc2lsdmVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmJhbm5lZC1pcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgODMsIDc5LCAwLjEpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCByZ2JhKDIxNywgODMsIDc5LCAxKTtcblxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc2lsdmVyO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWNjZXNzLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5uZXh0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lcntcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggNjBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWNjb3VudC1pZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RpZmljYXRpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5iYW4taXAtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHNpbHZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZDk1MzRmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFubmVkLWlwLWluZm8gYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWNjZXNzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uZXh0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let BanAnIPComponent = class BanAnIPComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_3__["EditableFormBaseComponent"] {
    constructor(_banIpsService, _sessionService, _fuseProgressiveBarService, _dialogService, _router) {
        super();
        this._banIpsService = _banIpsService;
        this._sessionService = _sessionService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._router = _router;
        this.isProcessing = true;
        this.blockedIPs = [];
    }
    ngOnInit() {
        this._fuseProgressiveBarService.show();
        this.hasBlockedIP = false;
        this.initForm();
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        const blockedIPsSub = this._banIpsService.getBlockedSampleIP()
                            .subscribe(res => {
                            this.blockedIPs = res.data.ips;
                            if (this.blockedIPs.length > 0)
                                this.hasBlockedIP = true;
                            else
                                this.hasBlockedIP = false;
                            this._fuseProgressiveBarService.hide();
                            this.isProcessing = false;
                        }, (error) => {
                            this._fuseProgressiveBarService.hide();
                            if (error.status === 404) {
                                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
                            }
                            else
                                this._dialogService._openErrorDialog(error.error);
                            this.hasBlockedIP = false;
                        });
                        this.subscriptions.push(blockedIPsSub);
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
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
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.blockSampleIP(params)
            .subscribe((res) => {
            this._fuseProgressiveBarService.hide();
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
            this._fuseProgressiveBarService.hide();
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
                this._fuseProgressiveBarService.show();
                const sub = this._banIpsService.unblockSampleIP(params)
                    .subscribe((res) => {
                    this._fuseProgressiveBarService.hide();
                    this.blockedIPs = [];
                    this.hasBlockedIP = false;
                    this._dialogService._openSuccessDialog(res);
                    this.isProcessing = false;
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
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
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__["FuseProgressBarService"],
        app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], BanAnIPComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/ban-device/ban-device.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/ban-ips/ban-device/ban-device.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: justify;\n}\n.container .inner .title2 .advise {\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .success-badge {\n  margin-right: 5px;\n  background-color: #44b543;\n  border-radius: 2px;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 2px silver;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  opacity: 0.9;\n}\n.container .inner .table-wrapper {\n  margin-top: 10px;\n  box-shadow: 1px 1px 4px silver;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-cell,\n.container .inner .table-wrapper mat-header-cell {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  justify-content: left;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(7),\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  flex: 0 0 20%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(7) {\n  padding-top: 10px;\n}\n.container .inner .table-wrapper .device-name {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: bold;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .empty-report-notification {\n  background-color: #eee;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLWRldmljZS9iYW4tZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLG1CQUFBO0FDRk47QURJTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRlI7QURNSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNMTjtBRE9NO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDTFI7QURRTTtFQUNFLGdCQUFBO0FDTlI7QURTTTtFQUNFLHdDQUFBO0FDUFI7QURVTTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNSUjtBRFdNOztFQUVFLHFCQUFBO0FDVFI7QURZTTs7RUFFRSxhQUFBO0FDVlI7QURhTTtFQUNFLGlCQUFBO0FDWFI7QURjTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNaUjtBRGVNOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ2JSO0FEZ0JNO0VBQ0UsZUFBQTtBQ2RSO0FEaUJNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDZlI7QURtQkk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQ2pCTjtBRHNCQTtFQUVJO0lBQ0UsYUFBQTtFQ3BCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1kZXZpY2UvYmFuLWRldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAgIC5hZHZpc2Uge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWNjZXNzLWJhZGdlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cblxuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGwsXG4gICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLW5hbWUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgbWF0LXJvdyxcbiAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVtcHR5LXJlcG9ydC1ub3RpZmljYXRpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIC5hZHZpc2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgb3BhY2l0eTogMC45O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwsXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDcpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDcpIHtcbiAgZmxleDogMCAwIDIwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCg3KSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgLmRldmljZS1uYW1lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmVtcHR5LXJlcG9ydC1ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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









let BanDeviceComponent = class BanDeviceComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_6__["PageBaseComponent"] {
    constructor(_banIpsService, _fuseProgressiveBarService, _sessionService, _dialogService, _router) {
        super();
        this._banIpsService = _banIpsService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._sessionService = _sessionService;
        this._dialogService = _dialogService;
        this._router = _router;
        this.displayedColumns = ['device', 'cost', 'impressions', 'clicks', 'avgPosition', 'ctr', 'optimization'];
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
        this.deviceReports = [];
    }
    ngOnInit() {
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        this._fuseProgressiveBarService.hide();
                        this.getDeviceReport();
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
    }
    getDeviceSettings() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this.deviceSettings = res.data.setting.devices;
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            if (error.status === 404) {
                this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    getDeviceReport() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.getDeviceReport()
            .subscribe(res => {
            this.deviceReports = res.data.reportDevice;
            this.getDeviceSettings();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.deviceReports = [];
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    setDeviceCampaignRunning(event, deviceId) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.setDeviceCampaignRunning({ device: deviceId, isEnabled: event.value })
            .subscribe((res) => {
            this.getDeviceSettings();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
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
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n  padding-top: 10px;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  background-color: white;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -10px;\n  color: gray;\n  font-size: 12px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .button-area button {\n  border-radius: 0;\n}\n.container .inner .table-title {\n  padding-top: 20px;\n  font-weight: bold;\n  color: gray;\n}\n.container .inner .table-wrapper {\n  max-height: 500px;\n  box-shadow: 1px 1px 4px silver;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(217, 83, 79, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .table-wrapper mat-cell:nth-child(3) {\n  flex: 0 0 40%;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #d9534f;\n  color: white;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n  font-weight: bold;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 4px silver;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .button-area button {\n    font-size: 12px;\n  }\n\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL2Jhbi1vcHRpb25hbC1pcC9iYW4tb3B0aW9uYWwtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSw4QkFBQTtBQ05OO0FEU0k7RUFDRSxXQUFBO0FDUE47QURTTTtFQUNFLGFBQUE7QUNQUjtBRFVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNSUjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEWU07RUFDRSxXQUFBO0FDVlI7QURhTTtFQUNFLFVBQUE7QUNYUjtBRGVJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNiTjtBRGdCSTtFQUNFLGdCQUFBO0FDZE47QURnQk07RUFDRSxnQkFBQTtBQ2RSO0FEa0JJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNoQk47QURtQkk7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDakJOO0FEbUJNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDakJSO0FEb0JNO0VBQ0UsZ0JBQUE7QUNsQlI7QURxQk07RUFDRSx3Q0FBQTtBQ25CUjtBRHNCTTs7RUFFRSxhQUFBO0FDcEJSO0FEdUJNOztFQUVFLGFBQUE7QUNyQlI7QUR3Qk07O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDdEJSO0FEeUJNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDdkJSO0FEMEJNO0VBQ0UsZUFBQTtBQ3hCUjtBRDRCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMxQk47QUQ2Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDNUJOO0FEK0JJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsbUJBQUE7QUM5Qk47QURpQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUMvQk47QURrQ0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ2hDTjtBRG1DSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2pDTjtBRHNDQTtFQUVJO0lBQ0UsZUFBQTtFQ3BDSjs7RUR3Q0U7SUFDRSxhQUFBO0VDckNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbi1pcHMvYmFuLW9wdGlvbmFsLWlwL2Jhbi1vcHRpb25hbC1pcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmFjY291bnQtaWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC50aXRsZTMge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5iYW4taXAtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gICAgfVxuXG4gICAgLmxpc3QtaXAge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAzNjBweDs7XG4gICAgICB9XG5cbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxleC1ib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgfVxuXG4gICAgICAubGlzdCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0LWV4YW1wbGUge1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICBtYXQtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbWF0LXJvdyB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgODMsIDc5LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgZmxleDogMCAwIDEwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3csXG4gICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDgzLCA3OSwgMSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5iYW5uZWQtaXAtaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICB9XG5cbiAgICAuc3VjY2Vzcy1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuc3RhdHVzIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgLnRhc2sge1xuICAgICAgY29sb3I6IGNyaW1zb247XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudW5sb2NrLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5uZXcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnV0dG9uLWFyZWEge1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hY2NvdW50LWlkIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYmFuLWlwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpc3QtaXAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3ggLmZsZXgtaXRlbSB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IC5saXN0IHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnB1dC1leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjZDk1MzRmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC51bmxvY2stYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5ldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5idXR0b24tYXJlYSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let BanOptionalIPComponent = class BanOptionalIPComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_banIpsService, _fuseProgressiveBarService, _sessionService, _dialogService, _router) {
        super();
        this._banIpsService = _banIpsService;
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._sessionService = _sessionService;
        this._dialogService = _dialogService;
        this._router = _router;
        this.displayedColumns = ['order', 'ip', 'status', 'task', 'unlockButton'];
        this.blockedIPs = [];
        this.isProcessing = true;
        this.listIPs = [
            "171.233.238.83",
            "171.233.142.222",
            "1.52.57.61",
            "171.253.190.223",
            "27.64.61.60",
            "123.21.100.152",
            "171.233.196.198",
            "171.244.166.30",
            "171.253.190.223",
            "27.2.128.173",
            "58.187.169.199",
            "103.249.23.85",
            "58.187.169.107",
            "171.253.190.223",
            "116.118.120.245",
            "42.112.90.51",
            "113.172.123.221",
            "1.54.42.176",
            "218.212.158.116",
            "1.52.200.15",
            "171.248.171.70",
            "58.187.22.185",
            "1.55.50.150",
            "113.173.194.81",
            "103.249.23.87",
            "27.77.179.141",
            "1.52.193.209",
            "27.64.61.60",
            "116.102.131.240",
            "115.74.44.135",
            "116.100.232.215",
            "42.112.83.83",
            "45.126.97.43",
            "27.3.254.33",
            "118.69.107.198",
            "113.23.30.244",
            "171.253.191.114",
            "14.167.145.196",
            "27.3.254.33",
            "116.118.120.245",
            "58.187.169.107",
            "116.108.34.68",
            "14.186.61.101",
            "1.53.154.159",
            "58.187.22.185",
            "116.118.120.245",
            "103.199.71.206",
            "116.102.131.240",
            "171.244.105.25",
            "171.233.245.7",
            "14.164.247.63",
            "14.167.145.196",
            "14.167.145.196",
            "42.116.118.100",
            "171.253.9.1",
            "27.77.179.141",
            "14.164.247.63",
            "27.74.252.144",
            "14.187.133.72",
            "58.187.22.185",
            "171.253.24.72",
            "171.239.175.71",
            "116.106.246.94",
            "42.118.3.135",
            "14.186.69.84",
            "116.109.28.116",
            "116.109.28.116",
            "112.197.32.120",
            "42.119.245.253",
            "118.69.128.36",
            "27.78.134.16",
            "118.69.128.36",
            "118.68.71.197",
            "115.77.232.54",
            "1.52.205.243",
            "27.78.38.16",
            "27.74.135.99",
            "171.246.96.178",
            "171.253.28.201",
            "66.249.89.213",
            "125.214.57.171",
            "171.247.16.17",
            "118.69.128.36",
            "1.55.198.117",
            "27.78.49.107",
            "113.23.31.255",
            "66.249.89.213",
            "113.173.254.235",
            "42.118.57.247",
            "27.75.221.225",
            "171.253.28.201",
            "171.239.137.223",
            "118.69.128.36",
            "118.69.128.36",
            "116.96.224.249",
            "171.235.236.138",
            "14.172.167.148",
            "115.74.36.71",
            "118.69.128.36",
            "27.77.214.28",
            "123.21.215.180",
            "27.78.49.107",
            "45.126.97.46",
            "103.199.41.156",
            "45.126.97.44",
            "113.172.163.227",
            "1.53.167.156",
            "1.54.5.8",
            "27.74.135.99",
            "183.80.21.92",
            "1.55.198.117",
            "118.69.128.36",
            "116.109.28.116",
            "115.75.188.161",
            "113.172.163.227",
            "171.246.96.178",
            "1.52.126.222",
            "113.185.77.81",
            "171.239.166.115",
            "66.249.89.213",
            "45.126.97.44",
            "103.199.41.205",
            "14.243.43.229",
            "171.233.136.207",
            "115.79.60.249",
            "171.246.96.178",
            "115.77.27.217",
            "171.246.96.178",
            "66.249.89.213",
            "118.69.128.36",
            "66.249.89.213",
            "42.116.41.74",
            "171.253.0.214",
            "103.7.36.19",
            "66.249.89.213",
            "118.69.77.157",
            "14.167.201.218",
            "66.249.89.213",
            "66.249.89.213",
            "14.183.123.182",
            "1.53.161.36",
            "14.168.30.218",
            "113.185.72.164",
            "113.172.217.231",
            "171.253.134.110",
            "66.249.89.215",
            "171.253.0.194",
            "116.103.28.150",
            "66.249.89.215",
            "171.253.222.151",
            "1.52.200.9",
            "115.72.118.34",
            "103.199.69.125",
            "123.22.229.21",
            "118.68.102.9",
            "171.245.206.245",
            "171.239.71.0",
            "113.185.77.239",
            "42.112.13.236",
            "103.199.70.171",
            "14.169.171.21",
            "66.249.89.213",
            "115.76.93.229",
            "1.52.161.212",
            "115.73.235.54",
            "1.53.154.159",
            "1.52.60.27",
            "113.172.138.97",
            "103.199.37.60",
            "66.249.89.213",
            "171.253.187.100",
            "113.161.83.108",
            "14.187.229.11",
            "1.52.207.188",
            "171.245.207.68",
            "116.108.210.161",
            "14.187.1.44",
            "27.75.72.135",
            "171.245.206.245",
            "113.182.118.68",
            "103.199.23.149",
            "115.79.120.88",
            "42.116.114.200",
            "113.173.149.138",
            "118.69.128.36",
            "118.68.5.59",
            "66.249.89.213",
            "66.249.89.213",
            "171.232.90.92",
            "171.233.239.171",
            "103.7.38.177",
            "171.253.14.234",
            "66.249.89.213",
            "103.249.23.88",
            "66.249.89.215",
            "103.199.37.33",
            "66.249.89.213",
            "115.72.118.34",
            "125.214.58.111",
            "103.199.36.125",
            "113.182.118.68",
            "103.199.36.25",
            "113.185.77.239",
            "66.249.89.215",
            "113.23.110.63",
            "118.68.5.59",
            "118.68.5.59",
            "27.3.89.166",
            "116.106.6.67",
            "171.235.35.74",
            "103.199.36.51",
            "116.108.126.216",
            "103.199.71.177",
            "42.112.155.46",
            "1.53.112.244",
            "1.53.161.36",
            "103.199.44.130",
            "1.52.207.188",
            "14.240.72.104",
            "171.245.206.245",
            "14.252.14.130",
            "113.182.118.68",
            "171.253.25.2",
            "118.70.54.249",
            "113.173.108.202",
            "27.3.232.242",
            "116.109.26.83",
            "27.3.89.20",
            "66.249.89.213",
            "171.253.0.214",
            "66.249.89.213",
            "171.253.13.20",
            "66.249.89.213",
            "171.253.28.201",
            "113.186.187.151",
            "171.249.155.77",
            "14.242.85.20",
            "14.242.85.20",
            "27.71.206.93",
            "171.245.207.68",
            "103.249.23.121",
            "103.199.26.132",
            "113.161.32.183",
            "113.185.77.81",
            "171.227.121.247",
            "14.183.122.217",
            "27.3.89.20",
            "113.23.111.126",
            "118.68.5.59",
            "14.254.17.47",
            "58.187.170.126",
            "171.252.253.238",
            "42.112.158.106",
            "171.247.169.49",
            "66.249.89.213",
            "171.255.147.9",
            "103.7.39.81",
            "1.52.60.27",
            "103.199.70.249",
            "171.253.14.192",
            "171.232.46.164",
            "103.199.71.86",
            "1.53.161.36",
            "103.7.39.150",
            "125.214.56.151",
            "171.253.133.176",
            "103.199.70.91",
            "14.186.238.182",
            "27.2.137.202",
            "113.163.253.111",
            "123.21.0.139",
            "14.169.171.21",
            "171.239.149.87",
            "115.73.100.77",
            "1.53.154.159",
            "42.118.5.60",
            "66.249.89.213",
            "66.249.89.213",
            "171.253.128.99",
            "171.253.10.152",
            "115.72.118.34",
            "112.197.33.55",
            "171.235.49.248",
            "103.129.189.47",
            "42.117.154.15",
            "14.187.229.11",
            "14.234.20.70",
            "66.249.89.215",
            "171.253.131.143",
            "1.52.207.188",
            "103.199.43.74",
            "115.73.174.19",
            "27.3.32.230",
            "171.253.27.179",
            "113.185.75.180",
            "66.249.89.213",
            "115.74.205.114",
            "118.69.77.157",
            "51.77.129.159",
            "42.112.82.132",
            "1.55.197.97",
            "171.253.14.192",
            "42.114.29.14",
            "115.72.118.34",
            "113.185.72.133",
            "66.249.89.215",
            "27.3.129.227",
            "103.199.36.125",
            "42.118.214.34",
            "115.72.183.200",
            "45.126.99.116",
            "66.249.89.215",
            "171.253.133.142",
            "113.23.110.63",
            "115.77.26.253",
            "103.199.36.51",
            "14.169.41.78",
            "66.249.89.213",
            "118.68.5.59",
            "171.253.0.214",
            "66.249.89.213",
            "113.185.75.57",
            "180.93.216.180",
            "14.186.98.122",
            "125.214.52.126",
            "222.254.237.147",
            "171.239.133.76",
            "58.187.170.19",
            "103.199.70.171",
            "27.64.221.44",
            "113.170.237.13",
        ];
    }
    ngOnInit() {
        this._fuseProgressiveBarService.show();
        this.initForm();
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
                    .subscribe((res) => {
                    if (res.data.adsAccount.isConnected) {
                        this._fuseProgressiveBarService.hide();
                        this.getBlockedCustomIPs();
                    }
                    else {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                    }
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(accountDetailSub);
            }
        });
        this.subscriptions.push(sub);
    }
    getBlockedCustomIPs() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._banIpsService.getBlockedCustomIPs()
            .subscribe(res => {
            this._fuseProgressiveBarService.hide();
            this.blockedIPs = res.data.ips;
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
        this._fuseProgressiveBarService.show();
        const params = this.generatePostObject();
        const sub = this._banIpsService.blockIPs(params)
            .subscribe((res) => {
            this.getBlockedCustomIPs();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
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
                this._fuseProgressiveBarService.show();
                const sub = this._banIpsService.removeBlockedIPs({
                    action: 'REMOVE',
                    ips: [ip]
                })
                    .subscribe((res) => {
                    this.getBlockedCustomIPs();
                    setTimeout(() => {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openSuccessDialog(res);
                        this.isProcessing = false;
                    }, 0);
                }, (error) => {
                    this._fuseProgressiveBarService.hide();
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
        _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], BanOptionalIPComponent);



/***/ }),

/***/ "./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/ban-ips/whitelist-ip/whitelist-ip.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title1 .account-id {\n  color: yellow;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-weight: bold;\n}\n.container .inner .title3 {\n  font-weight: bold;\n  font-size: 12px !important;\n}\n.container .inner .notification {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .ban-ip-form {\n  margin-top: 25px;\n  padding: 15px;\n  box-shadow: 1px 1px 4px silver;\n  background: white;\n}\n.container .inner .list-ip {\n  width: 100%;\n}\n.container .inner .list-ip textarea {\n  height: 360px;\n}\n.container .inner .list-ip mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.container .inner .flex-box {\n  display: flex;\n}\n.container .inner .flex-box .flex-item {\n  margin: 5px;\n}\n.container .inner .flex-box .list {\n  width: 60%;\n}\n.container .inner .input-example {\n  margin-top: -10px;\n  color: gray;\n  font-size: 12px !important;\n}\n.container .inner .button-area {\n  margin-top: 15px;\n}\n.container .inner .button-area button {\n  border-radius: 0;\n}\n.container .inner .table-title {\n  margin-top: 30px;\n  color: gray;\n}\n.container .inner .step {\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 10px;\n}\n.container .inner .banned-ip-info {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #eee;\n  border-left: 5px solid darkorange;\n}\n.container .inner .success-button {\n  background-color: #4bb543;\n  color: white;\n}\n.container .inner .status {\n  text-align: justify;\n}\n.container .inner .task {\n  color: crimson;\n}\n.container .inner .unlock-button {\n  display: table;\n  margin: 0 auto;\n}\n.container .inner .new {\n  background-color: crimson;\n  color: white;\n  padding: 4px;\n  box-shadow: 1px 1px 5px silver;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media screen and (max-width: 600px) {\n  .button-area button {\n    font-size: 12px;\n  }\n\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Jhbi1pcHMvd2hpdGVsaXN0LWlwL3doaXRlbGlzdC1pcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9iYW4taXBzL3doaXRlbGlzdC1pcC93aGl0ZWxpc3QtaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0hOO0FETUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsaUJBQUE7QUNOTjtBRFNJO0VBQ0UsV0FBQTtBQ1BOO0FEU007RUFDRSxhQUFBO0FDUFI7QURVTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDUlI7QURZSTtFQUNFLGFBQUE7QUNWTjtBRFlNO0VBQ0UsV0FBQTtBQ1ZSO0FEYU07RUFDRSxVQUFBO0FDWFI7QURlSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDYk47QURnQkk7RUFDRSxnQkFBQTtBQ2ROO0FEZ0JNO0VBQ0UsZ0JBQUE7QUNkUjtBRGtCSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ2hCTjtBRG1CSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDbkJOO0FEc0JJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDcEJOO0FEdUJJO0VBQ0UsbUJBQUE7QUNyQk47QUR3Qkk7RUFDRSxjQUFBO0FDdEJOO0FEeUJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUN2Qk47QUQwQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN4Qk47QUQ2QkE7RUFFSTtJQUNFLGVBQUE7RUMzQko7O0VEK0JFO0lBQ0UsYUFBQTtFQzVCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYW4taXBzL3doaXRlbGlzdC1pcC93aGl0ZWxpc3QtaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIC5hY2NvdW50LWlkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLnRpdGxlMiB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudGl0bGUzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmJhbi1pcC1mb3JtIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubGlzdC1pcCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZsZXgtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgLmxpc3Qge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnB1dC1leGFtcGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWFyZWEge1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuYmFubmVkLWlwLWluZm8ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmI1NDM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnN0YXR1cyB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cblxuICAgIC50YXNrIHtcbiAgICAgIGNvbG9yOiBjcmltc29uO1xuICAgIH1cblxuICAgIC51bmxvY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLm5ldyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggc2lsdmVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5idXR0b24tYXJlYSB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFjY291bnQtaWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbi1pcC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWlwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1pcCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZsZXgtYm94IC5mbGV4LWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mbGV4LWJveCAubGlzdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5wdXQtZXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYnV0dG9uLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJhbm5lZC1pcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Y2Nlc3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFzayB7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVubG9jay1idXR0b24ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAubmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHNpbHZlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJ1dHRvbi1hcmVhIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn0iXX0= */"

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







let WhitelistIpComponent = class WhitelistIpComponent extends app_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_sessionService, _fuseProgressBarService, _banIpsService, _router) {
        super();
        this._sessionService = _sessionService;
        this._fuseProgressBarService = _fuseProgressBarService;
        this._banIpsService = _banIpsService;
        this._router = _router;
        this.isProcessing = true;
        this.whiteList = [];
    }
    ngOnInit() {
        this._fuseProgressBarService.show();
        this.initForm();
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
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
        });
        this.subscriptions.push(sub);
    }
    getWhitelistIPs() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._banIpsService.getBlockingIPSettings()
            .subscribe(res => {
            this._fuseProgressBarService.hide();
            this.whiteList = Array.from(new Set(res.data.setting.customWhiteList));
            this.form.patchValue({
                whitelistIPs: this.getNormalizedWhiteList(Array.from(new Set(res.data.setting.customWhiteList)))
            });
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressBarService.hide();
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
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], WhitelistIpComponent);



/***/ })

}]);
//# sourceMappingURL=main-ban-ips-ban-ips-module-es2015.js.map