export namespace Generals {
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
            name: 'Kết nối Google Ads'
        }
        export const SELECT_CAMPAIGN = {
            value: 2,
            route: '/gan-tracking/chien-dich',
            name: 'Gắn tracking chiến dịch'
        };
        export const ADD_WEBSITE = {
            value: 3,
            route: '/quan-ly-website/',
            name: 'Thêm website'
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
    }
}