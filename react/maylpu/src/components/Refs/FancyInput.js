import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props,ref)=>{
   const inputRef = useRef()
   useImperativeHandle(ref,()=>({
    focus:()=>{
        inputRef.current.focus()
    },
    disable:()=>{
        inputRef.current.disabled = true
    },
    enable:()=>{
        inputRef.current.disabled = false
    }
   }))
   return <input type="text" ref={inputRef} />
})
export default FancyInput