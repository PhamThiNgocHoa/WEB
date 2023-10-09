
    const greetings = [
        "Chào mừng bạn đến trang web của chúng tôi!",
        "Xin chào, bạn có một ngày tốt lành!",
        "Chào bạn, chúng tôi rất vui được gặp bạn!",
        "Hy vọng bạn sẽ có trải nghiệm tuyệt vời tại đây!",
    ];
const hi = document.getElementById("greeting");
const radom = Math.floor(Math.random()*greetings.length);
const ran = greetings[radom];
hi.textContent = ran;

