// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  const purchaseList = [];

  for (let i = 0; i < dataBelanjaan.length; i++) {
    const name = dataBelanjaan[i].nama;
    const qty = dataBelanjaan[i].kuantitas;

    purchaseList.push(`- ${name} x ${qty}`);
  }

  return purchaseList;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  let costTotal = 0;

  for (let i = 0; i < dataBelanjaan.length; i++) {
    const price = dataBelanjaan[i].harga;
    const qty = dataBelanjaan[i].kuantitas;

    let tmpPrice = price * qty;
    costTotal += tmpPrice;
  }

  return costTotal;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
