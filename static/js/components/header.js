export function renderHeader() {
  const header = document.querySelector('#header-nav');
  header.innerHTML = `
    <div class="left-header">
    <div class="logo"><a id="pLogo">PMA</a></div>
    <ul class="nav-section">
      <li><a id="features">Features</a></li>
      <li><a id="whyUs">Why Us?</a></li>
    </ul>
  </div>
  <div class="right-header">
    <div class="user">Welcome [user-name]</div>
    <button id="log-in">Log In</button>
  </div>
  `;
}
