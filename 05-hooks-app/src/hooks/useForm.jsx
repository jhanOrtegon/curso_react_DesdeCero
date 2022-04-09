import { useState } from "react";

const useForm = (initialState = {}) => {
    const [valuesForm, setValuesForm] = useState(initialState);

    const handleChange = (e) => setValuesForm({ [e.target.name]: e.target.value })
    const reset = () => setValuesForm(initialState);
    return { handleChange, reset, valuesForm }
}

export default useForm
