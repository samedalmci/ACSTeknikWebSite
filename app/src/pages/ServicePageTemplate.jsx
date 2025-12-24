import { useParams } from "react-router-dom"; // ✅ URL parametrelerini al
import {
  Shield,
  Award,
  Heart,
  Zap,
  Wrench,
  CheckCircle,
  MapPin,
  CreditCard,
  Phone,
  Clock,
  Settings,
  Package,
  ThumbsUp,
} from "lucide-react";

import BeyazEsya2 from "../assets/BeyazEsya2.jpg";

import boschServiceImg1 from "../assets/bosch1.jpg";
import boschServiceImg2 from "../assets/bosch2.jpg";

import siemensServiceImg2 from "../assets/siemensServiceImg2.jpg";

import gaggenau from "../assets/gaggenau.jpg";

import Profilo from "../assets/Profilo.jpg";

// ============================================
// 📋 CONFIG DOSYASI - TÜM MARKALAR BURADA
// ============================================
const brandConfigs = {
  bosch: {
    name: "Bosch",
    slug: "bosch",
    colors: {
      primary: "red-600",
      secondary: "red-700",
      accent: "red-800",
      light: "red-50",
      gradient: "from-red-600 via-red-700 to-red-800",
    },
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    serviceImage1: boschServiceImg1,
    serviceImage2: boschServiceImg2,
  },
  siemens: {
    name: "Siemens",
    slug: "siemens",
    colors: {
      primary: "teal-600",
      secondary: "teal-700",
      accent: "teal-800",
      light: "teal-50",
      gradient: "from-teal-600 via-teal-700 to-teal-800",
    },
    heroImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80",
    serviceImage1: boschServiceImg1,
    serviceImage2: siemensServiceImg2,
  },
  gaggenau: {
    name: "Gaggenau",
    slug: "gaggenau",
    colors: {
      primary: "gray-900",
      secondary: "gray-800",
      accent: "gray-700",
      light: "gray-50",
      gradient: "from-gray-900 via-gray-800 to-gray-700",
    },
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    serviceImage1: boschServiceImg1,
    serviceImage2: gaggenau,
  },
  profilo: {
    name: "Profilo",
    slug: "profilo",
    colors: {
      primary: "blue-600",
      secondary: "blue-700",
      accent: "blue-800",
      light: "blue-50",
      gradient: "from-blue-600 via-blue-700 to-blue-800",
    },
    heroImage:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=1200&q=80",
    serviceImage1: boschServiceImg1,
    serviceImage2: Profilo,
  },
};

// İlçe Listesi
const locations = [
  { name: "Akyaka", slug: "akyaka" },
  { name: "Bodrum", slug: "bodrum" },
  { name: "Dalaman", slug: "dalaman" },
  { name: "Fethiye", slug: "fethiye" },
  { name: "Göcek", slug: "gocek" },
  { name: "Köyceğiz", slug: "koycegiz" },
  { name: "Marmaris", slug: "marmaris" },
  { name: "Menteşe", slug: "mentese" },
  { name: "Milas", slug: "milas" },
  { name: "Muğla", slug: "mugla" },
  { name: "Ortaca", slug: "ortaca" },
  { name: "Yatağan", slug: "yatagan" },
  { name: "Yalıkavak", slug: "yalikavak" },
];

// ============================================
// 🎨 RENK SINIFI EŞLEŞTİRMELERİ (TAILWIND FIX)
// ============================================
const colorClasses = {
  red: {
    bg: "bg-gradient-to-br from-red-500 to-red-600",
    text: "text-red-600",
    lightBg: "bg-red-100",
  },
  teal: {
    bg: "bg-gradient-to-br from-teal-500 to-teal-600",
    text: "text-teal-600",
    lightBg: "bg-teal-100",
  },
  gray: {
    // Gaggenau (gray) için uygun renkler
    bg: "bg-gradient-to-br from-gray-500 to-gray-600",
    text: "text-gray-600",
    lightBg: "bg-gray-100",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500 to-blue-600",
    text: "text-blue-600",
    lightBg: "bg-blue-100",
  },
};

// ============================================
// 🎨 YARDIMCI BILEŞENLER
// ============================================
// DÜZELTİLDİ: Dinamik Tailwind sınıf sorunu giderildi
// eslint-disable-next-line no-unused-vars
const FeatureCard = ({ icon: Icon, title, color }) => {
  const classes = colorClasses[color] || colorClasses.red;

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div
        className={`w-16 h-16 ${classes.bg} rounded-full flex items-center justify-center mb-4 shadow-lg`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
        {title}
      </h3>
    </div>
  );
};

