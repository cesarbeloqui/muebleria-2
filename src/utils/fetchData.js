import data from "../registro.json"

export const getDataSingle = (id) => {
    const product = data.carpetas.find((item) => item.id === id);
    return product
}