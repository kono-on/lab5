/* initialization of dom variables and src images through array */
beginButton = document.getElementById("beginButton");
backButton = document.getElementById("backButton");
heading = document.getElementById("heading");
experience = document.getElementById("experience");

audio = document.getElementById("soundscape");
/* Timestamps used to automatically change the image and background
based on the part of the audio. */
imageArr = [
    { time: 0, src: "images/street1.jpg" },
    { time: 10, src: "images/street2.jpg" },
    { time: 20, src: "images/street3.jpg" },
    { time: 39, src: "images/street4.jpg" },
    { time: 55, src: "images/street5.jpg" }
];

beginButton.addEventListener("click", () => {

    experience.style.display = "block";
    heading.style.display = "none";
    backButton.style.display = "block";
    audio.play();
});

backButton.addEventListener("click", () => {

    experience.style.display = "none";
    heading.style.display = "flex";
    backButton.style.display = "none";
    audio.pause();
});

/* create a stack of images to be transitioned between based on
timestamp */
images = [];

imageArr.forEach((item, index) => {
    images[index] = document.getElementById(`image${index}`);
    images[index].src = item.src;
});

images[0].classList.add("active");

/* update the images from timestamp, adds an 'active' class
which brings back the opacity as defined in styles */
audio.addEventListener("timeupdate", () => {

    currentTime = audio.currentTime;
    selectedIndex = 0;

    for (let i = 0; i < imageArr.length; i++) {
        if (currentTime >= imageArr[i].time) {
            selectedIndex = i;
        }
    }

    images.forEach((img, index) => {
        img.classList.toggle("active", index === selectedIndex);
    });

});
