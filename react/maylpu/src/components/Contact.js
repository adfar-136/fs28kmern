import Section from "./Section"

function Contact(props){
    return (
        <div>
            <h1>Contact Page</h1>
            <Section lName = {props.lastName}/>
        </div>
    )
}
export default Contact