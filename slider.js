window.addEventListener("load", function () {
  const slider = document.getElementById("slider");
  const images = slider.getElementsByTagName("img");
  const dotsContainer = document.querySelector(".dots-container");
  const dots = dotsContainer.getElementsByClassName("dot");
  const boxes = document.querySelector(".boxes");
  const box = boxes.getElementsByClassName("box");
  const city = document.getElementsByClassName("city");
  const area = document.getElementsByClassName("area");
  const time = document.getElementsByClassName("time");

  let currentSlideIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    for (let i = 0; i < box.length; i++) {
      box[i].classList.remove("active");
    }
    for (let i = 0; i < city.length; i++) {
      city[i].classList.remove("active");
    }
    for (let i = 0; i < area.length; i++) {
      area[i].classList.remove("active");
    }
    for (let i = 0; i < time.length; i++) {
      time[i].classList.remove("active");
    }
    for (let i = 0; i < city.length; i++) {
      city[i].style.display = "none";
    }
    city[index].style.display = "block";

    for (let i = 0; i < area.length; i++) {
      area[i].style.display = "none";
    }
    area[index].style.display = "block";

    for (let i = 0; i < time.length; i++) {
      time[i].style.display = "none";
    }
    time[index].style.display = "block";

    images[index].classList.add("active");
    dots[index].classList.add("active");
    box[index].classList.add("active");
    city[index].classList.add("active");
    area[index].classList.add("active");
    time[index].classList.add("active");

    currentSlideIndex = index;
  }

  function prevSlide() {
    if (currentSlideIndex === 0) {
      showSlide(images.length - 1);
    } else {
      showSlide(currentSlideIndex - 1);
    }
  }

  function nextSlide() {
    if (currentSlideIndex === images.length - 1) {
      showSlide(0);
    } else {
      showSlide(currentSlideIndex + 1);
    }
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      showSlide(i);
    });
  }

  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
      showSlide(i);
    });
  }

  showSlide(0);

  const prevButton = document.querySelector(".slider-nav button:first-child");
  const nextButton = document.querySelector(".slider-nav button:last-child");

  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
  });
});
