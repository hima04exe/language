 const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage); 
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);

    updateNavText(lang);
    updateBodyText(lang);
    updatePageTitle(lang);
    updateContainerText(lang); 
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
            heading: "Celebrate Linguistic Diversity and Explore Language",
            content: "Language connects us, shapes our identities, and enriches our cultures. Discover the beauty of linguistic diversity through our interactive tools. Translate texts into multiple languages with our Language Translator or test your knowledge with engaging flashcards about International Mother Language Day. Start exploring today!"
        },
        bn: {
            heading: "ভাষার বৈচিত্র্য উদযাপন করুন এবং ভাষা অনুসন্ধান করুন",
            content: "ভাষা আমাদের সংযুক্ত করে, আমাদের পরিচয় গঠন করে এবং আমাদের সংস্কৃতিকে সমৃদ্ধ করে। আমাদের ইন্টারেক্টিভ টুলগুলোর মাধ্যমে ভাষার বৈচিত্র্যের সৌন্দর্য আবিষ্কার করুন। ভাষা অনুবাদক ব্যবহার করে বিভিন্ন ভাষায় পাঠ্য অনুবাদ করুন অথবা ফ্ল্যাশকার্ড এর মাধ্যমে আন্তর্জাতিক মাতৃভাষা দিবস সম্পর্কে আপনার জ্ঞান পরীক্ষা করুন। আজই অনুসন্ধান করুন!"
        }
    };

    document.querySelector("h2").innerText = bodyText[lang].heading;
    document.querySelector("#content").innerText = bodyText[lang].content;
}


function updateContainerText(lang) {
    const containerText = {
        en: {
            translatorHeading: "Language Translator",
            translatorContent: "Translate texts into multiple languages and explore the beauty of linguistic diversity.",
            translatorButton: "Click Here to Go to the Language Translator",
            flashcardsHeading: "Flashcards",
            flashcardsContent: "Learn about International Mother Language Day with interactive flashcards.",
            flashcardsButton: "Click Here to Go to the Flashcards"
        },
        bn: {
            translatorHeading: "ভাষা অনুবাদক",
            translatorContent: "বিভিন্ন ভাষায় পাঠ্য অনুবাদ করুন এবং ভাষার বৈচিত্র্যের সৌন্দর্য আবিষ্কার করুন।",
            translatorButton: "ভাষা অনুবাদক এ যেতে এখানে ক্লিক করুন",
            flashcardsHeading: "ফ্ল্যাশকার্ড",
            flashcardsContent: "আন্তর্জাতিক মাতৃভাষা দিবস সম্পর্কে ইন্টারেক্টিভ ফ্ল্যাশকার্ড এর মাধ্যমে শিখুন।",
            flashcardsButton: "ফ্ল্যাশকার্ড এ যেতে এখানে ক্লিক করুন"
        }
    };

   
    document.querySelector("#hh").innerText = containerText[lang].translatorHeading;
    document.querySelector("#p").innerText = containerText[lang].translatorContent;
    document.querySelector(".left .btn").innerText = containerText[lang].translatorButton;

    
    document.querySelector("#hhh").innerText = containerText[lang].flashcardsHeading;
    document.querySelector("#pp").innerText = containerText[lang].flashcardsContent;
    document.querySelector(".right .btn").innerText = containerText[lang].flashcardsButton;
}
