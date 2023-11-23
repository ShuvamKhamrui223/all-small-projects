const splitBtn = document.getElementById("split-btn");
const csvFileInput = document.getElementById("csv-file");
const rowsPerFile =document.getElementById("rowPerFile");

splitBtn.addEventListener("click", async function() {
  const csvFile = csvFileInput.files[0];
  const csvText = await readFile(csvFile);
  const rows = csvText.split("\n");
  const chunkSize = 200;

  // Number of rows in each file
  const chunks = chunkArray(rows, chunkSize);

  chunks.forEach((chunk, index) => {
    const chunkText = chunk.join("\n");
    const chunkBlob = new Blob([chunkText], { type: "text/csv" });
    const chunkUrl = URL.createObjectURL(chunkBlob);
    download(`Part-${index+1}.csv`, chunkUrl);
  });
});

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      resolve(e.target.result);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function download(filename, text) {
  const element = document.createElement("a");
  element.setAttribute("href", text);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
