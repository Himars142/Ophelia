document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("artwork-container");
	const img = document.getElementById("artwork-img");
	const loupe = document.getElementById("loupe");
	const zoomRatio = 2.5;

	container.addEventListener("mousemove", (e) => {
		loupe.style.display = "block";

		const rect = container.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const loupeRadius = loupe.offsetWidth / 2;
		loupe.style.left = `${x - loupeRadius}px`;
		loupe.style.top = `${y - loupeRadius}px`;

		const bgX = (x / rect.width) * 100;
		const bgY = (y / rect.height) * 100;

		loupe.style.backgroundImage = `url('${img.src}')`;
		loupe.style.backgroundSize = `${rect.width * zoomRatio}px ${rect.height * zoomRatio}px`;
		loupe.style.backgroundPosition = `${bgX}% ${bgY}%`;
	});

	container.addEventListener("mouseleave", () => {
		loupe.style.display = "none";
	});
});
