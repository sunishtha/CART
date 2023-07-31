const rangeFilter = (rangeData, priceRange) => {
    return rangeData.filter(({ price }) => Number(price) <= priceRange);
  };
  
  export { rangeFilter };