import React from 'react';

function Notes({ data }) {
    return (
        <>
          <li class="notepad-infos">
              <div> 
                <strong>{data.title}</strong>
                <div>
                  x
                </div>
              </div>

              <textarea defaultValue={data.notes}></textarea> 
              <span> ! </span>
           </li>
        </>
    )
}

export default Notes;