let listlar = document.getElementById("lists");

let movies = ["Brawl stars", "Roblox", "Clash of Clans", "Subway Surfs", "Geometry Dash"];


movies.push('Snake.IO', 'Plants vs Zombie')


for (const iterator of movies) {
  console.log(iterator);
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let btn = document.createElement("button");

  h3.innerHTML = iterator;
  btn.innerHTML = "Delete";
  div.appendChild(h3);
  div.appendChild(btn);
  div.classList.add("card");

  listlar.appendChild(div);
}