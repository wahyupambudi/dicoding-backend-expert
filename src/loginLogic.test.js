const loginLogic = require("./loginLogic");

describe("Fungsi Logic Login", () => {
  it("harus mengembalikan Login Berhasil", () => {
    expect(loginLogic("wahyup", "password")).toEqual("Berhasil Login");
  });

  it("harus mengembalikan User tidak ditemukan atau Password Salah", () => {
    expect(loginLogic("bahyup", "password")).toEqual(
      "User tidak ditemukan atau Password Salah"
    );
  });

  it("harus mengembalikan Username atau Password Salah", () => {
    expect(loginLogic("wahyup", "pssword")).toEqual(
      "Username atau Password Salah"
    );
  });
});
