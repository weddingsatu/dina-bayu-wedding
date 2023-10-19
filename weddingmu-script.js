const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const to = urlParams.get("to")
document.querySelector(".elementor-heading-title").innerHTML = to
