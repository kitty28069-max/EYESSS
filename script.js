// 互動效果：點擊按鈕跳轉提示
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log("導航至：" + e.target.innerText);
    });
});

// 互動功能：表單提交驗證
function submitBooking() {
    alert("您的預約已收到，我們將由專人為您服務！");
}
        });
    });
});
