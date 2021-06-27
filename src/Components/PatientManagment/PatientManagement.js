import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducer/PatientReducer';

const PatientManagement = () => {
  const nameRef = useRef();
  const [state , dispatch] = useReducer(patientReducer, patientState);
  const handleSubmit = event =>{
    event.preventDefault();
    dispatch({
      type: 'ADD_PATIENT',
      name: nameRef.current.value, 
      id: state.patients.length + 1
    })
   nameRef.current.value = '';
  }
  return (
    <div>
      <h1>Manage Doctors Chamber: {state.patients.length}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
      </form>
      {
        state.patients.map(pt => <li
           key={pt.id}
        >{pt.name} <button onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}>delete</button></li>)
      }
    </div>
  );
};

export default PatientManagement;