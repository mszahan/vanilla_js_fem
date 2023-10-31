import Store from "./services/Store.js"
import API from "./services/API.js"
// it's using the curly braces because it's not the default
//......export in that Menu.js file
import { loadData } from "./services/Menu.js";

// making the Store global
window.app = {}
app.store = Store;

// it's better to wait for the event for manipulation
window.addEventListener('DOMContentLoaded', ()=>{
    loadData();

});


// // you can create shorthand to use something big
// //......over and over again
// const $ = function(args){ return document.querySelector(args);}
// const $$ = function(args){ return document.querySelectorAll(args);}
// // now you don't have to type the whole function like document.ge..blah blah
// //.. just use $ sign it will work as well

// HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
// HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
// HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
// HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }