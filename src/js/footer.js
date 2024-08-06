document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  const privacyLink = document.querySelector(
    '.footerNavLink[href="./page-2.html"]'
  );
  const termsLink = document.querySelector(
    '.footerNavLink[href="./page-3.html"]'
  );

  console.log('Privacy Link: ', privacyLink);
  console.log('Terms Link: ', termsLink);
  console.log('Current Path: ', currentPath);

  if (currentPath.endsWith('/page-2.html') && privacyLink) {
    privacyLink.classList.add('disabled');
  } else if (currentPath.endsWith('/page-3.html') && termsLink) {
    termsLink.classList.add('disabled');
  }
});
