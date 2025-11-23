import React from 'react';

// Tüm hizmet bölgeleri ve GÜNCEL iletişim bilgilerini içeren veri yapısı
const serviceRegions = [
    { region: "Akyaka Beyaz Eşya Servisi" },
    { region: "Bodrum Beyaz Eşya Servisi" },
    { region: "Dalaman Beyaz Eşya Servisi" },
    { region: "Fethiye Beyaz Eşya Servisi" },
    { region: "Göcek Beyaz Eşya Servisi" },
    { region: "Köyceğiz Beyaz Eşya Servisi" },
    { region: "Marmaris Beyaz Eşya Servisi" },
    { region: "Menteşe Beyaz Eşya Servisi" },
    { region: "Milas Beyaz Eşya Servisi" },
    { region: "Muğla Beyaz Eşya Servisi" },
    { region: "Ortaca Beyaz Eşya Servisi" },
    { region: "Yatağan Beyaz Eşya Servisi" },
];

const sharedPhones = {
    mobile: "544 673 47 60", // Yeni cep telefonu
    landline: "0252 502 50 42" // Yeni sabit hat
};

// Tek bir bölge kartını oluşturan alt bileşen
const RegionCard = ({ region, phones }) => {
    const cleanPhone2 = phones.mobile.replace(/\s/g, ''); 
    const cleanPhone3 = phones.landline.replace(/\s/g, ''); 

    return (
        // Kartın tamamı, fare üzerine gelindiğinde rengi açılır (logodaki sıcak ton)
        <div
            className="flex flex-col items-center justify-start p-4 text-center group cursor-pointer 
                        hover:bg-red-50 transition duration-200 rounded-lg h-full border border-gray-100" // Kenarlık eklendi
        >
            {/* Telefon Simgesi (Logodaki Koyu Mavi Ton) */}
            <svg 
                className="w-8 h-8 text-blue-900 mb-2 group-hover:text-red-600 transition duration-200" // Mavi simge, üzerine gelince Turuncu/Kırmızı olur
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 
                1.06l-1.548.773a11.037 11.037 0 006.101 6.101l.772-1.549a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            {/* Bölge Adı (Daha Koyu Gri) */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-900">
                {region}
            </h3>

            {/* Telefon Numaraları (Gri, üzerine gelince Turuncu/Kırmızı) */}
            <div className="text-sm font-medium text-gray-600 space-y-1">
                <a href={`tel:${cleanPhone2}`} className="block hover:underline hover:text-red-600">
                    📱 {phones.mobile} (GSM)
                </a>
                <a href={`tel:${cleanPhone3}`} className="block hover:underline hover:text-red-600">
                    ☎️ {phones.landline} (Sabit Hat)
                </a>
            </div>
        </div>
    );
};

export default function MainPhones() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white"> 

            {/* Başlık Bölümü (Logodaki Koyu Mavi Ton) */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
                    Hizmet Bölgelerimiz
                </h2>
                <div className="w-16 h-1 bg-red-600 mx-auto mt-2 rounded"></div> {/* Turuncu/Kırmızı çizgi eklendi */}
            </div>
            
            

            {/* Bölge Kartları Grid Bölümü */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4">
                {serviceRegions.map((item, index) => (
                    <RegionCard 
                        key={index} 
                        region={item.region} 
                        phones={sharedPhones}
                    />
                ))}
            </div>

        </section>
    );
}