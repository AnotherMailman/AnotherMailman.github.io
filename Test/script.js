function javaTest() {
    let firstname = document.getElementById("firstInput").value
    let surname = document.getElementById("surInput").value
    let jobtitle = document.getElementById("jobInput").value
    let email = firstname.concat(".", surname, "@", jobtitle, ".com");
    document.getElementById("email").innerHTML = email;
    let r = Math.random() * 256
    let g = Math.random() * 256
    let b = Math.random() * 256
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}