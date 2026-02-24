const mobileFrame = document.getElementById("mobileFrame");
const popupOverlay = document.getElementById("popupOverlay");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

if (mobileFrame) {

    const icons = [
        { src: "img/icon1.png", content: "아이콘 1 내용입니다.<br><br>스크롤 테스트용 텍스트.<br>".repeat(20) },
        { src: "img/icon2.png", content: "아이콘 2 상세 내용입니다.<br>".repeat(25) },
        { src: "img/icon3.png", content: "아이콘 3 설명입니다.<br>".repeat(30) },
        { src: "img/icon4.png", content: "아이콘 4 관련 정보입니다.<br>".repeat(18) },
        { src: "img/icon5.png", content: "아이콘 5 콘텐츠입니다.<br>".repeat(22) }
    ];

    const FRAME_WIDTH = mobileFrame.clientWidth;
    const FRAME_HEIGHT = mobileFrame.clientHeight;
    const ICON_SIZE = 112;

    icons.forEach(iconData => {
        const img = document.createElement("img");
        img.src = iconData.src;
        img.classList.add("icon");

        const randomX = Math.random() * (FRAME_WIDTH - ICON_SIZE);
        const randomY = Math.random() * (FRAME_HEIGHT - ICON_SIZE);

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;

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