const coCount = document.getElementById("copy-count");
const copyButtons = document.querySelectorAll(".copy-btn");
const heartCount = document.getElementById("heart-count");
const heartIcons = document.querySelectorAll(".heart-img");
const callButtons = document.querySelectorAll(".call-btn");
const historyContainer = document.querySelector(".hitory-part .space-y-3");
const clearHistoryBtn = document.querySelector(".hitory-part button");
const coin = document.getElementById("diamond-count");
let coins = 100; 

let copyCount = 0;

copyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".flex-col");
        const serviceNumber = card.querySelector("p.mt-2").textContent;

        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied hotline number: ${serviceNumber}`);

                copyCount++;
                coCount.textContent = copyCount;
            })
            .catch(err => {
                console.error("Copy failed: ", err);
            });
    });
});


heartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let count = parseInt(heartCount.textContent);

        if (icon.classList.contains("text-red-500")) {
            icon.classList.remove("text-red-500");
            icon.classList.add("text-gray-400");
            heartCount.textContent = count - 1;
        } 
        else {
            icon.classList.add("text-red-500");
            icon.classList.remove("text-gray-400");
            heartCount.textContent = count + 1;
        }
    });
});

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" });
}

callButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".flex-col");
        const sername = card.querySelector("h2").textContent;
        const sernumber = card.querySelector("p.mt-2").textContent;

        if (coins < 20) {
            alert("Not enough coins. You need at least 20 to make a call.");
            return;
        }
        coins -= 20;
        coin.textContent = coins;
        alert(`Calling ${sername} (${sernumber})...`);

        const historyItem = document.createElement("div");
        historyItem.className = "flex items-center justify-between pb-2 border-b";
        historyItem.innerHTML = `
            <div>
                <p class="font-medium">${sername}</p>
                <p class="text-sm text-gray-500">${sernumber}</p>
            </div>
            <p class="text-xs text-gray-400">${getCurrentTime()}</p>
        `;
        historyContainer.prepend(historyItem); 
    });
});


clearHistoryBtn.addEventListener("click", () => {
    historyContainer.innerHTML = "";
});








