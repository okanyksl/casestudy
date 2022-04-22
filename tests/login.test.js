import {ClientFunction, Selector} from 'testcafe';
import env from 'dotenv';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

env.config();

const home = new HomePage();
const getCurrentUrl = ClientFunction(() => window.location.href.toString());



fixture `Mizu.com Test Çalışması`
    .page(home.url)
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    })



test('Başarılı Kullanıcı Girişi İşlemi', async (t) => {
    //URL kontrolü
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/')
    //Display:block kaldırılır.
    await home.setDisplayNone();
    //Anasayfa kontrolü
    await home.checkHomePage();
    //Login ekranına git
    await home.goToLoginPage();
});