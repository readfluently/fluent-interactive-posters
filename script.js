document.addEventListener("DOMContentLoaded", () => {
  const hotspots = document.querySelectorAll(".hotspot");
  const infoPanel = document.getElementById("infoPanel");

  if (!hotspots.length || !infoPanel) return;

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      const title = hotspot.dataset.title;
      const text = hotspot.dataset.text;
      const tag = hotspot.dataset.tag;

      infoPanel.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
        <span class="tag">${tag}</span>
      `;
    });
  });
});
