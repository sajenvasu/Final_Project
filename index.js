
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
  
  login.hidden = true;
  create.hidden = false;
}
