import React from 'react'
import ReactDOM from "react-dom"
function Modal({children,condition}) {
  if(!condition) return null;
  return ReactDOM.createPortal(<div>
    {children}
  </div>,document.getElementById("root"))
}

export default Modal