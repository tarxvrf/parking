"use client"

export default function FloatingWA() {
 

  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo GB Parking, saya ingin bertanya tentang layanan."
  );
  const href = `https://wa.me/${phone}?text=${message}`;


 

  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        aria-label="Chat WhatsApp"
        className="fixed bottom-15 right-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3
                 bg-green-500 text-white shadow-xl hover:bg-green-600 focus:outline-none
                 focus:ring-4 focus:ring-green-300 transition group"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.48a5.93 5.93 0 0 1-2.65-.73 10.23 10.23 0 0 1-3.25-2.73 5.81 5.81 0 0 1-1.2-2.07c-.22-.58-.03-1 .47-1.36.28-.2.57-.4.86-.59.43-.29.66-.26.93.17.26.41.51.83.76 1.25.22.38.18.72-.12 1.06-.15.17-.32.33-.48.5-.2.2-.2.38-.06.61a6.85 6.85 0 0 0 1.84 2.06 7 7 0 0 0 2.37 1.14c.23.06.4 0 .55-.18.2-.25.4-.5.6-.76.25-.33.56-.4.93-.22.41.2.82.4 1.23.62.39.2.44.48.32.88a3.35 3.35 0 0 1-.35.84c-.32.56-.83.88-1.45 1.05-.36.1-.74.14-1.1.2Z" />
          <path d="M16 3C9.37 3 4 8.36 4 15.01c0 2.44.72 4.71 1.95 6.6L5 29l7.58-1.99a12.1 12.1 0 0 0 3.42.48C22.63 27.5 28 22.14 28 15.5 28 8.86 22.63 3.5 16 3Zm0 22.5c-1.1 0-2.17-.18-3.18-.52l-.46-.15-3.67.96.98-3.54-.24-.37A9.5 9.5 0 1 1 25.5 15c0 5.24-4.26 9.5-9.5 9.5Z" />
        </svg>
        <span className="hidden sm:inline-block font-semibold">WhatsApp</span>
        <span className="absolute -top-1 -right-1 inline-flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>

    </div>
  );
}
