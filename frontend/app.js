
const userTable = document.querySelector("#userTable");
const userForm = document.querySelector("#userForm");


function fetchUser(){

    fetch('http://localhost:3000/user/')
    .then(response=> response.json())
    .then((data) =>{
        userTable.innerHTML='';

        data.forEach((user) =>{
            const row  = document.createElement('tr');
            row.innerHTML = `<th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.mobile}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td>${user.age}</td>
                <td>${user.district}</td>
                <td>${user.state}</td>
                <td>
                    <button type="button" class="btn btn-primary">Update</button>
                    <button type="button" class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
                </td>`;

                userTable.appendChild(row);
        });
        
    });
}


// add new user 

document.addEventListener('submit', (event)=>{

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const mobile = document.querySelector("#mobile").value;
    const email = document.querySelector("#email").value;
    const gender= document.querySelector('input[name="gender"]:checked').value;
    const age = document.querySelector("#age").value;
    const district= document.querySelector("#district").value;
    const state = document.querySelector("#state").value;

    fetch('http://localhost:3000/user',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({name, mobile, email, gender, age, district, state})
    })
    .then(()=>{
        fetchUser();
        userForm.reset();
    })

})

// edit user

//---------

// delete user

function deleteUser(id){

    fetch(`http://localhost:3000/user/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
        },
    })
    .then(()=>{
        fetchUser();
    })
}

fetchUser();