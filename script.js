let password = "";
const correctPass = "2712010"; // 🔹 Pass bạn muốn đặt

function pressNum(num) {
    if (password.length < 8) {
        password += num;
        document.getElementById("password").value = "•".repeat(password.length);
    }
}

function clearPass() {
    password = password.slice(0, -1);
    document.getElementById("password").value = "•".repeat(password.length);
}

function checkPass() {
    if (password === correctPass) {
        window.location.href = "love.html"; // 🔹 Trang tỏ tình sẽ mở nếu pass đúng
    } else {
        alert("Sai mật khẩu! Thử lại nhé ❤️");
        password = "";
        document.getElementById("password").value = "";
    }
}
