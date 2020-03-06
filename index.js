
let x = {
  javascript: function() {
	let urlArray = Location.href.split('://');
	urlArray = urlArray[1];
	urlArray = urlArray.split('/');
	let linkTree = urlArray.splice(2);
	urlArray = `${urlArray[1]}.github.io/${linkTree.join('/')}`;
	Location.assign(urlArray);
  }
}

document.querySelector("body").textContent = JSON.stringify(x);