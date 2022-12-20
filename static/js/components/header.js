export function renderHeader() {
  const header = document.querySelector('#header-nav');
  header.innerHTML = `
    <div class="left-header">
    <div class="logo">PMA</div>
    <ul class="nav-section">
      <li>Why Us?</li>
      <li>Features</li>
      <li>Blog</li>
    </ul>
  </div>
  <div class="right-header">
    <div class="user">Welcome [user-name]</div>
    <button class="sign-up-button">Get Started</button>
  </div>
  `;
}
