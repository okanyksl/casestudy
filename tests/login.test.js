import {ClientFunction} from 'testcafe';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import env from 'dotenv';

env.config();

const home = new HomePage();
const login = new LoginPage();
const getCurrentUrl = ClientFunction(() => window.location.href.toString());

fixture `Mizu.com Test Çalışması`
    .page(home.url)
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    })

test('Yanlış Şifre İle Başarısız Kullanıcı Girişi', async (t) => {
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/')
    //Display:block kaldırılır.
    await home.setDisplayNone();
    //Anasayfa kontrolü
    await home.checkHomePage();
    //Login sayfasına git
    await home.goToLoginPage();
    //Login sayfasına gidildiğine dair URL kontrolü yapılır.
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/en-mx/login')
    //Login sayfasında Input alanlarının ekranda görüntülendiği kontrol edilir.
    await t.expect(login.emailInput.visible).ok();
    await t.expect(login.passwordInput.visible).ok();
    //Kullanıcı girişi yapılır.
    await login.userSignIn(process.env.EMAIL, '111222233');
    //Modal içerisindeki mesaj okunur ve kontrol edilir.
    const errorMessage = await login.getErrorMessageFromModal();
    await t.expect(errorMessage).eql('E-mail address or password is incorrect. Please check your information and try again.');
})

test('Geçersiz Formatta Mail Adresi İle Başarısız Kullanıcı Girişi Denemesi', async (t) => {
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/')
    //Display:block kaldırılır.
    await home.setDisplayNone();
    //Anasayfa kontrolü
    await home.checkHomePage();
    //Login sayfasına git
    await home.goToLoginPage();
    //Login sayfasına gidildiğine dair URL kontrolü yapılır.
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/en-mx/login')
    //Login sayfasında Input alanlarının ekranda görüntülendiği kontrol edilir.
    await t.expect(login.emailInput.visible).ok();
    await t.expect(login.passwordInput.visible).ok();
    //Kullanıcı girişi yapılır.
    await login.userSignIn('okan1897', '1112333444');
    //Input altında çıkan validasyon mesajının görüntülendiği kontrol edilir.
    await t.expect(login.emailInputErrorMessage.visible).ok();
    //Validasyon mesajı okunur ve beklenen mesaj ile karşılaştırılır.
    const errorMessage = await login.getErrorMessageFromEmailInput();
    await t.expect(errorMessage).eql('Please enter a valid e-mail address.');
})

test('Başarılı Kullanıcı Girişi İşlemi', async (t) => {
    //URL kontrolü
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/')
    //Display:block kaldırılır.
    await home.setDisplayNone();
    //Anasayfa kontrolü
    await home.checkHomePage();
    //Login sayfasına git
    await home.goToLoginPage();
    //Login sayfasına gidildiğine dair URL kontrolü yapılır.
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/en-mx/login')
    //Login sayfasında Input alanlarının ekranda görüntülendiği kontrol edilir.
    await t.expect(login.emailInput.visible).ok();
    await t.expect(login.passwordInput.visible).ok();
    //Kullanıcı girişi yapılır.
    await login.userSignIn(process.env.EMAIL, process.env.PASSWORD);
    //Başarılı login sonrası My Account linkinin görüntülendiği kontrol edilir.
    await t.expect(login.myAccount.visible).ok();
    //Login sonrası anasayfa linkinin /en-mx olarak değiştiği kontrol edilir.
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/en-mx/')
});

test('Fail Testi', async (t) => {
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/')
    //Display:block kaldırılır.
    await home.setDisplayNone();
    //Anasayfa kontrolü
    await home.checkHomePage();
    //Login sayfasına git
    await home.goToLoginPage();
    //Login sayfasına gidildiğine dair URL kontrolü yapılır.
    await t.expect(await getCurrentUrl()).eql('https://www.mizu.com/en-mx/login')
    //Login sayfasında Input alanlarının ekranda görüntülendiği kontrol edilir.
    await t.expect(login.emailInput.visible).ok();
    await t.expect(login.passwordInput.visible).ok();
    //Kullanıcı girişi yapılır.
    await login.userSignIn('okan1897', '1112333444');
    //Input altında çıkan validasyon mesajının görüntülendiği kontrol edilir.
    await t.expect(login.emailInputErrorMessage.visible).ok();
    //Validasyon mesajı okunur ve beklenen mesaj ile karşılaştırılır.
    const errorMessage = await login.getErrorMessageFromEmailInput();
    await t.expect(errorMessage).eql('Raporda fail durumunun görüntülenmesi için eklenmiştir.');
})