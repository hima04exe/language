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

function updateBodyText(lang) {
    const bodyText = {
        en: {
            heading: "International Mother Language Day or Martyrs' Day",
            content: "International Mother Language Day or Martyrs' Day is observed on February 21st every year, is a global celebration of linguistic and cultural diversity. Established by UNESCO in 1999, this day honors the right of people to speak, learn, and preserve their native languages. The significance of this day traces back to the Language Movement in Bangladesh, where students sacrificed their lives in 1952 to protect their mother tongue, Bengali. Their struggle became a symbol of linguistic rights worldwide, emphasizing the need to safeguard endangered languages and promote multilingual education. International Mother Language Day serves as a reminder that languages are more than just communication tools—they carry history, identity, and heritage, shaping the cultural fabric of societies."
        },
        bn: {
            heading: "আন্তর্জাতিক মাতৃভাষা দিবস অথবা শহীদ দিবস",
            content: "আন্তর্জাতিক মাতৃভাষা দিবস অথবা শহীদ দিবস প্রতি বছর ২১শে ফেব্রুয়ারি বিশ্বব্যাপী ভাষাগত ও সাংস্কৃতিক বৈচিত্র্যের উৎসব হিসেবে পালিত হয়। ইউনেস্কো ১৯৯৯ সালে এই দিনটি ঘোষণা করে, যা মানুষের নিজস্ব ভাষায় কথা বলার, শেখার এবং সংরক্ষণের অধিকারের প্রতি সম্মান জানায়। এই দিবসের তাৎপর্য বাংলাদেশের ভাষা আন্দোলনের সঙ্গে গভীরভাবে যুক্ত, যেখানে ১৯৫২ সালে ছাত্ররা বাংলাকে মাতৃভাষার মর্যাদা রক্ষার জন্য প্রাণ উৎসর্গ করেছিলেন। তাদের আত্মত্যাগ বিশ্বব্যাপী ভাষাগত অধিকারের প্রতীক হয়ে উঠেছে, যা বিপন্ন ভাষাগুলোর সংরক্ষণ এবং বহুভাষিক শিক্ষার প্রচারের গুরুত্ব তুলে ধরে। আন্তর্জাতিক মাতৃভাষা দিবস আমাদের মনে করিয়ে দেয় যে ভাষা শুধু যোগাযোগের মাধ্যম নয়—এটি ইতিহাস, পরিচয় ও ঐতিহ্যের বাহক, যা সমাজের সাংস্কৃতিক ভিত্তিকে গঠন করে।"
        }
    };

    document.querySelector("h2").innerText = bodyText[lang].heading;
    document.querySelector("#content").innerText = bodyText[lang].content;
}

function updatePageTitle(lang) {
    const pageTitles = {
        en: "International Mother Language Day",
        bn: "আন্তর্জাতিক মাতৃভাষা দিবস"
    };

    document.title = pageTitles[lang];
}

function updateButtonText(lang) {
    const buttonText = {
        en: "Learn more about the history →",
        bn: "ইতিহাস সম্পর্কে আরও জানুন →"
    };

    document.querySelector("#learnMoreButton").innerText = buttonText[lang];
}
