import { getstartedButton } from "../static/js/components/getStarted.js";

export function whyUsLink() {
  const whyUs = document.getElementById("whyUs");
  whyUs.addEventListener("click", () => {
    // console.log("Why Tho")
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Why Us?</h1>
        <p>Why Not</p>
        `;
  });
}

export function featuresLink() {
  const features = document.getElementById("features");
  features.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Features</h1>
        <ul>
            <li>User Friendly</li>
            <li>No Load Times</li>
        </ul>
        `;
  });
}

export function blogLink() {
  const blog = document.getElementById("blog");
  blog.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Blog</h1>
        <p>Blog Post 1</p>
        `;
  });
}

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "signUp") {
    const form = new FormData(document.getElementById("signUpForm"));
    const info = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
    };
    console.log(info);
    axios
      .put(`/sign-up`, info)
      .then((response) => {
        console.log(response);
        console.log("test");
        getstartedButton();
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
});
