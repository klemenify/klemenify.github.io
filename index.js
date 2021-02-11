(() => {
  const dontClickButton = document.querySelector("#dontClick");
  const byeSection = document.querySelector(".bye");
  const wave = document.querySelector(".wave");
  const quote = document.querySelector(".quote");
  dontClickButton.addEventListener("click", () => {
    byeSection.style.display = "none";
    wave.style.display = "";
    quote.style.display = "block";

    setTimeout(() => {
      const arr = [
        { message: "All" },
        { message: "you" },
        { message: "need" },
        { message: 3 },
        { message: {} },
        { message: "is" },
        { message: "map," },
        { message: "filter," },
        { message: "and" },
        { message: "reduce" },
      ];

      const saying = arr
        .map((elem) => elem.message)
        .filter((word) => typeof word === "string")
        .reduce((accumulator, elem) => (accumulator += ` ${elem}`), "");

      console.log(`"${saying}" -- Klemen`);
    }, 3000);
  });
})();
