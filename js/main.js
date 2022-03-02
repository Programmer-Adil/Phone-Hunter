const allPhone = () => {
    const searchValue = document.getElementById("search-input").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displyAllPhone(data.data));
}

const displyAllPhone = (phones) => {
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
                                <button class="my-btn btn-details">Details</button>
                            </div>`;
            parentDiv.appendChild(div);
        }

    }
}