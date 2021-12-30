var users = [
    {email: "ototatik@gmail.com", password: "123123123", name: "Oguz"},
    {email: "ayselnurlu@gmail.com", password: "123123123", name: "Aysel",}
]
var email = prompt("Email:")
var password = prompt("Password:")

for (let i = 0; i < users.length; i++) {
    if (email == users[i].email) {
        alert(users[i].name)
    }
}
a = 5
alert(a)