let darkbtn_mode = document.querySelector("#db");
let view = document.querySelector(".viewbtn");

let currmode = "light";
let root = document.querySelector(':root');

darkbtn_mode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "darkmode";
        
        root.style.setProperty('--background-color', '#191627');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--bgcolor', '#ffffff');
        root.style.setProperty('--headcolor', '#00EEFF');
        root.style.setProperty('--form', '#211D35');
        
        darkbtn_mode.style.color = 'white';
        view.style.color = 'white';
        
        
        // darkbtn_mode.style.fontSize = "1.5rem";
        darkbtn_mode.innerText = 'light_mode';
    } 
    
    
    else {
        currmode = "light";
        
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#333333');
        root.style.setProperty('--bgcolor', '#191627');
        root.style.setProperty('--headcolor', '#027d86');
        root.style.setProperty('--form', '#f2eafd');
        
        darkbtn_mode.style.color = 'black';
        view.style.color = 'black';
        
        
        darkbtn_mode.innerText= 'dark_mode';
        // darkbtn_mode.style.fontSize = "1.5rem";
    }
});

function openNav(){
    let open = document.querySelector(".sp");
    open.style.display = 'flex';
}

function closeNav(){
    let close = document.querySelector(".sp");
    close.style.display = 'none';
}


let textElement = document.querySelector("#text2");
let cursorElement = document.querySelector("#cursor");
let arr = ["Web Developer.", "Competitive Programmer.", "Technophile.", "Learner."];

function typewriter(arr) {
    let i = 0;

    function typeNextString() {
        let str = arr[i % 4];
        let j = 0;

        function typeCharacter() {
            if (j < str.length) {
                textElement.textContent += str[j];
                j++;
                setTimeout(typeCharacter, 50); // Adjust the delay as needed
            } else {
                setTimeout(removeText, 1500); // Adjust the delay as needed
            }
        }

        function removeText() {
            let currentText = textElement.textContent;
            if (currentText.length > 0) {
                textElement.textContent = currentText.slice(0, -1);
                setTimeout(removeText, 50); // Adjust the delay as needed
            } else {
                i++;
                setTimeout(typeNextString, 50); // Adjust the delay as needed
            }
        }
        
        function toggleCursor() {
            cursorElement.style.visibility = (cursorElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
            setTimeout(toggleCursor, 300); // Adjust the delay as needed
        }

        toggleCursor();
        typeCharacter();
    }

    typeNextString();
}

typewriter(arr);
