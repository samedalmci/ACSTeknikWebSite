import React from "react";

// Her bir hizmet kartı için verileri tanımlıyoruz.
// Bu veriler, bileşenin yeniden kullanılabilirliğini artırır.
const services = [
  {
    title: "Bulaşık Makinesi Servisi",
    description:
      "Bulunduğunuz bölgede Bulaşık Makineleriniz için servis ihtiyacı duyduğunuzda Muğla geneli servis ağına sahip firmamızı 7/24 arayabilir ve arıza kaydı oluşturarak destek alabilirsiniz.",
    imageSrc: "/images/Dishwasher.jpg",
  },
  {
    title: "Çamaşır Makinesi Servisi",
    description:
      "Bulunduğunuz bölgede Çamaşır Makineleriniz için servis ihtiyacı duyduğunuzda Muğla geneli servis ağına sahip firmamızı 7/24 arayabilir ve arıza kaydı oluşturarak destek alabilirsiniz.",
    imageSrc: "/images/WashingMachine.jpg",
  },
  {
    title: "Buzdolabı Servisi",
    description:
      "Bulunduğunuz bölgede Buzdolaplarınız için servis ihtiyacı duyduğunuzda Muğla geneli servis ağına sahip firmamızı 7/24 arayabilir ve arıza kaydı oluşturarak destek alabilirsiniz.",
    imageSrc: "/images/Refrigerator.jpg",
  },
  {
    title: "Klima Servisi",
    description:
      "Bulunduğunuz bölgede Klimalarınız için servis ihtiyacı duyduğunuzda Muğla geneli servis ağına sahip firmamızı 7/24 arayabilir ve arıza kaydı oluşturarak destek alabilirsiniz.",
    imageSrc: "/images/AirConditioner.jpg",
  },
  {
    title: "Fırın Servisi",
    description:
      "Bulunduğunuz bölgede Fırınlarınız için servis ihtiyacı duyduğunuzda Muğla geneli servis ağına sahip firmamızı 7/24 arayabilir ve arıza kaydı oluşturarak destek alabilirsiniz.",
    imageSrc: "/images/Oven.jpg",
  },
  {
    title: "Kombi Servisi",
    description:
      "Bulunduğunuz bölgede Kombileriniz için servis ihtiyacı duyduğunuzda Muğla geneli servis ağına sahip firmamızı 7/24 arayabilir ve arıza kaydı oluşturarak destek alabilirsiniz.",
    imageSrc: "/images/Boiler.jpg",
  },
];

// Tek bir hizmet kartını oluşturan alt bileşen
const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    // Kartın kenarlığı ve hover gölgesi kurumsal renklere ayarlandı.
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-900 
                       hover:shadow-red-200 hover:shadow-2xl transition duration-300"
    >
      {/* Kart Görseli */}
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Kart İçeriği */}
      <div className="p-5">
        {/* Başlık rengi koyu maviye ayarlandı */}
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {/* Ekstra: Kartın altında turuncu/kırmızı bir alt çizgi vurgusu eklenebilir */}
      <div className="h-1 bg-red-600"></div>
    </div>
  );
};

export default function MainServices() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gray-50">
      {/* Başlık Bölümü */}
      <div className="text-center mb-12">
        <h2
          // Başlık rengi koyu mavi, alt çizgi rengi turuncu/kırmızı yapıldı.
          className="text-4xl font-extrabold text-blue-900 tracking-tight border-b-4 border-red-600 inline-block pb-1"
        >
          Hizmetlerimiz
        </h2>
      </div>

      {/* Hizmet Kartları Grid Bölümü */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            // NOT: Lütfen aşağıdaki imageSrc değerini kendi görsel yollarınızla değiştirin!
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
