import React from 'react'
import {useState} from 'react';
import Modal from './Modal'
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
// import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"
import 'react-responsive-modal/styles.css';



function Navbar() {

    const [question, setQuestion] = useState("");

    const [openModal , setOpenModal] = useState(false);
    
    return (
        <div className='Header'>
            <div className='Headlogo'>
                <div className='Icons'>
                    <div className='Icon'>
                    {/* <BsFillHouseFill size='28px'/> */}

                    </div>
                    <div className='Icon'>
                    {/* <BsFillPersonFill size='28px' /> */}

                    </div>
                    <div className='Icon'>
                    {/* <BsFillChatLeftDotsFill size='28px' /> */}

                    </div>
                    <div className='Icon'>
                    {/* <RiChat4Fill size='28px' /> */}

                    </div>
                    <div className='Search'>
                    {/* <BsSearch /> */}
                        
                        <input placeholder='Search CoderBeings'></input>
                    </div>
                    <div className='Btn'>

                        <div className='OVERLAY_STYLES'>

                        
                        <button onClick={() =>{
                            setOpenModal(true)
                            
                        }}>Ask a Question</button>
                        
                       {openModal && <Modal 
                       size="sm"
                       aria-labelledby="contained-modal-title-vcenter"
                      
                       center
                    //    show={prescriptionPreview}
                    //    onHide={() => setPrescriptionPreview(false)}
                       closeModal={setOpenModal} 
                       closeOnOverlayClick={false}
                       
                       
                       />} 
                       </div>
                    </div>
                </div>

            </div>
            
        </div>
       
    )
}

export default Navbar
