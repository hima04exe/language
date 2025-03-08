 const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage); 
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);

    updateNavText(lang);
    updateBodyText(lang);
    updatePageTitle(lang);
    updateButtonText(lang);
    updateSongTitles(lang);
}

function updateNavText(lang) {
    const translations = {
        en: {
            h1: "International Mother Language Day",
            home: "Home",
            history: "History",
            gallery: "Gallery",
            shahidMinar: "Tribute",
            learn: "Learn",
            melo: "Melodies",
            language: "Language ▼"
        },
        bn: {
            h1: "আন্তর্জাতিক মাতৃভাষা দিবস",
            home: "হোম",
            history: "ইতিহাস",
            gallery: "গ্যালারি",
            shahidMinar: "শ্রদ্ধাঞ্জলি",
            learn: "শিখুন",
            melo: "সুরধারা",
            language: "ভাষা ▼"
        }
    };

    document.querySelector(".h1").innerText = translations[lang].h1;
    document.querySelector("nav ul li:nth-child(1) a").innerText = translations[lang].home;
    document.querySelector("nav ul li:nth-child(2) a").innerText = translations[lang].history;
    document.querySelector("nav ul li:nth-child(3) a").innerText = translations[lang].gallery;
    document.querySelector("nav ul li:nth-child(4) a").innerText = translations[lang].shahidMinar;
    document.querySelector("nav ul li:nth-child(5) a").innerText = translations[lang].learn;
    document.querySelector("nav ul li:nth-child(6) a").innerText = translations[lang].melo;
    document.querySelector(".dropbtn").innerText = translations[lang].language;
}

function updateBodyText(lang) {
    const translations = {
        en: {
            header: "Celebrating International Mother Language Day with Songs",
            intro: "Experience the beauty of language through music. Here are songs that resonate with the spirit of Ekushey February and our rich cultural heritage."
        },
        bn: {
            header: "গানের মাধ্যমে আন্তর্জাতিক মাতৃভাষা দিবস উদযাপন",
            intro: "সংগীতের মাধ্যমে ভাষার সৌন্দর্য উপভোগ করুন। এখানে গানগুলি রয়েছে যা একুশে ফেব্রুয়ারির চেতনা এবং আমাদের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের সাথে মিলে যায়।"
        }
    };

    document.querySelector("header h1").innerText = translations[lang].header;
    document.querySelector("header p").innerText = translations[lang].intro;
}

function updateButtonText(lang) {
    const translations = {
        en: "Play on YouTube",
        bn: "ইউটিউবে চালান"
    };

    document.querySelectorAll(".youtube-btn").forEach(button => {
        button.innerText = translations[lang];
    });
}

function updateSongTitles(lang) {
    const translations = {
        en: [
            "Amar Bhaiyer Rokte Rangano Ekushe February",
            "Ami Banglay Gan Gai",
            "Bangla Vasha",
            "O Amar Desher Mati",
            "Mora Ekti Fulke Bachabo Bole Juddho Kori",
            "Ek Sagor Rokter Binimoye",
            "Ora Amar Mukher Vasha Kaira Nite Chay",
            "Salam Salam, Hajar Salam",
            "Bangla Amar Ohonkar"
        ],
        bn: [
            "আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি",
            "আমি বাংলায় গান গাই",
            "বাংলা ভাষা",
            "ও আমার দেশের মাটি",
            "মোরা একটি ফুলকে বাঁচাবো বলে যুদ্ধ করি",
            "এক সাগর রক্তের বিনিময়ে",
            "ওরা আমার মুখের ভাষা কাইরা নিতে চায়",
            "সালাম সালাম, হাজার সালাম",
            "বাংলা আমার অহংকার"
        ]
    };

    document.querySelectorAll(".song-item h3").forEach((title, index) => {
        title.innerText = translations[lang][index];
    });
}

function updatePageTitle(lang) {
    const pageTitles = {
        en: "International Mother Language Day",
        bn: "আন্তর্জাতিক মাতৃভাষা দিবস"
    };

    document.title = pageTitles[lang];
}
