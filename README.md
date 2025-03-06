# Bankist

## 📝 Proje Açıklaması
  Bankist, modern web etkileşimlerini içeren bir demo projedir. Kullanıcı deneyimini geliştirmek için çeşitli JavaScript teknikleri kullanılmıştır.

## 🚀 Özellikler
### 1️⃣ Sayfa Kaydırma (Smooth Scrolling)

 * "Learn More" butonuna tıklanınca ilgili bölüme yumuşak kaydırma yapılır.
 * Menü linklerine tıklanınca  ilgili bölüme yumuşak geçiş sağlanır.

### 2️⃣ Navigasyon Efektleri

* Menüye fareyle gelindiğinde, diğer menü bağlantıları ve logo soluklaşır (fade animation).
* Sayfa kaydırıldığında, navigasyon çubuğu yapışkan hale gelir (sticky navigation).
* Intersection Observer API kullanılarak belirli bir eşik değerine ulaşıldığında sticky navigation devreye girer.

### 3️⃣ Tab Alanı (Tabbed Component)

* Farklı sekmelere tıklanınca içerik değişir.
* Event delegation kullanılarak gereksiz event listener'lar önlenmiştir.

### 4️⃣ Bölüm Açma (Reveal Sections)

* Kullanıcı sayfayı aşağı kaydırdıkça, gizlenmiş bölümler yavaşça görünür hale gelir.
* Intersection Observer API ile bölümler section--hidden sınıfı kaldırılarak açılır.

### 5️⃣ Lazy Loading Görseller

* Sayfa performansını artırmak için, resimler başlangıçta düşük kaliteli gösterilir.
* Kullanıcı ilgili bölüme geldiğinde, yüksek kaliteli resimler yüklenir.
* data-src özelliği kullanılarak görseller dinamik olarak değiştirilir.

### 6️⃣ Slider Bileşeni

* Slaytlar arasında gezinmek için sağ ve sol ok butonları eklenmiştir.
* Klavye yön tuşları ile slayt geçişleri yapılabilir.
* Alt kısımda nokta navigasyonu bulunur; ilgili noktaya tıklanınca ilgili slayta geçiş sağlanır.

## 📂 Kurulum

 1️⃣ Projeyi Klonlayın:
```
 git clone https://github.com/gozgirfaruk/Bankist.git
 cd bankist
```
 2️⃣ Dosyaları Açın ve index.html'yi Çalıştırın.

## 🛠 Kullanılan Teknolojiler

* HTML – Yapısal tasarım

* CSS – Görsel stil ve düzen

* JavaScript (ES6+) – Dinamik etkileşimler

* Intersection Observer API – Görsellerin yüklenmesini optimize etmek için

* Event Delegation – Performansı artırmak için

  
## 📸 Proje Görselleri
![bankist1](https://github.com/user-attachments/assets/2c72c293-46d9-457a-a1a7-9b7354403bc2)
![bankist3](https://github.com/user-attachments/assets/e0e825ba-91f0-40d4-b786-a29afe5d0411)
![bankist4](https://github.com/user-attachments/assets/79386043-ee2d-4bb0-8532-98634535266f)
