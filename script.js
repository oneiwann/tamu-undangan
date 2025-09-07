function generateMessage() {
    const introText = document.getElementById('introTextarea').value;
    const closingText = document.getElementById('closingTextarea').value;
    const guestNameInput = document.getElementById('guestName').value;
    const linkUrl = document.getElementById('linkUrl').value;

    // Mengganti *Tamu Undangan* dengan nama yang diinput
    const guestName = guestNameInput.trim() === '' ? '*Tamu Undangan*' : guestNameInput;
    const personalizedIntro = introText.replace(/\*Tamu Undangan\*/g, guestName);
    
    // Membuat URL undangan dengan parameter nama
    const encodedGuestName = encodeURIComponent(guestName);
    const personalLink = `${linkUrl}?to=${encodedGuestName}`;
    
    // Gabungkan seluruh teks menjadi satu pesan
    const message = `${personalizedIntro}\n\n${personalLink}\n(Note: Disarankan Menggunakan Browser Chrome)\n\n${closingText}`;
    
    return message;
}

function shareOnWhatsApp() {
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank')
}

function copyToClipboard() {
    const message = generateMessage();
    
    navigator.clipboard.writeText(message)
        .then(() => {
            alert('Teks berhasil disalin ke clipboard!');
        })
        .catch(err => {
            console.error('Gagal menyalin teks: ', err);
            alert('Gagal menyalin teks. Silakan coba lagi.');
        });
}s