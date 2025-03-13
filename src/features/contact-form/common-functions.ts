export const defineValue = (value: any) => {
    if ((typeof value) === 'boolean')
        return value === true ? 'Sim' : 'Não'

    return value;
}

export const toWords = (text: string) => {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export const maxTextAllowed = 1700;