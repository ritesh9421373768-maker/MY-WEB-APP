// =========================
// Welcome Button Interaction
// =========================

const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", () => {

    // Show the hidden message
    message.classList.remove("hidden");

    // Change button text
    welcomeBtn.innerHTML = 'Welcome! <span>✨</span>';

    // Small celebration effect
    createParticles();
});


// =========================
// Create Celebration Particles
// =========================

function createParticles() {

    const colors = ["#8b5cf6", "#06b6d4", "#ffffff", "#67e8f9"];

    for (let i = 0; i < 25; i++) {

        const particle = document.createElement("span");

        particle.style.position = "fixed";
        particle.style.left = "50%";
        particle.style.top = "50%";

        particle.style.width = "6px";
        particle.style.height = "6px";

        particle.style.borderRadius = "50%";

        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 180;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 900 + Math.random() * 500,
                easing: "cubic-bezier(.17,.67,.83,.67)"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}
