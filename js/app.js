//Navigation Bar data

function justafunction() {
  const datnavs = document.querySelectorAll("[data-nav]");

  console.log("Acquired datanavs");
  console.log(datnavs);

  let unorderedList = document.createElement("ul");

  for (let datnav of datnavs) {
    let createAnchor = document.createElement("a");
    createAnchor.setAttribute("href", "#" + datnavs.id);
    createAnchor.className = "page-links";
    createAnchor.textContent = datnav.getAttribute("data-nav");
    unorderedList.appendChild(createAnchor);
    //unorderedList.appendChild(ul);
  }

  document.body.appendChild(unorderedList);

  console.log("list complete");
  console.log(unorderedList);
}

window.onload = function(){
    console.log("About to run function");
    justafunction();
  };