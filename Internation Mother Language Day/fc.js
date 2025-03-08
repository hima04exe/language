 const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage);
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);

    updateNavText(lang);
    updatePageTitle(lang);
    updateBodyText(lang);
    loadFlashcards(lang); 
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
            melo:"Melodies",
            language: "Language ▼"
        },
        bn: {
            h1: "আন্তর্জাতিক মাতৃভাষা দিবস",
            home: "হোম",
            history: "ইতিহাস",
            gallery: "গ্যালারি",
            shahidMinar: "শ্রদ্ধাঞ্জলি",
            learn: "শিখুন",
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
            heading: "Explore Mother Language History with Fun & Engaging Flashcards",
            content: "Dive into the rich history of International Mother Language Day through our interactive flashcards! Test your knowledge, discover new facts, and enjoy an exciting learning experience. Whether you're a student or a curious mind, these flashcards will make learning both fun and meaningful. Start exploring now and celebrate linguistic diversity!"
        },
        bn: {
            heading: "মজার ও আকর্ষণীয় ফ্ল্যাশকার্ডে মাতৃভাষার ইতিহাস জানুন",
            content: "আমাদের ইন্টারএকটিভ ফ্ল্যাশকার্ডের মাধ্যমে আন্তর্জাতিক মাতৃভাষা দিবসের সমৃদ্ধ ইতিহাস জানুন! আপনার জ্ঞান পরীক্ষা করুন, নতুন তথ্য আবিষ্কার করুন এবং শিখুন এক নতুন উপায়ে। আপনি যদি ছাত্র হন বা কৌতূহলী মন নিয়ে জানতে চান, এই ফ্ল্যাশকার্ডগুলো শেখাকে করবে আরও আনন্দদায়ক ও অর্থবহ। এখনই অন্বেষণ শুরু করুন এবং ভাষাগত বৈচিত্র্য উদযাপন করুন!"
        }
    };

    document.querySelector("h2").innerText = bodyText[lang].heading;
    document.querySelector("#content").innerText = bodyText[lang].content;
}

