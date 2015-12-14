import alt from '../alt';
//import AuthenticationContext from 'adal-node';
import AuthenticationActions from '../actions/AuthenticationActions';

class AuthenticationStore {
    constructor() {
        window.config = {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'capgemini.onmicrosoft.com',
            clientId: '14a3341d-48e9-46a5-833a-d7fa889886a6',
            postLogoutRedirectUri: "http://localhost",
            cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        };
        var authContext = new AuthenticationContext(config);

        //Check For & Handle Redirect From AAD After Login
        var isCallback = authContext.isCallback(window.location.hash);
        authContext.handleWindowCallback();


        if (isCallback && !authContext.getLoginError()) {
            window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
        }

        this.authContext = authContext;
        var user = authContext.getCachedUser();
        console.log(authContext);
        this.random = "AuthStoreProps";
        if(!user){
            this.isLoggedIn = false;
           // console.log("is logged in: "+this.isLoggedIn);
        } else {
            this.isLoggedIn = true;
           // console.log("is logged in: "+this.isLoggedIn);
        }
        this.bindAction(AuthenticationActions.logIn, this.handleLogIn);
        this.bindAction(AuthenticationActions.logOut, this.handleLogOut);

        this.exportPublicMethods({getIsLoggedIn: this.getIsLoggedIn }); 
    }

    getIsLoggedIn() {
        return this.isLoggedIn;
    }

    handleLogIn(){
        this.authContext.login();
    }

    handleLogOut(){
        this.authContext.logOut();
    }

   
}
export default alt.createStore(AuthenticationStore, 'AuthenticationStore');