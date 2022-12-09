const adderbtn=document.getElementById('adder-btn');
// document.getElementById('new-ticket-section').style.display="none";
adderbtn.addEventListener('click',()=>{
    document.getElementById('new-ticket-section').style.display="none";
    document.getElementById('tickets').innerHTML=" ";
})
var currentColor=localStorage.getItem('color') || "red";
function ticket_color(color){
    currentColor=color;
}
const textarea=document.getElementById('text');
textarea.onkeyup=function(e){
     var ticketList=JSON.parse(localStorage.getItem('ticketList'))  || [];
    e=e||window.event;
    console.log(e);
    if(e.keyCode == 13){
        var currTicket=[]
        currTicket.push(textarea.value);
        currTicket.push(currentColor);
        currTicket.push("#" + makeid(6));
        console.log(currTicket);
        ticketList.push(currTicket);
        console.log(ticketList);
        localStorage.setItem('ticketList',JSON.stringify(ticketList));
        textarea.value="";
        document.getElementById('new-ticket-section').style.display="none";
        loadTickets();
    }
}
function loadTickets(){
    var ticketList=JSON.parse(localStorage.getItem('ticketList'));
const tickets=document.getElementById('tickets');
tickets.innerHTML=``;
for(let i=0;i<ticketList.length;i++){
    item=ticketList[i];
    var newTicket=document.createElement('section');
    newTicket.classList.add("ticket-area");
    var topColor=document.createElement('div');
    topColor.className="top-color";
    topColor.style.backgroundColor=item[1];
    var random=document.createElement('div');
    random.className="random-text";
    random.innerText=item[2];
    var varOther=document.createElement('div');
    varOther.className="rest-area";
    varOther.innerText=item[0];
    newTicket.appendChild(topColor);
    newTicket.appendChild(random);
    newTicket.appendChild(varOther);
    tickets.appendChild(newTicket);
}
}
loadTickets();
function makeid(length){
var result = '';
var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charlength=characters.length;
for(var i=0;i<length;i++){
    result+=characters.charAt(Math.floor(Math.random()*charlength));

}
return result;
}
function del(){
localStorage.setItem('ticketList',JSON.stringify([]));
loadTickets();
}
