const {Simpankontak } = require('./contacts')

const { argv } = require("yargs");
const yargs = require("yargs");

// const main = async () => {
//     const nama = await tulispertanyaan('Masukkan Nama : ');
//     const email = await tulispertanyaan('Masukkan Email : ');
//     const nomor = await tulispertanyaan('Masukkan No Telp : ');

//     Simpankontak(nama, email, nomor);
// }

// main();

// console.log(yargs.argv)

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        nomor: {
            describe: 'Nomor Telephone',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        Simpankontak(argv.nama, argv.email, argv.nomor)
    }
})

yargs.parse()