const updateFlashcards = {
    en: [
        { question: "When did UNESCO declare International Mother Language Day?", answer: "UNESCO declared it in 1999." },
        { question: "Why is February 21 significant in Bangladesh?", answer: "It commemorates the sacrifices of students who fought for Bengali language rights in 1952." },
        { question: "Which country has the most languages?", answer: "Papua New Guinea has over 800 languages spoken!" },
        { question: "How often does a language disappear?", answer: "Every two weeks, a language disappears forever." },
        { question: "Who were the key martyrs of the 1952 language movement?", answer: "Salam, Rafiq, Barkat, Jabbar, and many others lost their lives." },
        { question: "What song is associated with International Mother Language Day?", answer: "The song 'Amar Bhai Er Rokte Rangano' is sung to honor the martyrs." },
        { question: "When was Bengali recognized as an official language of Pakistan?", answer: "In 1956, Bengali was declared one of the official languages of Pakistan." },
        { question: "What does International Mother Language Day promote?", answer: "It promotes linguistic diversity and the preservation of native languages." },
        { question: "Which country first proposed International Mother Language Day?", answer: "Bangladesh proposed it to UNESCO, which declared it in 1999." },
        { question: "How is February 21 observed in Bangladesh?", answer: "People visit Shaheed Minar, offer flowers, and participate in cultural programs." },
        { question: "Why is language preservation important?", answer: "Languages carry cultural identity, history, and traditions that can be lost forever." },
        { question: "Which organization declared February 21 as International Mother Language Day?", answer: "UNESCO declared it in 1999 to promote linguistic and cultural diversity." },
        { question: "Which country officially celebrates International Mother Language Day?", answer: "Bangladesh observes it as a national holiday with various programs and tributes." },
        { question: "What percentage of languages are endangered?", answer: "About 40% of languages worldwide are endangered." },
        { question: "What does International Mother Language Day promote?", answer: "It promotes linguistic diversity and multilingual education." },
        { question: "What monument was built to honor the Bengali Language Movement?", answer: "The Shaheed Minar was built in Dhaka to honor the language martyrs." },
        { question: "What is the most spoken native language?", answer: "Mandarin Chinese has the highest number of native speakers." },
        { question: "Which country fought for its language rights?", answer: "Bangladesh is the only country that shed blood for its mother language." },
        { question: "How many people speak Bengali worldwide?", answer: "Bengali is spoken by over 230 million people, making it the seventh most spoken language in the world." },
        { question: "How many languages are spoken worldwide?", answer: "Over 7,000 languages are spoken across the world today!" }
    ],
    bn: [
        { question: "ইউনেস্কো কখন আন্তর্জাতিক মাতৃভাষা দিবস ঘোষণা করেছিল?", answer: "ইউনেস্কো এটি ১৯৯৯ সালে ঘোষণা করেছিল।" },
        { question: "বাংলাদেশে ২১ ফেব্রুয়ারি কেন গুরুত্বপূর্ণ?", answer: "এটি ১৯৫২ সালে বাংলা ভাষার অধিকার প্রতিষ্ঠার জন্য শহীদ ছাত্রদের ত্যাগকে স্মরণ করে।" },
        { question: "কোন দেশটি সবচেয়ে বেশি ভাষা বলে?", answer: "পাপুয়া নিউ গিনি ৮০০টিরও বেশি ভাষা বলে!" },
        { question: "কতদিন পর একটি ভাষা নিশ্চিহ্ন হয়ে যায়?", answer: "প্রতি দুই সপ্তাহে একটি ভাষা চিরতরে নিশ্চিহ্ন হয়ে যায়।" },
        { question: "১৯৫২ সালের ভাষা আন্দোলনের শহীদ কারা ছিলেন?", answer: "সালাম, রফিক, বরকত, জব্বার এবং আরও অনেকে তাদের জীবন দিয়েছেন।" },
        { question: "আন্তর্জাতিক মাতৃভাষা দিবসের সঙ্গে কোন গানটি যুক্ত?", answer: "শহীদদের স্মরণে 'আমার ভাইয়ের রক্তে রাঙানো' গানটি গাওয়া হয়।" },
        { question: "বাংলা ভাষা পাকিস্তানের সরকারি ভাষা হিসেবে কবে স্বীকৃতি পায়?", answer: "১৯৫৬ সালে বাংলা পাকিস্তানের অন্যতম সরকারি ভাষা হিসেবে স্বীকৃতি পায়।" },
        { question: "আন্তর্জাতিক মাতৃভাষা দিবস কী প্রচার করে?", answer: "এটি ভাষাগত বৈচিত্র্য এবং মাতৃভাষার সংরক্ষণকে উৎসাহিত করে।" },
        { question: "আন্তর্জাতিক মাতৃভাষা দিবসের প্রস্তাব প্রথম কোন দেশ দিয়েছিল?", answer: "বাংলাদেশ ইউনেস্কোতে এই প্রস্তাব উত্থাপন করে এবং ১৯৯৯ সালে এটি অনুমোদিত হয়।" },
        { question: "বাংলাদেশে ২১শে ফেব্রুয়ারি কিভাবে উদযাপিত হয়?", answer: "মানুষ শহীদ মিনারে ফুল দেয়, সাংস্কৃতিক অনুষ্ঠানে অংশগ্রহণ করে এবং ভাষা শহীদদের স্মরণ করে।" },
        { question: "ভাষার সংরক্ষণ কেন গুরুত্বপূর্ণ?", answer: "ভাষা একটি জাতির পরিচয়, ইতিহাস ও সংস্কৃতি বহন করে যা হারিয়ে যেতে পারে।" },
        { question: "কোন সংস্থা ২১শে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস ঘোষণা করেছে?", answer: "১৯৯৯ সালে ইউনেস্কো এই দিনটিকে ভাষাগত ও সাংস্কৃতিক বৈচিত্র্য সংরক্ষণের জন্য ঘোষণা করে।" },
        { question: "কোন দেশ আনুষ্ঠানিকভাবে আন্তর্জাতিক মাতৃভাষা দিবস উদযাপন করে?", answer: "বাংলাদেশ এটি জাতীয় ছুটি হিসেবে পালন করে এবং বিভিন্ন কর্মসূচি ও শ্রদ্ধা নিবেদন করে।" },
        { question: "বিশ্বব্যাপী কত শতাংশ ভাষা বিপন্ন?", answer: "বিশ্বব্যাপী প্রায় ৪০% ভাষা বিপন্ন।" },
        { question: "আন্তর্জাতিক মাতৃভাষা দিবস কী প্রচার করে?", answer: "এটি ভাষাগত বৈচিত্র্য এবং বহু-ভাষিক শিক্ষাকে প্রচার করে।" },
        { question: "বঙ্গালী ভাষা আন্দোলনের স্মৃতির উদ্দেশ্যে কোন স্মৃতিস্তম্ভ নির্মিত হয়েছে?", answer: "ঢাকায় শহীদ মিনার নির্মিত হয়েছে ভাষা শহীদদের সম্মানিত করার জন্য।" },
        { question: "কোনটি সবচেয়ে বেশি ভাষাভাষী দেশের ভাষা?", answer: "ম্যান্ডারিন চীনা ভাষার সবচেয়ে বেশি মাতৃভাষী রয়েছে।" },
        { question: "কোন দেশটি ভাষার অধিকার জন্য যুদ্ধ করেছে?", answer: "বাংলাদেশ একমাত্র দেশ যেখানে মাতৃভাষার জন্য রক্ত ঝরেছে।" },
        { question: "বিশ্বব্যাপী বাংলা ভাষায় কত মানুষ কথা বলে?", answer: "বাংলা ভাষায় ২৩ কোটি মানুষ কথা বলে, যা পৃথিবীর সপ্তম সবচেয়ে বেশি কথিত ভাষা।" },
        { question: "বিশ্বে কতটি ভাষা বলা হয়?", answer: "বিশ্বে ৭,০০০টিরও বেশি ভাষা বলা হয়!" }
    ]
};

function loadFlashcards(lang = "en") {
    const flashcardContainer = document.getElementById("flashcards");

    flashcardContainer.innerHTML = "";

    if (!updateFlashcards[lang]) {
        console.error("Language not found:", lang);
        return;
    }

    const facts = updateFlashcards[lang];

    facts.forEach(fact => {
        const flashcard = document.createElement("div");
        flashcard.classList.add("flashcard");

        flashcard.innerHTML = `
            <div class="card">
                <div class="card-front">${fact.question}</div>
                <div class="card-back">${fact.answer}</div>
            </div>
        `;

        flashcard.addEventListener("click", () => {
            flashcard.classList.toggle("flipped");
        });

        flashcardContainer.appendChild(flashcard);
    });
}

// Language Selection Handling
document.addEventListener("DOMContentLoaded", () => {
    loadFlashcards(savedLanguage);

    const langDropdown = document.getElementById("languageSelect");
    if (langDropdown) {
        langDropdown.addEventListener("change", (event) => {
            const selectedLang = event.target.value;
            translateLanguage(selectedLang);
        });
    }
});
