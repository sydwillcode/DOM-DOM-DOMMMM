document.addEventListener('DOMContentLoaded', function(){
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square'); 
    button.appendChild(buttonText);
    document.body.appendChild(button);
    
    button.addEventListener('click', newDiv); 
    
    let idNum = 1;
    
    let colors = ['pink', 'purple', 'teal', 'yellow']
    
    
    function newDiv(){
        let boxes = document.createElement('div');
        boxes.classList = ('boxes');
        document.body.appendChild(boxes); 
        boxes.setAttribute('id', idNum);
        idNum++;
        boxes.addEventListener('mouseenter', function(){
            boxes.textContent = boxes.id
        });
        boxes.addEventListener('mouseleave', function(){
            boxes.textContent = ''
        });
        boxes.addEventListener('click', function(){
            boxes.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        });
        /* boxes.addEventListener('dblclick', function(){
            if (
    
            }
        })
            
           /* let even = document.querySelectorAll('.boxes:nth-child(even)');
            for (let i = 0; i < even.length; i++){
               even[i].remove() */
        

    
    }
    



})