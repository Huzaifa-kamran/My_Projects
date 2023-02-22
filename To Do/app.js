  
        document.getElementById("addBtn").addEventListener("click",function (){
            if(document.getElementById("input").value.length > 0){
            let item = document.createElement("li");
            let input = document.getElementById("input").value;
            let text = document.createTextNode(input);
            let close = document.createElement("button");
            let X =  document.createTextNode("X");
            close.appendChild(X);
            close.setAttribute(`class`, `closing`)
            item.appendChild(text);
            item.appendChild(close);
            document.getElementById("list").appendChild(item);
            let elements = document.getElementsByClassName("closing");
    
            let myFunction = function() {
                console.log("remove");
                this.parentNode.style.display= "none";
            };
     
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }document.getElementById("removeBtn").style.display = "block";
     document.getElementById("removeBtn").addEventListener("click",function(){
        document.getElementById("list").removeChild(item);
     })
    }else{
    alert("Please Enter a Task Name!")
    }
    
    });
    