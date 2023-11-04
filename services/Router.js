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

        // Event handler for URL change..
        //.. maybe this will remove the 404 error while refreshing in other page than the home
        //.. it just solved the and forward button issue
        window.addEventListener('popstate', event =>{
            Router.go(event.state.route, false)
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
                pageElement = document.createElement('menu-page');
                // pageElement.textContent = 'Menu';
                break
            case '/order':
                pageElement = document.createElement('order-page');
                pageElement.textContent = 'Your Order';
                break
            default:
                if(route.startsWith('/product-')){
                    pageElement = document.createElement('details-page');
                    pageElement.textContent = 'Details';
                    const paramId =route.subString(route.lastIndexOf('-')+1);
                    pageElement.dataset.id = paramId;
                }
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