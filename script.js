document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll(".button-option").forEach(function(item){
        item.addEventListener("click", function(){
            //insertar la pregunta
            let newDiv = document.createElement("div");
            let newContent = document.createElement("p");
            newDiv.appendChild(newContent); 
            newDiv.classList.add("msg");
            newDiv.classList.add("self");
            newContent.classList.add("msg__content");
            newContent.innerHTML = item.innerHTML;
            document.querySelector(".chat__content").appendChild(newDiv);

            //insertar la respuesta
            let newDivR = document.createElement("div");
            let newContentR = document.createElement("ul");
            let newContentRli1 = document.createElement("li");
            let newContentRli2 = document.createElement("li");
            let newContentRli3 = document.createElement("li");
            newDivR.appendChild(newContentR); 
            newContentR.appendChild(newContentRli1); 
            newContentR.appendChild(newContentRli2); 
            newContentR.appendChild(newContentRli3); 
            newDivR.classList.add("msg");
            newContentR.classList.add("msg__content");

            switch (item.id)
            {
                case "option1":
                    newContentRli1.innerHTML = "La moda sostenible, también llamada moda ética, es una parte de la creciente filosofía del diseño y tendencia de la sostenibilidad, cuyo objetivo es crear un sistema que pueda ser apoyado indefinidamente en términos de ambientalismo y responsabilidad social.";
                    newContentRli2.innerHTML = "Tomado de Wikipedia";
                    newContentRli3.innerHTML = "";
                    break;
                case "option2":
                    newContentRli1.innerHTML = "Hèls";
                    newContentRli2.innerHTML = "The Slowear";
                    newContentRli3.innerHTML = "Bambo";
                    break;
                case "option3":
                    newContentRli1.innerHTML = "Naturtac";
                    newContentRli2.innerHTML = "Loba Shoes";
                    newContentRli3.innerHTML = "";
                    break;
                case "option4":
                    newContentRli1.innerHTML = "B the Change";
                    newContentRli2.innerHTML = "Mater";
                    newContentRli3.innerHTML = "Ailanto Eco";
                    break;
                case "option5":
                    newContentRli1.innerHTML = "Freshly Cosmetics";
                    newContentRli2.innerHTML = "Oleum Vitae";
                    newContentRli3.innerHTML = "Santaverde";
                    break;
                case "option6":
                    newContentRli1.innerHTML = "The Circular Project";
                    newContentRli2.innerHTML = "Glamood Second Hand";
                    newContentRli3.innerHTML = "Armario Verde";
                    break;
            }


            setTimeout(function(){
                document.querySelector(".chat__content").appendChild(newDivR);
            }, 1000);

        });
    }); 
    
});