const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  const element = document.getElementById('content');
  const opt = {
    margin: 1,
    filename: 'letter.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});

