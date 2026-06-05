document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".brand-card");
    const navContainer = document.querySelector(".nav-container");

    // 1. 平滑捲動效果
    navButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // 考慮導覽列高度
                behavior: "smooth"
            });

            // 更新按鈕狀態
            navButtons.forEach(btn => btn.classList.remove("nav-active"));
            this.classList.add("nav-active");

            // 手機版：捲動水平選單使選中按鈕中心化
            if (window.innerWidth <= 768) {
                const btnOffsetLeft = this.offsetLeft;
                const btnWidth = this.offsetWidth;
                const containerWidth = navContainer.offsetWidth;
                const scrollLeft = btnOffsetLeft - (containerWidth / 2) + (btnWidth / 2);
                
                navContainer.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. 監聽捲動事件，自動更新選取狀態
    window.addEventListener("scroll", function() {
        let currentSectionId = "";
        sections.forEach(section => {
            if (section.offsetTop <= window.scrollY + 100) {
                currentSectionId = "#" + section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navButtons.forEach(btn => {
                btn.classList.remove("nav-active");
                if (btn.getAttribute("href") === currentSectionId) {
                    btn.classList.add("nav-active");
                }
            });
        }
    });
});
