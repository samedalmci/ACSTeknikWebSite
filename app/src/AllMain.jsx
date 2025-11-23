import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServicePageTemplate from './pages/ServicePageTemplate';

// Ana Sayfa Componentleri
import MainHero from './Main/MainHero.jsx';
import MainLocations from './Main/MainLocations.jsx';
import MainPhones from './Main/MainPhones.jsx';
import MainQuality from './Main/MainQuality.jsx';
import MainServices from './Main/MainServices.jsx';

import Contact from './Contact.jsx';

// Ana Sayfa Bileşeni
function HomePage() {
  return (
    <>
        <MainHero />
        <MainServices />
        <MainQuality />
        <MainPhones />
        <MainLocations />
     
    </>
  );
}

export default function AllMain() {
  return (
    <main>
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<HomePage />} />
        
        {/* DİNAMİK ROUTE: Marka ve İlçe ile çalışır */}
        <Route path="/servis/:marka/:ilce" element={<ServicePageTemplate />} />
        
        {/* Sadece Marka ile de çalışsın (ilçe seçilmeden) */}
        <Route path="/servis/:marka" element={<ServicePageTemplate />} />
        
        {/* Eski URL'ler için yönlendirme (opsiyonel) */}
        <Route path="/bosch-servisi" element={<ServicePageTemplate />} />
        <Route path="/siemens-servisi" element={<ServicePageTemplate />} />
        <Route path="/gaggenau-servisi" element={<ServicePageTemplate />} />
        <Route path="/profilo-servisi" element={<ServicePageTemplate />} />
        
        {/* Diğer sayfalarınız */}        
        <Route path="/iletisim" element={<Contact />} />
       
        
        {/* 404 Sayfası */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">Sayfa bulunamadı</p>
              <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        } />
      </Routes>
    </main>
  );
}