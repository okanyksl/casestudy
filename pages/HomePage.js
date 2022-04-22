import { Selector, t, ClientFunction} from 'testcafe';
import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor(){
        super();
        this.startHere = Selector('main').child('div').child('div')
            .child('div').child('div');
        this.signInText = Selector('body.main-eng.js-load-complete:nth-child(2) div.header:nth-child(4) div.container div.header__top.js-window-menu div.user-menu-container.js-user-menu nav.user-menu ul.user-menu__items.user-menu__items--logout li.user-menu__item.user-process-hover.hidden-xs:nth-child(3) a.user-menu__link.user-process-toggle:nth-child(1) > span.user-menu__title');
        this.signInButton = Selector('body.main-eng.js-load-complete:nth-child(2) div.header:nth-child(4) div.container div.header__top.js-window-menu div.user-menu-container.js-user-menu nav.user-menu ul.user-menu__items.user-menu__items--logout li.user-menu__item.user-process-hover.hidden-xs:nth-child(3) div.user-process.js-user-process:nth-child(2) div.user-process__content a.users-process-list__btn:nth-child(1) > span.users-process-list__text');
    }

    async checkHomePage(){
        //Websitesi açıldığında anasayfadaki adres arama inputunun görüntülendiği kontrol edilir.
        await t.expect(this.startHere.visible).ok({timeout:3000});
    }

    async setDisplayNone(){
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