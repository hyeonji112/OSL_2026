const mobileFrame = document.getElementById("mobileFrame");
const popupOverlay = document.getElementById("popupOverlay");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

if (mobileFrame) {

    const icons = [
        { src: "img/icon1.png", content: "아이콘 1 내용<br>".repeat(20) },
        { src: "img/icon2.png", content: "아이콘 2 내용<br>".repeat(25) },
        { src: "img/icon3.png", content: "아이콘 3 내용<br>".repeat(30) },
        { src: "img/icon4.png", content: "아이콘 4 내용<br>".repeat(18) },
        { src: "img/icon5.png", content: "아이콘 5 내용<br>".repeat(22) }
    ];

    const FRAME_WIDTH = mobileFrame.clientWidth;
    const FRAME_HEIGHT = mobileFrame.clientHeight;

    icons.forEach(iconData => {
    const img = document.createElement("img");
    img.src = iconData.src;
    img.classList.add("icon");

    img.onload = () => {

        const iconWidth = img.naturalWidth;
        const iconHeight = img.naturalHeight;

        const TOP_LIMIT = FRAME_HEIGHT * 0.4; // 상단 2/5 금지
        const placedIcons = document.querySelectorAll(".icon");

        let randomX, randomY;
        let overlapping;
        let attempts = 0;

        do {
            overlapping = false;

            randomX = Math.random() * (FRAME_WIDTH - iconWidth);
            randomY = TOP_LIMIT + Math.random() * (FRAME_HEIGHT - TOP_LIMIT - iconHeight);

            for (let other of placedIcons) {
                const rect = other.getBoundingClientRect();
                const frameRect = mobileFrame.getBoundingClientRect();

                const otherX = rect.left - frameRect.left;
                const otherY = rect.top - frameRect.top;
                const otherW = other.offsetWidth;
                const otherH = other.offsetHeight;

                if (
                    randomX < otherX + otherW &&
                    randomX + iconWidth > otherX &&
                    randomY < otherY + otherH &&
                    randomY + iconHeight > otherY
                ) {
                    overlapping = true;
                    break;
                }
            }

            attempts++;
        } while (overlapping && attempts < 50);

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;
    };

    img.addEventListener("click", () => {
        popupContent.innerHTML = iconData.content;
        popupOverlay.style.display = "flex";
    });

    mobileFrame.appendChild(img);
});

    // 닫기 버튼
    closePopup.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });
}