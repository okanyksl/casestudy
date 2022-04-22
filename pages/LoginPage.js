import {Selector, t} from 'testcafe';
import BasePage from './BasePage';

class LoginPage extends BasePage{
    constructor() {
        super();
        this.emailInput = Selector('#EmailLogin');
        this.passwordInput = Selector('#Password');
        this.signInButton = Selector('.login__btn')
        this.myAccount = Selector('.user-menu__title').nth(3);
        this.errorModal = Selector('.modal-body');
        this.emailInputErrorMessage = Selector('#EmailLogin-error')
    }

    async userSignIn(email, password){
        await t.typeText(this.emailInput, email);
        await t.typeText(this.passwordInput, password);
        await t.click(this.signInButton);
    }

    async getErrorMessageFromModal(){
        return this.errorModal.innerText;
    }

    async getErrorMessageFromEmailInput(){
        return this.emailInputErrorMessage.innerText;
    }
}

export default LoginPage;