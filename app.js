const radiusInp = document.querySelector("#radius");

document.querySelector("#btn").onclick = () => {
  const r = radiusInp.value;

  const area = (Math.PI * r * r).toFixed(2);
  const pMeter = (2 * Math.PI * r).toFixed(2);

  document.querySelector(".area").textContent = area;
  document.querySelector(".perim").textContent = pMeter;
};

radiusInp.focus();
