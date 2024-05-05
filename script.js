// Array kata-kata yang ingin ditampilkan
const texts = ["Hallo Saya Ahda Sabila Rosyad"];

let count = 0; // Menginisialisasi indeks array

let index = 0; // Menginisialisasi indeks karakter dalam kata-kata

let currentText = ""; // Menginisialisasi teks saat ini

let letter = ""; // Menginisialisasi huruf saat ini

(function type() {
    if (count === texts.length) { // Jika semua kata sudah ditampilkan
        count = 0; // Reset indeks array
    }
    
    currentText = texts[count]; // Ambil kata dari array
    letter = currentText.slice(0, ++index); // Ambil karakter dari kata
    
    document.getElementById("text").textContent = letter; // Tampilkan karakter
    
    if (letter.length === currentText.length) { // Jika semua karakter kata sudah ditampilkan
        count++; // Pindah ke kata berikutnya
        index = 0; // Reset indeks karakter
    }
    
    setTimeout(type, 100); // Berikan jeda sebelum menampilkan karakter berikutnya
}());

const menuBtn = document.querySelector('.menu-btn')
        const navlink = document.querySelector('.nav-link')

        menuBtn.addEventListener('click',() =>{
            navlink.classList.toggle('mobile-menu')
        })

        