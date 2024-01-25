function PropsDestr(props) {
    return(
        <div>
            <h3>This is Props Destructor for College</h3>
            
            {props.eg.dpt} and {props.eg.sem}
            {/* <h3>Department {props.dpt}, Year {props.sem}</h3> */}
        </div>
    )


}
export default PropsDestr