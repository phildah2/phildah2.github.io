// This script would dynamically create the navigation and insert it into the 'nav' element
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  // Insert the HTML code for the navigation here
  nav.innerHTML = `
    <ul>
      <li><a href="index2.html">WF</a></li>
      <li><a href="dwhelp.html">Help</a></li>
      <li><a href="dw_partner.html">Partner</a></li>
      <li><a href="dwapi.html">WF mit API</a></li>
      
    </ul>
  `;
});