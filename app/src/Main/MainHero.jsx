import React from "react";

export default function MainHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image - Tam Ekranı Kaplar */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/MainHero.jpg"
          alt="Servis Görseli"
          className="w-full h-full object-cover"
        />

        {/* YENİ: Tüm alanı kaplayan Degrade Sis Katmanı */}
        <div
          className="absolute inset-0"
          style={{
            // Radyal Degrade: Merkezde koyu mavi (%80), kenarlara doğru şeffaf (%20'ye kadar düşebilir)
            // Bütün alanda daha belirgin bir koyuluk için şeffaflığı tamamen kaldırmayalım.
            backgroundImage:
              "radial-gradient(circle at center, rgba(42, 84, 153, 0.8) 0%, rgba(42, 84, 153, 0.2) 100%)",
            // Ya da daha koyu bir Viyana Vurgusu efekti (kenarları daha koyu):
            // backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)'
            // İlk seçenek (Mavi degrade) kurumsal kimliğe daha uygun.
          }}
        ></div>
      </div>

      {/* Content - Artık Sis efekti Content'in arkasındaki Background'da */}
      <div className="relative z-10 px-12 max-w-3xl flex flex-col justify-center items-start h-full">
        {/* Content Z-index'i yüksek kaldı */}

        <h2 className="text-left text-lg md:text-xl font-semibold text-red-400 mb-2 tracking-wide">
          Muğla Geneli Teknik Servis
        </h2>

        <h1 className="text-left text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Bosch – Gaggenau – Profilo – Siemens
          <br />
          Yetkili Servis Hizmetleri
        </h1>

        <p className="text-left text-lg md:text-xl font-light mb-10 leading-relaxed text-gray-200">
          Bosch, Gaggenau, Profilo ve Siemens marka beyaz eşyalarınız için Muğla
          genelinde 7/24 hızlı teknik servis desteği sunuyoruz. Hemen arayarak
          arıza kaydı oluşturabilirsiniz.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="tel:+905551112233"
            className="border-2 border-white text-white font-medium px-8 py-4 rounded-md text-base hover:bg-white/10 transition shadow-lg"
          >
            📞 Telefon Et
          </a>
          <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-md text-base font-medium hover:bg-green-600 transition shadow-lg"
          >
            💬 WhatsApp ile İletişim
          </a>
        </div>
      </div>
    </section>
  );
}
