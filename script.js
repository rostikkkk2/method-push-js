var arr = ["lol", "pop", "slon", "tort", "cot"];
var elem;

while (elem != "stop") {
  elem = prompt("введите любое значение");
    if (elem != "" && elem != "stop") {
      arr += "," + elem;
    }
}
  alert("ваш массив - " + arr);
