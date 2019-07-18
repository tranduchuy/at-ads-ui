import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
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
        icon: 'info',
        url: '/chan-ip/chan-1-ip',
      },
      {
        id: 'ban-optional-ip',
        title: 'Chặn IP Tùy Chỉnh',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'format_list_bulleted',
        url: '/chan-ip/chan-ip-tuy-chinh',
      },
      {
        id: 'auto-ban-ip',
        title: 'Chặn Tự Động IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'security',
        url: '/chan-ip/chan-ip-tu-dong',
      },
      {
        id: 'auto-ban-ip-range',
        title: 'Chặn Tự Động Nhóm IP',
        translate: 'NAV.SAMPLE.TITLE',
        type: 'item',
        icon: 'grain',
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
        icon: 'smartphone',
        url: '/chan-ip/chan-ip-theo-thiet-bi',
      },
    ]
  }
];
