let isBangla = false;

function toggleLanguage() {
    const textsEn = [
        "Astaghfirullah (100 times)", "SubhanAllah (100 times)", "Allahu Akbar (100 times)", 
        "Recite Surah Ikhlas (3 times)", "Pray 2 Rakats Nafl Salah (as much as you can)", 
        "Read at least 1 page of the Quran (try more if you can)", "Give charity (Even a small amount)"
    ];

    const textsBn = [
        "আস্তাগফিরুল্লাহ (১০০ বার)", "সুবহানআল্লাহ (১০০ বার)", "আল্লাহু আকবার (১০০ বার)", 
        "সুরাহ ইখলাস পড়ুন (৩ বার)", "২ রাকাত নফল সালাত পড়ুন (যত পারেন)", 
        "কমপক্ষে ১ পৃষ্ঠা কুরআন পড়ুন (বেশি চেষ্টা করুন)", "দান করুন (একটি ছোট পরিমাণ হলেও)"
    ];

    if (!isBangla) {
        document.getElementById("title").innerText = "লাইলাতুল কদর চেকলিস্ট";
        document.getElementById("intro").innerHTML = "এটি হতে পারে সেই শক্তির রাত যা <strong>৮৩ বছর</strong> বা ১০০০ মাসের ইবাদতের সমান। নীচের চেকলিস্টগুলো সম্পূর্ণ করুন:";
        document.querySelectorAll(".task-text").forEach((el, index) => el.innerText = textsBn[index]);

        document.getElementById("info1").innerText = "✔ অনুশোচনা ও তওবা করুন: আন্তরিকভাবে ক্ষমা চান এবং ইতিবাচক পরিবর্তনের জন্য নিয়ত করুন।";
        document.getElementById("info2").innerText = "✔ বিভ্রান্তি এড়ান: অপ্রয়োজনীয় কথা বলা, সামাজিক মাধ্যম বা যে কোনও কিছু থেকে দূরে থাকুন যা ইবাদতের সময় নষ্ট করে।";
        document.getElementById("info3").innerHTML = "✔ লাইলাতুল কদরের ফজিলত ও আমলসমূহ: <a href='./virtues.html' style='color: yellow; text-decoration: none;' target='_blank'>Click Here</a>";

        document.getElementById("popup-title").innerText = "অভিনন্দন!";
        document.getElementById("popup-text").innerText = "আপনি সফলভাবে সমস্ত চেকলিস্ট সম্পন্ন করেছেন। আল্লাহ আপনার সমস্ত দোয়া কবুল করুন এবং এই বরকতময় রাতে আপনাকে অফুরন্ত রহমত দান করুন! (আমিন)";
        document.querySelector(".translate-btn").innerText = "Switch to English";
        isBangla = true;
    } else {
        location.reload();
    }
}

// Function to save checklist state in localStorage
function saveChecklistState() {
    const checklistState = [];
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checklistState.push({
            id: checkbox.id,
            checked: checkbox.checked
        });
    });
    localStorage.setItem('checklistState', JSON.stringify(checklistState));
}

// Function to load checklist state from localStorage
function loadChecklistState() {
    const checklistState = JSON.parse(localStorage.getItem('checklistState'));
    if (checklistState) {
        checklistState.forEach(state => {
            const checkbox = document.getElementById(state.id);
            if (checkbox) {
                checkbox.checked = state.checked;
                if (state.checked) {
                    checkbox.parentElement.classList.add('completed');
                }
            }
        });
    }
}

// Event listeners for checkbox changes
document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        checkbox.parentElement.classList.toggle("completed", checkbox.checked);
        saveChecklistState(); // Save checklist state every time a checkbox changes
        if (document.querySelectorAll("input[type='checkbox']:checked").length === 7) {
            document.getElementById("checklist-container").style.display = "none";
            document.getElementById("popup").style.display = "block";
        }
    });
});

// Load the checklist state when the page loads
window.onload = function() {
    loadChecklistState(); // Load saved state from localStorage
}
