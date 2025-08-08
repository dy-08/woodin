const section02 = document.getElementById('section02');

let to = 0;

window.addEventListener('wheel', (event) => {
  const rv = section02.offsetTop - 82;
  console.log('rv: ', rv);
  const y = event.deltaY;
  console.log(y);
  let isPN = y > 0 ? rv : -rv;
  to += isPN;
  console.log(to);
  console.log('isPN: ', isPN);
  console.log('type: ', typeof isPN);
  window.scrollTo({ top: to, behavior: 'smooth' });
});
