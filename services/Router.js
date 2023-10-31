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

    }
}

export default Router;