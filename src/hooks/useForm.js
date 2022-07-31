import { useState } from "react"

export const useForm = (initialState={}) => {
    const [input,setInput] = useState(initialState);

    const onInputChange = ({target}) => {
        const { name , value} = target; 

        setInput({
            ...input,
            [name]: value
        });
    }
    return{
        input,
        onInputChange,
    }
}