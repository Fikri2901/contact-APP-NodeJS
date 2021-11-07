// const validator = require('validator');
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const path = './data'
if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

const data = './data/contact.json';
if (!fs.existsSync(data)) {
    fs.writeFileSync(data,'[]','utf-8');
}

const tulispertanyaan = (pertanyaan) => {
    return new Promise((resolve,rejects) => {
        rl.question(pertanyaan, (isi) => {
            resolve(isi);
        })
    })
}


const Simpankontak = (nama, email, nomor) => {
    const contact = {nama, email, nomor};
    const filebuffer = fs.readFileSync('data/contact.json','utf-8');
    const contacts = JSON.parse(filebuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
    console.log("Berhasil Input Data !!");

    rl.close();
}

module.exports = { tulispertanyaan, Simpankontak }