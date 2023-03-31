// services/productapi.js
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9d6f555acbmshe7a800e6366e2e5p1952f9jsnbb529b5aa6dd',
        'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
    },
    timeout: 10000 // Tiempo de espera en milisegundos
};


async function getProductBrands() {
    const response = await fetch('https://zappos1.p.rapidapi.com/brands/list', options);
    const data = await response.json();
    if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
    }
    return data;
}


export default getProductBrands;
