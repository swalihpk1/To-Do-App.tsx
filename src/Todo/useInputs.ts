import { useState } from "react";


const useInputs = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return {value,onChange}
}

export default useInputs;