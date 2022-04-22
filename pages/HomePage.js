import { Selector, t, ClientFunction} from 'testcafe';
import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor(){
        super();
        this.startHere = Selector('main').child('div').child('div')
            .child('div').child('div');
        this.signInText = Selector('.user-menu__title').nth(2);
        this.signInButton = Selector('.users-process-list__btn');
    }

    async checkHomePage(){
        //Websitesi açıldığında anasayfadaki adres arama inputunun görüntülendiği kontrol edilir.
        await t.expect(this.startHere.visible).ok({timeout:3000});
    }

    async setDisplayNone(){
        //Anasayfa açıldığında elementlere ulaşabilmek için display:block değeri display:none olarak değiştirilir.
        const setAttribute = ClientFunction(selector => {
            var element = document.querySelector(selector);
            element.setAttribute('style', 'display:none');
        });
        await setAttribute('.subheader-overlay');
    }

    async goToLoginPage(){
        //Sign In text'inin görüntülendiği kontrol edilir
        await t.expect(this.signInText.visible).ok({timeout:3000});
        //Sign In text'inin üzerine hover işlemi yapılır
        await t.hover(this.signInText);
        //Sign In butonuna tıklanır.
        await t.click(this.signInButton);
    }
}

export default HomePage;