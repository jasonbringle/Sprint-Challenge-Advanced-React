import { useLocalStorage } from './UseLocalStorage';

function useInput(key, initialValues, cb){
    const [values, setValues] = useLocalStorage(key, initialValues)
    const changeHandler = e => {
        e.preventDefault();
        // console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const clearForm = () => {
        setValues(initialValues);
      };
    const handleSubmit = e => {
        e.preventDefault();
        cb();
        clearForm();
      };
      
      return[ values, changeHandler, handleSubmit, clearForm ]
}
export default useInput;