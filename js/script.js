// HArd Skills

const container = document.getElementById('scrollContainer');
const content = document.getElementById('scrollContent');

// Duplicate content
content.innerHTML += content.innerHTML;

let scrollAmount = 0;

function animate() {
  scrollAmount += 1; // adjust speed
  if (scrollAmount >= content.scrollWidth / 2) {
    scrollAmount = 0;
  }
  container.scrollLeft = scrollAmount;
  requestAnimationFrame(animate);
  }

animate();


// KPI Items

const scrollContainer = document.getElementById("kpi-list");
  const scrollRight = document.getElementById("scroll-arrow-right");
  const scrollLeft = document.getElementById("scroll-arrow-left");

  // Duplica os KPIs para scroll infinito
  scrollContainer.innerHTML += scrollContainer.innerHTML;

  const itemWidth = scrollContainer.querySelector(".kpi-item").offsetWidth;
  let scrollIndex = 0;
  const maxIndex = scrollContainer.children.length / 2;

  let autoScrollPaused = false;

  function scrollToIndex(index) {
    scrollContainer.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  }

  function scrollNextItem() {
    if (autoScrollPaused) return;

    scrollIndex++;
    if (scrollIndex >= maxIndex) {
      scrollIndex = 0;
      scrollContainer.scrollLeft = 0;
    }
    scrollToIndex(scrollIndex);
  }

  const autoScrollInterval = setInterval(scrollNextItem, 8000);

  function pauseAutoScrollTemporarily() {
    autoScrollPaused = true;
    setTimeout(() => {
      autoScrollPaused = false;
    }, 4000);
  }

  scrollRight.addEventListener("click", () => {
    scrollIndex++;
    if (scrollIndex >= maxIndex) {
      scrollIndex = 0;
      scrollContainer.scrollLeft = 0;
    }
    scrollToIndex(scrollIndex);
    pauseAutoScrollTemporarily();
  });

  scrollLeft.addEventListener("click", () => {
    scrollIndex--;
    if (scrollIndex < 0) {
      scrollIndex = maxIndex - 1;
      scrollContainer.scrollLeft = scrollIndex * itemWidth;
    }
    scrollToIndex(scrollIndex);
    pauseAutoScrollTemporarily();
  });


  // Language Stwich
  const switchLang = document.getElementById('languageSwitch');

  switchLang.addEventListener('change', () => {
    const ptElements = document.querySelectorAll('.lang-pt');
    const enElements = document.querySelectorAll('.lang-en');

    ptElements.forEach(el => el.classList.toggle('d-none'));
    enElements.forEach(el => el.classList.toggle('d-none'));
  });