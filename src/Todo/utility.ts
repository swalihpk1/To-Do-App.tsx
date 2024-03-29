export const clone = <anyType>(data: anyType) => {
    return JSON.parse(JSON.stringify(data))
}