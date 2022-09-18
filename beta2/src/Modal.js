import React from 'react'
import 'react-responsive-modal/styles.css';
// import Modal from 'react-responsive-modal'
import ReactDom from "react-dom"

const MODAL_STYLE ={
 position: 'fixed',
 top: '50%',
 left: '50%',
 transform: 'translateX(-300px) translateY(-200px)',
 backgroundColor: "#FFF",
 padding: "10px",
 zIndex: 1000,
 height: '300px',
 width: '600px',
 borderRadius: '15px',
 
 
}

const OVERLAY={ 
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, .7)",
    zIndex: 1000

}
 function Modal({closeModal}) {
return ReactDom.createPortal(
    
   

    <div style={OVERLAY}>

    <div className='modalBg'
    style={MODAL_STYLE}
    center
    >
      

        <div className='modalContainer'>
            <button className='btn2' onClick={() => closeModal(false)}>X</button>
            <div className='mHeader'>
                <h1 className='h11'>Ask Your Question.</h1>
                <div className='mBody'>
                 <input placeholder='Please type your question.'></input>
                    <div className='mFooter'>
                        <button className='mBtn'>Submit</button>

                    </div>

                </div>

            </div>

        </div>

        </div>
    </div>,
    document.getElementById('portal')
    
    // </div>
    )
}

export default Modal;
