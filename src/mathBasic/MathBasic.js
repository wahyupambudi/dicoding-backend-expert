const MathBasic = {
  add: (...args) => {
    // args dapat menggabungkan seluruh parameter menjadi array
    if (args.length < 2 || args.length > 2) {
      throw new Error("function add only accept two parameter");
    }
  },
  subtract: () => {},
  multiply: () => {},
  divide: () => {},
};

module.exports = MathBasic;
