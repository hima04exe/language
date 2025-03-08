 const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage);
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);

    updateNavText(lang);
    updatePageTitle(lang);
    updateBodyText(lang);
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
            heading: "Learn Different Languages & Translate Instantly!",
            content: "Explore and translate phrases in multiple languages, such as Bangla, Hindi, Urdu, Japanese, Korean, Spanish, French, German, Arabic, Turkish, and Portuguese. Whether you want to learn a new language or quickly translate a phrase, this tool makes it easy and fun. Select a language and start exploring now!"
        },
        bn: {
            heading: "ভিন্ন ভাষা শিখুন এবং  তাৎক্ষণিকভাবে অনুবাদ করুন!",
            content: "বিভিন্ন ভাষায় বাক্য অন্বেষণ করুন এবং অনুবাদ করুন, যেমন বাংলা, হিন্দি, উর্দু, জাপানি, কোরিয়ান, স্প্যানিশ, ফরাসি, জার্মান, আরবি, তুর্কি, এবং পর্তুগিজ। আপনি যদি একটি নতুন ভাষা শিখতে চান বা দ্রুত একটি বাক্য অনুবাদ করতে চান, এই টুলটি সহজ এবং মজাদার করে তোলে। একটি ভাষা নির্বাচন করুন এবং এখনই অনুসন্ধান করুন!"
        }
    };

    document.querySelector("#heading").innerText = bodyText[lang].heading;
    document.querySelector("#content").innerText = bodyText[lang].content;
};

