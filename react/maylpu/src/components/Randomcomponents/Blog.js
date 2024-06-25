function Blog(props){
    return (
        <>
         <h1>Blog page</h1>
         <h1>My fName: {props.fName}</h1>
         <p>{props.skills}</p>
         <p>{props.age}</p>
        </>
    )
}
export default Blog; // export default Blog component