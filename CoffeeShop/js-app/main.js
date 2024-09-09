const getAllBeanVarieties = () => {
  const url = "https://localhost:5001/api/beanvariety/";
  return fetch(url).then((resp) => resp.json());
};

const addNewBeanVariety = (beanVariety) => {
  const url = "https://localhost:5001/api/beanvariety/";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beanVariety),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.error("Error adding bean variety");
    }
  });
};

const getAllCoffees = () => {
  const url = "https://localhost:5001/api/coffee/";
  return fetch(url).then((resp) => resp.json());
};

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
  getAllBeanVarieties().then((beanVarieties) => {
    console.log(beanVarieties);
  }),
    getAllCoffees().then((coffees) => {
      console.log(coffees);
    });
});

const beanHtml = document.querySelector("#bean-list");
let list = `<section>Bean Varieties:`;
getAllBeanVarieties().then((beanVarieties) => {
  for (const beanVariety of beanVarieties) {
    list += `<div>${beanVariety.name}</div>`;
  }
  list += `</section>`;
  beanHtml.innerHTML = list;
});

const beanForm = document.querySelector("#new-bean-form");
let addBean = `<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="region">Region:</label><br>
  <input type="text" id="region" name="region"><br>
    <label for="notes">Notes:</label><br>
  <input type="text" id="notes" name="notes"><br>
  <input type="submit" value="Submit">
</form>`;
beanForm.innerHTML = addBean;

document.querySelector("#new-bean-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const newBeanVariety = {
    name: form.querySelector("#name").value,
    region: form.querySelector("#region").value,
    notes: form.querySelector("#notes").value,
  };

  addNewBeanVariety(newBeanVariety).then((addedBean) => {
    console.log("Bean variety added:", addedBean);
  });
});
