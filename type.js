const namee = document.getElementById("name"),
    surname = document.getElementById("surname"),
    email = document.getElementById("email"),
    unvan = document.getElementById("unvan"),
    city = document.getElementById("city"),
    contact = document.getElementById("contact"),
    select = document.getElementsByClassName("select"),
    man = document.getElementById("man"),
    woman = document.getElementById("woman"),
    sub = document.getElementById("sub"),
    res = document.getElementById("res")

let arr1 = []
sub.addEventListener("click", (e) => {
    e.preventDefault()
    const course = {
        ad: namee.value,
        soyad: surname.value,
        gmail: email.value,
        unvan: unvan.value,
        seher: city.value,
        elaqe: contact.value,
        sec: select.value,
        man: man.value,
        woman: woman.value,
        sub: sub.value,
        res: res.value
    }
    arr1.push(course)
    console.log(arr1)
})