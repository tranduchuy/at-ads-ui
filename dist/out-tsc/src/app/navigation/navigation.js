export const NotConnectedAccountNavigation = [];
export const navigation = [
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
                url: '**'
            },
            {
                id: 'blocked-ip-list',
                title: 'Danh Sách IP Đã Chặn',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'block',
                url: '/bao-cao/danh-sach-ip-da-chan'
            },
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
                icon: 'wifi_off',
                url: '/chan-ip/chan-ip-theo-mang-di-dong',
            },
            {
                id: 'ban-device',
                title: 'Chặn Theo Mobile/PC/Tablet',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'phonelink_lock',
                url: '/chan-ip/chan-ip-theo-thiet-bi',
            },
        ]
    }
];
//# sourceMappingURL=navigation.js.map