const slideshow = document.getElementById("slideshow");

const images = ["1.jpg", "2.jpg", "3.jpg"];
let index = 0;

const showImage = name => {
  console.log("show image", name);

  slideshow.style.backgroundImage = "url('assets/" + name + "')";
}

setInterval(() => {
  index++;
  if (index >= images.length) index = 0;

  showImage(images[index]);
}, 2000);
