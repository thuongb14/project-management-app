export function renderLandingPage() {
  const main = document.querySelector('#content');
  main.innerHTML = `
    <div id="first-row-section">
    <div id="container">
    <div class="first-row-left">
        <h4>One app to get things done <br> faster, more organised.</h4>
        <p>All your teammates & projects in one place.</p>
        <div class="sign-up-section">
          <button id="sign-up">Get Started</button>
          <p class="note">FREE FOREVER. <br> NO FEE - EVER.</p>
        </div>
    </div>
    <div class="first-row-right">
      <img src="https://img.freepik.com/free-vector/kpi-task-management-workflow-optimization_335657-3157.jpg?w=900&t=st=1671597731~exp=1671598331~hmac=03993505cca6997651b0dd06d5c38c753f9c3e4242282cfb9d4e2cff7e1d9861" alt="">
    </div>
  </div>
</div>
`;
}
