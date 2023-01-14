export function renderLandingPage() {
  const main = document.querySelector('#content');
  main.innerHTML = `
<div id="first-row-section">
  <div id="container">
    <div class="first-row-left">
      <h4>
        One app to get things done <br />
        faster, more organised.
      </h4>
      <p>All your teammates & projects in one place.</p>
      <div class="sign-up-section">
        <button id="sign-up">Get Started</button>
        <p class="note">
          FREE FOREVER. <br />
          NO FEE - EVER.
        </p>
      </div>
    </div>
    <div class="first-row-right">
      <img
        src="https://img.freepik.com/free-vector/kpi-task-management-workflow-optimization_335657-3157.jpg?w=900&t=st=1671597731~exp=1671598331~hmac=03993505cca6997651b0dd06d5c38c753f9c3e4242282cfb9d4e2cff7e1d9861"
        alt="" />
    </div>
  </div>
</div>

<div id="second-row-section">
  <h3>Our Features</h3>
  <div class="feature-row">
    <div class="feature-column">
      <img class="feature-image" src="https://img.freepik.com/free-vector/partners-holding-big-jigsaw-puzzle-pieces_74855-5278.jpg?w=996&t=st=1671695059~exp=1671695659~hmac=5f61ed5f7395c373663512f6f1a6b237701ecfb56edd6350ff5f671488065c6b" alt="" />
      <div class="feature-name">TEAMWORK</div>
      <div class="feature-details">PMA is a project management tool that uses a visual "board" system to organize tasks and collaborate with team members. Each board represents a project or a specific aspect of a project, and within each board. <strong>Alone we can do so little; together we can do so much.</strong></div>
    </div>
    <div class="feature-column">
      <img class="feature-image" src="https://img.freepik.com/free-vector/character-illustration-people-holding-speech-bubbles_53876-43081.jpg?w=740&t=st=1671695487~exp=1671696087~hmac=d645461ab0204ff00620f6b3ec479a1028d0eec69a946877792b3fcd51ce6f36" alt="" />
      <div class="feature-name">COMMUNICATIONS</div>
      <div class="feature-details">Effective communication is a key component of successful project management, and project management apps like PMA are designed to facilitate communication among team members. Team members can stay informed and get project completed on time. </div>
    </div>
    <div class="feature-column">
      <img class="feature-image" src="https://img.freepik.com/free-vector/flat-design-time-management-concept_23-2148813012.jpg?w=740&t=st=1671695535~exp=1671696135~hmac=a21729aef55edfde62320f7c224461690178ea00e3c6d4df0c5fdd5e1a99ca42" alt="" />
      <div class="feature-name">SAVE TIME</div>
      <div class="feature-details">Saving time in our app can be accomplished in many ways. Prioritizing tasks, streamline communication by centralizing all project related information in one place, and delegating tasks by assigning appropriate team members and providing clear instructions.</div>
    </div>
  </div>
</div>

<div id="third-row-section">
  <h3>Why Us?</h3>
  <p>Easy to use, Flexible, Collaborative, Affordable, Customizable, and its very popular among small businesses and startups. </p>
</div>

`;
}
