# Kur'an-ı Kerim – Statik HTML

Bu proje, **Kur'an-ı Kerim**'in tamamını (114 sûre) **Arapça metin + Türkçe çeviri (Elmalılı Hamdi Yazır)** ile statik HTML dosyaları olarak sunar.

## 📂 Yapı

```
quran-static/
├─ index.html              # Tüm sûrelerin listesi
├─ assets/
│  └─ style.css            # Stil dosyası
└─ surah/
   ├─ 001-al-fatihah.html
   ├─ 002-al-baqara.html
   └─ ... (114 adet)
```

## 🚀 Kullanım

### 1. Elmalılı çeviri ID'sini kontrol et
```bash
curl "https://api.quran.com/api/v4/resources/translations?language=tr"
```
**Muhtemel ID**: `77` (Elmalılı Hamdi Yazır)

### 2. Generator'ı çalıştır
```bash
node generate-quran-html.js
```

### 3. Oluşturulan dosyaları aç
```bash
open quran-static/index.html
```

## 📖 Veri Kaynağı

- **Arapça metin**: [Quran.com API](https://api.quran.com)
- **Türkçe çeviri**: Elmalılı Hamdi Yazır (ID: 77)

## 📜 Lisans

Bu proje sadece **eğitim ve kişisel kullanım** içindir.  
Quran.com API'si ve Elmalılı çevirisi için ilgili telif hakkı sahiplerinin lisans koşullarına uyulmalıdır.

---

**Not**: Generator çalıştırıldığında tüm 114 sûre API'den çekilerek statik HTML dosyaları üretilir.