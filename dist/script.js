// const searchbar = document.querySelector(".search");
// const submitBtn = document.querySelector(".search-btn");
// const photoWrapper = document.querySelector(".photo-wrapper");

// // console.log("the first hello!")

// submitBtn.addEventListener("click", () => {
//   getPhoto(searchbar.value);
//   searchbar.value = "";
//   photoWrapper.innerHTML = "";
// });

// window.addEventListener("keydown", (e) => {
//   if (e.keyCode === 13) {
//     getPhoto(searchbar.value);
//     searchbar.value = "";
//     photoWrapper.innerHTML = "";
//   }
// });

// let pram2 = "test"

// async function getPhoto(keyword) {
//   let apiURL = `/.netlify/functions/getPhotos?q=${keyword}&pram2=${pram2}`;

//   // &q=Backgrounds&per_page=20&page=1&order=Popular&image_type=photo

//   try {
//     const response = await fetch(apiURL, {
//       method: "GET",
//       headers: { accept: "application/json" },
//     });
//     const data = await response.json();

//     // console.log(data.hits);

//     for (let i = 0; i < data.hits.length; i++) {
//       let imageElement = document.createElement("img");
//       imageElement.setAttribute("src", `${data.hits[i].webformatURL}`);
//       photoWrapper.appendChild(imageElement);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
