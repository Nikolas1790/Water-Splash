document.addEventListener('DOMContentLoaded', () => {
  const faqBlocks = document.querySelectorAll('.faqCardContentBlock');

  faqBlocks.forEach(block => {
    const openBtn = block.querySelector('.openBtn');
    const closeBtn = block.querySelector('.closeButton');
    const faqText = block.querySelector('.faqOpenText');

    const toggleFAQ = () => {
      const isOpen = !faqText.classList.contains('hidden');

      faqText.classList.toggle('hidden', isOpen);
      closeBtn.classList.toggle('hidden', isOpen);
      openBtn.classList.toggle('hidden', !isOpen);
    };

    openBtn.addEventListener('click', toggleFAQ);
    closeBtn.addEventListener('click', toggleFAQ);
    block.addEventListener('click', event => {
      if (!event.target.closest('.cardBtn')) {
        toggleFAQ();
      }
    });
  });
});