const phrases = [
    { en: "Hello", bn: "হ্যালো", hi: "नमस्ते", ur: "ہیلو", ja: "こんにちは", ko: "안녕하세요", es: "Hola", fr: "Bonjour", de: "Hallo", ar: "مرحبا", tr: "Merhaba", pt: "Olá" },
    { en: "What's your name?", bn: "তোমার নাম কি?", hi: "तुम्हारा नाम क्या है?", ur: "آپ کا نام کیا ہے؟", ja: "あなたの名前は何ですか？", ko: "당신의 이름은 무엇입니까?", es: "¿Cómo te llamas?", fr: "Comment tu t'appelles ?", de: "Wie heißt du?", ar: "ما اسمك؟", tr: "Adın ne?", pt: "Qual é o seu nome?" },
    { en: "How are you?", bn: "আপনি কেমন আছেন?", hi: "आप कैसे हैं?", ur: "آپ کیسے ہیں؟", ja: "お元気ですか?", ko: "잘 지내세요?", es: "¿Cómo estás?", fr: "Comment ça va?", de: "Wie geht es Ihnen?", ar: "كيف حالك؟", tr: "Nasılsın?", pt: "Como vai?" },
    { en: "How are you doing?", bn: "আপনি কেমন করছেন?", hi: "आप कैसे कर रहे हैं?", ur: "آپ کیسے کر رہے ہیں؟", ja: "お元気ですか？", ko: "어떻게 지내세요?", es: "¿Cómo te va?", fr: "Comment vas-tu?", de: "Wie geht es dir?", ar: "كيف حالك؟", tr: "Nasılsın?", pt: "Como está indo?" },
    { en: "Good morning", bn: "সুপ্রভাত", hi: "सुप्रभात", ur: "صبح بخیر", ja: "おはようございます", ko: "좋은 아침", es: "Buenos días", fr: "Bonjour", de: "Guten Morgen", ar: "صباح الخير", tr: "Günaydın", pt: "Bom dia" },
    { en: "Good afternoon", bn: "শুভ অপরাহ্ন", hi: "शुभ अपराह्न", ur: "شام بخیر", ja: "こんにちは", ko: "좋은 오후", es: "Buenas tardes", fr: "Bon après-midi", de: "Guten Tag", ar: "مساء الخير", tr: "Tünaydın", pt: "Boa tarde" },
    { en: "Good evening", bn: "শুভ সন্ধ্যা", hi: "शुभ संध्या", ur: "شام بخیر", ja: "こんばんは", ko: "좋은 저녁", es: "Buenas noches", fr: "Bonsoir", de: "Guten Abend", ar: "مساء الخير", tr: "İyi akşamlar", pt: "Boa noite" },
    { en: "Good night", bn: "শুভ রাত্রি", hi: "शुभ रাত্রि", ur: "شب بخیر", ja: "おやすみなさい", ko: "잘 자요", es: "Buenas noches", fr: "Bonne nuit", de: "Gute Nacht", ar: "تصبح على خير", tr: "İyi geceler", pt: "Boa noite" },
    { en: "Goodbye", bn: "বিদায়", hi: "अलविदा", ur: "الوداع", ja: "さようなら", ko: "안녕히 가세요", es: "Adiós", fr: "Au revoir", de: "Auf Wiedersehen", ar: "وداعا", tr: "Hoşça kal", pt: "Adeus" },
    { en: "Thank you", bn: "ধন্যবাদ", hi: "धन्यवाद", ur: "شکریہ", ja: "ありがとう", ko: "감사합니다", es: "Gracias", fr: "Merci", de: "Danke", ar: "شكرا", tr: "Teşekkürler", pt: "Obrigado" },
    { en: "Sorry", bn: "দুঃখিত", hi: "मुझे माफ करें", ur: "معذرت", ja: "ごめんなさい", ko: "미안합니다", es: "Lo siento", fr: "Désolé", de: "Es tut mir leid", ar: "آسف", tr: "Özür dilerim", pt: "Desculpe" },
    { en: "Yes", bn: "হ্যাঁ", hi: "हाँ", ur: "ہاں", ja: "はい", ko: "네", es: "Sí", fr: "Oui", de: "Ja", ar: "نعم", tr: "Evet", pt: "Sim" },
    { en: "No", bn: "না", hi: "नहीं", ur: "نہیں", ja: "いいえ", ko: "아니요", es: "No", fr: "Non", de: "Nein", ar: "لا", tr: "Hayır", pt: "Não" },
    { en: "Where do you live?", bn: "আপনি কোথায় থাকেন?", hi: "आप कहाँ रहते हैं?", ur: "آپ کہاں رہتے ہیں؟", ja: "あなたはどこに住んでいますか？", ko: "어디에 사세요?", es: "¿Dónde vives?", fr: "Où habites-tu?", de: "Wo wohnst du?", ar: "أين تعيش؟", tr: "Nerede yaşıyorsun?", pt: "Onde você mora?" },
    { en: "Where are you from?", bn: "আপনি কোথায় থেকে এসেছেন?", hi: "आप कहाँ से हैं?", ur: "آپ کہاں سے ہیں؟", ja: "あなたはどこ出身ですか？", ko: "어디 출신이세요?", es: "¿De dónde eres?", fr: "D'où viens-tu?", de: "Woher kommst du?", ar: "من أين أنت؟", tr: "Nerelisin?", pt: "De onde você é?" },
    { en: "I love my country", bn: "আমি আমার দেশকে ভালোবাসি", hi: "मैं अपने देश से प्यार करता हूँ", ur: "مجھے اپنے ملک سے محبت ہے", ja: "私は自分の国が大好きです", ko: "나는 내 나라를 사랑합니다", es: "Amo mi país", fr: "J'aime mon pays", de: "Ich liebe mein Land", ar: "أنا أحب بلدي", tr: "Ülkemi seviyorum", pt: "Eu amo meu país" },
    { en: "I love my mother language", bn: "আমি আমার মাতৃভাষাকে ভালোবাসি", hi: "मुझे अपनी मातृभाषा से प्यार है", ur: "مجھے اپنی مادری زبان سے محبت ہے", ja: "私は母国語が大好きです", ko: "나는 내 모국어를 사랑합니다", es: "Amo mi lengua materna", fr: "J'aime ma langue maternelle", de: "Ich liebe meine Muttersprache", ar: "أنا أحب لغتي الأم", tr: "Ana dilimi seviyorum", pt: "Eu amo minha língua materna" },
    { en: "I need a doctor", bn: "আমার একজন ডাক্তার দরকার", hi: "मुझे डॉक्टर चाहिए", ur: "مجھے ڈاکٹر کی ضرورت ہے", ja: "医者が必要です", ko: "의사가 필요해요", es: "Necesito un médico", fr: "J'ai besoin d'un médecin", de: "Ich brauche einen Arzt", ar: "أحتاج إلى طبيب", tr: "Bir doktora ihtiyacım var", pt: "Preciso de um médico" },
    { en: "Please help me", bn: "দয়া করে আমাকে সাহায্য করুন", hi: "कृपया मेरी मदद करें", ur: "براہ کرم میری مدد کریں", ja: "助けてください", ko: "도와주세요", es: "Por favor ayúdame", fr: "Aidez-moi s'il vous plaît", de: "Bitte helfen Sie mir", ar: "يرجى مساعدتي", tr: "Lütfen bana yardım et", pt: "Por favor, ajude-me" },
    { en: "Help!", bn: "সাহায্য!", hi: "मदद!", ur: "مدد!", ja: "助けて！", ko: "도와주세요!", es: "¡Ayuda!", fr: "À l'aide!", de: "Hilfe!", ar: "مساعدة!", tr: "Yardım edin!", pt: "Ajuda!" },
    { en: "Never give up", bn: "কখনো হাল ছেড়ো না", hi: "कभी हार मत मानो", ur: "کبھی ہمت نہ ہارو", ja: "決してあきらめないで", ko: "절대 포기하지 마세요", es: "Nunca te rindas", fr: "N'abandonne jamais", de: "Gib niemals auf", ar: "لا تستسلم أبدًا", tr: "Asla pes etme", pt: "Nunca desista" },
    { en: "Always love yourself", bn: "সর্বদা নিজেকে ভালোবাসো", hi: "हमेशा खुद से प्यार करो", ur: "ہمیشہ خود سے محبت کرو", ja: "いつも自分を愛してください", ko: "항상 자신을 사랑하세요", es: "Siempre ámate a ti mismo", fr: "Aime-toi toujours", de: "Liebe dich immer", ar: "أحب نفسك دائمًا", tr: "Her zaman kendini sev", pt: "Sempre ame a si mesmo" },
    { en: "Do you speak English?", bn: "আপনি কি ইংরেজি বলতে পারেন?", hi: "क्या आप अंग्रेज़ी बोलते हैं?", ur: "کیا آپ انگریزی بولتے ہیں؟", ja: "あなたは英語を話せますか？", ko: "영어를 할 줄 아세요?", es: "¿Hablas inglés?", fr: "Parlez-vous anglais?", de: "Sprechen Sie Englisch?", ar: "هل تتحدث الإنجليزية؟", tr: "İngilizce konuşuyor musun?", pt: "Você fala inglês?" },
    { en: "I am so happy", bn: "আমি খুব খুশি", hi: "मैं बहुत खुश हूँ", ur: "میں بہت خوش ہوں", ja: "私はとても幸せです", ko: "나는 정말 행복해", es: "Estoy muy feliz", fr: "Je suis très heureux", de: "Ich bin so glücklich", ar: "أنا سعيد جدا", tr: "Çok mutluyum", pt: "Estou muito feliz" },
    { en: "Excuse me", bn: "মাফ করবেন", hi: "माफ कीजिए", ur: "معاف کیجیے", ja: "すみません", ko: "실례합니다", es: "Perdón", fr: "Excusez-moi", de: "Entschuldigung", ar: "عفواً", tr: "Affedersiniz", pt: "Com licença" },
    { en: "How much is this?", bn: "এটার দাম কত?", hi: "यह कितने का है?", ur: "یہ کتنے کا ہے؟", ja: "これはいくらですか?", ko: "이거 얼마예요?", es: "¿Cuánto cuesta esto?", fr: "Combien ça coûte?", de: "Wie viel kostet das?", ar: "كم سعر هذا؟", tr: "Bu ne kadar?", pt: "Quanto custa isso?" },
    { en: "I don’t understand", bn: "আমি বুঝতে পারছি না", hi: "मुझे समझ में नहीं आ रहा है", ur: "مجھے سمجھ نہیں آ رہا", ja: "わかりません", ko: "이해하지 못해요", es: "No entiendo", fr: "Je ne comprends pas", de: "Ich verstehe nicht", ar: "لا أفهم", tr: "Anlamıyorum", pt: "Eu não entendo" },
    { en: "Can you help me?", bn: "আপনি আমাকে সাহায্য করতে পারেন?", hi: "क्या आप मेरी मदद कर सकते हैं?", ur: "کیا آپ میری مدد کر سکتے ہیں؟", ja: "手伝ってくれますか？", ko: "도와줄 수 있나요?", es: "¿Puedes ayudarme?", fr: "Pouvez-vous m'aider ?", de: "Können Sie mir helfen?", ar: "هل يمكنك مساعدتي؟", tr: "Bana yardımcı olabilir misiniz?", pt: "Você pode me ajudar?" },
    { en: "What time is it?", bn: "কতটা সময় হয়েছে?", hi: "कितना समय हुआ है?", ur: "کتنا وقت ہوا ہے؟", ja: "今何時ですか？", ko: "지금 몇 시에요?", es: "¿Qué hora es?", fr: "Quelle heure est-il ?", de: "Wie spät ist es?", ar: "كم الساعة؟", tr: "Saat kaç?", pt: "Que horas são?" }

];


const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");
const originalPhrase = document.getElementById("originalPhrase");
const translatedPhrase = document.getElementById("translatedPhrase");
const phrasesContainer = document.getElementById("phrases");

const languages = {
    en: "English", bn: "Bengali", hi: "Hindi", ur: "Urdu", ja: "Japanese",
    ko: "Korean", es: "Spanish", fr: "French", de: "German", ar: "Arabic",
    tr: "Turkish", pt: "Portuguese"
};


Object.entries(languages).forEach(([code, name]) => {
    fromLanguage.add(new Option(name, code));
    toLanguage.add(new Option(name, code));
});

fromLanguage.value = "en"; 
toLanguage.value = "bn"; 
phrases.forEach((phraseObj, index) => {
    const button = document.createElement("button");
    button.classList.add("phrase-button");
    button.textContent = phraseObj["en"]; 
    button.dataset.index = index;
    phrasesContainer.appendChild(button);
});

phrasesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("phrase-button")) {
        let index = event.target.dataset.index;
        let fromLang = fromLanguage.value;
        let toLang = toLanguage.value;

        originalPhrase.textContent = phrases[index][fromLang] || "N/A";
        translatedPhrase.textContent = phrases[index][toLang] || "N/A";
    }
}); 
 