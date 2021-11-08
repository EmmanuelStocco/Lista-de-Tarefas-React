import React from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";


function Notes({ data }) {
    return (
        <>
          <li class="notepad-infos">
              <div> 
                <strong>{data.title}</strong>
                <div>
                  <AiTwotoneDelete size="24"/>
                </div>
              </div>

              <textarea defaultValue={data.notes}></textarea> 
              <span> 
                 <AiOutlineExclamationCircle size="24"/>
              </span>
           </li>
        </>
    )
}

export default Notes;