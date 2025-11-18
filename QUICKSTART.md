# Kampüsten - Hızlı Başlangıç Kılavuzu

## Kurulum (3 Adım)

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Sunucuyu Başlatın
```bash
npm start
```

### 3. Tarayıcıda Açın
```
http://localhost:3000
```

## İlk Kullanım

### Admin Girişi
- **URL**: http://localhost:3000/admin-login.html
- **E-posta**: kampustenozelders@gmail.com
- **Şifre**: Kampus.3435

### Test Senaryosu

1. **Admin olarak giriş yapın**
   - Yeni bir kamp oluşturun
   - Fiyat belirleyin

2. **Öğretmen kaydı yapın** (yeni sekmede)
   - http://localhost:3000/teacher-register.html
   - Tüm bilgileri doldurun
   - Profil fotoğrafı yükleyin (isteğe bağlı)

3. **Admin paneline dönün**
   - Öğretmeni onaylayın
   - "Öğretmen Yönetimi" sekmesinden "Onayla" butonuna tıklayın

4. **Öğretmen olarak giriş yapın**
   - http://localhost:3000/teacher-login.html
   - Kendinizi bir kampa atayın
   - Sınıf adı verin
   - İçerik yükleyin

5. **Öğrenci kaydı yapın**
   - http://localhost:3000/student-register.html
   - E-posta, telefon ve şifre girin

6. **Öğrenci olarak giriş yapın**
   - Bir kampa kayıt olun
   - Öğretmen seçin
   - İçerikleri görüntüleyin

## Önemli Notlar

- Veritabanı (`kampusten.db`) ilk çalıştırmada otomatik oluşturulur
- Yüklenen dosyalar `uploads/` klasöründe saklanır
- Admin hesabı otomatik oluşturulur
- Öğretmen kayıtları admin onayı gerektirir

## Sorun Giderme

### Port zaten kullanılıyor
`server.js` dosyasında PORT değerini değiştirin (varsayılan: 3000)

### Dosya yükleme çalışmıyor
`uploads/` klasörünün yazma izni olduğundan emin olun

### Veritabanı hatası
`data/db.json` dosyasını silin ve sunucuyu yeniden başlatın (tüm veriler silinir)

## Geliştirme Modu

Otomatik yeniden başlatma için:
```bash
npm run dev
```

Not: `nodemon` paketinin yüklü olması gerekir.

