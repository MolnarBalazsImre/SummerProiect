//Back the main LogedPage actualy just switch pages
const close = document.getElementById('profileClose');
close.addEventListener('click',()=>{
    hideProfile();
  })
//---Scroll UP Button---//
const upButton = document.getElementById('upButton');
upButton.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })


function showProfile()   //SHOW Profile
{   
  const add = document.getElementById('addAnime');
  const profile = document.getElementById('profile');
  const list = document.getElementById('animeList');
  list.style.display = 'none';
  add.style.display = 'none'; 
  profile.style.display = 'block';

}
function hideProfile()   //HIDE Profile
{
  const add = document.getElementById('addAnime');
  const profile = document.getElementById('profile');
  const list = document.getElementById('animeList');
  profile.style.display = 'none';
  list.style.display = 'block';
  add.style.display = 'none'; 

}
function showAdd()   //SHOW Add
{
  const add = document.getElementById('addAnime');
  const profile = document.getElementById('profile');
  const list = document.getElementById('animeList');
  profile.style.display = 'none';
  list.style.display = 'none';
  add.style.display = 'block'; 

}
function hideAdd()   //HIDE Add
{
  const add = document.getElementById('addAnime');
  const profile = document.getElementById('profile');
  const list = document.getElementById('animeList');
  profile.style.display = 'none';
  list.style.display = 'block';
  add.style.display = 'none'; 
  window.location.reload(); 
}