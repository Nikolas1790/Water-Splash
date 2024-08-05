document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.cardBtn');

  buttons.forEach(button => {
    const textElement = button.parentNode.nextElementSibling;
    const openIcon = button.querySelector('.faqOpen');
    const closedIcon = button.querySelector('.faqClosed');

    if (textElement.classList.contains('hidden')) {
      openIcon.style.display = 'block';
      closedIcon.style.display = 'none';
    } else {
      openIcon.style.display = 'none';
      closedIcon.style.display = 'block';
    }

    button.addEventListener('click', function () {
      textElement.classList.toggle('hidden');

      if (textElement.classList.contains('hidden')) {
        openIcon.style.display = 'block';
        closedIcon.style.display = 'none';
      } else {
        openIcon.style.display = 'none';
        closedIcon.style.display = 'block';
      }
    });
  });
});
