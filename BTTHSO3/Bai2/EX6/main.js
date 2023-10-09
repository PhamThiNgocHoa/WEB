document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".btn");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn form gửi đi

        // Xóa các lớp CSS invalid-input cũ
        const inputs = document.querySelectorAll(".p2");
        inputs.forEach(function (input) {
            input.classList.remove("invalid-input");
        });

        inputs.forEach(function (input) {
            if (input.value === "") {
                input.classList.add("invalid-input");
            }
        });

        // Nếu không có lỗi, bạn có thể tiến hành gửi form ở đây
    });
});
