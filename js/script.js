let processForm = (event) => {
    event.preventDefault();
    

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('confirmPassword').value;

    
    
    if(password != cpassword) {
        alert('password mismatch')
    }else {
        let formData = [];
        let data = {
            "fullName": fullName,
            "email": email,
            "userName": username,
            "newpassword": password,
            "isEnabled": true,
            "roles":["user"]
        }
        formData.push(data);
        console.log(formData);
        
        fetch('https://9118ebfa81ae62463a979447da5581f8.m.pipedream.net', {
            method: 'POST',
            body: JSON.stringify(formData),
            header: {
                'Content-Type':'application/json'
            }
        }).then((data) => {
            alert('Congrats');
        });
<<<<<<< HEAD
        document.querySelector('form').reset();
=======
        document.queryselector('form').reset();
>>>>>>> 4eeceb05fe85f4fd08ce8c3e7734debd49904ffb
    }
}

document.getElementById('submit').addEventListener('click', processForm);



