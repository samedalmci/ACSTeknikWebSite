import React, { useState } from 'react'; // 1. Hook'u import et
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function DropdownMenu({ item }) {
    
    // ✅ 2. Hook'u bileşenin BAŞINDA, koşulsuz olarak çağır!
    const [isOpen, setIsOpen] = useState(false); 

    // 3. Koşullu kontrolü Hook çağrısından sonra yap.
    if (!item || item.type !== 'dropdown') {
        return null; 
    }
    
    // Geri kalan kod
    return (
        <div
            className="relative py-4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item.label} 
                <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* Açılır Menü İçeriği */}
            <div
                className={`absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100 transition-all duration-200 ${
                    isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                style={{ zIndex: 200 }}
            >
                {/* Alt Linkleri Haritalama */}
                {item.links && item.links.map((subLink) => (
                    <Link 
                        key={subLink.to} 
                        to={subLink.to} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                        {subLink.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}