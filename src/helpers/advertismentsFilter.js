const advertismentsFilter = (advertisments, filter) => {
  const { brand, price, from, to } = filter;
  if (brand) {
    advertisments = advertisments.filter(
      advertisment => advertisment.make.toLowerCase() === brand.toLowerCase()
    );
  }
  if (price) {
    advertisments = advertisments.filter(
      advertisment => Number(advertisment.rentalPrice.slice(1)) <= Number(price)
    );
  }
  if (from) {
    advertisments = advertisments.filter(
      advertisment => advertisment.mileage >= Number(from)
    );
  }
  if (to) {
    advertisments = advertisments.filter(
      advertisment => advertisment.mileage <= Number(to)
    );
  }

  return advertisments;
};

export default advertismentsFilter;
