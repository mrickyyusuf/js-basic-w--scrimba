import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(app);
console.log(database);

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

const render = leads => {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    };
    ulEl.innerHTML = listItems;
    return listItems;
};

const setAndRender = () => {
    render(myLeads);
    return setAndRender;
};

const deleteBtnFn = () => {
    myLeads = [];
    render(myLeads);
    return deleteBtnFn;
};

const inputBtnFn = () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    setAndRender();
    return inputBtnFn;
};

deleteBtn.addEventListener("dblclick", deleteBtnFn);

inputBtn.addEventListener("click", inputBtnFn);