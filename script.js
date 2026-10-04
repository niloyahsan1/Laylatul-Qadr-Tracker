// Language content dictionary
const translations = {
    en: {
        navChecklist: "Checklist",
        navVirtues: "Virtues & Deeds",
        heroTitle: "Laylatul Qadr Checklist",
        heroSubtitle: "This blessed night is equal to <strong>83 years</strong> (1,000 months) of worship. Complete your spiritual goals below:",
        progressLabel: "Tasks Completed",
        tasks: [
            "Astaghfirullah (100 times)",
            "SubhanAllah (100 times)",
            "Allahu Akbar (100 times)",
            "Recite Surah Ikhlas (3 times)",
            "Pray 2 Rakats Nafl Salah (as much as you can)",
            "Read at least 1 page of the Quran",
            "Give charity (Even a small amount)"
        ],
        tip1Title: "Reflect & Repent",
        tip1Desc: "Seek forgiveness sincerely and make firm intentions for positive life changes.",
        tip2Title: "Avoid Distractions",
        tip2Desc: "Stay away from unnecessary talk or social media to focus on worship.",
        tip3Title: "Virtues & Deeds",
        tip3Desc: "Read Quranic verses & authentic Hadith about Laylatul Qadr",
        modalTitle: "Mabrouk! Completed!",
        modalText: "You have completed all the checklist items for tonight. May Allah accept your prayers, grant you forgiveness, and fill your life with blessings! (Aameen)",
        modalBtn: "Close Window",
        langBtnText: "বাংলা",
        
        // Virtues Page Text
        virtuesTitle: "Virtues & Deeds of Laylatul Qadr",
        virtuesSubtitle: "Discover the immense significance, authentic Hadiths, and recommended acts of worship for the Night of Decree.",
        virtue1Title: "Meaning & Quranic Significance",
        virtue1Text1: "<strong>'Laylatul Qadr'</strong> translates to the <em>Night of Power</em> or <em>Night of Decree</em>. On this extraordinary night, Allah revealed the Holy Quran to Prophet Muhammad (ﷺ).",
        virtue1Quote: "“Indeed, We sent the Quran down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months.”",
        virtue1QuoteSource: "(Surah Al-Qadr: 1-3)",
        virtue1Text2: "Worshipping Allah on this single night brings rewards greater than worshipping Him for 83 years and 4 months continuously.",

        virtue2Title: "Seeking the Blessed Night",
        virtue2Text: "The Prophet Muhammad (ﷺ) instructed us to search for Laylatul Qadr during the <strong>odd nights of the last ten days</strong> of Ramadan (21st, 23rd, 25th, 27th, or 29th night). Many scholars highlight the 27th night as highly probable.",

        virtue3Title: "Special Supplication (Dua)",
        virtue3Transliteration: "Allāhumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'annī.",
        virtue3Translation: "“O Allah, You are Most Forgiving, and You love forgiveness, so forgive me.”",

        virtue4Title: "Recommended Spiritual Deeds",
        virtuesList: [
            "<strong>Abundant Dhikr & Recitation:</strong> Recite the Holy Quran and praise Allah consistently.",
            "<strong>Tahajjud & Voluntary Prayers:</strong> Offer Nafl prayers in quiet devotion during the night.",
            "<strong>Sincere Repentance (Tawbah):</strong> Ask for forgiveness for past mistakes with a humble heart.",
            "<strong>Charity (Sadaqah):</strong> Give charity, even if it is a small amount, to earn continuous reward."
        ],
        backBtn: "← Back to Checklist"
    },
    bn: {
        navChecklist: "চেকলিস্ট",
        navVirtues: "ফজিলত ও আমল",
        heroTitle: "লাইলাতুল কদর চেকলিস্ট",
        heroSubtitle: "এই বরকতময় রাতটি <strong>৮৩ বছর ৪ মাস</strong> (১,০০০ মাস) ইবাদতের চেয়ে উত্তম। আপনার আমলের চেকলিস্ট সম্পন্ন করুন:",
        progressLabel: "সম্পন্ন আমলসমূহ",
        tasks: [
            "আস্তাগফিরুল্লাহ (১০০ বার)",
            "সুবহানআল্লাহ (১০০ বার)",
            "আল্লাহু আকবার (১০০ বার)",
            "সূরা ইখলাস পড়ুন (৩ বার)",
            "২ রাকাত নফল সালাত (যতটুকু সম্ভব)",
            "কমপক্ষে ১ পৃষ্ঠা কুরআন তিলাওয়াত করুন",
            "দান-সদকা করুন (যেকোনো পরিমাণ)"
        ],
        tip1Title: "তওবা ও অনুশোচনা",
        tip1Desc: "আন্তরিকভাবে ক্ষমা চান এবং জীবনে ইতিবাচক পরিবর্তনের দৃঢ় নিয়ত করুন।",
        tip2Title: "বিভ্রান্তি এড়ান",
        tip2Desc: "অপ্রয়োজনীয় কথা ও সোশাল মিডিয়া থেকে দূরে থেকে ইবাদতে মন দিন।",
        tip3Title: "ফজিলত ও আমলসমূহ",
        tip3Desc: "লাইলাতুল কদরের পবিত্র আয়াত ও হাদিস পড়ুন",
        modalTitle: "আলহামদুলিল্লাহ! অভিনন্দন!",
        modalText: "আপনি রাতের সকল চেকলিস্ট সম্পন্ন করেছেন। আল্লাহ আপনার সমস্ত দোয়া ও ইবাদত কবুল করুন এবং অফুরন্ত রহমত দান করুন! (আমিন)",
        modalBtn: "বন্ধ করুন",
        langBtnText: "English",

        // Virtues Page Text
        virtuesTitle: "লাইলাতুল কদরের ফজিলত ও আমলসমূহ",
        virtuesSubtitle: "মহিমান্বিত কদর রজনীর তাৎপর্য, পবিত্র কুরআনের আয়াত, হাদিস ও সেরা আমলসমূহ জানুন।",
        virtue1Title: "কদরের তাৎপর্য ও কুরআনের আলোকপাত",
        virtue1Text1: "<strong>'লাইলাতুল কদর'</strong> ফারসি ও আরবি শব্দের সমন্বয়ে গঠিত, যার অর্থ <em>মর্যাদাপূর্ণ রাত</em> বা <em>ভাগ্য রজনী</em>। এই রাতে মহান আল্লাহ তাআলা পবিত্র কুরআন নাজিল করেছেন।",
        virtue1Quote: "“নিশ্চয়ই আমি কুরআন নাজিল করেছি কদর রজনীতে। আপনি কি জানেন মহিমান্বিত কদর রজনী কী? কদর রজনী হাজার মাস অপেক্ষা উত্তম।”",
        virtue1QuoteSource: "(সূরা আল-কদর: ১-৩)",
        virtue1Text2: "এই এক রাতের ইবাদত ৮৩ বছর ৪ মাসের একনাগাড়ে ইবাদতের চেয়েও বেশি সওয়াব বহন করে।",

        virtue2Title: "শবে কদরের সম্ভাব্য রাতসমূহ",
        virtue2Text: "রাসূলুল্লাহ (ﷺ) রমজানের <strong>শেষ ১০ দিনের বিজোড় রাতগুলোতে</strong> (২১, ২৩, ২৫, ২৭ বা ২৯) লাইলাতুল কদর খোঁজার নির্দেশ দিয়েছেন। অধিকাংশ আলেমের মতে ২৭ রমজানের রাত অধিক সম্ভাব্য।",

        virtue3Title: "কদর রজনীর বিশেষ দোয়া",
        virtue3Transliteration: "উচ্চারণ: আল্লাহুম্মা ইন্নাকা আফউউন, তুহিব্বুল আফওয়া, ফা'ফু আন্নী।",
        virtue3Translation: "অর্থ: “হে আল্লাহ! আপনি ক্ষমাশীল, ক্ষমা করতে ভালোবাসেন, সুতরাং আমাকে ক্ষমা করুন।”",

        virtue4Title: "লাইলাতুল কদরের উত্তম আমলসমূহ",
        virtuesList: [
            "<strong>অধিক হারে জিকির ও তিলাওয়াত:</strong> পবিত্র কুরআন তিলাওয়াত ও জিকিরে সময় কাটান।",
            "<strong>তাহাজ্জুদ ও নফল নামাজ:</strong> রাতে একাগ্রচিত্তে নফল ও তাহাজ্জুদ সালাত আদায় করুন।",
            "<strong>তওবা ও ইস্তিগফার:</strong> অতীতের গুনাহের জন্য বিনম্র চিত্তে আল্লাহর দরবারে ক্ষমা চান।",
            "<strong>দান-সদকা:</strong> অভাবীকে সাহায্য করুন বা সদকা দিন, যা অশেষ নেকি এনে দেয়।"
        ],
        backBtn: "← চেকলিস্টে ফিরে যান"
    }
};

