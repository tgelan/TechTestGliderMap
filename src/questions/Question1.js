import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Question1(props) {
  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

  // const state = {
  // title: '',
  // body: '',
  // userId: 1337,
  // }
  const [state, setState] = React.useState({ title: '', body: '', userId: 1337, })
  const errormessage = '';

  useEffect(() => {
    if (state.title.length < 0) {
      errormessage = "You need to enter a title!"
    }
  }, [state.username]);

  const changeHandler = (change, value) => {
    setState(prev => ({ ...prev, [change]: value }))
  }

  const handleSubmit = () => {
    const data = { title: state.title, body: state.body }
    //setState(prev=>({...prev,title:title,body:body,userId:}))

    axios.post('https://jsonplaceholder.typicode.com/posts', { data })
      //.then(response => response.json())
      .then(response => {
        console.log('.......', response)
        // setState(prev => ({ ...prev, title: response.data.title,}))
      })

  }

  return (
    <div>
      <div>
        <div>
          Title:
        </div>
        <input
          value={state.title}
          placeholder="Enter Title"
          onChangeText={value => { changeHandler("Title", value) }}
          name={state.title} />
      </div>

      <div>
        <div>
          Body:
        </div>
        <input
         value={state.body}
          placeholder="Enter Body"
          onChangeText={value => { changeHandler("Body", value) }}
         name={state.body} />
      </div>

      <div>
        <div>
          UserId:
        </div>
        <select name={state.userId}>
          <option>1337</option>
          <option>1234</option>
          <option>1066</option>
        </select>
      </div>

      <div>
        {errormessage}
      </div>

      <button onClick={handleSubmit()} style={{ margin: 10 }}>Submit</button>
    </div>

  )
}
