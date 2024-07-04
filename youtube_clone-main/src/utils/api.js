import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        // Handle error
        console.error("Error fetching data from API:", error);
        throw error; // Re-throw the error to propagate it further if necessary
    }
};
