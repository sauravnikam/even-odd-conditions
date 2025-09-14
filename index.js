let btn = document.querySelector("#checking");
let final = document.querySelector("#result");
let fin = document.querySelector("#res");

btn.onclick = function () {

  let input = document.querySelector("#even-odd").value;
  let inputval = Number(input);
  if(input.trim()===""){
  fin.innerHTML="please enter a number";
  final.innerHTML="";
  }
  else{
    fin.innerHTML="";
    if(inputval%2===0){
final.innerHTML="number is even"
    }
    else{
        final.innerHTML="numberis odd"
    }
  }
}
