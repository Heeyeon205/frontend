const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
  span.style.top = `${y}px`;
  span.style.left = `${x}px`;

  span.innerHTML = `X: ${x}, Y: ${y}`;
});