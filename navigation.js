// This script would dynamically create the navigation and insert it into the 'nav' element
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  // Insert the HTML code for the navigation here
  nav.innerHTML = `
    <ul>
      <li><a href="index2.html">Home</a></li>
      // Other navigation links
    </ul>
  `;
});
