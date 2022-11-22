import msalInstance, { scopes } from "./config";
import {AuthCodeMSALBrowserAuthenticationProvider} from '@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser';
import { InteractionType } from "@azure/msal-browser";
import { Client } from "@microsoft/microsoft-graph-client";



let graphClient = undefined;
class GraphClient {

    static authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
        msalInstance,
        {
            account : msalInstance.getActiveAccount(),
            scopes,
            interactionType : InteractionType.Popup
        }
    );

    static async getUSer (){
        this.ensureClient();
        const user = await graphClient.api('/me')
        .select('displayName,mail,jobTitle,userPrincipalName,id')
        .get();
       
        return user;
    }

  static async getAccessToken(){
    try {
        const result = await msalInstance.loginPopup({
            scopes,
            prompt : 'select_account'
        });
        return result.accessToken;
        
    } catch (error) {
        sessionStorage.clear();
    }
   
  }

  static ensureClient(){
    if(!graphClient){
        graphClient=Client.initWithMiddleware({
            authProvider: this.authProvider
        });
    }
    return graphClient;
  }
}

export default GraphClient;