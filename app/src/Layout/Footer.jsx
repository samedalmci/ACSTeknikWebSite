import { Link } from "react-router-dom";
import "/src/index.css";
// ACS Teknik logosunu varsayılan yola göre buraya ekliyoruz
// Lütfen "/src/assets/ACSLogo.png" yolunun projenizde doğru olduğunu doğrulayın.
import ACSLogo from '/src/assets/ACSLogo.png'; 

export default function Footer() {
  return (
    // Arka plan rengi nötr (bg-gray-50) kaldı
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12"> {/* gap-0 -> gap-8 olarak güncellendi */}
          
          {/* LOGO ve ŞİRKET BİLGİSİ */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-serif font-semibold tracking-wide">
                <img
                  src={ACSLogo} // ACS Teknik Logosu
                  alt="ACS TEKNİK Beyaz Eşya ve Klima Çözümleri Logo"
                  className="h-auto w-48 object-contain" // Boyut düzenlemesi yapıldı
                />
              </span>
            </div>
             <p className="text-sm text-gray-600 mt-4">
                Muğla'nın tüm ilçelerine Bosch, Gaggenau, Profilo ve Siemens marka cihazlar için Yetkili Servis hizmeti.
            </p>
          </div>

          {/* NAVİGASYON (Yorum Satırından Çıkarıldı ve Servis Alanlarına Uygun Düzenlendi) */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-blue-900 border-b-2 border-red-600 inline-block pb-1">
              Servis Alanları
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-900 transition-colors">
                  📍 Muğla Merkez
                </Link>
              </li>
              <li>
                <Link to="/bodrum-servis" className="hover:text-blue-900 transition-colors">
                  📍 Bodrum
                </Link>
              </li>
              <li>
                <Link to="/fethiye-servis" className="hover:text-blue-900 transition-colors">
                  📍 Fethiye
                </Link>
              </li>
              <li>
                <Link to="/marmaris-servis" className="hover:text-blue-900 transition-colors">
                  📍 Marmaris
                </Link>
              </li>
              <li>
                <Link to="/koycegiz-servis" className="hover:text-blue-900 transition-colors">
                  📍 Köyceğiz & Ortaca
                </Link>
              </li>
              <li>
                <Link to="/dalaman-servis" className="hover:text-blue-900 transition-colors">
                  📍 Dalaman & Göcek
                </Link>
              </li>
            </ul>
          </div>
          
          {/* HİZMETLER (Yorum Satırından Çıkarıldı ve Hizmetlere Uygun Düzenlendi) */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-blue-900 border-b-2 border-red-600 inline-block pb-1">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link to="/beyaz-esya-servisi" className="hover:text-blue-900 transition-colors">
                  ✨ Beyaz Eşya Servisi
                </Link>
              </li>
              <li>
                <Link to="/klima-servisi" className="hover:text-blue-900 transition-colors">
                  ❄️ Klima Servisi
                </Link>
              </li>
              <li>
                <Link to="/kombi-servisi" className="hover:text-blue-900 transition-colors">
                  🔥 Kombi Servisi
                </Link>
              </li>
              <li>
                <Link to="/garanti-sartlari" className="hover:text-blue-900 transition-colors">
                  📄 Garanti Şartları
                </Link>
              </li>
              <li>
                <Link to="/sikca-sorulanlar" className="hover:text-blue-900 transition-colors">
                  ❓ Sıkça Sorulanlar
                </Link>
              </li>
            </ul>
          </div>

          {/* İLETİŞİM */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-blue-900 border-b-2 border-red-600 inline-block pb-1">
              İletişim
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="mailto:info@acsteknik.com" className="hover:text-red-600 transition-colors">
                  📧 info@acsteknik.com
                </a>
              </li>
              <li>
                <a href="tel:+905551112233" className="font-bold text-lg text-red-600 hover:text-red-700 transition-colors">
                  📞 +90 (544) 673 47 60
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/adresiniz" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                  🗺️ Karaçalı Mah. Celal Bayar Cad. No:67/B Muğla - Dalaman
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* ALT BÖLÜM */}
        <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 ACS TEKNİK Beyaz Eşya ve Klima Çözümleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}