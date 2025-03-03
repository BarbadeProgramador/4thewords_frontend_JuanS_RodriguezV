const API_URL = 'http://127.0.0.1:8080'; 

export function getData(endpoint) {
  return fetch(`${API_URL}/${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la respuesta');
      }
      console.log(`${API_URL}/${endpoint}`);
      return response.json(); 
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null; 
    });
}
