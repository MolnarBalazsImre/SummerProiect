const Register = document.getElementById('Register');    //Register form
const regName = document.getElementById('regName');      //Name
const regEmail = document.getElementById('regEmail');    //Email 
const regPass = document.getElementById('regPass');      //Password
const Login = document.getElementById('Login');          //Login form
const loginEmail = document.getElementById('loginEmail');//Email 
const loginPass = document.getElementById('loginPass');  //Password
const RegisterContainer = document.getElementById('RegisterContainer');
const LoginContainer = document.getElementById('LoginContainer');

function checkLogin()     
{
    
    if(localStorage.getItem('token'))
    {
        axios.get('/login',{headers:{'token': localStorage.getItem('token')}})
        .then(res=>{
            console.log(res);
            if(res.data == 'Success')
            {
                window.location.href = '/loged'
            }else{
                alert('Something wrong! #22-frontend');
            }     
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
Login.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios.post('/user/login',
    {
        lemail: loginEmail.value,
        lpassword: loginPass.value
    })
    .then((res)=>{
        if(res.status == 200)
        {
            localStorage.setItem('token', res.headers.token );
            localStorage.setItem('id',res.data);
            console.log(res);
        }
        checkLogin();
    })
    .catch(error=>{
        console.log(error);
        alert("Somthing went wrong!");
    }) 
})

Register.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios.post('/user/register',
    {
            rname: regName.value,
            remail: regEmail.value,
            rpassword: regPass.value
    })
    .then((res)=>{
            alert("Registered!"); 
    })
    .catch((error)=>{
        console.log(error);
        alert("Somthing went wrong!");
    })
})
function toLogin(){
    RegisterContainer.style.display = 'none';
    LoginContainer.style.display = 'block';
}
function toRegister(){
    RegisterContainer.style.display = 'block';
    LoginContainer.style.display = 'none';
}