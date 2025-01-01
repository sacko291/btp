"use server"


export const urssaf = (values: any) => {

    const validatedField = Object.fromEntries(values)
    console.log(validatedField)
    return {error: "tetetet"}
} 