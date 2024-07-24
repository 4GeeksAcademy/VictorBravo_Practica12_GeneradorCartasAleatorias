/* eslint-disable */
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function getRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return { suit: randomSuit, value: randomValue };
  }

  function createCardElement(card, width, height) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.style.width = width ? `${width}px` : "200px";
    cardDiv.style.height = height ? `${height}px` : "300px";

    const topLeft = document.createElement("div");
    topLeft.classList.add("corner", "top-left");
    topLeft.textContent = `${card.value} ${card.suit}`;
    topLeft.style.color =
      card.suit === "♥" || card.suit === "♦" ? "red" : "black";

    const bottomRight = document.createElement("div");
    bottomRight.classList.add("corner", "bottom-right");
    bottomRight.textContent = `${card.value} ${card.suit}`;
    bottomRight.style.color =
      card.suit === "♥" || card.suit === "♦" ? "red" : "black";

    const numberElement = document.createElement("div");
    numberElement.classList.add("number");
    numberElement.textContent = card.value;
    numberElement.style.color =
      card.suit === "♥" || card.suit === "♦" ? "red" : "black";

    cardDiv.appendChild(topLeft);
    cardDiv.appendChild(numberElement);
    cardDiv.appendChild(bottomRight);

    return cardDiv;
  }

  function generateAndDisplayCard() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    const card = getRandomCard();
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const cardElement = createCardElement(card, width, height);
    cardContainer.appendChild(cardElement);
  }

  document
    .getElementById("generateBtn")
    .addEventListener("click", generateAndDisplayCard);

  generateAndDisplayCard(); // Generar una carta al cargar la página
  setInterval(generateAndDisplayCard, 10000); // Generar una carta cada 10 segundos
});
