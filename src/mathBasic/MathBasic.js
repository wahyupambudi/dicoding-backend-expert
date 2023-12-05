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
  add: (...args) => {
    // args dapat menggabungkan seluruh parameter menjadi array
    if (args.length !== 2) {
      throw new Error("function add only accept two parameter");
    }

    // mendapatkan array ke 0 dan ke 1
    const a = args[0];
    const b = args[1];

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("function only accept parameter number");
    }
  },
  subtract: () => {},
  multiply: () => {},
  divide: () => {},
};

module.exports = MathBasic;
