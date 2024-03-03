const btn = document.getElementById("to_top_btn");

window.onscroll = () => scrollFunction()

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function pinToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}