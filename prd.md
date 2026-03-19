# Lumio AI — Product Requirements Document (PRD)
### Mini Web App — MVP Versiyonu

> **"Lumio AI bir uygulama değil; çocuklar için erken uyarı ve destek sistemidir."**

---

## 1. Ürün Tanımı

Lumio AI, çocukların duygularını tanımasını ve ifade etmesini sağlayan, aynı zamanda riskli duygusal durumları erken tespit ederek gerektiğinde ebeveyn ve öğretmenleri sürece dahil eden yapay zeka destekli bir web uygulamasıdır.

**Temel Amaçlar:**
- Duygusal farkındalık — çocuğun kendini anlamasına yardımcı olmak
- Erken risk tespiti — sorunları başlamadan yakalamak
- Güvenli ve eğlenceli deneyim — çocuğun platforma güvenmesi

---

## 2. Hedef Kullanıcılar

### Çocuk (Ana Kullanıcı) — 5–14 Yaş
- Basit, emoji ağırlıklı, eğlenceli arayüz
- Üç yaş segmentine özel deneyim:
  - **5–7 yaş:** Sadece emoji/renk seçimi
  - **8–11 yaş:** Kısa cümle + emoji kombinasyonu
  - **12–14 yaş:** Günlük yazma + AI sohbet

### Veli
- Sadece davranış örüntüsü özetini görür
- Çocuğun yazdığı metinlere erişimi yoktur
- Risk durumlarında bildirim alır

### Öğretmen / Rehberlik *(MVP Sonrası)*
- Yalnızca kritik (kırmızı) durumlarda sisteme dahil edilir
- V2 kapsamında geliştirilecek

---

## 3. MVP Kapsamı

### Olacak Özellikler
- Ebeveyn onay akışı (KVKK zorunluluğu)
- Yaş seçimi ve onboarding
- Duygu seçimi (emoji + "Bilmiyorum" seçeneği)
- AI sohbet arayüzü
- Basit risk analizi (metin + emoji bazlı)
- Zaman bazlı risk yükseltme kuralı
- Veliye bildirim (sadece kırmızı seviyede)
- Veli paneli — özet ve yönlendirme rehberi

### Olmayacak Özellikler *(İlk Aşamada)*
- Karmaşık ML modeli
- Öğretmen paneli
- Çizim ve ses analizi
- Gamification sistemi (rozetler, avatarlar)

---

## 4. Temel Kullanıcı Akışı

### Adım 0 — Ebeveyn Onayı
> KVKK ve COPPA gereği zorunlu adım.

- Çocuk kayıt ekranında ebeveyn onay adımı tetiklenir
- Ebeveyne SMS/e-posta ile doğrulama kodu gönderilir
- Ebeveyn onay vermeden çocuk hesabı aktif olmaz

### Adım 1 — Giriş (Onboarding)
- "Kaç yaşındasın?" ekranı
- İlgi alanı seçimi (opsiyonel): Oyun / Hayvan / Çizim

### Adım 2 — Ana Ekran
- "Bugün nasıl hissediyorsun?" sorusu
- Emoji seçenekleri: 😊 😢 😡 😨 😐
- **Yeni: 🤷 "Bilmiyorum" seçeneği** — AI konuşmayı başlatır

> "Bilmiyorum" seçeneği özellikle 5–8 yaş grubu için kritik. Çocuk ne hissettiğini bilmiyorsa AI devreye girer: *"Biraz anlatır mısın, bugün ne oldu?"*

### Adım 3 — AI Etkileşimi
- Çocuk emoji seçer veya yazar
- AI empatik ve yaşa uygun dilde yanıt verir
- Örnek: Çocuk "Bugün üzgünüm 😢" → AI: *"Seni üzen bir şey olmuş olabilir… anlatmak ister misin?"*

### Adım 4 — Mikro Aktivite
- AI duygu durumuna göre öneri sunar:
  - Kısa hikaye
  - Mini oyun
  - Nefes egzersizi
- Aktivite alanı aynı zamanda bağımsız da gezilebilir (menüden direkt erişim)

### Adım 5 — Risk Analizi *(Arka Planda)*
- Üzgün kelime sayısı, tekrarlama ve negatif trend izlenir
- Risk seviyesi anlık olarak güncellenir
- **Zaman bazlı kural:** 3 gün üst üste turuncu seviye → sistem otomatik olarak kırmızıya yükseltir

### Adım 6 — Bildirim Sistemi

| Seviye | Renk | Aksiyon |
|---|---|---|
| Düşük | 🟡 Sarı | Kayıt tutulur, bildirim gönderilmez |
| Orta | 🟠 Turuncu | Sistemde kayıt + haftalık özete eklenir |
| Yüksek | 🔴 Kırmızı | Veliye anlık bildirim + uzman yönlendirme |

> **Kritik Kural:** Veli tam metni asla görmez. Yalnızca davranış örüntüsü özeti iletilir: *"Bu hafta kaygı seviyesi arttı."*

---

## 5. AI Fonksiyonları

