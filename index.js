
function scrolltoLogin() {
  const section = document.getElementById("logintab");
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth"
  });

}

  function scrolltoGames() {
    const section = document.getElementById("gamestab");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  
}

function createaccount(){
  const create = document.getElementById("createtab");
  const login = document.getElementById("logintab");

  create.style.display = 'inline';
  login.style.display = 'none';
}

function backaccount(){
  const create = document.getElementById("createtab");
  const login = document.getElementById("logintab");

  create.style.display = 'none';
  login.style.display = 'inline';
}