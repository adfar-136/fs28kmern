import { forwardRef } from "react";


const ChildButton = forwardRef((props,ref)=>(
    <button ref={ref} onClick={props.onClick}>
        {props.children}
    </button>
))
export default ChildButton