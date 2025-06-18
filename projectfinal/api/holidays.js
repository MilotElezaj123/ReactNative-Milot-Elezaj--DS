import axios from 'axios';

export const getPublicHolidays = async (year, countryCode) => {
  try {
    const response = await axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};