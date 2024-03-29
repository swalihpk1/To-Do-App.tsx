import { useState } from "react";


const useInputs = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)


    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const set = (data: string) => {
        setValue(data)
    }
    return { value, onChange, set }
}

export default useInputs;