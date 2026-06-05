document.addEventListener("DOMContentLoaded", function() {
    const selectionBoxes = document.querySelectorAll(".selection-box");
    const swatches = document.querySelectorAll(".swatch");
    const appointmentForm = document.querySelector(".appointment-form");
    const cartBtns = document.querySelectorAll(".cart-btn");

    // 1. 款式選取互動
    selectionBoxes.forEach(box => {
        box.addEventListener("click", function() {
            // 移除其他項目的 active 狀態
            selectionBoxes.forEach(b => b.classList.remove("active"));
            // 為點擊的項目添加 active 狀態
            this.classList.add("active");
            
            // 模擬更新中央與右側資料 (此處簡化未實作功能)
            const productType = this.dataset.product;
            console.log(`已選擇款式: ${productType}`);
        });
    });

    // 2. 切換顏色互動 (模擬)
    swatches.forEach(swatch => {
        swatch.addEventListener("click", function() {
            // 獲取色圓點的 class 來識別顏色
            const colorClass = this.classList[1];
            console.log(`模擬切換顏色為: ${colorClass}`);
            // 實際應用中可在此切換隱眼盒子與本體照片
        });
    });

    // 3. 預約表單提交模擬
    appointmentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;

        if (name && phone && date) {
            alert(`已成功預約試戴!\n姓名: ${name}\n電話: ${phone}\n日期: ${date}`);
            // 提交後可在此清空表單
        } else {
            alert("請填寫完整的預約資料!");
        }
    });

    // 4. 添加到購物車模擬
    cartBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            alert("模擬：已將 Venus Brown 款式添加到購物車!");
        });
    });
});
