import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Varsayılan resmi bir değişken olarak tanımlayalım
const defaultImageSrc = "/src/assets/BeyazEsya2.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* YENİ HERO BÖLÜMÜ: GÖRSEL ARKAPLANLI VE MODERN */}
      <div 
        className="relative h-[400px] md:h-[500px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${defaultImageSrc})` }}
      >
        {/* Arka plan karartma katmanı */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              Profesyonel teknik servis hizmetlerimiz hakkında bilgi almak ve hızlı destek için bize ulaşın.
            </p>
            {/* İsteğe bağlı olarak hızlı bir aksiyon butonu eklenebilir */}
            <a 
              href="#contact-info" 
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              İletişim Bilgilerini Gör
            </a>
          </div>
        </div>
      </div>

      {/* İLETİŞİM BİLGİLERİ */}
      <div id="contact-info" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 z-10 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a 
            href="mailto:efeservis1221@gmail.com"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 text-center border border-gray-100 group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">E-posta</h3>
            <p className="text-blue-600 font-semibold text-lg">efeservis1221@gmail.com</p>
          </a>

          {/* Phone 1 - Çağrı Merkezi */}
          <a 
            href="tel:4448166"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 text-center border border-gray-100 group border-4 border-red-500/10"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-red-400/50 transition-shadow">
              <Phone className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7/24 Çağrı Merkezi</h3>
            <p className="text-red-600 font-extrabold text-4xl mb-2">444 8 166</p>
            <p className="text-gray-600 text-sm">Ücretsiz Hızlı Destek Hattı</p>
          </a>

          {/* Phone 2 - Sabit Hat */}
          <a 
            href="tel:02526921020"
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 text-center border border-gray-100 group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sabit Hat</h3>
            <p className="text-blue-600 font-bold text-3xl mb-2">0252 692 1020</p>
            <p className="text-gray-600 text-sm">Muğla Bölge Hattı</p>
          </a>
        </div>
        
        {/* Adres ve Çalışma Saatleri (Ekstra Bilgi) */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100">
            {/* Adres */}
            <div className="bg-white rounded-2xl p-8 shadow-inner border border-gray-100 flex items-start">
                <MapPin className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1 mr-4" />
                <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">Konumumuz</h4>
                    <p className="text-gray-600 text-lg">Muğla ve çevre ilçelerde yerinde servis hizmeti sunmaktayız.</p>
                </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-white rounded-2xl p-8 shadow-inner border border-gray-100 flex items-start">
                <Clock className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1 mr-4" />
                <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">Çalışma Saatleri</h4>
                    <p className="text-gray-600 text-lg">Hafta İçi: 09:00 - 18:00 (Yerinde Servis)</p>
                    <p className="text-gray-600 text-lg">Çağrı Merkezi: 7/24 Hizmetinizde</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}