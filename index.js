function task(event) {
    event.preventDefault(); 

    let arr = JSON.parse(localStorage.getItem("task")) || [];

    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let datas = { age, gender, weight, height };
    arr.push(datas);

    localStorage.setItem("task", JSON.stringify(arr));
}


