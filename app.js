
let favCount = parseInt(document.getElementById("favCount").innerText);
let coinCount = parseInt(document.getElementById("coinCount").innerText);
let copyCount = parseInt(document.getElementById("copyCount").innerText);

let hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
    heart.onclick = function () {
        favCount++;
        document.getElementById("favCount").innerText = favCount;
    };
}

let cards = document.querySelectorAll(".bg-zinc-50");
cards.forEach(card => {
    let serviceName = card.querySelector(".serviceName").innerText;
    let serviceNumber = card.querySelector(".serviceNumber").innerText;
    let copyBtn = card.querySelector(".copyBtn");
    copyBtn.onclick = function () {
        navigator.clipboard.writeText(serviceNumber); 
        copyCount++;
        document.getElementById("copyCount").innerText = copyCount;
        alert("Copy number: " + serviceNumber);
    };
    let callBtn = card.querySelector(".callBtn");
    callBtn.onclick = function () {
        if (coinCount < 20) {
            alert("Do not have enough coin");
            return;
        }
        coinCount = coinCount - 20;
        document.getElementById("coinCount").innerText = coinCount;
        alert(` ${serviceName} - ${serviceNumber}`);
        let now = new Date();
        let timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        let li = document.createElement("li");
        li.innerText = `${serviceName} ${serviceNumber}  ${timeString}`;
        document.getElementById("callHistory").appendChild(li);
    };
});

document.getElementById("clearHistory").onclick = function () {
    document.getElementById("callHistory").innerHTML = ""; 
};
