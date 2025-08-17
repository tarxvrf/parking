import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="relative text-black ">
      <Image
        width={1080}
        height={275}
        alt="GB Parking"
        className="absolute inset-0 w-full h-full sm:h-auto object-cover opacity-50 sm:opacity-95 "
        src={"/images/footer2.png"}
      />
     

      <div className="relative z-10 py-6  max-w-7xl mx-auto lg:pt-20 pt-5 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="px-2 md:pl-2">
            <h4 className="text-black font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-amber-500 transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Kontak</h4>
            <p className="text-black text-sm">
              Green Park Office View RD 05, Jl. Daan Mogot Raya KM 14,
              Cengkareng, Jakarta Barat
            </p>
            <p className="mt-3 text-black text-sm">
              📞{" "}
              <a href="tel:+622112345678" className="hover:text-white">
                +62 21 1234 5678
              </a>
              📧{" "}
              <a
                href="mailto:info@gb-parking.co.id"
                className="hover:text-white"
              >
                info@gb-parking.co.id
              </a>
            </p>
          </div>

          <div className="pb-6">
            <h4 className="text-black font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.92c-1.505 0-1.797.716-1.797 1.765v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569a10.004 10.004 0 01-2.825.775 4.93 4.93 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482 13.978 13.978 0 01-10.15-5.14 4.822 4.822 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.061a4.922 4.922 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.933 4.933 0 004.604 3.419 9.868 9.868 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.069a13.955 13.955 0 007.548 2.212c9.057 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.637a10.004 10.004 0 002.462-2.548z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
