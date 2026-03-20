document.addEventListener("DOMContentLoaded", () => {
  const hotspots = document.querySelectorAll(".hotspot");
  const infoPanel = document.getElementById("infoPanel");

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {

      // remove active from all
      hotspots.forEach(h => h.classList.remove("active"));

      // add active to clicked
      hotspot.classList.add("active");

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
