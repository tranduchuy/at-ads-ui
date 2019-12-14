import { environment } from 'environments/environment';

export namespace API {
  export namespace Homepage {
    export const saveFirebaseToken = environment.hostApi + '/api/fire-base-tokens';
    export const get30FirstIPLogs = environment.hostApi + '/api/user-behaviors/log/intro-page';
  }
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
    export const getActionHistory = environment.hostApi + '/api/users/actions-history?page={page}&limit={limit}';
    export const sendUpgradeLicenceRequest = environment.hostApi + '/api/users/order';
  }
  export namespace AdwordsAccount {
    export const getAccounts = environment.hostApi + '/api/account-adwords';
    export const addAccount = environment.hostApi + '/api/account-adwords';
    export const addAccountByEmail = environment.hostApi + '/api/account-adwords/connect-google-ads-by-email';
    export const removeAccount = environment.hostApi + '/api/account-adwords/{account_id}';
    export const checkAccountAcceptance = environment.hostApi + '/api/account-adwords/connection-confirmation';
    export const getAccountsFromGoogleAds = environment.hostApi + '/api/account-adwords/google-ads';
    export const updateAccessTokenRefreshToken = environment.hostApi + '/api/users/refresh-token-access-token';
    export const checkRefreshToken = environment.hostApi + '/api/users/check-refresh-token';
    export const getAwordsAccountDetail = environment.hostApi + '/api/account-adwords/{account_id}';
    export const updateAccountConfigStep = environment.hostApi + '/api/account-adwords/{account_id}/config-step';
    
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
  }
  export namespace Website {
    export const getWebsites = environment.hostApi + '/api/websites?accountId={accountId}';
    export const addWebsite = environment.hostApi + '/api/websites';
    export const removeWebsite = environment.hostApi + '/api/websites/{website_id}';
    export const getWebsiteTrackingInfo = environment.hostApi + '/api/account-adwords/{account_id}/verify-acctached-code-domains'
  }
  export namespace Report {
    export const getAccountStatisticReport = environment.hostApi + '/api/account-adwords/{account_id}/report-statistic?from={from}&to={to}&timeZone={timeZone}';
    export const getAccountReport = environment.hostApi + '/api/account-adwords/{account_id}/report?from={from}&to={to}';
    export const getDailyClickingReport = environment.hostApi + '/api/account-adwords/{account_id}/report/daily-clicking?page={page}&limit={limit}&from={from}&to={to}';
    export const getClassDClickingReport = environment.hostApi + '/api/account-adwords/{account_id}/report/clicking-class-d-ips?from={from}&to={to}&page={page}&limit={limit}';
    export const getBlockedIPsListReport = environment.hostApi + '/api/reports/{account_id}/blocked-ips';
    export const removeAutoBLockedIP = environment.hostApi + '/api/account-adwords/{account_id}/blocked-ips';
    export const getIPHistory = environment.hostApi + '/api/account-adwords/{account_id}/ip-history?ip={ip}';
    export const getStatisticUserReport = environment.hostApi + '/api/account-adwords/{account_id}/statistic-user?startDate={from}&endDate={to}';
    export const getUserStatisticDetail = environment.hostApi + '/api/account-adwords/{account_id}/detail-user/{id}?startDate={from}&endDate={to}';

    export const getIPClicksList = environment.hostApi + '/api/reports/{account_id}/clicks/{ip}';
    export const getIPClickDetails = environment.hostApi + '/api/reports/{account_id}/clicks/{ip}/detail';

    export const getStatisticTrafficSourceReport = environment.hostApi + '/api/reports/{account_id}/statistic/traffic-source?from={from}&to={to}';
    export const getSessionReport = environment.hostApi + '/api/reports/{account_id}/sessions?from={from}&to={to}';
  }
}
