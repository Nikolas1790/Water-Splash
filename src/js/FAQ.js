document.addEventListener('DOMContentLoaded', () => {
  const faqBlocks = document.querySelectorAll('.faqCardContentBlock');

  faqBlocks.forEach(block => {
    const openBtn = block.querySelector('.openBtn');
    const closeBtn = block.querySelector('.closeButton');
    const faqText = block.querySelector('.faqOpenText');

    openBtn.addEventListener('click', () => {
      faqText.classList.remove('hidden');
      closeBtn.classList.remove('hidden');
      openBtn.classList.add('hidden');
    });

    closeBtn.addEventListener('click', () => {
      faqText.classList.add('hidden');
      closeBtn.classList.add('hidden');
      openBtn.classList.remove('hidden');
    });
  });
});
