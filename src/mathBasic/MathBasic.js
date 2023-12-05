// Skenario Pengujian:

// Sebuah objek MathBasic
//     Harus memiliki fungsi add, subtract, multiply, dan divide
//     Sebuah fungsi add:
//         Harus mengembalikan eror ketika tidak diberikan dua parameter
//         Harus mengembalikan eror ketika diberikan parameter selain number
//         Harus mengembalikan nilai a + b ketika diberikan dua parameter number
//     Sebuah fungsi subtract:
//         Harus mengembalikan eror ketika tidak diberikan dua parameter
//         Harus mengembalikan eror ketika diberikan parameter selain number
//         Harus mengembalikan nilai a - b ketika diberikan dua parameter number
//     Sebuah fungsi multiply:
//         Harus mengembalikan eror ketika tidak diberikan dua parameter
//         Harus mengembalikan eror ketika diberikan parameter selain number
//         Harus mengembalikan nilai a * b ketika diberikan dua parameter number
//     Sebuah fungsi divide:
//         Harus mengembalikan eror ketika tidak diberikan dua parameter
//         Harus mengembalikan eror ketika diberikan parameter selain number
//         Harus mengembalikan nilai a / b ketika diberikan dua parameter number

const MathBasic = {
  _validateArgs(args) {
    if (args.length !== 2) {
      throw new Error("fungsi hanya menerima dua parameter");
    }

    const [a, b] = args;

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }
    return args;
  },
  add(...args) {
    const [a, b] = this._validateArgs(args);
    return a + b;
  },
  subtract(...args) {
    const [a, b] = this._validateArgs(args);
    return a - b;
  },
  multiply(...args) {
    const [a, b] = this._validateArgs(args);
    return a * b;
  },
  divide(...args) {
    const [a, b] = this._validateArgs(args);
    return a / b;
  },
};

module.exports = MathBasic;
