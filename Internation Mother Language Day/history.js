const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage);
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);
    updateNavText(lang);
    updatePageTitle(lang);
    updateContent(lang);
    updateMartyrNames(lang);
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

function updateContent(lang) {
    const contentTranslations = {
        en: {
            historyTitle: "A Brief History of International Mother Language Day",
            content1: `February 21st is recognized as International Mother Language Day (IMLD) which is chosen to honor the tragic but revolutionary events of this day in 1952 in Bangladesh. This day is deeply significant for Bengali speakers, as it commemorates the sacrifice of students and activists who fought for the right to speak their mother tongue.After the Partition of India in 1947, the province of Bengal was divided. The western part remained in India, while the eastern part became East Pakistan (now Bangladesh). However, economic, cultural, and linguistic disparities between East and West Pakistan soon became evident. The ruling government, dominated by West Pakistan, wanted to enforce Urdu as the sole national language.Tensions peaked in 1948, when the government announced that Urdu would be the only state language of Pakistan. This decision ignored Bengali, which was spoken by the majority of the country's population—over 56% of the people. The people of East Pakistan strongly opposed this decision, as it was an attack on their identity, culture, and rights.`,

            martyrsTitle: "In response, the students and intellectuals from Dhaka University, Dhaka Medical College, and other institutions organized protests, demanding that Bengali be recognized as one of the national languages. The movement gained widespread support from people across the country, including politicians, poets, teachers, and ordinary citizens.The government, however, refused to listen and instead banned protests. They imposed Section 144, a law that prohibited public gatherings. But the people of East Pakistan were determined to fight for their rights.On February 21, 1952, students gathered near Dhaka University in a peaceful protest. They chanted slogans, carried banners, and demanded that their language be recognized. Suddenly, without warning, police opened fire on the unarmed demonstrators.Several young activists were killed on the spot, and many more were injured. These martyrs gave their lives for the right to speak in Bengali, and their sacrifice became the foundation of the language movement. The brave students who lost their lives included:",
            
            impactTitle: "Impact and Recognition of International Mother Language Day",
            
            content2: `After Bangladesh gained independence in 1971, February 21st was officially declared a national holiday, observed as Shaheed Dibosh (Martyrs’ Day). The movement was not just about language—it symbolized a struggle for cultural identity, democracy, and fundamental human rights. The sacrifice of the martyrs inspired future generations to stand up against oppression and fight for their rights. To honor this history on a global scale, UNESCO proclaimed February 21 as International Mother Language Day (IMLD) on November 17, 1999. The initiative was first proposed by Rafiqul Islam, a Bangladeshi-Canadian, who wrote to UN Secretary-General Kofi Annan in 1998, urging the recognition of linguistic diversity and rights worldwide. The first official IMLD celebration took place on February 21, 2000, and since then, it has been observed across the world. In Bangladesh, people visit the Shahid Minar (Martyrs’ Monument) at dawn, offering floral tributes in memory of the fallen heroes. Educational institutions, cultural organizations, and various communities hold discussions, processions, and cultural programs to pay homage to the language martyrs. Beyond Bangladesh, IMLD serves as a reminder of the importance of linguistic diversity and the need to preserve endangered languages. Every year, UNESCO announces a theme that highlights different aspects of language preservation, multilingual education, and cultural inclusion. The legacy of the language movement continues to inspire people worldwide to protect their linguistic heritage and promote education in native languages, ensuring that no language is ever silenced again.

`,

            videoTitle: "Watch the History of International Mother Language Day →",
            videoButton: "Click here to watch the full video on YouTube"
        },

        bn: {
            historyTitle: "আন্তর্জাতিক মাতৃভাষা দিবসের সংক্ষিপ্ত ইতিহাস",
            content1: `২১শে ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস (IMLD) হিসাবে স্বীকৃত, যা ১৯৫২ সালে বাংলাদেশের ঐতিহাসিক কিন্তু বেদনাদায়ক ও বিপ্লবী ঘটনাগুলোর স্মরণে পালিত হয়। এই দিনটি বাংলা ভাষাভাষীদের জন্য গভীর তাৎপর্য বহন করে, কারণ এটি সেইসব ছাত্র ও আন্দোলনকর্মীদের আত্মত্যাগের কথা মনে করিয়ে দেয়, যারা তাঁদের মাতৃভাষায় কথা বলার অধিকার প্রতিষ্ঠার জন্য জীবন উৎসর্গ করেছিলেন। ১৯৪৭ সালে ভারত বিভক্ত হওয়ার পর, বাংলা প্রদেশও বিভক্ত হয়ে যায়। পশ্চিম অংশটি ভারতের অংশ থেকে যায়, আর পূর্ব অংশটি পূর্ব পাকিস্তান (বর্তমান বাংলাদেশ) নামে পাকিস্তানের অংশ হয়ে যায়। কিন্তু শীঘ্রই পূর্ব ও পশ্চিম পাকিস্তানের মধ্যে অর্থনৈতিক, সাংস্কৃতিক ও ভাষাগত বৈষম্য প্রকট হয়ে ওঠে। পশ্চিম পাকিস্তানের শাসকগোষ্ঠী উর্দুকে রাষ্ট্রভাষা হিসেবে চাপিয়ে দিতে চেয়েছিল। ১৯৪৮ সালে উত্তেজনা চরমে পৌঁছায়, যখন সরকার ঘোষণা করে যে উর্দুই হবে পাকিস্তানের একমাত্র রাষ্ট্রভাষা। এই সিদ্ধান্ত দেশের সংখ্যাগরিষ্ঠ জনগণ—৫৬% এর বেশি মানুষের ভাষা বাংলাকে সম্পূর্ণ উপেক্ষা করেছিল। পূর্ব পাকিস্তানের মানুষ এই সিদ্ধান্তের তীব্র বিরোধিতা করেন, কারণ এটি তাদের পরিচয়, সংস্কৃতি ও অধিকারের ওপর আঘাত ছিল।`,

            martyrsTitle: "এর প্রতিবাদে ঢাকা বিশ্ববিদ্যালয়, ঢাকা মেডিকেল কলেজ এবং অন্যান্য শিক্ষা প্রতিষ্ঠানের ছাত্র ও বুদ্ধিজীবীরা আন্দোলন সংগঠিত করেন। এই আন্দোলন ধীরে ধীরে সারাদেশে ছড়িয়ে পড়ে এবং রাজনীতিবিদ, কবি, শিক্ষক ও সাধারণ জনগণ এতে সম্পৃক্ত হন। কিন্তু সরকার তাদের দাবির প্রতি উদাসীন থাকে এবং পরিবর্তে প্রতিবাদ নিষিদ্ধ করে। তারা ১৪৪ ধারা জারি করে, যা জনসমাবেশ নিষিদ্ধ করে। তবে পূর্ব পাকিস্তানের জনগণ নিজেদের অধিকার রক্ষার জন্য দৃঢ় প্রতিজ্ঞ ছিলেন। ১৯৫২ সালের ২১শে ফেব্রুয়ারি, ছাত্ররা ঢাকা বিশ্ববিদ্যালয়ের সামনে এক শান্তিপূর্ণ বিক্ষোভে জড়ো হন। তারা স্লোগান দিতে থাকেন, ব্যানার বহন করেন এবং বাংলা ভাষার স্বীকৃতির দাবি জানান। হঠাৎ, কোনো পূর্বসতর্কতা ছাড়াই পুলিশ নিরস্ত্র বিক্ষোভকারীদের ওপর গুলি চালায়। অনেক তরুণ ছাত্র সেখানে নিহত হন এবং আরও অনেকে আহত হন। এই শহীদরা বাংলা ভাষার অধিকারের জন্য নিজের জীবন উৎসর্গ করেন এবং তাদের আত্মত্যাগই ভাষা আন্দোলনের ভিত্তি হয়ে ওঠে। যে সাহসী ছাত্ররা তাদের জীবন হারিয়েছিল তাদের মধ্যে অন্তর্ভুক্ত ছিল:",

            impactTitle: "আন্তর্জাতিক মাতৃভাষা দিবসের প্রভাব ও স্বীকৃতি",

            content2: `বাংলাদেশ ১৯৭১ সালে স্বাধীনতা অর্জনের পর, ২১শে ফেব্রুয়ারিকে জাতীয় ছুটির দিন ঘোষণা করা হয় এবং দিনটি "শহীদ দিবস" হিসেবে পালিত হতে থাকে। ভাষা আন্দোলন শুধুমাত্র ভাষার জন্য ছিল না—এটি ছিল সংস্কৃতির স্বীকৃতি, গণতন্ত্র ও মৌলিক মানবাধিকারের জন্য লড়াইয়ের প্রতীক। শহীদদের আত্মত্যাগ ভবিষ্যৎ প্রজন্মকে অত্যাচারের বিরুদ্ধে রুখে দাঁড়ানোর ও নিজেদের অধিকারের জন্য লড়াই করার অনুপ্রেরণা যুগিয়েছে। এই ইতিহাসকে বিশ্বব্যাপী সম্মান জানাতে, ১৯৯৯ সালের ১৭ই নভেম্বর ইউনেস্কো ২১শে ফেব্রুয়ারিকে "আন্তর্জাতিক মাতৃভাষা দিবস" হিসেবে ঘোষণা করে। এই উদ্যোগটি প্রথম প্রস্তাব করেন বাংলাদেশি-কানাডিয়ান রফিকুল ইসলাম, যিনি ১৯৯৮ সালে জাতিসংঘের মহাসচিব কফি আনানের কাছে চিঠি লিখে বিশ্বের সকল ভাষার সংরক্ষণ ও অধিকারের কথা তুলে ধরেন। প্রথমবার ২০০০ সালের ২১শে ফেব্রুয়ারি আনুষ্ঠানিকভাবে আন্তর্জাতিক মাতৃভাষা দিবস পালিত হয়। এরপর থেকে দিনটি বিশ্বব্যাপী পালিত হয়ে আসছে। বাংলাদেশে, ভোরবেলা শহীদ মিনারে ভাষা শহীদদের প্রতি শ্রদ্ধা জানাতে মানুষ ফুল দেয়। এছাড়া, শিক্ষাপ্রতিষ্ঠান, সাংস্কৃতিক সংগঠন ও বিভিন্ন সম্প্রদায়ের উদ্যোগে আলোচনা, শোভাযাত্রা ও সাংস্কৃতিক অনুষ্ঠান অনুষ্ঠিত হয়। বাংলাদেশের গণ্ডি পেরিয়ে, আন্তর্জাতিক মাতৃভাষা দিবস বিশ্বকে ভাষার বৈচিত্র্য রক্ষার গুরুত্ব স্মরণ করিয়ে দেয়। প্রতি বছর ইউনেস্কো একটি নতুন থিম ঘোষণা করে, যা ভাষা সংরক্ষণ, বহু ভাষার শিক্ষা ও সাংস্কৃতিক অন্তর্ভুক্তির গুরুত্ব তুলে ধরে। ভাষা আন্দোলনের এই চেতনা মানুষকে অনুপ্রাণিত করে তাদের ভাষাগত ঐতিহ্য রক্ষা করতে ও মাতৃভাষায় শিক্ষার প্রচার করতে। ভাষার জন্য যে ত্যাগ শহীদরা করেছিলেন, তা যেন কোনো ভাষাকে আর কখনো নিশ্চিহ্ন না হতে দেয়।`,

            videoTitle: "আন্তর্জাতিক মাতৃভাষা দিবসের ইতিহাস দেখুন →",
            videoButton: "সম্পূর্ণ ভিডিও দেখতে এখানে ক্লিক করুন"
        }
    };

    document.querySelector(".h21").innerText = contentTranslations[lang].historyTitle;
    document.getElementById("content1").innerText = contentTranslations[lang].content1;
    document.querySelector(".h22").innerText = contentTranslations[lang].martyrsTitle;
    document.querySelector(".h23").innerText = contentTranslations[lang].impactTitle;
    document.getElementById("content2").innerText = contentTranslations[lang].content2;
    document.querySelector(".h25").innerText = contentTranslations[lang].videoTitle;
    document.querySelector(".video-button").innerText = contentTranslations[lang].videoButton;
}

function updateMartyrNames(lang) {
    const martyrTranslations = {
        en: {
            rafiq: "Rafiq Uddin Ahmed",
            barkat: "Abul Barkat",
            jabbar: "Abdul Jabbar",
            salam: "Abdus Salam",
            shafiur: "Safiur Rahman"
        },
        bn: {
            rafiq: "রফিক উদ্দিন আহমেদ",
            barkat: "আবুল বারকত",
            jabbar: "আবদুল জব্বার",
            salam: "আবদুস সালাম",
            shafiur: "সাফিউর রহমান"
        }
    };

    document.querySelectorAll('.martyr').forEach((martyr, index) => {
        const martyrName = martyrTranslations[lang][martyr.dataset.martyr];
        martyr.querySelector('p').innerText = martyrName;
    });
}
