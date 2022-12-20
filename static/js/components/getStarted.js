export function getstartedButton() {
    const signupButton = document.getElementById('signUp')

    signupButton.addEventListener('click', () => {
        // console.log('test')
        const sectionContent = document.getElementById('content')
        sectionContent.innerHTML = `
        <form>
        <h4>Sign-Up</h4>
            <label>Name: </label>
            <input></input><br>
            <label>Email: </label>
            <input></input><br>
            <label>Password: </label>
            <input type="password"></input><br>
            <button>Submit</button>
        </form>
        `
    })
}