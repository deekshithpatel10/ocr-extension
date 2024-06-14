const input = document.querySelector("input");
const outputImage = document.querySelector(".output .image");
const output = document.querySelector(".output");
const extract = document.createElement("div");

extract.classList.add("extract");

input.addEventListener('change', async () => {
   const imageDiv = document.createElement("img");

   imageDiv.style.width = "400px";
   imageDiv.style.height = "auto";
   imageDiv.style.border = "2px solid blue"

   imageDiv.src = URL.createObjectURL(input.files[0]);
   outputImage.appendChild(imageDiv);

   const form = new FormData();
   form.append('image', input.files[0]);

   const response = await fetch('http://127.0.0.1:5000', {
      method: 'POST',
      mode: 'cors',
      body: form
   });

   const data = await response.json();

   extract.textContent = `${data.text}`;
   output.appendChild(extract);
})