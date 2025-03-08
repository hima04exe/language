const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage); 
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);

    updateNavText(lang);
    updateBodyText(lang);
    updatePageTitle(lang);
}

function updateNavText(lang) {
    const translations = {
        en: {
            h1: "International Mother Language Day",
            home: "Home",
            history: "History",
            gallery:"Gallery",
            shahidMinar: "Tribute",
            learn:"Learn",
            melo:"Melodies",
            language: "Language ▼"
        },
        bn: {
            h1: "আন্তর্জাতিক মাতৃভাষা দিবস",
            home: "হোম",
            history: "ইতিহাস",
            gallery:"গ্যালারি",
            shahidMinar: "শ্রদ্ধাঞ্জলি",
            learn:"শিখুন",
            melo:"সুরধারা",
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


function updatePageTitle(lang) {
    const pageTitles = {
        en: "International Mother Language Day",
        bn: "আন্তর্জাতিক মাতৃভাষা দিবস"
    };

    document.title = pageTitles[lang];
}

function updateBodyText(lang) {
    const bodyText = {
        en: {
            heading: "Gallery of International Mother Language Day Celebration",
            content: "Browse through this collection of images celebrating International Mother Language Day"
        },
        bn: {
            heading: "আন্তর্জাতিক মাতৃভাষা দিবস উদযাপনের গ্যালারি",
            content: "আন্তর্জাতিক মাতৃভাষা দিবস উদযাপনকারী এই ছবির সংগ্রহটি ব্রাউজ করুন"
        }
    };

    document.querySelector("#heading").innerText = bodyText[lang].heading;
    document.querySelector("#content").innerText = bodyText[lang].content;
};

