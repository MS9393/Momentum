const images = [ "0.jpg", "1.jpg", "2.jpg", "3.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;
src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
document.body.style.background = `url(${src}) no-repeat`;
document.body.style.backgroundSize = "cover";
document.body.style.width = "100%";
document.body.style.height = "auto";