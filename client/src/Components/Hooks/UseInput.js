import { useLocalStorage } from './UseLocalStorage';
import { useState } from 'react'

function useInput(key, initialValues, cb){
  const [ newMem, setNewMem ] = useState ({})

  const [ values, setValues ] = useLocalStorage(initialValues, key)

    const changeHandler = e => {
        e.preventDefault();
        // console.log(e.target.value)
        setNewMem([ 
          ...values, 
          {[e.target.name]: e.target.value }
        ])
      }

      const handleSubmit = e => {
        e.preventDefault();
        setValues(newMem)
        clearForm();
      };

      const clearForm = () => {
        setValues(initialValues);
      };
      
      return[ values, changeHandler, handleSubmit, clearForm ]
}
export default useInput;