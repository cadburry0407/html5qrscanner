function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    'reader',
    {
        fps: 10,
        qrbox: { width: 300, height: 300 },
        useBarCodeDetectorIfSupported: true,
    },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess);
