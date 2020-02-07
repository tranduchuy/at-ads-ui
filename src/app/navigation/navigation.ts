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
        title: 'Lưu lượng truy cập',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'bar_chart',
        url: '/bao-cao/luu-luong-truy-cap'
      },
    ]
  },
  {
    id: 'report',
    title: 'BÁO CÁO CLICK QUẢNG CÁO',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'spam-click-report',
        title: 'Báo cáo click ảo',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'data_usage',
        url: '/bao-cao/click-ao'
      },
      {
        id: 'ip-clicking-report',
        title: 'IP đang click',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'touch_app',
        url: '/bao-cao/ip-dang-click'
      },
      // {
      //   id: 'ip-range-on-click',
      //   title: 'Nhóm IP đang click',
      //   translate: 'NAV.SAMPLE.TITLE',
      //   type: 'item',
      //   icon: 'blur_linear',
      //   url: 'bao-cao/nhom-ip-dang-click'
      // },
      {
        id: 'blocked-ip-list',
        title: 'IP đã bị chặn',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'block',
        url: '/bao-cao/danh-sach-ip-da-chan'
      },
      {
        id: 'user-statistic',
        title: 'Thống kê người dùng',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'people',
        url: '/bao-cao/thong-ke-nguoi-dung'
      },
    ]
  },
  {
    id: 'configuration',
    title: 'CẤU HÌNH NÂNG CAO',
    translate: 'NAV.APPLICATIONS',
    type: 'collapsable',
    children: [
      {
        id: 'ban-an-ip',
        title: 'Thử chặn 1 IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'lock',
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
        title: 'Chặn tự động IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'verified_user',
        url: '/chan-ip/chan-ip-tu-dong',
      },
      {
        id: 'auto-ban-ip-range',
        title: 'Chặn tự động nhóm IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'apps',
        url: '/chan-ip/chan-ip-theo-nhom',
      },
      {
        id: 'ban-3g4g',
        title: 'Chặn theo mạng 3G & 4G',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'signal_wifi_4_bar_lock',
        url: '/chan-ip/chan-ip-theo-mang-di-dong',
      },
      {
        id: 'ban-device',
        title: 'Chặn theo Mobile/PC/Tablet',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'phonelink',
        url: '/chan-ip/chan-ip-theo-thiet-bi',
      },
      {
        id: 'ban-anonymous',
        title: 'Chặn trình duyệt ẩn danh',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'vpn_lock',
        url: '/chan-ip/chan-trinh-duyet-an-danh',
      },
    ]
  },
  {
    id: 'visitor-tools',
    title: 'CÔNG CỤ KHÁCH HÀNG',
    translate: 'NAV.APPLICATIONS',
    type: 'collapsable',
    children: [
      {
        id: 'send-info',
        title: 'Gửi thông tin tư vấn',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'live_help',
        url: '/cong-cu-khach-hang/gui-thong-tin-tu-van',
      },
      // {
      //   id: 'fake-customer',
      //   title: 'Giả khách mua hàng',
      //   translate: 'NAV.SAMPLE.TITLE',
      //   type: 'item',
      //   icon: 'person_pin',
      //   url: '/cong-cu-khach-hang/gia-khach-mua-hang',
      // }
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
        title: 'Yêu cầu bồi hoàn phí',
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
        title: 'Cập nhật thông tin',
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
