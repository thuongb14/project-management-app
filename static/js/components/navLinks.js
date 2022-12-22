export function whyUsLink() {
  const whyUs = document.getElementById('whyUs');
  whyUs.addEventListener('click', () => {
    // console.log("Why Tho")
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Why Us?</h1>
        <p>Why Not</p>
        `;
  });
}

export function blogLink() {
  const blog = document.getElementById('blog');
  blog.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Blog</h1>
        <p>Blog Post 1</p>
        `;
  });
}
