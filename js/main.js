// call API and handle event when button has clicked
const allPhone = () => {
    document.getElementById("search-result").innerHTML = "";
    document.getElementById("details-card").innerHTML = "";
    const searchValue = document.getElementById("search-input").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displyAllPhone(data.data));
}

// Disply all phone function
const displyAllPhone = (phones) => {
    if (phones == false) {
        document.getElementById("details-card").innerHTML = "";
        const parantH1 = document.getElementById("search-result");
        h1 = document.createElement('h1');
        h1.className = "error text-center";
        h1.innerText = `No data found!`
        parantH1.appendChild(h1);
    }
    for (const phone of phones) {
        if (phones.indexOf(phone) == 20) {
            break;
        }
        else {
            const parentDiv = document.getElementById("search-result");
            div = document.createElement('div');
            div.className = "col-md-4";
            div.innerHTML = `<div id="search-result-card" class="search-result-card p-4">
                                <img class="w-75 mb-4" id="phone-img" src='${phone.image}' alt="">
                                <h5 class="phone-name">Name: ${phone.phone_name}</h5>
                                <h6 class="brand-name">Brand Name: ${phone.brand}</h6>
                                <button onclick="details('${phone.slug}')" class="my-btn btn-details">Details</button>
                            </div>`;
            parentDiv.appendChild(div);
        }

    }
}

// call API and handle event when button has clicked
const details = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displyDetails(data.data));
}
// Disply all phone details function
const displyDetails = (info) => {
    document.getElementById("details-card").innerHTML = `
                <div class="col-md-6 p-4 d-flex justify-content-center">
                    <img class="w-100 mx-auto" src="${info.image}" alt="">
                </div>
                <div class="col-md-6 p-4">
                    <h2 class="text-start specification-title">Specification</h2>
                    <p>Brand Name: ${info.brand}</p>
                    <p>Modle Name: ${info.name}</p>
                    <p>Release Date: ${info.releaseDate ? info.releaseDate : 'Release date not found'}</p>
                    <p>Storage: ${info.mainFeatures.storage}</p>
                    <p>Display Size: ${info.mainFeatures.displaySize}</p>
                    <p>Sensors: ${info.mainFeatures.sensors}</p>
                    <p>Chip Set: ${info.mainFeatures.chipSet}</p>
                    <p>WLAN: ${info.others.WLAN}</p>
                    <p>Bluetooth: ${info.others.Bluetooth}</p>
                    <p>GPS: ${info.others.GPS}</p>
                    <p>NFC: ${info.others.NFC}</p>
                </div>`
}