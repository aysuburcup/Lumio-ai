# Lumio AI — Tech Stack

---

## Genel Mimari

Lumio AI, üç katmanlı bir web uygulamasıdır: **Frontend** (kullanıcı arayüzü), **Backend** (iş mantığı ve API), **AI Katmanı** (duygu analizi ve yanıt üretme). Tüm kullanıcı verisi şifreli saklanır ve üçüncü taraflarla paylaşılmaz.

---

## Frontend

| Teknoloji | Kullanım Amacı |
|---|---|
| **Next.js 14** | Ana framework — SSR ve routing |
| **React 18** | Bileşen tabanlı UI geliştirme |
| **Tailwind CSS** | Hızlı, tutarlı stil sistemi |
| **Framer Motion** | Çocuk arayüzü animasyonları |
| **Recharts** | Veli paneli duygu grafikleri |

**Neden Next.js?**
- SSR sayesinde ilk yükleme hızlı — çocuk beklemez
- App Router ile çocuk ve veli paneli kolayca ayrıştırılır
- Vercel'e deploy kolay ve ücretsiz (MVP için ideal)

---

## Backend

| Teknoloji | Kullanım Amacı |
|---|---|
| **Node.js** | Sunucu tarafı iş mantığı |
| **Express.js** | REST API endpoint yönetimi |
| **Firebase Authentication** | Kullanıcı kimlik doğrulama |
| **Firebase Cloud Messaging** | Anlık push bildirimler (kırmızı alarm) |

**API Yapısı:**

```
POST /api/session/start        → Günlük oturum başlat
POST /api/emotion/log          → Duygu verisi kaydet
POST /api/chat/message         → AI'a mesaj gönder
GET  /api/parent/summary       → Veli haftalık özeti
GET  /api/parent/risk          → Güncel risk seviyesi
```

---

## Veritabanı

| Teknoloji | Kullanım Amacı |
|---|---|
| **Firebase Firestore** | Kullanıcı profilleri, günlük duygu kayıtları |
| **Firebase Storage** | Aktivite içerikleri (hikayeler, görseller) |

**Veri Modeli (Basit):**

```
users/
  {userId}/
    profile: { age, interests, parentId }
    sessions/
      {date}/
        emotion: "sad"
        riskScore: 4
        riskLevel: "orange"

parents/
  {parentId}/
    children: [userId]
    notifications: [...]
```

**Güvenlik Kuralları:**
- Çocuk yalnızca kendi verisini okuyabilir/yazabilir
- Veli yalnızca `riskLevel` ve `summary` alanlarını okuyabilir
- Sohbet içerikleri (`chatLog`) hiçbir role açık değildir — yalnızca backend okur

---

## AI Katmanı

| Teknoloji | Kullanım Amacı |
|---|---|
| **OpenAI API** (GPT-4o-mini) | Empatik yanıt üretme, duygu sohbeti |
| **Sentiment analizi** | Metin tabanlı duygu sınıflandırma |
| **Risk skoru motoru** | Özel kural tabanlı puanlama sistemi |

**Veri Akışı:**

```
Çocuk mesaj yazar
      ↓
Backend metni alır
      ↓
Risk motoru puanı hesaplar (kural tabanlı — OpenAI'a gönderilmez)
      ↓
Anonim bağlam + prompt → OpenAI API
      ↓
Yanıt çocuğa iletilir
```

> Ham kullanıcı metni OpenAI'a gönderilmez. Yalnızca anonim bağlam ve duygu kategorisi iletilir.

**Risk Skoru Motoru (Kural Tabanlı):**

```javascript
const riskWeights = {
  // Düşük risk
  "üzgün": 1, "mutsuz": 1, "kötü": 1,
  // Orta risk
  "yalnız": 2, "terk": 2, "kimse yok": 2,
  // Yüksek risk
  "korku": 3, "tehlike": 3,
  // Kritik
  "kendime zarar": 5, "şiddet": 5
};

// Eşik değerleri
// 0–2 → sarı | 3–5 → turuncu | 6+ → kırmızı

// Zaman bazlı kural
// 3 gün üst üste turuncu → kırmızıya yükselt
```

**Prompt Sistemi:**

```
System: Sen Lumio adında empatik bir AI asistansın.
        Çocuklarla konuşuyorsun. Yaş: {age}.
        Sade, sıcak ve kısa yanıtlar ver.
        Hiçbir zaman teşhis koyma.

User: [anonim duygu bağlamı + sohbet geçmişi]
```

---

## Bildirim Sistemi

| Teknoloji | Kullanım Amacı |
|---|---|
| **Firebase Cloud Messaging** | Kırmızı alarm push bildirimi |
| **Nodemailer** | E-posta bildirimi (yedek kanal) |

**Bildirim Tetikleyicileri:**

```
riskLevel === "red"     → Anlık push + e-posta
riskLevel === "orange"  → Haftalık özete eklenir
riskLevel === "yellow"  → Sessiz kayıt
```

---

## Deploy & Altyapı

| Teknoloji | Kullanım Amacı |
|---|---|
| **Vercel** | Frontend deploy (Next.js native) |
| **Firebase** | Backend servisleri, auth, DB |
| **GitHub Actions** | CI/CD pipeline |

**MVP Deploy Akışı:**

```
GitHub push → GitHub Actions tetiklenir
                    ↓
             Testler çalışır
                    ↓
             Vercel'e otomatik deploy
```

---

## Güvenlik

| Konu | Yaklaşım |
|---|---|
| Kimlik doğrulama | Firebase Auth — JWT tabanlı |
| Veri şifreleme | Firestore at-rest encryption |
| Çocuk verisi izolasyonu | Firestore güvenlik kuralları ile rol bazlı erişim |
| API anahtarları | `.env` — asla client'a expose edilmez |
| KVKK uyumu | Ebeveyn onay akışı + veri minimizasyonu |

---

## MVP için Maliyet Tahmini

| Servis | Plan | Maliyet |
|---|---|---|
| Vercel | Hobby | Ücretsiz |
| Firebase | Spark (free tier) | Ücretsiz |
| OpenAI API | Pay-as-you-go | ~$5–20 / ay (MVP ölçeği) |
| **Toplam** | | **~$5–20 / ay** |

---

## V2 için Planlanan Eklemeler

| Teknoloji | Amaç |
|---|---|
| **Whisper API** | Ses analizi |
| **TensorFlow.js** | Çizim analizi (canvas) |
| **Türkçe fine-tuned model** | Yerel NLP iyileştirmesi |
| **PostgreSQL** | Ölçek büyüdüğünde Firestore yerine |
