let show=document.getElementsByClassName("show");
document.getElementById('plus').addEventListener
('click', (e) => {
document.getElementById('text-box').style.display="block";
})
document.getElementById('post').addEventListener('click',(e)=>{
    var mytext=document.getElementById("area").value;
    var div=document.createElement("div");
    div.innerText=mytext;
    div.classList.add("mydesign");
   
    document.getElementById("container").appendChild(div);
})
document.getElementById('del').addEventListener('click',(e)=>{
   
// for(var item in cont){
//     if(item.matches(':hover')){
//         cont.removeChild(item);
//     }
// }


})
function remove(){
    let cont=document.getElementById("container");
    cont.removeChild();
}