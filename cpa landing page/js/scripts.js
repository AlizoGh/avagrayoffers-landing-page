/* =========================
   🚀 SCRIPT.JS - Full JavaScript Functionality
   ========================= */

// 1️⃣ Play/Pause Video Feature
function toggleVideo() {
    let video = document.getElementById("how-it-works-video");
    let playButton = document.querySelector(".play-button");

    if (video.paused) {
        video.play();
        playButton.style.display = "none"; // Hide play button when playing
    } else {
        video.pause();
        playButton.style.display = "block"; // Show play button when paused
    }
}

// Show play button when video is paused
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("how-it-works-video");
    let playButton = document.querySelector(".play-button");
    
    video.addEventListener("pause", function() {
        playButton.style.display = "block";
    });
    
    video.addEventListener("play", function() {
        playButton.style.display = "none";
    });
});

// 2️⃣ Back to Top Button Functionality
window.addEventListener("scroll", function() {
    let backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// 3️⃣ FAQ & How-To Steps Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    let toggleItems = document.querySelectorAll(".faq-question, .step-btn");
    
    toggleItems.forEach(item => {
        item.addEventListener("click", function() {
            let answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

// 4️⃣ Live User Counter (Fake Random Number Generator)
document.addEventListener("DOMContentLoaded", function () {
    function updateLiveUsers() {
        let userCounter = document.getElementById("liveUsers");
        if (userCounter) {
            let randomUsers = Math.floor(Math.random() * (500 - 250 + 1)) + 250; // Random between 250-500
            userCounter.textContent = randomUsers;
        }
    }
    setInterval(updateLiveUsers, 5000); // Update every 5 seconds
    updateLiveUsers(); // Initial call
});

// 5️⃣ Countdown Timer for Limited-Time Offer
document.addEventListener("DOMContentLoaded", function() {
    let countdownDisplay = document.getElementById("countdown-timer");
    if (countdownDisplay) {
        let timer = 300; // 5 minutes in seconds
        let countdownInterval = setInterval(function () {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            countdownDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            timer--;
            if (timer < 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Offer Expired!";
            }
        }, 1000);
    }
});

// 6️⃣ Email Subscription Confirmation Message
document.addEventListener("DOMContentLoaded", function() {
    let emailForm = document.getElementById("email-form");
    if (emailForm) {
        emailForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent actual submission
            let confirmationMessage = document.getElementById("confirmation-message");
            if (confirmationMessage) {
                confirmationMessage.style.display = "block";
            }
            setTimeout(() => {
                emailForm.submit(); // Submit after showing message
            }, 2000);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function startCountdown(durationInSeconds, displayElementId) {
        let timer = durationInSeconds;
        let countdownElement = document.getElementById(displayElementId);

        if (!countdownElement) {
            console.error("Countdown element not found!");
            return;
        }

        function updateCountdown() {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;

            seconds = seconds < 10 ? "0" + seconds : seconds;
            countdownElement.textContent = `${minutes}:${seconds}`;

            if (timer > 0) {
                timer--;
                setTimeout(updateCountdown, 1000);
            } else {
                countdownElement.textContent = "00:00";
            }
        }

        updateCountdown();
    }

    // Start countdown (5 minutes = 300 seconds)
    startCountdown(300, "timer");
});

document.addEventListener("DOMContentLoaded", function () {
    // Read More Button for About Us Section
    const readMoreBtn = document.querySelector(".read-more-btn");
    const hiddenContent = document.querySelector(".hidden-content");

    if (readMoreBtn && hiddenContent) {
        hiddenContent.style.display = "none"; // Hide extra text initially

        readMoreBtn.addEventListener("click", function () {
            if (hiddenContent.style.display === "none") {
                hiddenContent.style.display = "inline"; // Show hidden text
                readMoreBtn.textContent = "Read Less"; // Change button text
            } else {
                hiddenContent.style.display = "none"; // Hide text
                readMoreBtn.textContent = "Read More"; // Reset button text
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Testimonials Section (Auto-Sliding & Navigation)
    const testimonials = document.querySelectorAll(".testimonial-container");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? "block" : "none";
        });
    }

    // Show the first testimonial initially
    showTestimonial(currentTestimonial);

    // Next Testimonial
    nextBtn.addEventListener("click", function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Previous Testimonial
    prevBtn.addEventListener("click", function () {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-Slide Every 5 Seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000); // Change every 5 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const stepButtons = document.querySelectorAll(".step-btn");

    stepButtons.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;

            if (content.classList.contains("hidden")) {
                content.classList.remove("hidden");
                content.style.maxHeight = content.scrollHeight + "px"; // Smooth expand
            } else {
                content.classList.add("hidden");
                content.style.maxHeight = "0"; // Smooth collapse
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let slotsLeft = 12;
    const slotsElement = document.getElementById("slotsLeft");

    setInterval(() => {
        if (slotsLeft > 2) {
            slotsLeft--;
            slotsElement.textContent = slotsLeft;
        }
    }, 8000); // Decrease every 8 seconds
});
