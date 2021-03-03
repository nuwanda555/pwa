const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/cafe1.jpg" },
  { name: "Voluptatem", image: "images/cafe1.jpg" },
  { name: "Explicabo", image: "images/cafe1.jpg" },
  { name: "Rchitecto", image: "images/cafe1.jpg" },
  { name: " Beatae", image: "images/cafe1.jpg" },
  { name: " Vitae", image: "images/cafe1.jpg" },
  { name: "Inventore", image: "images/cafe1.jpg" },
  { name: "Veritatis", image: "images/cafe1.jpg" },
  { name: "Accusantium", image: "images/cafe1.jpg" },
]


const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

  window.addEventListener("load", () => {
    function handleNetworkChange(event) {
      if (navigator.onLine) {
        document.getElementById("mensaje").style.display = "none";

      } else {
        document.getElementById("mensaje").style.display = "block";
      }
    }
  
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);
  });
  