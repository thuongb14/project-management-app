export function renderLogin(){
    const loginBtn = document.getElementById("loginBtn")
    loginBtn.addEventListener("click", ()=>{
        const loginPage = document.getElementById("content")
        loginPage.innerHTML = `
        <div class="login"> 
            <h1> Login Page </h1> 
            <form action="/auth" method="post">
                <label for="username"> </label>
                <input type="text" name="username" palceholder ="Usernmae" id="username" required>
                <label for="password"> </label>
                <input type="password" name="password" placeholder="Password" id="password" required>
                <input type="submit" value="Login"></form></div>
        `      
    })

    
}