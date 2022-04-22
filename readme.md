# Mizu.com Test Çalışması

Testcafe framework kullanılarak yazılmış node.js tabanlı test otomasyonu projesidir.

### **Gereklilikler**

* Node.js
* Testcafe
* .env dosyası

### **Ortam Hazırlama**

Node.js yükledikten sonra npm install komutu ile projenin kullandığı paketleri yüklemeniz gerekmektedir.

#### **Environment Değişkenleri**

| Key            | Value                                                                               |
|----------------|-------------------------------------------------------------------------------------|
| WEBSITE        | https://www.mizu.com                                                                |
| EMAIL          | usermail@mizu.com                                                                   |
| PASSWORD       | userpassword                                                                        |

Testlerin çalışması için yukarıdaki değişkenlerin **.env** dosyası içerisinde tanımlanması gerekmektedir.

### **Testlerin Çalıştırılması**

> npm run test:chrome

Yukarıdaki komut projenin bulunduğu dizin içerisinde çalıştırıldığında testler chrome browser üzerinden yürütülmektedir.

> npm run test:cross

Yukarıdaki komut projenin bulunduğu dizin içerisinde çalıştırıldığında testler hem chrome hem de firefox üzerinde çalışmaktadır.

> npm run test:parallel

Yukarıdaki komut projenin bulunduğu dizin içerisinde çalıştırıldığında testler paralel olarak 4 browser üzerinde çalışmaktadır.

> npm run test:headless

Yukarıdaki komut projenin bulunduğu dizin içerisinde çalıştırıldığında testler headless olarak çalışmaktadır.


### **Docker Kullanımı**

> docker pull testcafe/testcafe

Yukarıdaki komut ile docker image indirildikten sonra;

> docker run --rm -v ./Mizu:/app -it testcafe/testcafe 'chromium --no-sandbox --disable-dev-shm-usage'  /app/tests

Testler chromium browser'da headless mod olarak çalışmaktadır. Image içerisinde ayrıca Firefox browser bulunmaktadır. chromium yerine firefox:headless parametresi ile testler firefox üzerinde yürütülebilir.

### **Rapor**

Testler çalıştırıldıktan sonra proje dizini içerisinde **reports/report.xml** adı altında test raporu oluşmaktadır. Eğer testler başarılı ise bu raporda sadece test adı yazmaktadır. Testlerin hata alması durumunda hangi adımda hata aldığı rapor içerisinde yazmaktadır.

**Başarısız olan testler için screenshots/ altında hata alınan sayfanın ekran görüntüsü kayıt edilmektedir.**