const ServiceHighlightCard = ({
  title,
  description,
  imageSrc,
  color,
  isDark = false,
}) => (
  <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-80">
    <img
      src={imageSrc}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div
      className={`absolute inset-0 ${
        isDark
          ? "bg-gradient-to-t from-black via-black/70 to-black/40"
          : `bg-gradient-to-t from-${color}-900 via-${color}-800/70 to-${color}-700/40`
      }`}
    ></div>

    <div className="relative h-full flex flex-col justify-end p-8">
      <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-gray-100 text-base mb-6 leading-relaxed">
        {description}
      </p>

      <button
        className={`inline-flex items-center gap-2 bg-white text-${color}-600 px-6 py-3 rounded-lg font-semibold hover:bg-${color}-50 transition-all duration-300 shadow-lg hover:shadow-xl w-fit group`}
      >
        <Phone className="w-5 h-5" />
        <span>Servis Çağır</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </div>
  </div>
);

// DÜZELTİLDİ: Dinamik Tailwind sınıf sorunu giderildi
// eslint-disable-next-line no-unused-vars
const AdvantageCard = ({ icon: Icon, title, description, color }) => {
  const classes = colorClasses[color] || colorClasses.red;

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div
        className={`w-16 h-16 ${classes.lightBg} rounded-full flex items-center justify-center mb-6`}
      >
        <Icon className={`w-8 h-8 ${classes.text}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// ============================================
// 🏠 ANA BILEŞEN - URL'DEN PARAMETRE ALIYOR
// ============================================
export default function ServicePageTemplate() {
  const { marka, ilce } = useParams(); // ✅ URL'den marka ve ilçe al

  // URL'den gelen değerleri normalize et
  const selectedBrandSlug = marka || "bosch";
  const selectedLocationSlug = ilce || "akyaka";

  // Brand ve location objelerini bul
  const brand = brandConfigs[selectedBrandSlug] || brandConfigs.bosch;
  const location =
    locations.find((loc) => loc.slug === selectedLocationSlug) || locations[0];

  const color = brand.colors.primary.split("-")[0];

  const features = [
    { icon: Shield, title: "100% Garantili Hizmet" },
    { icon: Package, title: "100% Orijinal Parçalar" },
    { icon: ThumbsUp, title: "100% Çözüm Odaklı" },
    { icon: Heart, title: "100% Memnuniyet" },
    { icon: Zap, title: "100% Hızlı Servis" },
  ];

  const advantages = [
    {
      icon: Settings,
      title: "Orijinal Yedek Parçalar",
      description:
        "Değişimini ve satışını yaptığımız her ürün orijinal ve garantili servis ürünleridir.",
      color: color,
    },
    {
      icon: CheckCircle,
      title: "Garantili Teknik Servis",
      description:
        "Muğla Servisi olarak, beyaz eşyalarınıza uyguladığımız her işlem için 1 yıl garantili hizmet sunuyoruz.",
      color: color,
    },
    {
      icon: MapPin,
      title: "Muğla Geneli Servis",
      description:
        "Muğla geneli hizmet ağı ile siz müşterilerimize kesintisiz hizmet vermekteyiz.",
      color: color,
    },
    {
      icon: CreditCard,
      title: "Kapıda Ödeyin",
      description:
        "Ödemenizi kapıda ödeyerek, yerinde servis hizmetinden kolayca yararlanın.",
      color: color,
    },
  ];

  const steps = [
    {
      title: "Arıza Kaydı Oluşturalım",
      description:
        "0252 502 50 42 veya 0544 673 47 60 çağrı merkezimizi arayarak ürününüzle ilgili arıza kaydı oluşturun.",
    },
    {
      title: "Teslim Alma & Teknik Servis",
      description:
        "Arıza kaydı oluşturduğunuz ürününüzü dilediğiniz adresten alıyor ve işlemlere başlamak için teknik servis bölümümüze götürüyoruz.",
    },
    {
      title: "Teslimat",
      description:
        "Test edilerek teslimata hazır olan ürününüzü dilediğiniz adrese getirerek ve montajını yaparak teslim ediyoruz.",
    },
  ];

  const serviceDescription = `
    ${brand.name}, Türkiye'de hemen hemen her bütçeye ve zevke uygun beyaz eşya ve televizyon üretimi yapan güvenilir bir markadır. Marka sadece üretim değil aynı zamanda ürün satışını da gerçekleştirmektedir. Bu marka, üretiminde bulunduğu eşyalarda kullanıcıların herhangi bir sorunla karşı karşıya kalması durumunda profesyonel teknik servis hizmeti de sunmaktadır.
    
    Marka, sadece garantisi devam eden ürünlerle değil, garantisi süresi dolmuş olan ürünler için de teknik servis göndermektedir. Diğer taraftan bu teknik servislerin amacı sadece arıza gidermek değil aynı zamanda kombi ve klima gibi eşyaların bakımlarını yapmak ve kullanım bilgisi de vermektir. Kişiler hem arıza durumlarında hem de bilgi almak amacıyla ${brand.name} çağrı merkezi ile hızlı ve kolay bir şekilde iletişime geçebilmektedirler.
    
    ${brand.name} teknik servis, Türkiye'nin her şehrinde ve hemen hemen her ilçesinde hizmet vermektedir. Hizmet veren servislerden biri de Muğla / ${location.name}'dır. ${location.name}'da ikamet eden ve ${brand.name} marka eşyalarda arıza ile karşı karşıya kalan kişiler ${brand.name} telefon numarası aracılığıyla yetkili servis ile iletişim kurabilmektedir. ${location.name} ${brand.name} servis gerekli durumda en yakın servis ekibini hızlı bir şekilde tamir işlemi için göndermektedir.
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO BÖLÜMÜ */}
      <div
        className={`relative bg-gradient-to-br ${brand.colors.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
              <Phone className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white font-semibold text-lg">
                7/24 Çağrı Merkezi: 0252 502 50 42
              </span>
            </div>
            {/* 

[Image of service provider]
 */}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 leading-tight">
            {location.name} {brand.name} Servisi
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
            Muğla ve ilçelerinde profesyonel, hızlı ve güvenilir teknik servis
            hizmeti
          </p>
        </div>
      </div>

      {/* ANA İÇERİK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hizmet Açıklaması */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location.name} {brand.name} Servisi
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {serviceDescription
              .trim()
              .split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
          </div>
        </div>

        {/* Garanti Özellikleri */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hizmet Güvencelerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                color={color}
              />
            ))}
          </div>
        </div>

        {/* Servis Kartları */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ServiceHighlightCard
            title="7/24 Acil Servis"
            description="Hafta sonu ve tatil günleri dahil olmak üzere 7/24 acil servis desteği ile yanınızdayız."
            imageSrc={brand.serviceImage1}
            color={color}
            isDark={true}
          />
          <ServiceHighlightCard
            title="Yerinde Teknik Servis"
            description="Kapınıza kadar geliyoruz. Ürünlerinizi siz rahat edin, biz halledelim."
            imageSrc={brand.serviceImage2}
            color={color}
            isDark={true}
          />
        </div>

        {/* Neden Biz? */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600">
              Hizmet Kaliteli, Sorun Çözüm Odaklı
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, index) => (
              <AdvantageCard
                key={index}
                icon={adv.icon}
                title={adv.title}
                description={adv.description}
                color={adv.color}
              />
            ))}
          </div>
        </div>

        {/* 3 Adımda Çözüm */}
        <div
          className={`bg-gradient-to-br ${brand.colors.gradient} rounded-3xl shadow-2xl overflow-hidden`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Sol Kısım */}
            <div
              className={`bg-gradient-to-br from-${brand.colors.secondary} to-${brand.colors.accent} p-8 md:p-12 flex flex-col justify-center text-white`}
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                  <Clock className="w-6 h-6" />
                  <span className="font-semibold text-lg">
                    ÜCRETSİZ ÇAĞRI MERKEZİ
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  MUĞLA VE İLÇELERİNE
                  <br />
                  7/24 SERVİS HİZMETİ
                </h3>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:4448166"
                  className={`flex items-center gap-4 bg-white text-${brand.colors.primary} rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <Phone className="w-8 h-8" />
                  <div>
                    <div className="text-sm font-medium opacity-75">
                      Çağrı Merkezi
                    </div>
                    <div className="text-2xl font-bold"> 0252 502 50 42 </div>
                  </div>
                </a>

                <a
                  href="tel:02526921020"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl p-6 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-8 h-8" />
                  <div>
                    <div className="text-sm font-medium opacity-90">
                      Alternatif Hat
                    </div>
                    <div className="text-2xl font-bold">0544 673 47 60</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Sağ Kısım */}
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                3 Adımda Çözüme Ulaşın
              </h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${brand.colors.primary} to-${brand.colors.secondary} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
