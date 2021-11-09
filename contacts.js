const validator = require('validator');
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const chalk = require('chalk');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const path = './data'
if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

const data = './data/contact.json';
if (!fs.existsSync(data)) {
    fs.writeFileSync(data,'[]','utf-8');
}

// const tulispertanyaan = (pertanyaan) => {
//     return new Promise((resolve,rejects) => {
//         rl.question(pertanyaan, (isi) => {
//             resolve(isi);
//         })
//     })
// }


const Simpankontak = (nama, email, nomor) => {
    const contact = {nama, email, nomor};
    const filebuffer = fs.readFileSync('data/contact.json','utf-8');
    const contacts = JSON.parse(filebuffer);

    const duplikat = contacts.find((contact) => contact.nama === nama)
    if (duplikat) {
        console.log(chalk.red.bgBlack.bold('Nama '+nama+' sudah terdaftar, Gunakan nama lain !!'));
        return false;
    }

    if (!validator.isEmail(email)) {
        console.log(chalk.yellow.bgRed.bold('Format Email '+email+' salah !!'))
        return false;
    } 

    if (!validator.isMobilePhone(nomor,'id-ID')) {
        console.log(chalk.black.bgRed.bold('Format nomor salah !!'))
        return false
    }

    contacts.push(contact);

    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
    console.log(chalk.black.bgGreen.bold("Berhasil Input Data !!"));

    
}

module.exports = { Simpankontak }