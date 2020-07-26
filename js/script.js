let processForm = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('confirmPassword').value;

    
    
    if(password != cpassword) {
        alert('password mismatch')
    }else {
        let data = {
            "fullName": fullName,
            "email": email,
            "userName": username,
            "newpassword": password,
            "isEnabled": true,
            "roles":["user"]
        }
        let formJSON = localStorage.setItem('myFoodSchedule', JSON.stringify(data));
        fetch('https://5f06f3689c5c250016306640.mockapi.io/register', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
                'Content-Type':'application/json'
            }
        }).then((data) => {
            alert('Congrats');
        });
    }
}

document.getElementById('submit').addEventListener('click', processForm);



