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

icons.forEach((iconData, index) => {

    const img = document.createElement("img");
    img.src = iconData.src;
    img.classList.add("icon");

    // 📌 Figma 좌표 0.5배 적용
    const positions = [
        { left: 603 * 0.5, top: 556 * 0.5 },  // icon1 (일러스트2 3)
        { left: 191 * 0.5, top: 434 * 0.5 },  // icon2 (일러스트2 1)
        { left: 110 * 0.5, top: 1286 * 0.5 }, // icon3 (일러스트2 4)
        { left: 37 * 0.5,  top: 747 * 0.5 },  // icon4 (일러스트2 6)
        { left: 640 * 0.5, top: 1206 * 0.5 }  // icon5 (일러스트2 5)
    ];

    img.style.left = `${positions[index].left}px`;
    img.style.top = `${positions[index].top}px`;

    img.addEventListener("click", () => {
        popupContent.innerHTML = "";

        if (iconData.popupImg) {
            const popupImage = document.createElement("img");
            popupImage.src = iconData.popupImg;
            popupImage.classList.add("popup-image");
            popupContent.appendChild(popupImage);
        }

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