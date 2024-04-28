// document.addEventListener('DOMContentLoaded', () =>{
//     const Depart = document.getElementById('Depart');
//     const btn = document.getElementById('btn');
//     btn.addEventListener('click', () =>{
//     })

// });

// function displayDepatment (Depatment){
//     Depatment.innerHTML = " ";
//     const ul = document.getElementById('Depattment');
//     const dep = createElement.id

// document.getElementById(click,(btn) =>{
//     document.getElementById('Depart').innerHTML = " ";

// })




async function fetchemployee(url){
    const response = await fetch(url)
    const data = await response.json(); 
    return data;
}

// Employee Data & Table 
function updateTable(data){
    const tableBody = document.querySelector ('#Employee table');
    tableBody =innerHTML = "";
    data.forEach (employee.index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
        // <td>$ {index + 1}</td>
        <td>$ {employee.name}</td>
        <td>$ {employee.gender}</td>
        <td>$ {employee.department}</td>
        <td>$ {employee.salary}</td>`;
    };
};

// employee filter
document.getElementById('filterByDepartment').addEventListener('change', () =>{
    const department = document.getElementById('filterByDepartment').value;
    const url =" https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${depatment}";
    fetchAndDi(url)

});


// sorting 
document.getElementById('sortBySalary').addEventListener('change', () =>{
    // const order = btn.target.value;
    const sort= document.getElementById('sortBySalary').value;
 const url ='https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=${order}';

});
// Button

document.getElementById('nextPage').addEventListener('click',()=>{

});

// fetchUrl and Display
const fetchUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees'
fetchAndDisplayData(fetchUrl);
async function fetchAndDisplayData(url){
    const data= await employee(url);
    updateTable(data);
}

async function fetchAndDisplayData(){
    const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=asc');
    const Dep = data.data; 
    console.log(data); 
    data.forEach(Department => {
        const {id, name, Gender,Department,Salary} = Dep
        const li = document.createElement('li');
    });
};

