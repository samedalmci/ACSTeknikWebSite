import React from "react";
import { Link } from "react-router-dom"; 

import { PRIMARY_NAVIGATION } from "../Data/navData.js";
import DropdownMenu from "./DropdownMenu.jsx"; 

export default function Header() {
    return (
        <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-[100]">
            <div className="container mx-auto px4 py-0 flex items-center justify-between relative">
                
                {/* Logo (Boyutlar Korundu) */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/src/assets/ACSLogo.png"
                        alt="ACS Logo"
                        className="h-25 w-60 object-contain" // Orijinal boyut korundu
                    />
                </Link>

                {/* Navigation (Haritalanmış Menü) */}
                <nav className="hidden md:flex items-center gap-8 relative">
                    {PRIMARY_NAVIGATION.map((item, index) => {
                        
                        // Sadece renk sınıfları güncellendi:
                        // Normal: Koyu Kurumsal Mavi (text-blue-900)
                        // Hover: Kurumsal Vurgu Rengi (hover:text-red-600)
                        const baseClasses = "text-sm font-medium text-blue-900 hover:text-red-600 transition-colors";
                        
                        
                        if (item.type === 'dropdown') {
                            return (
                                <DropdownMenu key={index} item={item} />
                            );
                        } 
                        
                        
                        if (item.type === 'link') {
                            return (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className={baseClasses} // Yeni kurumsal renk sınıfları
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                        
                        return null;
                    })}
                </nav>
            </div>
        </header>
    );
}