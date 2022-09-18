import React from 'react'
import 'react-responsive-modal/styles.css'

const MODAL_STYLE ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-300px) translateY(-200px)',
    backgroundColor: "#FFF",
    padding: "10px",
    zIndex: 1000,
    height: '420px',
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


function Modal2({closeModal}) {
    return (
        <div style={OVERLAY}>

        <div style={
            MODAL_STYLE
        } className='Modal2'>
            <div>
                <button className='Xbtn' onClick={() => closeModal(false)}>X</button>
            </div>
            <div className='Modal-header'>
               <h1>This is a test Question.</h1>
               <p>Asked by {""}  </p><span>Username</span>{" "}on{" "}timestamp.



                <div className='Modal-Body'>

                <input placeholder=' Type your answer...'></input>

                </div>
                <div >
                    <button className='BtnM2'>SUBMIT</button></div>
                    <div className='Small1'><small>*Keep your answer non-offensive and clean.</small></div>
            </div>

        </div>
        </div>
        // document.getElementById('portal')
    )
}

export default Modal2
