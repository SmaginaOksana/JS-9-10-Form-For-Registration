const container = document.querySelector(".container");
const { registrationForm, authorizationForm } = document.forms;
const { createLogin, createPassword } = registrationForm.elements;
const { enterLogin, enterPassword } = authorizationForm.elements;
const { confirmRegist } = registrationForm.elements;
const { confirmAuth } = authorizationForm.elements;
const buttons = document.querySelector(".buttons");
const btnRegist = document.querySelector(".btnRegist");
const btnAuth = document.querySelector(".btnAuth");
const back = document.querySelector(".back");

const dataUsers = () => {
  const arrUsers = [];

  btnRegist.addEventListener("click", () => {
    back.classList.remove("none");
    buttons.classList.add("none");
    registration();
  });
  btnAuth.addEventListener("click", () => {
    back.classList.remove("none");
    buttons.classList.add("none");
    authorization();
  });
  back.addEventListener("click", () => {
    back.classList.add("none");
    buttons.classList.remove("none");
    registrationForm.classList.add("none");
    authorizationForm.classList.add("none");
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
        login: createLogin.value,
        password: createPassword.value,
      };
      arrUsers.push(objUser);
      registrationForm.reset();
    });
  };

  const authorization = () => {
    authorizationForm.classList.remove("none");
    authorizationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (enterLogin.value === "" || enterPassword.value === "") {
        alert("Заполните все поля");
        return;
      }

      // 1 вариант поиска данных пользователя:

      let user = arrUsers.find((item) => {
        return (
          item.login === enterLogin.value &&
          item.password === enterPassword.value
        );
      });
      if (user) {
        alert("Авторизация прошла успешно");
      } else alert("Такого пользователя не существует");

      // 2 вариант поиска данных пользователя:

      let flag = false;
      arrUsers.forEach((item) => {
        if (
          enterLogin.value === item.login &&
          enterPassword.value === item.password
        ) {
          alert("Авторизация прошла успешно");
          flag = true;
        }
      });
      if (!flag) {
        alert("Такого пользователя не существует");
      }

      authorizationForm.reset();
    });
  };
};

dataUsers();
