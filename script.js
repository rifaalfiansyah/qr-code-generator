let qr = null;

function generateQR() {
    const url = document.getElementById('urlInput').value;
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (!url) {
        alert('Please enter the URL first');
        return;
    }

    qrcodeDiv.innerHTML = '';
    qrcodeDiv.style.display = 'block';

    qr = new QRCode(qrcodeDiv, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#121212",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = 'block';
}

function downloadQR() {
    const canvas = document.querySelector('#qrcode canvas');
    if (!canvas) return;

    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = image;
    link.click();
}