
function adicionar(){
    let text = document.getElementById("texto").value;
    let list =  document.getElementById("lista").innerHTML;

    list += "<br> <input type=checkbox>" + text
    document.getElementById("lista").innerHTML = list;
}