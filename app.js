let add_btn=document.querySelector("#add-btn");
let search_input=document.querySelector("#search_input");
let todo_list=document.querySelector(".todo-list");

add_btn.addEventListener("click",()=>{
    let name=search_input.value;
    if(name===""){
        alert("Please enter things to do");
    }else{
        let li=document.createElement("ul");
        li.innerHTML=`<span class="todo-item">${name}</span>`;
        todo_list.append(li);
        let del_btn=document.createElement("button");
        let edit_btn=document.createElement("button");
        let del_img=document.createElement("img");
        let edit_img=document.createElement("img");
        del_img.src="https://cdn-icons-png.flaticon.com/512/7580/7580373.png";
        del_img.alt="Delete";
        del_btn.append(del_img);
        edit_img.src="https://cdn.icon-icons.com/icons2/1151/PNG/512/1486505375-edit-pen-change-option-pencil-write_81422.png";
        edit_img.alt="Edit";
        edit_btn.append(edit_img);;
        li.append(del_btn);
        li.append(edit_btn);
        li.style.color="black";
        li.style.textAlign="center";
        search_input.value="";
        del_btn.addEventListener("click",()=>{
            li.remove();
        })
        edit_btn.addEventListener("click",()=>{
            let newname=prompt("Enter you want to edit: ",name);
            if(newname){
                li.innerHTML=`<span class="todo-item">${newname}</span>`;
                li.append(del_btn);
                li.append(edit_btn);
            }
        })
    }
})