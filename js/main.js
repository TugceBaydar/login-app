var objUsers = [
  {
    username: "tugce",
    password: "123"
  },
  {
    username: "baydar",
    password: "456"
  },
  {
    username: "muto",
    password: "789"
  }
]

function login() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

   isSuccess = false

  for(i=0; i<objUsers.length; i++) {
    if(username == objUsers[i].username && password == objUsers[i].password) {


         isSuccess = true
        break

    } else {
      isSuccess = false

    }
  }
  if(isSuccess) {
    console.log(username + " is logged in!")
    alert("Welcome to our webpage!")
  }
  else {
      alert("Wrong password or username!")
  }
}

function register() {
  var registerUser = document.getElementById('newUser').value
  var registerPassword = document.getElementById('newPassword').value

  var newUser = {
    username: registerUser,
    password: registerPassword
  }
     isRegistered = false

  for(i=0; i<objUsers.length; i++) {
    if (registerUser == objUsers[i].username) {
        alert("username is already taken!")
        return
    }else if (registerPassword.length < 8){
        alert("password is too short!")
        return
    }
  }


  objUsers.push(newUser)
  console.log(objUsers)

}
