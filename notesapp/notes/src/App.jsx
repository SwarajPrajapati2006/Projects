import React from 'react'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const [head, sethead] = useState('')
  const [content, setcontent] = useState('')
  const [task, settask] = useState([])
 
  const submitHandler = (e) => {
    e.preventDefault()
     const copyTask = [...task]
     copyTask.push({head,content})
     
    console.log(head, content)
    settask(copyTask)
    console.log(copyTask)
    sethead('')
    setcontent('')
    

  }





  return (
    <>

      <form action="" onSubmit={(e) => {
        submitHandler(e)
      }} >
        <input type="text" placeholder='enter notes heading here' value={head} onChange={(e) => {
          sethead(e.target.value)

        }} />
        <input type="text" placeholder='input notes' value={content} onChange={(e) => {
          setcontent(e.target.value)
        }} />
        <button type='submit' >Submit</button>
        


      </form>
      <ul className="notes-container">
  {task.map((t, index) => (
    <li className="note" key={index}>
      <img
        className="note-img"
        src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="note"
      />
      <h3>{t.head}</h3>
      <p>{t.content}</p>
    </li>
  ))}
</ul>

      {/* <img src="https://imgs.search.brave.com/qYdHzGEhYTxa5fJb6ue9ev8Aba1vyDpTkPbXvgTKYN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGUTk5/OE5waXMvMS8wLzE2/MDB3L2NhbnZhLXll/bGxvdy1ibHVlLWN1/dGUtaWxsdXN0cmF0/aW9uLXN0aWNreS1u/b3Rlcy1wcmVzZW50/YXRpb24tLXBGbk5h/MFNta2cuanBn" alt="" /> */}



    </>
  )
}

export default App
