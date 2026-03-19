# Lumio AI — User Flow

---

## Kullanıcı Grupları

Lumio AI'ın iki aktif kullanıcı grubu vardır: **Çocuk** (ana kullanıcı) ve **Veli**. Öğretmen paneli V2 kapsamındadır.

---

## 1. Çocuk Akışı

### 1.1 İlk Kez Açılış (Onboarding)

**Adım 1 — Karşılama Ekranı**
Kullanıcı uygulamayı açar. Renkli, animasyonlu bir karşılama ekranı görür.
→ "Merhaba! Ben Lumio. Seninle tanışmak istiyorum 🌟"

**Adım 2 — Ebeveyn Onayı**
"Devam etmek için bir ebeveyninden izin alalım" ekranı açılır.
→ Ebeveyn e-posta veya telefon numarasını girer, doğrulama kodu alır ve onaylar.
→ Onay tamamlanınca çocuk akışı devam eder.

> KVKK ve COPPA gereği zorunlu adım. Ebeveyn onayı olmadan hesap aktif olmaz.

**Adım 3 — Yaş Seçimi**
"Kaç yaşındasın?" ekranı gelir. Büyük rakam butonları gösterilir.
→ Çocuk yaşını seçer. Arayüz yaşa göre otomatik uyarlanır:
- 5–7 yaş: Sadece emoji/renk seçimi
- 8–11 yaş: Kısa cümle + emoji kombinasyonu
- 12–14 yaş: Günlük yazma + AI sohbet

**Adım 4 — İlgi Alanı Seçimi**
"En çok neyi seversin?" sorusu gelir.
→ 🎮 Oyun / 🐶 Hayvanlar / 🎨 Çizim seçeneklerinden birini seçer.
→ Sonuç: Hesap oluşturulur, ana ekrana geçilir.

---

### 1.2 Her Günkü Normal Akış

**Adım 5 — Ana Ekran**
Çocuk uygulamayı açar:
→ "Bugün nasıl hissediyorsun?" sorusu
→ 5 büyük emoji: 😊 😢 😡 😨 😐
→ 🤷 "Bilmiyorum" seçeneği

**Adım 6 — Duygu Seçimi**

*Senaryo A — Emoji seçer:*
Çocuk 😢 üzgün emojisine tıklar.
→ AI: *"Seni üzen bir şey mi oldu? Anlatmak ister misin?"*

*Senaryo B — Yazar:*
Çocuk metin kutusuna "Bugün arkadaşım benimle konuşmadı" yazar.
→ AI metni analiz eder, empatik yanıt üretir.

*Senaryo C — Bilmiyorum:*
Çocuk 🤷 seçer.
→ AI: *"Tamam, birlikte bakalım. Bugün okul nasıldı?"*

**Adım 7 — AI Sohbeti**
Çocuk AI ile kısa bir sohbet eder. AI her yanıtta:
- Yaşa uygun, sade bir dil kullanır
- Empatik ve yargılamayan bir ton benimser
- 2–3 mesajdan uzun tutmaz

**Adım 8 — Mikro Aktivite Önerisi**
Sohbetin sonunda AI bir aktivite önerir:
- 😢 Üzgünse → "Seninle kısa bir hikaye okumak ister misin?"
- 😡 Kızgınsa → "Birlikte 3 derin nefes alalım mı?"
- 😨 Korktuysa → "Sana çok güzel bir şey göstermek istiyorum 🌈"

**Adım 9 — Aktivite**
Çocuk evet derse aktivite ekranı açılır.
→ Hikaye, mini oyun veya nefes egzersizi tamamlanır.
→ Tamamlanınca kutlama animasyonu: *"Harika! Bugün kendine iyi baktın ⭐"*

**Adım 10 — Günlük Kapanış**
Ana ekrana döner. Günlük giriş tamamlandı rozeti görünür.
→ "Yarın görüşürüz 🌙" mesajıyla oturum kapanır.

---

### 1.3 Arka Plan (Çocuk Görmez)

| Adım | Ne oluyor |
|---|---|
| Duygu seçilince | Risk skoru hesaplanmaya başlar |
| Sohbet boyunca | Kelime analizi yapılır, skor güncellenir |
| Oturum kapanınca | Günlük veri kaydedilir |
| 3 gün üst üste turuncu | Otomatik kırmızıya yükseltilir |
| Kırmızı seviyeye ulaşınca | Veliye bildirim gönderilir |

