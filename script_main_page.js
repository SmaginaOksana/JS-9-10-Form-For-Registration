const { registrationForm, authorizationForm } = document.forms;
const {
  createLogin,
  createPassword,
  firstname,
  lastname,
  e_mail,
  birth,
  confirmRegist,
} = registrationForm.elements;
const { enterLogin, enterPassword, confirmAuth } = authorizationForm.elements;
const buttons = document.querySelector(".buttons");
const btnRegist = document.querySelector(".btnRegist");
const btnAuth = document.querySelector(".btnAuth");

const dataUsers = () => {
  let arrUsers = [];

  if (localStorage.user) {
    arrUsers = JSON.parse(localStorage.getItem("user"));
  }
  console.log(arrUsers);

  btnRegist.addEventListener("click", () => {
    authorizationForm.classList.add("none");
    registration();
  });
  btnAuth.addEventListener("click", () => {
    registrationForm.classList.add("none");
    authorization();
  });

  const registration = () => {
    registrationForm.classList.remove("none");
    registrationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (createLogin.value === "" || createPassword.value === "") {
        alert("Заполните все поля");
        return;
      }
      const objUser = {
        firstname: firstname.value,
        lastname: lastname.value,
        e_mail: e_mail.value,
        dateOfBirth: birth.value,
        login: createLogin.value,
        password: createPassword.value,
        id: generateId(),
      };
      arrUsers.push(objUser);
      registrationForm.reset();
      localStorage.setItem("user", JSON.stringify(arrUsers));
    });
  };

  const authorization = () => {
    authorizationForm.classList.remove("none");
    authorizationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // 1 вариант поиска данных пользователя:

      // let someone = arrUsers.find((item) => {
      //   return (
      //     item.login === enterLogin.value &&
      //     item.password === enterPassword.value
      //   );
      // });
      // if (someone) {
      //   alert("Авторизация прошла успешно");
      // } else alert("Такого пользователя не существует");

      // 2 вариант поиска данных пользователя:

      let flag = false;
      arrUsers.forEach((item) => {
        if (
          enterLogin.value === item.login &&
          enterPassword.value === item.password
        ) {
          alert("Авторизация прошла успешно");
          flag = true;
          localStorage.setItem("id", JSON.stringify(item.id));
          window.location.href = "./user_page.html";
        }
      });
      if (!flag) {
        alert("Такого пользователя не существует");
      }

      authorizationForm.reset();
    });
  };

  function generateId() {
    const timestamp = new Date().getTime().toString(16);
    const randomNum = Math.random().toString(16).slice(2, 8);
    return `${timestamp}-${randomNum}`;
  }
};

dataUsers();
