setTimeout(function () {
    alert("Selamat Datang Ditoko Online Kamui !");
}, 3000);
const heroText = documen.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function channgeHeroTextColor() {
    heroText.ttyle.color = colors[colorIndex];
    colorIndex = (colorIndex +  1) % color.lengt;
}

setInterval(channgeHeroTextColor, 2000);
let currentImageIndex = 0;


function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % Images.length;
    document.cuerySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`;
}


setInterval(chageHeroImage, 2000);
const productImage = document.querySelectorAll(".product-card img");


productImage.array.forEach((image) => {
    image.addEventLister("click",() => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
});
image.addEventLister("mouseLeave",() => {
    image.style.transform = "scale(1)";
});
});

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("terimakasih telah membeli produk ini!")
    })
})
