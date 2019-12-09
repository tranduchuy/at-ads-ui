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
    export namespace AccountConnectionType {
        export const byEmail = 'EMAIL';
        export const byGoogleAdsId = 'GOOGLE_ADS_ID';
    }
};