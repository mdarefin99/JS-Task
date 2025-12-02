
        const destinations = [
            {
                url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                title: "Tuscany, Italy"
            },
            {
                url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                title: "Nice, France"
            },
            {
                url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                title: "Phuket, Thailand"
            },
            {
                url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                title: "Venice, Italy"
            },
            {
                url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                title: "Bali, Indonesia"
            }
        ];

        /* DOM elements*/
        const sliderImage = document.getElementById('slider-image');
        const sliderTitle = document.getElementById('image-title');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        let currentIndex = 0;
        let slideInterval;

        // Function to update the image
        function updateSlider() {
            //fade effect
            sliderImage.style.opacity = 0;
            
            setTimeout(() => {
                sliderImage.src = destinations[currentIndex].url;
                sliderTitle.textContent = destinations[currentIndex].title;
                sliderImage.style.opacity = 1;
            }, 200); // delay to allow opacity transition to start
        }

        // Initializingfirst image
        updateSlider();

        //Navigation Logic (Next)
        function nextSlide() {
            currentIndex++;
            // Loop back to start if at the end
            if (currentIndex >= destinations.length) {
                currentIndex = 0;
            }
            updateSlider();
            resetTimer(); // Reset the auto-timer on manual click
        }

        // 3. Navigation Logic (Previous)
        function prevSlide() {
            currentIndex--;
            // Loop to start
            if (currentIndex < 0) {
                currentIndex = destinations.length - 1;
            }
            updateSlider();
            resetTimer(); 
        }

        // 4. Add Event Listeners 
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Automatic slider
        function startSlideshow() {
            slideInterval = setInterval(() => {
                // Determine logic for next slide automatically
                currentIndex++;
                if (currentIndex >= destinations.length) {
                    currentIndex = 0;
                }
                updateSlider();
            }, 3000); 
        }

        // Helper to reset timer when user manually interacts
        function resetTimer() {
            clearInterval(slideInterval);
            startSlideshow();
        }

        // Start the loop
        startSlideshow();