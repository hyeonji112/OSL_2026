const mobileFrame = document.getElementById("mobileFrame");
const popupOverlay = document.getElementById("popupOverlay");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");
const backBtn = document.querySelector(".back-btn");

if (mobileFrame) {

    const icons = [
        { 
            src: "img/icon1.png", 
            popupImg: "img/icon1-1.png" 
        },
        { 
            src: "img/icon2.png", 
            popupImg: "img/icon2-1.png" 
        },
        { 
            src: "img/icon3.png", 
            content: "아이콘 3 내용<br>".repeat(30) 
        },
        { 
            src: "img/icon4.png", 
            content: "아이콘 4 내용<br>".repeat(18) 
        },
        { 
            src: "img/icon5.png", 
            content: "아이콘 5 내용<br>".repeat(22) 
        }
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

            const TOP_LIMIT = FRAME_HEIGHT * 0.4;
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

            // 🔹 팝업 내용 초기화
            popupContent.innerHTML = "";

            // 이미지가 있는 경우
            if (iconData.popupImg) {
                const popupImage = document.createElement("img");
                popupImage.src = iconData.popupImg;
                popupImage.classList.add("popup-image");
                popupContent.appendChild(popupImage);
            }

            // 텍스트가 있는 경우
            if (iconData.content) {
                popupContent.innerHTML = iconData.content;
            }

            popupOverlay.style.display = "flex";
            backBtn.classList.add("disabled");
        });

        mobileFrame.appendChild(img);
    });

            closePopup.addEventListener("click", () => {
            popupOverlay.style.display = "none";
            backBtn.classList.remove("disabled");
        });
}