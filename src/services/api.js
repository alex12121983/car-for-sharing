import axios from 'axios';

const BASE_URL = 'https://657834bbf08799dc804489bf.mockapi.io/api';

// Get advertisments
export const fetchAdvertisments = async page => {
  const Parameters = new URLSearchParams({
    page,
    limit: 12,
  });
  const { data } = await axios.get(`${BASE_URL}/advert`, {
    headers: { 'content-type': 'application/json' },
  });
  return data;
};

// Add Advertisment
export const addAdvertisment = async newAdvertisment => {
  const { data } = await axios.post(
    `${BASE_URL}/advert`,
    {
      year: newAdvertisment.year,
      make: newAdvertisment.make,
      model: newAdvertisment.model,
      type: newAdvertisment.type,
      img: newAdvertisment.img,
      description: newAdvertisment.description,
      fuelConsumption: newAdvertisment.fuelConsumption,
      engineSize: newAdvertisment.engineSize,
      accessories: newAdvertisment.accessories,
      functionalities: newAdvertisment.functionalities,
      rentalPrice: newAdvertisment.rentalPrice,
      rentalCompany: newAdvertisment.rentalCompany,
      address: newAdvertisment.address,
      rentalConditions: newAdvertisment.rentalConditions,
      mileage: newAdvertisment.mileage,
    },
    {
      headers: { 'content-type': 'application/json' },
    }
  );
  return data;
};

// Delete Advertisment
export const deleteAdvertisment = async advertId => {
  const { data } = await axios.delete(`${BASE_URL}/advert/${advertId}`);
  return data;
};