// Current state
let currentLang = localStorage.getItem('langPref') || 'bn';

// Update DOM elements on language toggle
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('langPref', lang);

    const t = translations[lang];
    if (!t) return;

    // Common Nav Elements
    const navChecklist = document.getElementById("nav-checklist");
    if (navChecklist) navChecklist.innerText = t.navChecklist;

    const navVirtues = document.getElementById("nav-virtues");
    if (navVirtues) navVirtues.innerText = t.navVirtues;

    const langBtnText = document.getElementById("lang-btn-text");
    if (langBtnText) langBtnText.innerText = t.langBtnText;

    // Index / Checklist Page Elements
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) heroTitle.innerText = t.heroTitle;

    const heroSubtitle = document.getElementById("hero-subtitle");
    if (heroSubtitle) heroSubtitle.innerHTML = t.heroSubtitle;

    const progressLabel = document.getElementById("progress-label");
    if (progressLabel) progressLabel.innerText = t.progressLabel;

    // Checklist Tasks
    const taskTexts = document.querySelectorAll(".task-text");
    if (taskTexts.length > 0) {
        taskTexts.forEach((el, idx) => {
            if (t.tasks[idx]) el.innerText = t.tasks[idx];
        });
    }

    // Tips Cards
    const tip1Title = document.getElementById("tip1-title");
    if (tip1Title) tip1Title.innerText = t.tip1Title;
    const tip1Desc = document.getElementById("tip1-desc");
    if (tip1Desc) tip1Desc.innerText = t.tip1Desc;

    const tip2Title = document.getElementById("tip2-title");
    if (tip2Title) tip2Title.innerText = t.tip2Title;
    const tip2Desc = document.getElementById("tip2-desc");
    if (tip2Desc) tip2Desc.innerText = t.tip2Desc;

    const tip3Title = document.getElementById("tip3-title");
    if (tip3Title) tip3Title.innerText = t.tip3Title;
    const tip3Desc = document.getElementById("tip3-desc");
    if (tip3Desc) tip3Desc.innerText = t.tip3Desc;

    // Modal
    const modalTitle = document.getElementById("modal-title");
    if (modalTitle) modalTitle.innerText = t.modalTitle;
    const modalText = document.getElementById("modal-text");
    if (modalText) modalText.innerText = t.modalText;
    const modalBtn = document.getElementById("modal-btn");
    if (modalBtn) modalBtn.innerText = t.modalBtn;

    // Virtues Page Elements
    const virtuesTitle = document.getElementById("virtues-title");
    if (virtuesTitle) virtuesTitle.innerText = t.virtuesTitle;

    const virtuesSubtitle = document.getElementById("virtues-subtitle");
    if (virtuesSubtitle) virtuesSubtitle.innerText = t.virtuesSubtitle;

    const v1Title = document.getElementById("v1-title");
    if (v1Title) v1Title.innerText = t.virtue1Title;
    const v1Text1 = document.getElementById("v1-text1");
    if (v1Text1) v1Text1.innerHTML = t.virtue1Text1;
    const v1Quote = document.getElementById("v1-quote");
    if (v1Quote) v1Quote.innerText = t.virtue1Quote;
    const v1QuoteSrc = document.getElementById("v1-quote-src");
    if (v1QuoteSrc) v1QuoteSrc.innerText = t.virtue1QuoteSource;
    const v1Text2 = document.getElementById("v1-text2");
    if (v1Text2) v1Text2.innerText = t.virtue1Text2;

    const v2Title = document.getElementById("v2-title");
    if (v2Title) v2Title.innerText = t.virtue2Title;
    const v2Text = document.getElementById("v2-text");
    if (v2Text) v2Text.innerHTML = t.virtue2Text;

    const v3Title = document.getElementById("v3-title");
    if (v3Title) v3Title.innerText = t.virtue3Title;
    const v3Trans = document.getElementById("v3-transliteration");
    if (v3Trans) v3Trans.innerText = t.virtue3Transliteration;
    const v3Transl = document.getElementById("v3-translation");
    if (v3Transl) v3Transl.innerText = t.virtue3Translation;

    const v4Title = document.getElementById("v4-title");
    if (v4Title) v4Title.innerText = t.virtue4Title;

    const virtuesListContainer = document.getElementById("virtues-list-container");
    if (virtuesListContainer && t.virtuesList) {
        virtuesListContainer.innerHTML = t.virtuesList.map(item => `
            <li>
                <span class="virtues-list-icon">✦</span>
                <div>${item}</div>
            </li>
        `).join('');
    }

    const backBtnText = document.getElementById("back-btn-text");
    if (backBtnText) backBtnText.innerText = t.backBtn;
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'bn' : 'en';
    applyLanguage(newLang);
}

