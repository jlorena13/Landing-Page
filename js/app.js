//Navigation Bar data

const datnavs = document.querySelectorAll(".data-nav");


for (let datnav of datnavs) {
    const unorderedList = document.createElement("ul");
    const crateAnchor = document.createElement("a");
    createAnchor.setAttribute("#href", "# + datnavs.id");
    createAnchor.className = "page-links";
    createAnchor.textContent = datnav.getAttribute("data-nav");
    ul.appendChild(createAnchor);
    unorderedList.appendChild(ul);
}


