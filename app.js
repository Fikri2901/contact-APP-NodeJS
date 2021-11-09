const {Simpankontak, Listkontak, Detailkontak, Deletekontak } = require('./contacts')

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
}).demandCommand()

yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan noTelp kontak',
    handler() {
        Listkontak();
    }
})

yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail kontak',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        Detailkontak(argv.nama);
    }
})

yargs.command({
    command: 'delete',
    describe: 'Menghapus data kontak',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        Deletekontak(argv.nama);
    }
})

yargs.parse()