// Save & Load Checklist State
function updateProgress() {
    const items = document.querySelectorAll(".task-item");
    if (items.length === 0) return;

    let checkedCount = 0;
    const state = [];

    items.forEach((item) => {
        const isChecked = item.classList.contains("completed");
        if (isChecked) checkedCount++;
        state.push(isChecked);
    });

    localStorage.setItem('checklistState_v2', JSON.stringify(state));

    const total = items.length;
    const percentage = Math.round((checkedCount / total) * 100);

    const progressFill = document.getElementById("progress-fill");
    if (progressFill) progressFill.style.width = percentage + "%";

    const progressCount = document.getElementById("progress-count");
    if (progressCount) progressCount.innerText = `${checkedCount} / ${total} (${percentage}%)`;

    if (checkedCount === total && total > 0) {
        openModal();
    }
}

function loadChecklistState() {
    const savedState = JSON.parse(localStorage.getItem('checklistState_v2'));
    const items = document.querySelectorAll(".task-item");

    if (savedState && items.length > 0) {
        items.forEach((item, index) => {
            if (savedState[index]) {
                item.classList.add("completed");
            } else {
                item.classList.remove("completed");
            }
        });
    }
    updateProgress();
}

function setupChecklistListeners() {
    const items = document.querySelectorAll(".task-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("completed");
            updateProgress();
        });
    });
}

function openModal() {
    const modal = document.getElementById("completion-modal");
    if (modal) modal.classList.add("active");
}

function closeModal() {
    const modal = document.getElementById("completion-modal");
    if (modal) modal.classList.remove("active");
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    setupChecklistListeners();
    loadChecklistState();

    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
        langBtn.addEventListener("click", toggleLanguage);
    }
});
