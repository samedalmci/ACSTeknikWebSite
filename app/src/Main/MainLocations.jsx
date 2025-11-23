import React from 'react';
// Mahalle verilerini içe aktarın (Lütfen yolu kontrol edin)
import { mahalleler } from '../Data/serviceData'; 

// İstenen renkler logoya göre güncellendi
const PRIMARY_COLOR = 'text-blue-900'; // Koyu Kurumsal Mavi
const ACCENT_COLOR = 'text-red-600'; // Turuncu/Kırmızı Vurgu

// Tek bir mahalle kartını oluşturan alt bileşen
const NeighborhoodCard = ({ name }) => {
    // Servis adını kısaltmak için ikinci satırı (örneğin "BEYAZ EŞYA SERVİSİ" kısmını) çıkarıyoruz
    const serviceName = name.split('\n')[1] || `${name.split(' ')[0]} Beyaz Eşya Servisi`;
    const mahalleAdi = name.split('\n')[0] || name;

    return (
        <div className="flex flex-col items-center justify-start p-3 text-center transition duration-200 hover:bg-gray-50 rounded">
            {/* Harita İşaretçisi Simgesi (ACCENT_COLOR ile uyumlu - Turuncu/Kırmızı) */}
            <svg 
                className={`w-7 h-7 ${ACCENT_COLOR} mb-1`} 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fillRule="evenodd" d="M11.54 22.351a.607.607 0 0 1-.58.005l-1.428-.707a.913.913 0 0 1-.416-.628l-.053-.339-.011-.115 1.544-2.887a.998.998 0 0 1 .46-.532l1.631-.96a.607.607 0 0 1 .632-.016l1.246.772a.607.607 0 0 1 .288.54l-.066.425a.913.913 0 0 1-.42.632l-1.547.771a.607.607 0 0 1-.58.005l-1.428-.707a.913.913 0 0 1-.416-.628l-.053-.339-.011-.115 1.544-2.887a.998.998 0 0 1 .46-.532l1.631-.96a.607.607 0 0 1 .632-.016l1.246.772a.607.607 0 0 1 .288.54l-.066.425a.913.913 0 0 1-.42.632l-1.547.771a.607.607 0 0 1-.58.005l-1.428-.707a.913.913 0 0 1-.416-.628l-.053-.339-.011-.115 1.544-2.887a.998.998 0 0 1 .46-.532l1.631-.96a.607.607 0 0 1 .632-.016l1.246.772a.607.607 0 0 1 .288.54l-.066.425a.913.913 0 0 1-.42.632z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.14 2.585 7.632 6.138 9.076.096.038.196.059.296.075L12 23l3.566-1.854c.099-.016.198-.037.294-.075C19.415 19.632 22 16.14 22 12c0-5.523-4.477-10-10-10zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" clipRule="evenodd" />
            </svg>

            {/* Mahalle Adı (Koyu Mavi) */}
            <h3 className={`text-sm font-bold ${PRIMARY_COLOR} uppercase leading-tight mb-1`}>
                {mahalleAdi}
            </h3>

            {/* Servis Metni (Nötr Gri) */}
            <p className="text-xs text-gray-600 leading-snug">
                {serviceName.toUpperCase()}
            </p>
        </div>
    );
};

export default function MainLocations() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white"> 

            {/* Ana Başlık (Koyu Mavi) */}
            <div className="text-center mb-12">
                <h2 className={`text-4xl font-extrabold ${PRIMARY_COLOR} tracking-tight`}>
                    Mahalle Bazında Hizmet Bölgelerimiz
                </h2>
                {/* Vurgu Çizgisi (Turuncu/Kırmızı) */}
                <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded"></div> 
                <p className="mt-2 text-lg text-gray-500">
                    Muğla genelinde ilçe ve mahalle bazında verdiğimiz hizmet alanları aşağıdadır.
                </p>
            </div>
            
            {/* İlçe/Bölge Listesi */}
            {Object.entries(mahalleler).map(([ilce, mahalleListesi]) => (
                <div key={ilce} className="mb-12">
                    
                    {/* İlçe Başlığı (Koyu Mavi) */}
                    <h3 className={`text-2xl font-bold text-center ${PRIMARY_COLOR} mb-8 border-b-2 border-dashed border-red-300 pb-3`}> 
                        {ilce}
                    </h3>

                    {/* Mahalle Kartları Grid */}
                    <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-2">
                        {mahalleListesi.map((mahalle, index) => (
                            <NeighborhoodCard 
                                key={index} 
                                // Mahalle adını ve servis metnini (ikinci satırı) tek bir dizede birleştiriyoruz.
                                name={`${mahalle.trim()}\n${ilce.replace(' Servisi', '')} BEYAZ EŞYA SERVİSİ`} 
                            />
                        ))}
                    </div>
                </div>
            ))}

        </section>
    );
}