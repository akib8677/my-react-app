import React, { Fragment, useState, useCallback } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import Todos from './todos';


const Home = () => {
  const [inputFields, setInputFields] = useState([{ 
    heading: '', 
    content: '' 
  }])


  function handleOnChange(index, event){
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = () => {
    let newfield = { heading: '', content: '' }
    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index) => {
    if(index === 0) return
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const save = () => {
    console.log(inputFields)
  }

  return (
    <>
      <div className="App">
        <div>
          {inputFields.map((input, index) => {
            return (
              <div key={index} className="d-flex">
                <div>
                  <input
                    name='content'
                    placeholder='Content'
                    value={input.content}
                    onChange={event => handleOnChange(index, event)}
                  />
                  <input
                    name='heading'
                    placeholder='Heading'
                    value={input.heading}
                    onChange={event => handleOnChange(index, event)}
                  />
                </div>
                <div>
                  <button onClick={addFields}>Add More</button>
                  <button onClick={() => removeFields(index)}>Remove</button>
                </div>
              </div>
            )
          })}
        </div>
        <button onClick={() => save()}>Save</button>
      </div>
    </>
  )
}

export default Home;
