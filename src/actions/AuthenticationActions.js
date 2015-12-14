import alt from '../alt';

class AuthenticationActions {
    logIn(){
        this.dispatch();
    }

    logOut(){
        this.dispatch();
    }
}
export default alt.createActions(AuthenticationActions);