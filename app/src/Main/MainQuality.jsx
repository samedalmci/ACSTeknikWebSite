import React from 'react';

// Logodan gelen renkler ile değişkenler güncellendi
const ACCENT_COLOR = 'text-red-600'; // Turuncu/Kırmızı Vurgu
const PRIMARY_COLOR = 'text-blue-900'; // Koyu Kurumsal Mavi

// Neden Bizi Tercih Etmelisiniz? (Avantajlar)
const advantages = [
    {
        title: "Orijinal Yedek Parçalar",
        description: "Değişimini ve satışını yaptığımız her ürün orijinal ve garantili servis ürünleridir.",
        icon: (
            // Simgelerdeki renkler de kurumsal renklerle uyumlu hale getirildi
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.022 12.022 0 005.474 12H3a1 1 0 000 2h.474a12.022 12.022 0 00-.986 6.015A11.955 11.955 0 0112 21.056a11.955 11.955 0 018.618-3.04A12.022 12.022 0 0018.526 14H21a1 1 0 000-2h-2.474a12.022 12.022 0 00-.986-6.015z" />
            </svg>
        )
    },
    {
        title: "Garantili Teknik Servis",
        description: "Muğla Servisi olarak, Beyaz Eşyalarınıza uyguladığımız her işlem için 1 yıl garanti sunuyoruz.",
        icon: (
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.022 12.022 0 005.474 12H3a1 1 0 000 2h.474a12.022 12.022 0 00-.986 6.015A11.955 11.955 0 0112 21.056a11.955 11.955 0 018.618-3.04A12.022 12.022 0 0018.526 14H21a1 1 0 000-2h-2.474a12.022 12.022 0 00-.986-6.015z" />
            </svg>
        )
    },
    {
        title: "Muğla Geneli Servis",
        description: "Muğla geneli hizmet ağı ile siz müşterilerimize hizmet vermekteyiz.",
        icon: (
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0a12.164 12.164 0 00-7.07-2.927M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Kapıda Ödeyin",
        description: "Ödemenizi kapıda ödeyerek, yerinde servis hizmetinden yararlanabilirsiniz.",
        icon: (
            // Bu simgeyi Turuncu/Kırmızı ile uyumlu hale getirelim
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0l4-4m-4 4v2a2 2 0 002 2h6m-4-2H5m2 0H5m4-8a2 2 0 002 2h2m-2-2h2m0 0h2m-2-2a2 2 0 00-2-2H9m4 0v2a2 2 0 002 2h2m-4-2h2m0 0h2" />
            </svg>
        )
    },
];

// Tek bir avantaj kartını oluşturan alt bileşen
const AdvantageCard = ({ title, description, icon }) => (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg transition hover:shadow-xl hover:shadow-red-50"> 
        <div className="flex-shrink-0 pt-1">{icon}</div>
        <div>
            <h4 className={`text-lg font-bold ${PRIMARY_COLOR} mb-1`}>{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

export default function MainQuality() {
    // Görseldeki 3 üst avantaj/özellik
    const topFeatures = [
        {
            title: "Beyaz Eşya Servisi",
            description: "Muğla il ve ilçelerinde her marka ve modelde ki beyaz eşyalarınıza 7/24 teknik servis, bakım, onarım ve montaj hizmeti vermekteyiz.",
            // Icon component'i burada yeniden tanımlanıyor
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-gray-100', // Açık gri arka planı korundu
        },
        {
            title: "7/24 Teknik Servis",
            description: "Bosch - Gaggenau - Profilo ve Siemens beyaz eşyalarınıza 7/24 teknik servis, bakım, onarım ve montaj hizmeti vermekteyiz.",
             icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-gray-100', 
        },
        {
            title: "Deneyimli Teknik Ekip",
            description: "Kendi alanında deneyimli, değişen teknolojik gelişmeleri yakından takip eden, kendini sürekli geliştiren bir ekip ile hizmetinizdeyiz.",
             icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-2V10h2a2 2 0 002-2V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4a2 2 0 002 2h2v10zm-4 0h-2V10h2v10zM8 10V4a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
            ),
            color: 'bg-gray-100', 
        },
    ];

    // Üstteki 3 özelliğin kart yapısı
    const TopFeatureCard = ({ title, description, color, icon }) => (
        // Flash simgesi artık veri yapısından gelen simge ile değiştirildi
        <div className={`p-6 ${color} rounded-lg flex items-start space-x-4 h-full border-t-4 border-red-600`}> {/* Üst çizgi turuncu/kırmızı yapıldı */}
            <div className="flex-shrink-0 bg-blue-900 rounded-full p-2"> {/* Simge arkaplanı koyu mavi yapıldı */}
                {icon}
            </div>
            <div>
                <h4 className={`text-xl font-bold ${PRIMARY_COLOR} mb-2`}>{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
    
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gray-50">

            {/* Üst Özellikler Bölümü (Geniş Kartlar) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {topFeatures.map((feature, index) => (
                    <TopFeatureCard key={index} {...feature} />
                ))}
            </div>

            {/* Ana İçerik Bölümü: Sol Çağrı Merkezi | Sağ Avantajlar */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

                {/* Sol Blok: Ücretsiz Çağrı Merkezi (Koyu Mavi Arka Plan) */}
                <div 
                    className="lg:w-1/3 bg-blue-900 p-8 rounded-lg shadow-xl text-white flex flex-col items-center justify-center relative overflow-hidden" // bg-gray-800 -> bg-blue-900
                    style={{ 
                        // Görsel yerine sade bir renk veya logonun kurumsal mavi tonu kullanıldı
                        // Eğer görsel kullanmak isterseniz, ACS Teknik görselini eklemelisiniz.
                    }}
                >
                    {/* Koyu Overlay kaldırıldı, zira arka plan zaten koyu */}
                    <div className="relative z-10 text-center">
                        <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-red-400"> {/* Turuncu/Kırmızı tonu ile vurgu */}
                            ÜCRETSİZ
                        </h3>
                        <h2 className="text-4xl font-extrabold mb-6">
                            ÇAĞRI MERKEZİ
                        </h2>
                        
                        {/* Simge */}
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"> {/* Arkaplan Turuncu/Kırmızı yapıldı */}
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.113l-1.554.777a10.005 10.005 0 005.688 5.688l.777-1.554a1 1 0 011.113-.502l4.493 1.498A1 1 0 0121 17.72V19a2 2 0 01-2 2h-1M12 12h.01" />
                            </svg>
                        </div>

                        <p className="text-lg font-semibold mb-4 text-gray-300">
                            MUĞLA VE İLÇELERİNE 7/24 KLİMA SERVİSİ
                        </p>

                        {/* Telefon Numaraları */}
                        <a href="tel:4448166" className="block text-4xl font-extrabold bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-lg mb-2">
                            252 502 50 42
                        </a>
                        <a href="tel:02526921020" className="block text-3xl font-bold bg-blue-700 hover:bg-blue-800 transition px-6 py-2 rounded-lg"> {/* Daha açık bir mavi tonu vurgu için */}
                            544 673 47 60
                        </a>
                    </div>
                </div>

                {/* Sağ Blok: Avantajlar Listesi */}
                <div className="lg:w-2/3">
                    <h3 className={`text-base font-semibold ${ACCENT_COLOR} uppercase tracking-wider mb-2`}>
                        Neden bizi tercih etmelisiniz?
                    </h3>
                    <h2 className={`text-4xl font-extrabold ${PRIMARY_COLOR} mb-8`}>
                        Hizmet Kaliteli, Sorun Çözüm Odaklı...
                    </h2>
                    
                    {/* Avantaj Kartları Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {advantages.map((item, index) => (
                            <AdvantageCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}