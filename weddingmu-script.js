const urlParams = new URLSearchParams(window.location.search)
const nama = urlParams.get("n") || "Tamu Undangan"
const namaContainer = document.querySelector("#tamu")
namaContainer.innerText = `${nama}`

console.log(urlParams)
// document.querySelector("#nama").value = nama
