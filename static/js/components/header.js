export function renderHeader() {
  const header = document.querySelector('#header-nav');
  axios.get(`/api/session`).then((response) => {
    if(response.data.session[0].sess.user === undefined) {
      console.log(response)
      header.innerHTML = `
      <div class="left-header">
      <div class="logo"><a id="pLogo">PMA</a></div>
      <ul class="nav-section">
        <li><a id="features">Features</a></li>
        <li><a id="whyUs">Why Us?</a></li>
      </ul>
    </div>
    <div class="right-header">
      <div class="welcome-user"></div>
      <button id="log-in">Log In</button>
    </div>
    `;
    }
    else {
      header.innerHTML = `
      <div class="left-header">
      <div class="logo"><a id="pLogo">PMA</a></div>
      <ul class="nav-section">
        <li><a id="features">Features</a></li>
        <li><a id="whyUs">Why Us?</a></li>
        <li><a id="dashboard">Dashboard</a></li>
      </ul>
    </div>
    <div class="right-header">
      <div class="welcome-user">Welcome ${response.data.session[0].sess.user.name}</div>
      <button id="log-out">Log Out</button>
    </div>
    `;
    }
})
  
}
