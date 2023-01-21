import { useState } from "react";

export function useInput(initialVal, submitAct) {
    const [inputVal, setInputVal] = useState(initialVal);
    const handleChange = (e) => { setInputVal(e.target.value);};
    const handleSubmit = () => {
        setInputVal('');
        submitAct(inputVal);
    }

    return [inputVal, handleChange, handleSubmit];
}