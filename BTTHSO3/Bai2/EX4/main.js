const texArial = document.getElementById("textarea");
const textFile = document.getElementById("textfield");
const btn = document.getElementById("button");
const result = document.getElementById("output");

btn.addEventListener("click", function () {
    count();
});

function count(){

    const textA = texArial.value;
    const textB = textFile.value;

    // Sử dụng biểu thức chính quy để tìm tất cả các sự xuất hiện của textB trong textA
    const regex = new RegExp(textB, 'gi');
    const matches = textA.match(regex);

    // Nếu không tìm thấy sự xuất hiện, matches sẽ là null, nên cần kiểm tra và xử lý trường hợp này
    if (matches === null) {
        result.innerHTML = "Số lần xuất hiện của B trong A là: 0";
    } else {
        result.innerHTML = "Số lần xuất hiện của B trong A là: " + matches.length;
    }
}
