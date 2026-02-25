const userList =document.getElementById("userList");
const searchInput = document.getElementById("searchInput");

let user = [];

//fetch user from API

async function fetchUser()
{
    try{
        const response = await fetch("http://jsonplaceholder.typicode.com/users/");
        user = await response.json();

        displayUser(user)

    }
    catch (error){
        userList.innerHTML = "Failed to load user";
    }
}
//Display users

//user information print (user------>userdata --------->10data detail will execute [][][])

function displayUser(userData)
{
 userList.innerHTML = "";
 

 userData.forEach(a1 => { 
    const div = document.createElement("div");
    div.classList.add("user-card");

    div.innerHTML =
 `
    <p><strong>Name:</strong> ${a1.name}</p>
    <p><strong>Email:</strong> ${a1.email}</p>
    <p><strong>City:</strong> ${a1.address.city}</p>
    <p><strong>Website:</strong> ${a1.website}</p>
`;

   userList.appendChild(div);

 });
}
//api link :function cll pannanum why main  function
fetchUser();
// ------------------Upload is done complete


//search functionality

searchInput.addEventListener("input",() =>
{
    const searchValue = searchInput.ariaValueMax.toLowerCase();

    const filteredUsers = user.filter(b1 => 
        b1.name.toLowerCase().includes(searchValue)
    );
    displayUser(filteredUsers);

}
)
