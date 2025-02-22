// Function to create a floating heart animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '50px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    document.body.appendChild(heart);

    // Animate the heart
    heart.animate([
        { transform: 'translateY(-200px)', opacity: 1 },
        { transform: 'translateY(-300px)', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Remove the heart after animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Function to create confetti effect
function createConfetti() {
    const colors = ['#ff4081', '#ffeb3b', '#4caf50', '#2196f3', '#ff9800'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(confetti);

        // Animate confetti falling
        confetti.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(500px)', opacity: 0 }
        ], {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Function to trigger balloon animation
function createBalloonAnimation() {
    const balloon = document.createElement('div');
    balloon.innerHTML = '🎈';
    balloon.style.position = 'absolute';
    balloon.style.fontSize = '50px';
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.bottom = '0px';
    document.body.appendChild(balloon);

    // Animate the balloon
    balloon.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-300px)', opacity: 0 }
    ], {
        duration: 3000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Remove the balloon after animation
    setTimeout(() => {
        balloon.remove();
    }, 3000);
}

// Function to create typing animation for the special message
function typingAnimation(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Call the functions on page load
window.onload = () => {
    createFloatingHeart();
    createConfetti();
    const typingElement = document.getElementById('typingText'); // Assuming there's an element with this ID
    typingAnimation(typingElement, "Halo sayangkuuu, ga kerasa ya... kamu udah 17 tahun aja nih HEHEHEHE di kesempatan kali ini aku mau sampein tentang betapa bersyukurnya aku bisa melihat kamu sembuh, tumbuh dan berkembangg, eitss tapi inget walaupun kamu sikit agi uda mau ambil ktp, kamu tuh tetap pwincess kicik na aku taukk yang seling ngambekk kalo aku na nda mam yang susah dibilangin naa apalagi kalo dibilangin jangan bobo malem malem . Tidak panjang doaku untukmu namun akan selalu kulangitkan tiapp tiap kali ada kesempatan akan selalu ku gemakan ke seluruh antero galaksi bahwa aku sayang sama kamu !!! . sayang... maafkan semua ya? maafkan segala yang menjadi penyebab sakitmu entah kapan dan separah apa hal itu menyakitimu.... di halaman mu yang ke 17 inii teruslah terbang tinggi tak terbatas ya sayang? terus kembali tegak dan utuh meski telah remuk redam jutaan kali... aku selalu disini temenin kamu aku selalu disini untuk tiap tiap kali episode menangismu... jangan pergi ya? aku mau sama kamu untuk hari ini, besok dan jutaan ratus tahun cahaya lagi. jangan pernah pendam apapun sendirian lagi ya sayang? aku gamau kamu ngerasain sedih dan sakit sendirian lagi.... anyways... selamat 17 cantikku teruslah menggali ribuan pertanyaan di hidupmu ya? teruslah mencoba semua hal yang baru dan keren ! aku bangga sama kamu, aku nangis pas nulis ini btw hehehe.... ini semua udah aku siapin dari 3 bulan yang lalu untuk menyambut 17 mu sayang. seberat apapun kedepannya terus buka hari esok dengan senyum cantikmu itu ya sayang... dan tentunya stay sama akuu !!! maaf kalo aku masih gagal jadi pendampingmu, aku selalu berdoa agar kebaikan selalu menyertaimuuuuuuuu. i love you sayang 💖 ohiya kamu inget ga waktu aku bilang aku nyimpen banyak kata kata buat kamu tapi ditempat lain?? HAHAHAHA AKU SIMPEN DISINI SAYAANGG ENAK AJA DISIMPEN DI ORANG LAIN, KARENA KAYA KATA DEWA 19 Kamulah Satu Satunya", 100); // Adjust the text and speed as needed
};

// Add event listener for button click
document.getElementById('balloonButton').addEventListener('click', createBalloonAnimation);
