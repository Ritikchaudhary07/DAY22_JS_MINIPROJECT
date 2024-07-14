let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
   
    let item=document.createElement("li");
    item.innerText=input.value;
    
    let dltbutton=document.createElement("button");
    dltbutton.innerText="delete"
    dltbutton.classList.add("delete");
    item.appendChild(dltbutton);


    ul.appendChild(item);
    input.value="";
});

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let parent=this.parentElement;
//         parent.remove();
//     });
// }           THIS WILL CAUSE EVENT DELEGATION I.E THIS WILL NOT WORK FOR ELEMENT THAT ARE ADDED NEW TO LIST
// IN ORDER TO AVOID THIS WE WILL ADD EVENT LISTNER TO THEIR PARENT I.E LIST ITEM PARENT

ul.addEventListener("click",function(event){
     if(event.target.nodeName="Button"){
        let listItem=event.target.parentElement;
        listItem.remove();
     }
});