> Çocuk hiçbir zaman "analiz ediliyor" hissine kapılmaz. Onun için bu sadece Lumio ile günlük sohbettir.

---

## 2. Veli Akışı

### 2.1 İlk Kez Açılış (Onboarding)

**Adım 1 — Veli Girişi**
Veli uygulamayı açar:
→ "Çocuk Girişi" / "Ebeveyn Girişi" seçeneği görünür.
→ "Ebeveyn Girişi"ne tıklar.

**Adım 2 — Hesap Oluşturma**
Ad, e-posta ve şifre girer.
→ E-posta doğrulaması yapılır.

**Adım 3 — Çocuk Hesabını Bağlama**
- Çocuk henüz kayıtlı değilse → davet kodu oluşturulur
- Çocuk zaten kayıtlıysa → onboarding sırasındaki onay kodu ile bağlantı otomatik kurulur

→ Sonuç: Veli paneli açılır.

---

### 2.2 Her Günkü Normal Akış

**Adım 4 — Panel Ana Ekranı**
Veli uygulamayı açar:
- Çocuğun bu haftaki genel duygu durumu (grafik)
- Son 7 günün duygu özeti
- Aktif risk seviyesi göstergesi (🟡 / 🟠 / 🔴)
- "Bu hafta nasıldı?" kısa özet kartı

**Adım 5 — Haftalık Özet**
Veli özet kartına tıklar:
→ Hangi duygular ne sıklıkta seçildi (pasta grafik)
→ En çok hangi günlerde giriş yapıldı
→ AI gözlemi: *"Bu hafta üzgünlük ifadeleri önceki haftaya göre arttı."*

> Veli burada yalnızca örüntüyü görür. Çocuğun yazdığı metinlere veya sohbet içeriğine erişimi yoktur.

---

### 2.3 Bildirim Akışı

**Senaryo A — Sarı (Düşük Risk)**
Veli hiçbir bildirim almaz.
→ Haftalık özette sarı gösterge görünür.

**Senaryo B — Turuncu (Orta Risk)**
Veli haftalık özette uyarı kartı görür:
→ *"Bu hafta bazı olumsuz duygular tekrarlandı. Çocuğunuzla vakit geçirmeniz faydalı olabilir."*
→ "Ne yapabilirim?" bölümü açılır.

**Senaryo C — Kırmızı (Yüksek Risk)**
Veli anlık push bildirimi alır.
→ Uygulamayı açınca kırmızı uyarı kartı ve "Ne yapmalıyım?" rehberi görünür.

---

### 2.4 "Ne Yapmalıyım?" Rehberi

**Turuncu için:**
- *"Bugün nasılsın diye sorun, cevabı için acele etmeyin."*
- *"Birlikte yemek yemek veya film izlemek bağı güçlendirir."*
- *"Okul ortamında bir sorun olup olmadığını nazikçe araştırabilirsiniz."*

**Kırmızı için:**
- *"Çocuğunuzla sakin bir ortamda bire bir konuşun."*
- *"Bir uzmandan destek almayı düşünebilirsiniz."*
- → "Uzman Bul" butonu — çocuk psikologu yönlendirme sayfası

---

### 2.5 Arka Plan (Veli Görmez)

| Durum | Ne oluyor |
|---|---|
| Çocuk her giriş yaptığında | Veri şifreli olarak kaydedilir |
| Sohbet içerikleri | Veliye hiçbir zaman iletilmez |
| Risk skoru hesaplanırken | Sadece örüntü ve sonuç veliye yansır |
| Kırmızı seviyeye ulaşınca | Sistem otomatik bildirim gönderir |

---

## 3. İki Akışın Bağlantısı

```
Çocuk duygu seçer
        ↓
AI analiz eder (arka planda)
        ↓
Risk skoru güncellenir
        ↓
Sarı    → Veli habersiz, haftalık özette görünür
Turuncu → Haftalık özette uyarı kartı
Kırmızı → Anlık bildirim + "Ne yapmalıyım?" rehberi
```

> Veli sistemi bir gözetleme aracı olarak değil, bir destek rehberi olarak deneyimler. Çocuğu izlemez — çocuğuna nasıl yaklaşacağını öğrenir.
