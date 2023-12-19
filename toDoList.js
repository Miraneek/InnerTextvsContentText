let button = document.querySelector('.add')
button.addEventListener("click", add);

let input = document.querySelector("#input")
input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        add();
    }
});

function add() {
    if (document.querySelector("#input").value === "") {
        return;
    }
    let output = document.createElement("div");
    output.classList.add("output");
    let name = document.createElement("h4")
    name.innerText = document.querySelector("#input").value

    output.appendChild(name);

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    output.appendChild(btn);

    document.querySelector("#tasks").appendChild(output);
    document.querySelector("#input").value = "";

    btn.addEventListener("click", function(){
        document.querySelector("#tasks").removeChild(output);
    })
}