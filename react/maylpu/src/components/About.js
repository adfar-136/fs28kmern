import Blog from "./Blog";
let fName = "Abhishek";
let skills = ["HTML","CSS","JS"]
function About({firstName,age,salary}){
    
    return (
        <div>
            <h1>About Us</h1>
            <h1>My firstname is: {firstName}</h1>
            <h1>My age is: {age}</h1>
            <h1>My salary is: {salary}</h1>
            <Blog fName={firstName} skills={skills} age={age}/>
        </div>
    )
}
export default About