### 5.1 Duygu Analizi
- Emoji + metin kombinasyonu analizi
- Basit sentiment sınıflandırması: pozitif / nötr / negatif
- Multimodal analiz (V2'de ses ve çizim eklenir)

### 5.2 Yanıt Üretme
Prompt tabanlı sistem — yaş grubuna ve duygu durumuna göre özelleştirilir:
- Çocuk üzgün → empatik, destekleyici yanıt
- Çocuk kızgın → sakinleştirici, yönlendirici yanıt
- Çocuk "Bilmiyorum" dedi → keşfedici soru soran yanıt

### 5.3 Risk Skoru Algoritması

**Kelime Ağırlıkları:**

| İfade / Kelime | Puan | Açıklama |
|---|---|---|
| Üzgün, mutsuz, kötü | +1 | Genel olumsuz |
| Yalnızlık, terk edilme | +2 | Sosyal dışlanma |
| Korku, tehlike ifadeleri | +3 | Kaygı sinyali |
| Şiddet, kendine zarar | +5 | Acil müdahale |

**Risk Seviyeleri:**

| Toplam Puan | Seviye | Aksiyon |
|---|---|---|
| 0–2 | 🟡 Sarı | Haftalık özet |
| 3–5 | 🟠 Turuncu | Anlık kayıt + ebeveyn özeti |
| 6+ | 🔴 Kırmızı | Ebeveyn bildirimi + uzman yönlendirme |

> **Zaman Boyutu:** Anlık puan tek başına yeterli değil. 3 gün üst üste turuncu → otomatik kırmızıya yükseltme.

---

## 6. Sayfalar ve Menü Yapısı

### Ana Sayfa
- "Bugün nasılsın?" duygu seçimi
- Günlük giriş akışı başlatılır

### Sohbet Ekranı
- AI konuşma alanı
- Çocuk mesaj yazar / emoji seçer
- AI anlık yanıt üretir

### Aktivite Alanı
- Bağımsız gezilebilir — menüden direkt erişim
- AI tarafından önerildiğinde otomatik açılır
- İçerik: hikayeler, mini oyunlar, nefes egzersizleri

### Profil
- Yaş ve ilgi alanı bilgileri
- Onboarding tercihleri

### Veli Paneli *(Ayrı Giriş)*
- Haftalık duygu özeti — grafik formatında
- Risk seviyesi göstergesi
- **"Ne yapmalıyım?" rehberi:** Veli kırmızı uyarı aldığında ne yapacağını bilmesi için yönlendirme içeriği ve gerekirse uzman yönlendirme linki sunulur

---

## 7. UX / UI Kuralları

> Çocuk ürünü = farklı tasarım dili. Yetişkin arayüzü kuralları burada geçerli değil.

- Büyük, dokunması kolay butonlar
- Az yazı, çok görsel
- Canlı ve renkli arayüz
- Emoji ağırlıklı iletişim
- Her sayfada maksimum 1 karar noktası
- Sesli opsiyon (V2 — erişilebilirlik için)

---

## 8. Güvenlik ve Etik

### Veri Gizliliği
- Çocuk verisi şifreli saklanır
- Veli tam mesajı göremez, yalnızca analiz sonucunu görür
- Kırmızı alarm dışında hiçbir içerik paylaşılmaz
- KVKK uyumlu sistem — ebeveyn onayı zorunlu

### OpenAI API Güvenliği
> Kullanıcı verileri OpenAI'a ham metin olarak gönderilmez. Yalnızca anonim sentiment skoru işlenir. Veri hiçbir zaman üçüncü tarafa açılmaz.

### Sistem Tanımı
> Lumio AI bir teşhis aracı değil, erken sinyal sistemidir. Psikolog yerine geçmez — psikolog gerektiğinde harekete geçirir.

---

## 9. Teknik Mimari

| Katman | Teknoloji |
|---|---|
| Frontend | React / Next.js |
| Backend | Node.js / Firebase |
| AI | OpenAI API (chat + sentiment) |
| Veritabanı | Firebase / MongoDB |
| Bildirim | Firebase Cloud Messaging |

---

## 10. Başarı Metrikleri

| Metrik | Açıklama |
|---|---|
| Günlük aktif kullanıcı | DAU — platforma düzenli dönüş |
| Günlük giriş sayısı | Ortalama oturum başına giriş |
| Ortalama kullanım süresi | Bağlılık göstergesi |
| Risk tespit sayısı | Kaç vaka tespit edildi |
| Yanlış pozitif oranı | Sistem kaç kez gereksiz kırmızı uyarı verdi — hedef: %10 altı |

---

## 11. Gelecek Özellikler — V2

- Ses analizi
- Çizim analizi
- Öğretmen paneli ve sınıf bazlı raporlama
- Okul entegrasyonu — rehberlik servisi API bağlantısı
- Gamification: rozet sistemi, avatar gelişimi, günlük görevler
- Türkçe NLP modelinin fine-tuning ile güçlendirilmesi

---

## Son Özet

Lumio AI:
- Çocukla konuşur
- Duyguyu anlar
- Riski analiz eder
- Gerekirse aksiyon alır

> **"Sorunu çözmüyoruz — sorunu başlamadan yakalıyoruz."**
