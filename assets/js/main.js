window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").classList.add("scroll");
        document.getElementById("brand").classList.add("scroll-bg");
        let x = document.getElementsByClassName("nav-link");
        for (let i of x) {
            i.classList.add("scroll-bg-g");
        }
    } else {
        document.getElementById("nav").classList.remove("scroll");
        document.getElementById("brand").classList.remove("scroll-bg");
        let x = document.getElementsByClassName("nav-link");
        for (let i of x) {
            i.classList.remove("scroll-bg-g");
        }
    }
};
