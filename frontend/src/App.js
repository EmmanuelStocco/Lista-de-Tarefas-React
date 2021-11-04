import React, { useState, useEffect } from 'react';

import api from './services/api'

import './app.css'
import './main.css'
import './global.css'
import './sidebar.css'

import Notes from './Components/Notes'
import RadioButton from './Components/Radio'

function App(){

  const [ title, setTitle] = useState('')
  const [ notes, setNotes ] = useState('')
  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get('/annotations');

      setAllNotes(response.data)
    }
    getAllNotes()
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })
    
    setTitle('')
    setNotes('')
    setAllNotes([...allNotes, response.data]) //exibir todas as informações q allNotes já tem + atual
  };

  //colorindo botão ao preencher campo
  useEffect(()=> {
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#FFD3CA'
      if(title && notes) {
        btn.style.background = '#eb8f7a'
      }
    }
    enableSubmitButton()
  }, [title, notes])


  return (
    <div id="app"> 
      <aside> 
        <strong> Caderno de Notas </strong>
        <form onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="title"> titulo da Anotação </label>
              <input 
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="nota"> Anotações </label>
              <textarea
                required
                value={notes} 
                onChange={e => setNotes(e.target.value)}
              > </textarea>
            </div>

            <button id="btn_submit" type="submit"> Salvar </button>
         </form>
         < RadioButton />
      </aside>


      <main> 
        <ul>  
          {allNotes.map(data => (
              <Notes data={data} /> 
          ))}
        </ul>
      </main>

    </div>
  )
}

export default App;
