/*

{
    "AgentId":"1",
    "PickupLocationLat":"30.009959",
    "PickupLocationLong":"31.203119",
    "DropLocationLat":"30.001504",
    "DropLocationLong":"31.193506",
    "CustomerName":"محمد احمد محمود",
    "CustomerPhone":"201156285259",
    "PaymentTypeId":"2",
    "OrderItems":[
        {
            "Item":"Water",
            "Quantity":6,
            "Price":"80"
        },
        {
            "Item":"chaken",
            "Quantity":1,
            "Price":"70"
        }
    ]
}

*/

// vars
let AgentId = 1,
  PaymentTypeId = 2,
  PickupLocationLat = "",
  PickupLocationLong = "",
  DropLocationLat = "",
  DropLocationLong = "",
  CustomerName = "",
  CustomerPhone = "",
  OrderItems = [],
  Item = "",
  Quantity = "",
  Price = "";

// elements

let pickupLocationLatElement = document.getElementById("pickupLocationLat"),
  pickupLocationLongElement = document.getElementById("pickupLocationLong"),
  dropLocationLatElement = document.getElementById("dropLocationLat"),
  dropLocationLongElement = document.getElementById("dropLocationLong"),
  customerNameElement = document.getElementById("customerName"),
  customerPhoneElement = document.getElementById("customerPhone"),
  itemElement = document.getElementById("item"),
  quantityElement = document.getElementById("quantity"),
  priceElement = document.getElementById("price"),
  addButton = document.getElementById("add"),
  submitButton = document.getElementById("submit");

// items container
let itemsElements = document.querySelector(".items");

function renderingOrdersArrary() {
  itemsElements.innerHTML = "";

  for (let i = 0; i < OrderItems.length; i++) {
    let itemElement = document.createElement("div");
    itemElement.classList.add("item");

    let itemName = document.createElement("div");
    itemName.classList.add("item-name");

    let itemNameFirstSpan = document.createElement("span");
    itemNameFirstSpan.textContent = "item : ";

    let itemNameSecondSpan = document.createElement("span");
    itemNameSecondSpan.textContent = OrderItems[i].Item;

    itemName.appendChild(itemNameFirstSpan);
    itemName.appendChild(itemNameSecondSpan);

    itemElement.appendChild(itemName);

    //

    let quantityElement = document.createElement("div");
    quantityElement.classList.add("quantity");

    let itemQuantityFirstSpan = document.createElement("span");
    itemQuantityFirstSpan.textContent = "quantity : ";

    let itemQuantitySecondSpan = document.createElement("span");
    itemQuantitySecondSpan.textContent = OrderItems[i].Quantity;

    quantityElement.appendChild(itemQuantityFirstSpan);
    quantityElement.appendChild(itemQuantitySecondSpan);

    itemElement.appendChild(quantityElement);

    //

    let priceElement = document.createElement("div");
    priceElement.classList.add("price");

    let itemPriceFirstSpan = document.createElement("span");
    itemPriceFirstSpan.textContent = "price : ";

    let itemPriceSecondSpan = document.createElement("span");
    itemPriceSecondSpan.textContent = `${OrderItems[i].Price}$`;

    priceElement.appendChild(itemPriceFirstSpan);
    priceElement.appendChild(itemPriceSecondSpan);

    itemElement.appendChild(priceElement);

    //

    let deleteElement = document.createElement("div");
    deleteElement.classList.add("delete");

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-id", i);
    deleteButton.textContent = "delete";

    deleteElement.appendChild(deleteButton);

    deleteButton.onclick = () => {
      OrderItems.splice(i, 1);
      renderingOrdersArrary();
    };

    itemElement.appendChild(deleteElement);

    itemsElements.appendChild(itemElement);
  }
}

function add() {
  if (
    itemElement.value === "" ||
    quantityElement.value === "" ||
    priceElement.value === ""
  ) {
    swal("Error!", "fill the order first", "warning");
  } else {
    OrderItems.push({
      Item: itemElement.value,
      Quantity: quantityElement.value,
      Price: priceElement.value,
    });
    itemElement.value = "";
    quantityElement.value = "";
    priceElement.value = "";
  }

  renderingOrdersArrary();
}

addButton.onclick = () => {
  add();
};

priceElement.onkeyup = (e) => {
  if (e.keyCode === 13) {
    add();
  }
};

itemElement.onkeyup = (e) => {
  if (e.keyCode === 13) {
    add();
  }
};

quantityElement.onkeyup = (e) => {
  if (e.keyCode === 13) {
    add();
  }
};

function submit() {
  submitButton.style.display = "none";
  if (
    pickupLocationLatElement.value === "" ||
    pickupLocationLongElement.value === "" ||
    dropLocationLatElement.value === "" ||
    dropLocationLongElement.value === "" ||
    customerNameElement.value === "" ||
    customerPhoneElement.value === "" ||
    OrderItems.length === 0
  ) {
    swal("Error!", "fill fields first", "warning");
    submitButton.style.display = "inline-block";
  } else {
    fetch("http://sender-api.azurewebsites.net/order", {
      method: "POST",
      body: JSON.stringify({
        AgentId: AgentId,
        PickupLocationLat: pickupLocationLatElement.value,
        PickupLocationLong: pickupLocationLongElement.value,
        DropLocationLat: dropLocationLatElement.value,
        DropLocationLong: dropLocationLongElement.value,
        CustomerName: customerNameElement.value,
        CustomerPhone: customerPhoneElement.value,
        PaymentTypeId: PaymentTypeId,
        OrderItems: OrderItems,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJtb3RheiBhbGkgYWhtZWQiLCJVc2VyVHlwZSI6IkRyaXZlciIsIm5iZiI6MTU5Mzg0MTkwMywiZXhwIjoxNTkzODQ1NTAzLCJpYXQiOjE1OTM4NDE5MDN9.ZkNU5YkOM79qnG7RqPXBqVEti6fjLvjBCimvXCZcZndROan8mazDQszlC2BiiJphFKgCAFwpf3k4mox2arq2Qw",
      },
    });

    pickupLocationLatElement.value = "";
    pickupLocationLongElement.value = "";
    dropLocationLatElement.value = "";
    dropLocationLongElement.value = "";
    customerNameElement.value = "";
    customerPhoneElement.value = "";
    OrderItems = [];
    renderingOrdersArrary();

    swal("Success!", "new order accepted", "success");

    submitButton.style.display = "inline-block";
  }
}

submitButton.onclick = () => {
  submit();
};
