import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
              id: 'add-accounts',
              title: 'Thêm tài khoản mới',
              translate: 'NAV.SAMPLE.TITLE',
              type: 'item',
              icon: 'email',
              url: '/them-tai-khoan-moi',
              badge: {
                title: '25',
                translate: 'NAV.SAMPLE.BADGE',
                bg: '#F44336',
                fg: '#FFFFFF'
              }
            }
        ]
    },
    {
        id       : 'configuration',
        title    : 'CẤU HÌNH',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'ban-an-ip',
                title    : 'Thử Chặn 1 IP',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'info',
                url      : '/chan-ip/chan-1-ip',
            },
            {
                id       : 'ban-optional-ip',
                title    : 'Chặn IP Tùy Chỉnh',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'format_list_bulleted',
                url      : '/chan-ip/chan-ip-tuy-chinh',
            },
            {
                id       : 'auto-ban-ip',
                title    : 'Chặn Tự Động IP',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'security',
                url      : '/chan-ip/chan-ip-tu-dong',
            },
            {
                id       : 'auto-ban-ip-range',
                title    : 'Chặn Tự Động Nhóm IP',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'create',
                url      : '/chan-ip/chan-ip-theo-nhom',
            },
            {
                id       : 'ban-3g4g',
                title    : 'Chặn 3G & 4G',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'polymer',
                url      : '/chan-ip/chan-3g4g',
            },
            {
                id       : 'ban-device',
                title    : 'Chặn Theo Mobile/PC/Tablet',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'local_phone',
                url      : '/chan-ip/chan-theo-thiet-bi',
            },
        ]
    }
];
