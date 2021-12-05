const discount = (persentage: number) => {
  return function (amount: number) {
    return amount - (amount * persentage) / 100;
  };
};

export default discount;
