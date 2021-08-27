//---LOG OUT---//
const logout = document.getElementById('Logout');    
//---HTML BODY---//      
const Body = document.getElementsByTagName('BODY')[0];
//---USER NAME--//
const UserName = document.getElementById('Username');
//Temporary profile data for change
const tempUsername = document.getElementById('name');
const tempEmail = document.getElementById('email');
const tempPassword = document.getElementById('password');
const tempForm = document.getElementById('tempForm');
//--ADD--//
const addForm = document.getElementById('add');
const titleAdd = document.getElementById('title');
const rateAdd = document.getElementById('rate');
const genAdd = document.getElementById('gen');
const linkAdd = document.getElementById('link');
const seasonNumber = document.getElementById('season');
const episodNumber = document.getElementById('ep');
addForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  dataAdd = {
    Title: titleAdd.value,
    Rate: rateAdd.value,
    Gen: genAdd.value,
    Link: linkAdd.value,
    uID: localStorage.getItem('id'),
    season: seasonNumber.value,
    ep: episodNumber.value
  }
  axios.post('/loged/add',dataAdd,(error)=>{
    console.log('Error');
  });
  console.log(dataAdd);

})
//---Log Out Button---//
logout.addEventListener('click',()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  window.location.href = "/";
})

//---Get the user data---//
function userData()
{
  const userID = 
  {
    id: localStorage.getItem('id')
  };
  const userToken = {
    headers:
    {
      'token': localStorage.getItem('token')
    }
  };
  console.log(userID);
  console.log(userToken);
  if(!userID.id) return window.location.href = '/';
  console.log(userID.id);
  axios.post('/loged/userData',userID,userToken)
  .then((data)=>{
    UserName.innerText = data.data.name;
    console.log(data);
    console.log(data.data.name);
  })
  .catch(error=>{
    console.log(error);
  })
}
function getallanime()
{
  console.log('When on load work');
}
//---Get user data and show them except the password---//
UserName.addEventListener('click',()=>{
  const userID = 
  {
    id: localStorage.getItem('id')
  };
  const userToken = {
    headers:
    {
      'token': localStorage.getItem('token')
    }
  };
  axios.post('/loged/userData',userID,userToken)
  .then((data)=>{
    UserName.innerText = data.data.name;
    console.log(data);
    tempUsername.value = data.data.name;
    tempEmail.value = data.data.email;
    tempPassword.value = '';
    showProfile();
  })
  .catch(error=>{
    console.log(error);
  })
})
//Update User Data
tempForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const userToken = {
    headers:
    {
      'token': localStorage.getItem('token')
    }
  }
  const data = {
    id: localStorage.getItem('id'),
    newName: tempUsername.value,
    newEmail: tempEmail.value,
    newPassword: tempPassword.value 
  }
  console.log(data);
    axios.post('/loged/change',data,userToken)
    .then((res)=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
})      
const table = document.getElementById('table');

window.addEventListener('load',()=>{
  axios.get('/loged/showAll')
  .then(res=>{
    var array = res.data; 
    var rows ="";
    array.forEach((item) => {
      rows += '<tr>\
    <td name="title"><input type="text" value="'+item.name+'"></td>\
    <td name="genre"><input type="text" value="'+item.genre+'"></td>\
    <td name="rate"><input type="text" value="'+item.rate+'"></td>\
    <td name="link"><input type="text" value="'+item.link+'"></td>\
    <td name="season"><input type="text" value="'+item.season+'"></td>\
    <td name="episod"><input type="text" value="'+item.episod+'"></td>\
    <td><button onclick="adjust(event)" class="confButton">Adjust</button></td>\
    <td><button class="deleteButton">Delete</button></td>\
  </tr>';
    });
    
    table.innerHTML += rows;
  })
  console.log('Working');
})

function adjust(event)
{
  console.log(event.target.closest('tr').querySelector('[name=title]').querySelector('input').value);
  console.log('Adjust Working well')
}