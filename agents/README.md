# Agents — Lumio AI

Bu klasör, Lumio AI projesinin otomasyon ve AI agent kodlarını içerir.

## Mevcut Agentlar

### 1. Risk Skoru Motoru
Çocuğun mesajlarını analiz ederek risk seviyesi belirler.

- **Girdi:** Çocuğun metin mesajı + seçilen emoji
- **Çıktı:** Risk skoru (0-10) ve seviye (sarı/turuncu/kırmızı)
- **Yöntem:** Kural tabanlı kelime ağırlıklandırma

### 2. Empati Yanıt Üretici
Çocuğun yaşına ve duygu durumuna göre empatik yanıt üretir.

- **Girdi:** Yaş grubu + duygu kategorisi + kullanıcı mesajı
- **Çıktı:** Yaşa uygun, empatik AI yanıtı
- **Yaş Grupları:** 5-7, 8-11, 12-14

### 3. Aktivite Öneri Sistemi
Duygu durumuna göre uygun aktivite önerir.

- **Girdi:** Tespit edilen duygu
- **Çıktı:** Nefes egzersizi / hikaye / oyun / çizim önerisi

## V2 Planları

- OpenAI API entegrasyonu ile gelişmiş yanıt üretme
- Whisper API ile ses analizi agentı
- TensorFlow.js ile çizim analizi agentı
