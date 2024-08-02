const user = JSON.parse(localStorage.getItem("user"));
const id = JSON.parse(localStorage.getItem("id"));
const container = document.querySelector(".container");
const userPage = document.querySelector(".userPage");
const ul = document.querySelector("ul");

user.forEach((item) => {
  if (id === item.id) {
    userPage.innerHTML = `<span>FirstName:
    </span><p>${item.firstname}</p>
    <span>LastName:
    </span><p>${item.lastname}</p>
    <span>e-mail:
    </span><p>${item.e_mail}</p>
    <span>date of birth:
    </span><p>${item.dateOfBirth}</p><span>login:</span><p>${item.login}</p><span>
    password:</span><p>${item.password}</p>`;
  }
});
