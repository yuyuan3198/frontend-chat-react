import { EventType, PublicClientApplication } from "@azure/msal-browser";

export const scopes = [
  'user.read',
  'mailboxsettings.read',
  'calendars.readwrite'
]

export const config = {
  auth: {
    clientId: '18c651eb-3bb7-4941-9d95-f36e35afa2da',

  },
};

// <MsalInstanceSnippet>
const msalInstance = new PublicClientApplication({
  auth: {
    clientId: config.auth.clientId,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true
  }
});

const accounts = msalInstance.getAllAccounts();
if (accounts && accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event) => {

  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    // Set the active account - this simplifies token acquisition
    const authResult = event.payload;
    msalInstance.setActiveAccount(authResult.account);
  }

});

export default msalInstance;