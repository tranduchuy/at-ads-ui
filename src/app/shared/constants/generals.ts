export interface TrafficSourceType {
    id: number;
    name: string;
}
export namespace Generals {
    export namespace AppInfo {
        export const name = 'Chống click tặc';
        export const yearOfRelease = '2019';
    };
    export namespace Contact {
        export const supporters = [
            {
                phone: '0937573139',
                moreInfo: 'Mr.Long - SĐT, Zalo, Viber 093.757.3139',
            }
        ];
    };
    export namespace Licence {
        export const FREE = {
            name: 'Dùng thử',
            type: 'FREE',
            price: 'Miễn phí',
            interests: `(*) QUYỀN LỢI: Chặn click ảo theo tần suất
                        . Chặn click ảo theo nhà mạng (3G/4G)
                        . Chặn click ảo tự động ít hơn 5 giây
                        . Tùy chỉnh danh sách IP cần chặn
                        . Báo cáo quản trị IP click.`
        };
        export const VIP1 = {
            name: 'Tối ưu',
            type: 'VIP1',
            price: '1.000.000 VNĐ/Tháng',
            interests: `(*) QUYỀN LỢI: Chặn click ảo theo tần suất
                        . Chặn click ảo theo nhà mạng (3G/4G)
                        . Chặn click ảo tự động ít hơn 5 giây
                        . Tùy chỉnh danh sách IP cần chặn
                        . Báo cáo quản trị IP click
                        . Chặn click ảo theo hành vi người dùng
                        . Chặn click ảo theo nhắm chọn vị trí
                        . Hỗ trợ gửi bồi hoàn phí từ Google.`
        };
        export const CUSTOM = {
            name: 'Đối tác',
            type: 'CUSTOM',
            price: 'Liên hệ',
            interests: `(*) QUYỀN LỢI: Chặn click ảo theo tần suất
                        . Chặn click ảo theo nhà mạng (3G/4G)
                        . Chặn click ảo tự động ít hơn 5 giây
                        . Tùy chỉnh danh sách IP cần chặn
                        . Báo cáo quản trị IP click
                        . Chặn click ảo theo hành vi người dùng
                        . Chặn click ảo theo nhắm chọn vị trí
                        . Hỗ trợ gửi bồi hoàn phí từ Google
                        . Có 1 nhân viên hỗ trợ riêng.`
        }
    };
    export namespace TrafficSourceReport {
        export const TRAFFIC_SOURCE_TYPES: TrafficSourceType[] = [
            {
                id: 1,
                name: 'google/cpc',
            },
            {
                id: 2,
                name: 'google/organic'
            },
            {
                id: 3,
                name: 'google/display'
            },
            {
                id: 4,
                name: 'facebook/cpc'
            },
            {
                id: 5,
                name: 'facebook/referral'
            },
            {
                id: 6,
                name: 'bing/cpc'
            },
            {
                id: 7,
                name: 'bing/organic'
            },
            {
                id: 8,
                name: 'coccoc/cpc'
            },
            {
                id: 9,
                name: 'coccoc/organic'
            },
            {
                id: 10,
                name: 'direct/none'
            },
            {
                id: 11,
                name: 'other/referral'
            }
        ];
    };
    export namespace Pagination {
        export const itemsPerPageOptions = [
            {
                text: '20 record',
                value: 20
            },
            {
                text: '30 record',
                value: 30
            },
            {
                text: '50 record',
                value: 50
            },
            {
                text: '100 record',
                value: 100
            }
        ];
    };
    export namespace AccountConfigStep {
        export const CONNECT_ACCOUNT = {
            value: 1,
            route: '/them-tai-khoan-moi',
            name: 'Kết nối Tài khoản Google Ads'
        }
        export const SELECT_CAMPAIGN = {
            value: 2,
            route: '/gan-tracking/chien-dich',
            name: 'Gắn tracking chiến dịch'
        };
        export const ADD_WEBSITE = {
            value: 3,
            route: '/quan-ly-website/',
            name: 'Thêm website vào tài khoản'
        };
        export const ADD_TRACKING = {
            value: 4,
            route: '/gan-tracking/website/',
            name: 'Gắn mã tracking vào website'
        };
        export const SEE_REPORT = {
            value: 5,
            route: '/bao-cao/click-ao',
            name: 'Xem báo cáo click ảo'
        }
    };
    export namespace AccountConnectionType {
        export const byEmail = 'EMAIL';
        export const byGoogleAdsId = 'GOOGLE_ADS_ID';
    };
}