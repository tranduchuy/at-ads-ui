import { environment } from 'environments/environment';

export namespace API {
  export namespace User {
    export const Login = environment.hostApi + '/api/users/login';
    export const Register = environment.hostApi + '/api/users/register';
    export const ForgotPassword = environment.hostApi + '/api/users/forget-password';
    export const ResendEmail = environment.hostApi + '/api/users/confirm/resend';
    export const ResetPassword = environment.hostApi + '/api/users/reset-password';
    export const LoginByGoogle = environment.hostApi + '/api/users/login-by-google';
    export const getLoggedInInfo = environment.hostApi + '/api/users/info';
    export const confirmEmail = environment.hostApi + '/api/users/confirm';
    export const updateProfile = environment.hostApi + '/api/users/';
  }
  export namespace AdwordsAccount {
    export const getAccounts = environment.hostApi + '/api/account-adwords';
    export const addAccount = environment.hostApi + '/api/account-adwords';
    export const removeAccount = environment.hostApi + '/api/account-adwords/{account_id}';
    export const checkAccountAcceptance = environment.hostApi + '/api/account-adwords/connection-confirmation';
    
    export const getOriginalCampaigns = environment.hostApi + '/api/account-adwords/{account_id}/original-campaigns';
    export const getTrackingCampaigns = environment.hostApi + '/api/account-adwords/{account_id}/campaigns';
    export const addCampaignTracking = environment.hostApi + '/api/account-adwords/{account_id}/campaigns';

    export const getBlockedSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/block-sample-ip';
    export const blockSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/block-sample-ip';
    export const unblockSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/unblock-sample-ip';

    export const getBlockedCustomIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
    export const blockIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
    export const removeBlockedIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';

    export const updateWhitelist = environment.hostApi + '/api/account-adwords/{account_id}/white-list';

    export const autoBlockingIP = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-ip';

    export const autoBlockingRangeIP = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-range-ip';

    export const autoBlocking3G4G = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-3g4g';
    
    export const autoBlockingDevice = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-device';
    export const getDeviceReport = environment.hostApi + '/api/account-adwords/{account_id}/report/device';
    export const setDeviceCampaignRunning = environment.hostApi + '/api/account-adwords/{account_id}/report/device';

    export const setBlockingAnonymousBrowser = environment.hostApi + '/api/account-adwords/{account_id}/block-by-private-browser'

    export const getBlockingIPSettings = environment.hostApi + '/api/account-adwords/{account_id}/setting';

    export const getAwordsAccountDetail = environment.hostApi + '/api/account-adwords/{account_id}';
  }
  export namespace Website {
    export const getWebsites = environment.hostApi + '/api/websites?accountId={accountId}';
    export const addWebsite = environment.hostApi + '/api/websites';
    export const removeWebsite = environment.hostApi + '/api/websites/{website_id}';
    export const getWebsiteTrackingInfo = environment.hostApi + '/api/account-adwords/{account_id}/verify-acctached-code-domains'
  }
  export namespace Report {
    export const getAccountReport = environment.hostApi + '/api/account-adwords/{account_id}/report?from={from}&to={to}';
    export const getDailyClickingReport = environment.hostApi + '/api/account-adwords/{account_id}/report/daily-clicking?page={page}&limit={limit}';
    export const getClassDClickingReport = environment.hostApi + '/api/account-adwords/{account_id}/report/clicking-class-d-ips?from={from}&to={to}&page={page}&limit={limit}';
    export const getBlockedIPsListReport = environment.hostApi + '/api/account-adwords/{account_id}/blocked-ips';
    export const removeAutoBLockedIP = environment.hostApi + '/api/account-adwords/{account_id}/blocked-ips';
    export const getIPHistory = environment.hostApi + '/api/account-adwords/{account_id}/ip-history?ip={ip}';
  }
}
