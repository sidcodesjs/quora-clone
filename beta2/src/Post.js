import React from 'react'
import {useState} from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCaretUp} from "react-icons/ai";
import { AiOutlineCaretDown} from "react-icons/ai";
import { AiOutlineSend} from "react-icons/ai";
import { AiOutlineComment} from "react-icons/ai";
import Modal2 from './Modal2';



function Post({}) {
    const [openModal , setIsModalOpen] = useState(false);
    return (
        <div className='All'>

        <div className='Post'>
           <div className='Postinfo'>
           <AiOutlineUser size='23px'/>
           <h3>Username</h3>
           <small>Timestamp</small>





           </div>
           <div className='Question'>
               <p>Question</p>
               <button onClick={() =>{
                            setIsModalOpen(true)
               
                        }}>Answer</button>
           </div>
                        { openModal && <Modal2 />}
           <div className='post-btn'>
               <p></p>
           </div>
           <div className='Mern'>
           <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wQ9gNO7N5qBAutlXcR4R7gHaHa%26pid%3DApi&f=1'></img>

           </div>
           <div className='Footer'>
           <AiOutlineSend size='28px'/>
               <div className='Footer-left'>
               <AiOutlineCaretUp size='28px' />
               <AiOutlineCaretDown size='28px'/>
               

               </div>
               <div className='Only'>
           <AiOutlineComment size='28px'/>


               </div>

           </div>
        </div>
        </div>
    )
}

export default Post
