import { FuseNavigation } from '@fuse/types';

export const NotConnectedAccountNavigation: FuseNavigation[] = [];

export const getCookieValue = name => {
  let found = document.cookie.split(';').filter(c => c.trim().split("=")[0] === name);
  return found.length > 0 ? found[0].split("=")[1] : null;
}

export const navigation: FuseNavigation[] = [
  {
    id: 'overview-report',
    title: 'BÁO CÁO TỔNG THỂ',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'overview-accessing-report',
        title: 'Lưu Lượng Truy Cập',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'bar_chart',
        url: '/bao-cao/luu-luong-truy-cap'
      },
    ]
  },
  {
    id: 'report',
    title: 'BÁO CÁO CLICK ẢO',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'spam-click-report',
        title: 'Xem Báo Cáo Click Ảo',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'data_usage',
        url: '/bao-cao/click-ao'
      },
      {
        id: 'ip-clicking-report',
        title: 'IP Đang Click',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'touch_app',
        url: '/bao-cao/ip-dang-click'
      },
      {
        id: 'ip-range-on-click',
        title: 'Nhóm IP Đang Click',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'blur_linear',
        url: 'bao-cao/nhom-ip-dang-click'
      },
      {
        id: 'blocked-ip-list',
        title: 'Danh Sách IP Đã Chặn',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'block',
        url: '/bao-cao/danh-sach-ip-da-chan'
      },
      {
        id: 'user-statistic',
        title: 'Thống Kê Người Dùng',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'people',
        url: '/bao-cao/thong-ke-nguoi-dung'
      },
      // {
      //   id: 'uuid-history',
      //   title: 'UUID History',
      //   translate: 'NAV.SAMPLE.TITLE',
      //   type: 'item',
      //   icon: 'devices',
      //   url: '/bao-cao/uuid-history'
      // },
    ]
  },
  {
    id: 'configuration',
    title: 'CẤU HÌNH',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'ban-an-ip',
        title: 'Thử Chặn 1 IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'remove_circle_outline',
        url: '/chan-ip/chan-1-ip',
      },
      {
        id: 'ban-optional-ip',
        title: 'Blacklist IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'report_problem',
        url: '/chan-ip/chan-ip-tuy-chinh',
      },
      {
        id: 'whitelist-ip',
        title: 'Whitelist IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'done_outline',
        url: '/chan-ip/whitelist-ip',
      },
      {
        id: 'auto-ban-ip',
        title: 'Chặn Tự Động IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'verified_user',
        url: '/chan-ip/chan-ip-tu-dong',
      },
      {
        id: 'auto-ban-ip-range',
        title: 'Chặn Tự Động Nhóm IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'apps',
        url: '/chan-ip/chan-ip-theo-nhom',
      },
      {
        id: 'ban-3g4g',
        title: 'Chặn 3G & 4G',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'wifi',
        url: '/chan-ip/chan-ip-theo-mang-di-dong',
      },
      {
        id: 'ban-device',
        title: 'Chặn Theo Mobile/PC/Tablet',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'phonelink',
        url: '/chan-ip/chan-ip-theo-thiet-bi',
      },
      {
        id: 'ban-anonymous',
        title: 'Chặn Trình Duyệt Ẩn Danh',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'vpn_lock',
        url: '/chan-ip/chan-trinh-duyet-an-danh',
      },
    ]
  },
  {
    id: 'cash-back',
    title: 'HƯỚNG DẪN HOÀN TIỀN',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'request-cash-back',
        title: 'Yêu Cầu Bồi Hoàn Phí',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'monetization_on',
        url: '/yeu-cau-boi-hoan-phi',
      },
    ]
  },
  {
    id: 'support',
    title: 'NHÂN VIÊN HỖ TRỢ BẠN',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'supporter_name',
        title: 'Mr. Long',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'headset_mic',
        function: () => { }
      },
      {
        id: 'supporter_contact',
        title: '093.757.3139',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'phone',
        function: () => { }
      },
    ]
  },
  {
    id: 'user_info',
    title: 'THÔNG TIN NGƯỜI DÙNG',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'upgrade_licence',
        title: 'Nâng cấp tài khoản',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'arrow_upward',
        url: '/nang-cap-vip',
      },
      {
        id: 'user_profile',
        title: 'Thông tin cá nhân',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'account_circle',
        url: '/nguoi-dung/thong-tin-ca-nhan',
      },
      {
        id: 'user_history',
        title: 'Lịch sử thao tác',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'history',
        url: '/nguoi-dung/lich-su-thao-tac',
      },
      // {
      //   id: 'user_logout',
      //   title: 'Đăng xuất',
      //   translate: 'NAV.SAMPLE.TITLE',
      //   type: 'item',
      //   icon: 'power_settings_new',
      //   url: '/auth/logout',
      // },
    ]
  },
];
