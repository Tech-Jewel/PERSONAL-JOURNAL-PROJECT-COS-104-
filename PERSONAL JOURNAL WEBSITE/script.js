// Get elements
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Open modal
openBtn.addEventListener("click", () => {
	modal.style.display = "flex";
});

// Close modal (x button)
closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

// Close modal (click outside box)
window.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});
