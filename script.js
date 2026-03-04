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
            link: "https://docs.google.com/forms/d/1DUhzEr25592vb4iU0JfiDCLGR1sdZ6SewLRtSb6WErk/edit" 
        }
    ];

    const FRAME_WIDTH = mobileFrame.clientWidth;
    const FRAME_HEIGHT = mobileFrame.clientHeight;

icons.forEach((iconData, index) => {

    const img = document.createElement("img");
    img.src = iconData.src;
    img.classList.add("icon");

    const positions = [
        { left: 603 * 0.5, top: 620 * 0.5 },  
        { left: 191 * 0.5, top: 500 * 0.5 },  
        { left: 110 * 0.5, top: 1286 * 0.5 }, 
        { left: 37 * 0.5,  top: 790 * 0.5 },  
        { left: 630 * 0.5, top: 1206 * 0.5 }  
    ];

    img.style.left = `${positions[index].left}px`;
    img.style.top = `${positions[index].top}px`;

    img.addEventListener("click", () => {

        // 🔹 링크가 있는 경우 → 바로 이동
        if (iconData.link) {
            window.location.href = iconData.link;
            return;
        }

        // 🔹 기존 팝업 로직
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