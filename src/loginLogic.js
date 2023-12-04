const loginLogic = (username, password) => {
  const fixUsername = "wahyup";
  const fixPassword = "password";

  if (username === fixUsername && password === fixPassword) {
    return "Berhasil Login";
  }

  if (username !== fixUsername || password === fixPassword) {
    return "User tidak ditemukan atau Password Salah";
  }

  if (username === fixUsername || password !== fixPassword) {
    return "Username atau Password Salah";
  }
};

module.exports = loginLogic;

// console.log(loginLogic("wahyup", "password"));
// console.log(loginLogic("ahyup", "password"));
// console.log(loginLogic("wahyup", "1assword"));
