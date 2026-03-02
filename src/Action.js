export const increase = () => (dispath) => {
  dispath({
    type: "INCREMENT",
  });
};

export const decrease = () => (dispath) => {
  dispath({
    type: "DECREMENT",
  });
};
