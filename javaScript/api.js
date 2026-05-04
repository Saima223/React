// =============================
// FILE 3: api.js
// =============================
async function getData(){
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();

        let list = document.getElementById("list");
        list.innerHTML = "";

        data.forEach(user => {
            let li = document.createElement("li");
            li.textContent = user.name + " - " + user.email;
            list.appendChild(li);
        });

    } catch(e){
        console.log("Error:", e);
    }
}