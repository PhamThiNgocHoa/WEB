const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const solveButton = document.getElementById("solveButton");
const resultElement = document.getElementById("result");

// Thêm sự kiện click cho nút "Giải"
solveButton.addEventListener("click", function (even) {
    even.preventDefault();
    // Lấy giá trị a, b, c từ input
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);

    // Tính delta
    const delta = b ** 2 - 4 * a * c;

    // Tính nghiệm

    if (delta > 0) {
      const  x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const  x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultElement.textContent = `Phương trình có hai nghiệm: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (delta === 0) {
     const   x1 = -b / (2 * a);
        resultElement.textContent = `Phương trình có một nghiệm kép: x = ${x1.toFixed(2)}`;
    } else {
        resultElement.textContent = "Phương trình không có nghiệm thực.";
    }
});
