export default function login(){
    return `
    <form action="/submit" method="post">
        <br>
        <input type="text" placeholder="Enter Name" />
        <br>
        <br>
        <input type="password" placeholder="Enter password" />
        <br>
        <br>
        <button>Submit</button>
        </form>
        <br>
        <a href='/'>Back to Home </a>
    `
}