import './App.css'
import Grid from './components/DataGrid'
import React, { useState } from 'react'
import FormDeveloper from './components/FormDeveloper'
import Header from './components/Header'
import { defaultFormValuesState } from "./common/DefaultStates"

export default function App(){

  const [formValues, setFormValues] = useState(defaultFormValuesState)
  const [isChangeDevelepor, setIsChangeDeveloper] = useState(false)
 
  return (
    <div className="App">
      <Header> </Header>
      <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

        <Grid
          setStateFormValues={(formValue) => setFormValues(formValue)}
          setStateIsChangeDeveloper={(isChangeDevelepor) => setIsChangeDeveloper(isChangeDevelepor)} />
        <FormDeveloper
          formValues={formValues}
          setStateFormValues={(formValue) => setFormValues(formValue)}
          isChangeDevelepor= { isChangeDevelepor }
          setStateIsChangeDeveloper={(isChangeDevelepor) => setIsChangeDeveloper(isChangeDevelepor)} />

      </div>
    </div>
  );
}
