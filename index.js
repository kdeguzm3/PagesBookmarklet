document.querySelector("#copier").addEventListener("click", function(event) {
  event.preventDefault();
  let blurb = document.querySelector("#bookmarklet");
  blurb.select();
  document.execCommand('copy');
});


/*
This page is not valid javascript, it only shows what is linked in the bookmark href in index.html


javascript: 
let vpath = location.pathname.split("/"); 
vpath = `${vpath[1]}.github.io/${vpath.splice(2).join("/")}`; 
location.replace(`http://${vpath}`);
*/
