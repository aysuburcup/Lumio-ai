# Lumio AI

> Çocukların duygularını tanımasına, ifade etmesine yardımcı olan ve riskli durumları erken tespit eden yapay zeka destekli web uygulaması.

## Problem

Türkiye’de ve dünyada milyonlarca çocuk duygularını tanımakta ve ifade etmekte zorlanıyor. Okullarda rehberlik kapasitesi sınırlı, psikolojik destek hizmetlerine erişim yetersiz ve erken müdahale mekanizmaları neredeyse hiç yok. Bu durum; zorbalık, içe kapanma, kaygı bozukluğu ve depresyon gibi ciddi sonuçlara yol açıyor.

## Çözüm

Lumio AI, çocuklarla emoji, yazı ve sohbet aracılığıyla etkileşime girerek duygusal durumlarını analiz eden bir erken uyarı sistemidir. Uygulama:

- **Duygu takibi** yaparak çocuğun günlük ruh halini kayıt altına alır
- **AI sohbet** ile empatik ve yaşa uygun yanıtlar üretir (5-7, 8-11, 12-14 yaş gruplarına özel)
- **Risk analizi** ile olumsuz duygu örüntülerini tespit eder (3 kademeli: sarı, turuncu, kırmızı)
- **Veli paneli** üzerinden ebeveynlere haftalık duygu özeti ve risk bildirimi sunar
- **Aktiviteler** (nefes egzersizi, etkileşimli hikaye, duygu oyunu, çizim) ile çocuğa anlık destek sağlar

> Sorunu çözmüyoruz — sorunu başlamadan yakalıyoruz.

## Canlı Demo

**Yayın Linki:** [https://lumio-ai-aysuburcups-projects.vercel.app](https://lumio-ai-aysuburcups-projects.vercel.app)

**Demo Video:** [Lumio AI Demo — Loom](https://loom.com/share/lumio-ai-demo) *(video hazırlandığında link güncellenecektir)*

## Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **UI/UX:** Nunito & DM Sans fontları, Responsive tasarım, CSS Custom Properties
- **Tema Sistemi:** Light, Night, Dreamy, Cozy modları
- **AI Entegrasyon:** Kural tabanlı duygu analizi ve risk skorlama motoru
- **Deploy:** Vercel (statik hosting)
- **Versiyon Kontrolü:** Git & GitHub

## Özellikler

- 🧒 **Çocuk Arayüzü** — Büyük butonlar, emoji ağırlıklı, canlı renkler
- 💬 **AI Sohbet** — Yaş grubuna ve duygu durumuna göre empatik yanıtlar
- 🫁 **Nefes Egzersizi** — 4-7-8, Kare Nefes ve Basit teknikler
- 📖 **Etkileşimli Hikaye** — Seçime dayalı duygu hikayesi
- 🎮 **Duygu Oyunu** — Duruma uygun duyguyu eşleştirme
- 🎨 **Çizim Tuvali** — Serbest çizim ile duygu ifadesi
- 👨‍👩‍👧 **Veli Paneli** — PIN korumalı, haftalık duygu grafikleri ve risk göstergesi
- 🔐 **Gizlilik** — Veli sohbet içeriğini göremez, yalnızca örüntü özeti görür
- 🛡 **KVKK Uyumlu** — Ebeveyn onay akışı zorunlu

## Nasıl Çalıştırılır?

### Yerel Geliştirme
1. Repoyu klonlayın:
```bash
git clone https://github.com/aysuburcup/Lumio-ai.git
cd Lumio-ai
```
2. `index.html` dosyasını tarayıcıda açın — herhangi bir kurulum gerektirmez.

### Canlı Versiyon
Doğrudan [https://lumio-ai-aysuburcups-projects.vercel.app](https://lumio-ai-aysuburcups-projects.vercel.app) adresinden kullanabilirsiniz.

## Demo Bilgileri

- **Ebeveyn onay kodu:** Herhangi 4 rakam (örn: 1234)
- **Veli paneli PIN:** 1234

## Proje Yapısı

```
Lumio-ai/
├── index.html          # Ana uygulama (tek dosya)
├── vercel.json         # Vercel deploy yapılandırması
├── idea.md             # Proje fikir dokümanı
├── prd.md              # Ürün gereksinimleri
├── tasks.md            # Geliştirme görev listesi
├── tech-stack.md       # Teknik mimari
├── user-flow.md        # Kullanıcı akışları
├── features/           # Kaynak kodları
├── agents/             # AI agent kodları ve dokümantasyonu
└── assets/             # Görseller ve ekran görüntüleri
```

## Gelecek Özellikler (V2)

- 🎙 Ses analizi (Whisper API)
- ✏️ Çizim analizi (TensorFlow.js)
- 🏫 Öğretmen paneli ve sınıf bazlı raporlama
- 🏅 Gamification: rozet sistemi, avatar gelişimi
- 🇹🇷 Türkçe NLP modelinin fine-tuning ile güçlendirilmesi

---

*Lumio AI — Kadınları Güçlendiren Program, Chapter 3 Projesi*
