const inputPlayer = document.querySelector('input[name="name_player"]');
const add_player_btn = document.getElementById("add_player");
const tr_name = document.getElementById("names_player");
const nb_player = document.getElementById("nb_player");
const start_btn = document.getElementById("start");
const body_cricket = document.getElementById("body_cricket");
const cricket_values = [20, 19, 18, 17, 16, 15, "bulles"];
console.log(inputPlayer, tr_name);
// Functions
// events
function event_init() {
  add_player_btn.onclick = (e) => {
    e.preventDefault();
    if (inputPlayer.value === "") return;
    let td = document.createElement("td");
    tr_name.append(create_td(inputPlayer.value, "name_p"));
    inputPlayer.value = "";
    let old_nb = Number(nb_player.textContent);
    nb_player.textContent = old_nb + 1;
  };
  start_btn.onclick = (e) => {
      e.preventDefault();
      let players = Number(nb_player.textContent);
      let names = get_names();
      console.log("in click start", players, names);

      if (players === 0 || names.length === 0) return;
      create_cricket(players, names);
    //   body_cricket.innerHTML = "";
    //   body_cricket.append(table);
  };
}
function get_names() {
  let td_name = document.querySelectorAll(".name_p");
  let ret = [];
  td_name.forEach((el) => ret.push(el.textContent));
  return ret;
}
function create_cricket(nb_player, names) {
    console.log("in create crik", nb_player, names);
    let table = document.createElement("table");
    body_cricket.append(table);
    let thead = table.createTHead();
    let tbody = table.createTBody();
    thead.append(create_tr_head_cricket(nb_player, names));
    cricket_values.forEach(el => tbody.append(create_tr_cricket(el,nb_player)));
    console.log(body_cricket.innerHTML);
   body_cricket.innerHTML = table.outerHTML
}
function create_tr_head_cricket(nb_player, names, thead) {
    let tr = document.createElement('tr');
    tr.append(create_td("", 'grey',true));
    names.map(el => {
        tr.append(create_td(el, 'grey', true));
    });
    return tr;
}
function create_tr_cricket(first_td_content,nb_player) {
    let tr = document.createElement('tr');
    tr.append(create_td(first_td_content));
    while (nb_player !== 0) {
        tr.appendChild(create_td("", "cell_scores"));
        nb_player -= 1;
    }
    return tr;


}
function create_td(content, className = "", head = false) {
  let str_td = head ? "th" : "td";
  let td = document.createElement(str_td);
  td.className = className;
  td.textContent = content;
  return td;
}

document.addEventListener("DOMContentLoaded", function () {
  event_init();
});
