let btns = document.querySelectorAll(".btn");
let rst = document.querySelector("#rst");
let newBtn = document.querySelector("#new");
let msg = document.querySelector(".msg");
let boxes = document.querySelector(".box-cntner");
let turn = "O";
let count = 0;

boxes.classList.add("hide");
rst.classList.add("hide");

btns.forEach((btn) => {
    btn.addEventListener("click" , () => {
        if(turn === "O"){
            btn.innerText = "O";
            count++;
            btn.disabled = true;
            
            turn = "X";
        }else{
            btn.innerText = "X";
            count++;
            btn.disabled = true;
            turn = "O";
        }

        let isWinner = winner();
        if(count === 9 && !isWinner ){
            msg.innerText = " GAME WAS A DRAW..!! \n PLAY AGAIN"
            boxes.classList.add("hide");
            rst.classList.add("hide");
            for(let btn of btns){
                btn.innerText = "";
                btn.disabled = false;
            }   
        }
    });
});

const winningIdx = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function disableButtons(){
    for(let btn of btns){
        btn.disabled = true;
    }
}

function enableButtons(){
    for(let btn of btns){
        btn.innerText = "";
        msg.innerText = "";
        btn.disabled = false;
        count = 0;
    }
}

function winner() {
    for (let pattern of winningIdx) {

        let val1 = btns[pattern[0]].innerText;
        let val2 = btns[pattern[1]].innerText;
        let val3 = btns[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {

            msg.innerText = `WINNER IS ${val1}`;
            boxes.classList.add("hide");
            rst.classList.add("hide");
            disableButtons();
            return true;
            
        }
    }
    return false;
}

rst.addEventListener("click" , enableButtons );
newBtn.addEventListener("click", () => {
    enableButtons();
    boxes.classList.remove("hide");
    rst.classList.remove("hide");


})

db.addEventListener("click" , )






