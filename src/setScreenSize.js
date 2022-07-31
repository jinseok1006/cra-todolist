function setScreenSize() {
  window.addEventListener('reisze', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(document.documentElement.style);
  });
}

export default setScreenSize;
