import API from "./API.js";
// you need to use .js while importing in vanilla


export async function loadData(){
    app.store.menu = await API.fetchMenu();
}