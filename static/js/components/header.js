export function renderHeader() {
  const header = document.querySelector('#header-nav');
  header.innerHTML = `
    <div class="left-header">
    <div class="logo"><a id="pLogo">PMA</a></div>
    <ul class="nav-section">
      <li><a id="whyUs">Why Us?</a></li>
      <li><a id="features">Features</a></li>
      <li><a id="blog">Blog</a></li>
    </ul>
  </div>
  <div class="right-header">
    <div class="user">Welcome [user-name]</div>
    <button id="signUp" class="sign-up-button">Get Started</button>
    <button id="loginBtn" class="login-button">Login</button>
  </div>
  `;
}
