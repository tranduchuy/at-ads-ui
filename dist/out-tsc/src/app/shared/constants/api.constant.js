import { environment } from 'environments/environment';
export var API;
(function (API) {
    let User;
    (function (User) {
        User.Login = environment.hostApi + '/api/users/login';
        User.Register = environment.hostApi + '/api/users/register';
        User.ForgotPassword = environment.hostApi + '/api/users/forget-password';
        User.ResendEmail = environment.hostApi + '/api/users/confirm/resend';
        User.ResetPassword = environment.hostApi + '/api/users/reset-password';
        User.LoginByGoogle = environment.hostApi + '/api/users/login-by-google';
        User.getLoggedInInfo = environment.hostApi + '/api/users/info';
        User.confirmEmail = environment.hostApi + '/api/users/confirm';
    })(User = API.User || (API.User = {}));
    let AdwordsAccount;
    (function (AdwordsAccount) {
        AdwordsAccount.getAccounts = environment.hostApi + '/api/account-adwords';
        AdwordsAccount.addAccount = environment.hostApi + '/api/account-adwords';
        AdwordsAccount.checkAccountAcceptance = environment.hostApi + '/api/account-adwords/connection-confirmation';
        AdwordsAccount.getOriginalCampaigns = environment.hostApi + '/api/account-adwords/{account_id}/original-campaigns';
        AdwordsAccount.getTrackingCampaigns = environment.hostApi + '/api/account-adwords/{account_id}/campaigns';
        AdwordsAccount.addCampaignTracking = environment.hostApi + '/api/account-adwords/{account_id}/campaigns';
        AdwordsAccount.getBlockedSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/block-sample-ip';
        AdwordsAccount.blockSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/block-sample-ip';
        AdwordsAccount.unblockSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/unblock-sample-ip';
        AdwordsAccount.getBlockedCustomIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
        AdwordsAccount.blockIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
        AdwordsAccount.removeBlockedIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
        AdwordsAccount.autoBlockingIP = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-ip';
        AdwordsAccount.autoBlockingRangeIP = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-range-ip';
        AdwordsAccount.autoBlocking3G4G = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-3g4g';
        AdwordsAccount.autoBlockingDevice = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-device';
        AdwordsAccount.getDeviceReport = environment.hostApi + '/api/account-adwords/{account_id}/report/device';
        AdwordsAccount.setDeviceCampaignRunning = environment.hostApi + '/api/account-adwords/{account_id}/report/device';
        AdwordsAccount.getBlockingIPSettings = environment.hostApi + '/api/account-adwords/{account_id}/setting';
    })(AdwordsAccount = API.AdwordsAccount || (API.AdwordsAccount = {}));
    let Website;
    (function (Website) {
        Website.getWebsites = environment.hostApi + '/api/websites?accountId={accountId}';
        Website.addWebsite = environment.hostApi + '/api/websites';
        Website.removeWebsite = environment.hostApi + '/api/websites/{website_id}';
        Website.getWebsiteTrackingInfo = environment.hostApi + '/api/account-adwords/{account_id}/verify-acctached-code-domains';
    })(Website = API.Website || (API.Website = {}));
    let Report;
    (function (Report) {
        Report.getAccountReport = environment.hostApi + '/api/account-adwords/{account_id}/report?from={from}&to={to}';
    })(Report = API.Report || (API.Report = {}));
})(API || (API = {}));
//# sourceMappingURL=api.constant.js.map