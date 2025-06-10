activeslideimg();

        function activeslideimg(activeSlide = 2) {
            const slides = document.querySelectorAll(".slide2");

            slides[activeSlide].classList.add("active");

            for (const slide of slides) {
                slide.addEventListener("click", () => {
                    clearActiveClasses();

                    slide.classList.add("active");
                });
            }


            function clearActiveClasses() {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                })
            }


        }