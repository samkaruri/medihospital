
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");
  const slider = document.querySelector(".testimonials-slider");

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -420, behavior: 'smooth' });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 420, behavior: 'smooth' });
  });



   function toggleAnswer(id) {
      const answer = document.getElementById(`answer-${id}`);
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
    }