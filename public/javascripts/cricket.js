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
    tr_name.innerHTML = tr_name.innerHTML + create_td(inputPlayer.value, "name_p");
    inputPlayer.value = "";
    let old_nb = Number(nb_player.textContent);
    nb_player.textContent = old_nb + 1;
  };
  start_btn.onclick = (e) => {
    e.preventDefault();
    let players = Number(nb_player.textContent);
    let names = get_names();
    if (players === 0 || names.length === 0) return;
    create_cricket(players, names);

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
  let tbody = cricket_values.map((val) => create_tr_cricket(val, names)).join("");
  let thead = create_tr_head_cricket(names);
  let innerTable = `
    <table>
        <thead>
            ${thead}
        </thead>
        <tbody>
            ${tbody}
        </tbody>
    </table>`;
    body_cricket.innerHTML = innerTable;
    console.log(typeof innerTable, body_cricket.innerHTML);
}
function create_tr_head_cricket(names) {
  let str = "<tr>";
  str += create_th("x", "grey");
  names.forEach((el) => {
    str += create_th(el, "grey");
  });
  str += "</tr>";
  return str;
}
function create_tr_cricket(first_td_content, names) {
  let str = "<tr>";
  str += create_td(first_td_content);
//   while (nb_player !== 0) {
//     str += create_td("", "cell_scores");
//     nb_player -= 1;
//   }
    names.forEach(el => str += create_td("", "cell_scores"));
  str += "</tr>";
  return str;
}
function create_td(content, className = "") {
  return `<td class="${className}">${content}</td>`;
}
function create_th(content, className = "") {
  return `<th class="${className}">${content}</th>`;
}

document.addEventListener("DOMContentLoaded", function () {
  event_init();
});
