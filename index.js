document.querySelector("#copier").onclick = function(event) {
  event.preventDefault();
  document.querySelector("#bookmarklet").select();
  document.execCommand('copy');
  document.querySelector("#copier").textContent = "copied!";
}


/*
This page is not valid javascript, it only shows what is linked in the bookmark href in index.html


javascript: 
let vpath = location.pathname.split("/"); 
vpath = `${vpath[1]}.github.io/${vpath.splice(2).join("/")}`; 
location.replace(`http://${vpath}`);
*/
