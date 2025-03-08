 const savedLanguage = localStorage.getItem('language') || 'en';
document.addEventListener("DOMContentLoaded", function () {
    translateLanguage(savedLanguage);
});

function translateLanguage(lang) {
    localStorage.setItem('language', lang);
    updateNavText(lang);
    updatePageTitle(lang);
    updatePageContent(lang);
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

function updatePageContent(lang) {
    const content = {
        en: {
            h2: "Defend the Language, Honor the Martyrs",
            gameIntro: "On February 21st, the people of Bangladesh solemnly honor the brave souls who sacrificed their lives in 1952 for the right to speak their mother tongue, Bangla. This day, known as International Mother Language Day, is observed with deep respect and remembrance. People gather at the Shaheed Minar, a monument built to commemorate the Language Movement Martyrs, and place flowers at its altar as a tribute to their immense sacrifice. Now, it's your turn to pay respect. Click the button below to begin and place flowers at the Shaheed Minar in their honor.",
            startGame: "Click here to place flowers at the altar of the Shaheed Minar",
            instructionOnImage: "Now place flowers at the altar of the Shaheed Minar",
            resetGame: "Go Back",
            warning: "[You can place a bouquet of flowers only once]"
        },
        bn: {
            h2: "ভাষা রক্ষা করুন, শহীদদের সম্মান করুন",
            gameIntro: "২১ ফেব্রুয়ারি, বাংলাদেশবাসী ১৯৫২ সালে মাতৃভাষা বাংলা কথা বলার অধিকার প্রতিষ্ঠার জন্য জীবন উৎসর্গকারী সাহসী শহীদদের শ্রদ্ধার সঙ্গে স্মরণ করেন। এই দিনটি আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে গভীর শ্রদ্ধা ও স্মৃতির সঙ্গে পালন করা হয়। মানুষরা শহীদ মিনারে, যা ভাষা আন্দোলনের শহীদদের স্মরণে নির্মিত একটি স্মৃতিস্তম্ভ, সমবেত হয় এবং তাদের অগাধ আত্মত্যাগের প্রতি শ্রদ্ধা জানিয়ে ফুল দিয়ে শ্রদ্ধা নিবেদন করে। এখন, আপনার পালা শ্রদ্ধা জানানোর। নিচের বাটনে ক্লিক করুন এবং শহীদ মিনারে তাদের সম্মানে ফুল দিন।",
            startGame: "এখানে ক্লিক করুন শহীদ মিনারে ফুল দিতে",
            instructionOnImage: "এখন শহীদ মিনারে ফুল দিন",
            resetGame: "ফিরে যান",
            warning: "[আপনি একটি ফুলের তোড়া শুধুমাত্র একবারই রাখতে পারবেন]"
        }
    };
    document.querySelector("#h2").innerText = content[lang].h2;
    document.querySelector("#gameIntro").innerText = content[lang].gameIntro;
    document.querySelector("#startGame").innerText = content[lang].startGame;
    document.querySelector("#instructionOnImage").innerText = content[lang].instructionOnImage;
    document.querySelector("#resetGame").innerText = content[lang].resetGame;
    document.querySelector("#warning").innerText = content[lang].warning;
}

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startGame");
    const gameArea = document.getElementById("gameArea");
    let flowersPlaced = 0;
    const flowerData = [];

    startButton.addEventListener("click", function() {
        gameArea.style.display = "block";
        startButton.style.display = "none";
        document.getElementById("gameIntro").style.display = "none";
        document.getElementById("h2").style.display = "none";
        document.getElementById("backgroundSong").play();
        document.querySelectorAll('.flower').forEach(flower => {
            flower.style.display = "inline-block";
            flower.draggable = true;
        });
    });

    document.querySelectorAll(".flower").forEach(flower => {
        flower.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("text", event.target.src);
            event.dataTransfer.setData("id", event.target.id);
            event.target.style.opacity = 0.5;
        });

        flower.addEventListener("dragend", function(event) {
            event.target.style.opacity = 1; 
        });
    });

    const altar = document.getElementById("altar");

    altar.addEventListener("dragover", function(event) {
        event.preventDefault(); 
    });

    altar.addEventListener("drop", function(event) {
        event.preventDefault();
        const imgSrc = event.dataTransfer.getData("text");
        const flowerId = event.dataTransfer.getData("id"); 

        if (flowerData.includes(imgSrc)) return;

        const newImg = document.createElement("img");
        newImg.src = imgSrc;
        newImg.classList.add("flower");
        altar.appendChild(newImg);

        const originalFlower = document.getElementById(flowerId);
        originalFlower.parentNode.removeChild(originalFlower);

        flowerData.push(imgSrc);
        flowersPlaced++;

        if (flowersPlaced === 6) {
            setTimeout(() => {
                const currentLang = localStorage.getItem('language') || 'en';
                let message;
                if (currentLang === 'bn') {
                    message = "অভিনন্দন! আপনি ভাষা শহীদদের শ্রদ্ধা জানিয়েছেন 👏 যদি আপনি ফিরে যেতে চান তাহলে অনুগ্রহ করে OK তে ক্লিক করুন →";
                } else {
                    message = "Congratulations! You have shown respect to the Language Martyrs 👏 Please click OK if you want to go back →";
                }

                alert(message);
                location.reload();
                document.addEventListener("DOMContentLoaded", function () {
                    translateLanguage(currentLang);
                });

            }, 500);
        }
    });

    document.getElementById("resetGame").addEventListener("click", function() {
        location.reload();
    });
});
