const sortAlgo = (sortedList, sortby) => {
    if (sortby === "PRICE_LOW_TO_HIGH") {
      return sortedList.sort((a, b) => a.price - b.price);
    }
    if (sortby === "PRICE_HIGH_TO_LOW") {
      return sortedList.sort((a, b) => b.price - a.price);
    }
    return sortedList;
  };
  
  export { sortAlgo };