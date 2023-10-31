const Router = {
    // in the init we are targeting all the nav link
    //.... and preventing the default behaviour and later
    //... we will make it like the react router
    init: ()=> {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                // // it gets the whole url like localhost:...//
                // const url = a.href

                // // this only gets the value of the href like /order
                // const url = a.getAttribute('href');
                const url = event.target.getAttribute('href');
                Router.go(url);
            })
        })
        // now check the initial url
        // .. location.pathname provides the current url
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);
        // now we are changing the url in browser url bar
        if (addToHistory){
            history.pushState({route}, '', route)
        }
        // now it's time for adding and removing content
        //.......based on the router 
        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Menu';
                break
            case '/order':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Your Order';
                break
        }

        if (pageElement){

            // you can do that previous way but the next is better
            // document.querySelector('main').children[0].remove();
    
            // delet the previous content before appending the new child
            const cache = document.querySelector('main');
            cache.innerHTML = '';
            cache.appendChild(pageElement);
        }


    }
}

export default Router;