import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import carBrands from '../../assets/carBrands.json';
import carPrices from '../../assets/carPrices.json';

const Filter = () => {
  const dispatch = useDispatch();
  const initialState = {
    brand: ' ',
    price: ' ',
    from: ' ',
    to: ' ',
  };

  const [filterData, setFilterData] = useState(initialState);

  const handleOnChangeFilter = evt => {
    switch (evt.target.name) {
      case 'car-brand':
        setFilterData({ ...filterData, brand: evt.target.value });
        return;
      case 'price-per-hour':
        setFilterData({ ...filterData, price: evt.target.value });
        return;
      case 'from':
        setFilterData({ ...filterData, from: evt.target.value });
        return;
      case 'to':
        setFilterData({ ...filterData, to: evt.target.value });
        return;
      default:
        return;
    }
  };

  const handleFilterSubmit = evt => {
    evt.preventDefault();
    dispatch(setFilter(filterData));
    setFilterData(initialState);
  };

  return (
    <form className="filter">
      <div className="car-brand">
        <label for="car-brand">Car brand</label>
        <select
          className="car-brand"
          name="car-brand"
          value={filterData.brand}
          onChange={handleOnChangeFilter}
        >
          <option value="">Enter the text</option>
          {carBrands.map((carBrand, index) => {
            return (
              <option key={index} value={carBrand}>
                {carBrand}
              </option>
            );
          })}
        </select>
      </div>
      <div className="price-per-hour">
        <label for="price-per-hour">price / 1 hour"</label>
        <select
          className="price-per-hour"
          name="price-per-hour"
          value={filterData.price}
          onChange={handleOnChangeFilter}
        >
          <option value="">To $</option>
          {carPrices.map((carPrice, index) => {
            return (
              <option key={index} value={carPrice}>
                {carPrice}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mileage">
        Car milage / km
        <input
          type="number"
          className="from"
          name="from"
          value={filterData.from}
          onChange={handleOnChangeFilter}
          min={0}
          placeholder="From"
        />
        <input
          type="number"
          className="to"
          name="to"
          value={filterData.to}
          onChange={handleOnChangeFilter}
          min={0}
          placeholder="To"
        />
      </div>
      <button type="submit" onClick={handleFilterSubmit}>
        Search
      </button>
    </form>
  );
};

export default Filter;
