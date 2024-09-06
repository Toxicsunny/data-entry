document.querySelector("form").addEventListener("submit",todolist);
function todolist(){
    event.preventDefault();
    let itemname=document.querySelector('#name').value;
    let itemqty=document.querySelector('#Qty').value;
    let itempriority=document.querySelector('#priority').value;

    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=itemname;
    let td2=document.createElement("td");
    td2.innerText=itemqty;
    let td3=document.createElement("td");
    td3.innerText=itempriority;

    tr.append(td1,td2,td3);
    document.querySelector('tbody').append(tr);
    document.querySelector('#name').value="";
    document.querySelector('#Qty').value="";
}