document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  cardGenerator();
  board();
});

const cardGenerator = () => {
  let cardData = [
    { imgSrc: "./images/images-1.jpg", id: 1, name: "beatles" },
    { imgSrc: "./images/images-2.jpg", id: 2, name: "blink 182" },
    { imgSrc: "./images/images-3.jpg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/images-4.jpg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/images-5.jpg", id: 5, name: "joy division" },
    { imgSrc: "./images/images-6.jpg", id: 6, name: "lep zeppelin" },
    { imgSrc: "./images/images-7.jpg", id: 7, name: "metallica" },
    { imgSrc: "./images/images-8.jpg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/images-1.jpg", id: 9, name: "beatles" },
    { imgSrc: "./images/images-2.jpg", id: 10, name: "blink 182" },
    { imgSrc: "./images/images-3.jpg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/images-4.jpg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/images-5.jpg", id: 13, name: "joy division" },
    { imgSrc: "./images/images-6.jpg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/images-7.jpg", id: 15, name: "metallica" },
    { imgSrc: "./images/images-8.jpg", id: 16, name: "pink floyd" },
  ];
  cardData.sort(() => Math.random() - 6);
  cardData.forEach((item) => {
    const section = document.querySelector("section");
    const card = document.createElement("div");
    card.classList = "card";
    card.setAttribute("id", item.id);
    card.setAttribute("name", item.name);
    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;
    const back = document.createElement("div");
    back.classList = "back";
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener("click", (e) => {
      console.log(e);
      face.classList.toggle("toggleCard");
      card.classList.toggle("toggleCard");
    });
  });
};
const board = () => {
  console.log("i will fight you");
};


