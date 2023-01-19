async function getCountry(country: string) { const result = await fetch(`https://restcountriess.com/v2/alphe/${country}`); return result; }
