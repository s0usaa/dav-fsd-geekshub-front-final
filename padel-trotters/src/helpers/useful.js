export const validate = (name, data, required) => {
  switch (name) {
    case "name":
    case "surname":
    case "nombre":
    case "apellido":
      //Aqui evaluaremos strings que NO pueden tener números

      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validated: false };

        //Evaluamos mediante la expresión regular
      } else if (!/[a-z]/gi.test(data)) {
        return { message: "No puede contener numeros", validated: false };
      }

      return { message: "", validated: true };

    case "email":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validated: false };
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
      ) {
        return { message: "Formato de email no valido", validated: false };
      }

      return { message: "", validated: true };

    case "password":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validated: false };
      } else if (data.length < 5) {
        return {
          message: "El password tiene que tener mas de 4 caracteres",
          validated: false,
        };
      }
      if (!/[a-z]/.test(data)) {
        return {
          message: "El password debe contener una minuscula",
          validated: false,
        };
      }
      if (!/[A-Z]/.test(data)) {
        return {
          message: "El password debe contener una mayuscula",
          validated: false,
        };
      }
      if (!/[0-9]/.test(data)) {
        return {
          message: "El password debe contener un numero",
          validated: false,
        };
      }
      if (data.length > 16) {
        return {
          message: "El campo no puede tener mas de 16 caracteres",
          validated: false,
        };
      } else {
        return { message: "", validated: true };
      }

    case "tfno":
    case "phonenumber":
    case "telefono":
    case "phone":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validation: false };
      }
      if (!/[0-9]/.test(data)) {
        return {
          message: "El telefono solo puede contener numeros",
          validated: false,
        };
      }
      if (data.length > 9) {
        return {
          message: "El campo no puede tener mas de 9 caracteres",
          validated: false,
        };
      }
      return { message: "", validated: true };

    case "nivel":
    case "lvl":
    case "level":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validation: false };
      }
      if (!/[0-9]/.test(data)) {
        return {
          message: "Solo se pueden poner numeros",
          validated: false,
        };
      }
      if (data.length > 4) {
        return {
          message: "El campo no puede tener mas de 4 caracteres",
          validated: false,
        };
      }
      return { message: "", validated: true };

    case "coaches":
    case "entrenadores":
    case "coaches_id":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validation: false };
      }
      if (!/[0-9]/.test(data)) {
        return {
          message: "Solo se pueden poner numeros",
          validated: false,
        };
      }
      if (data.length > 2) {
        return {
          message: "El campo no puede tener mas de 2 caracteres",
          validated: false,
        };
      }
      return { message: "", validated: true };

    case "dni":
    case "document":
    case "nif":
      break;

    default:
      console.log("Fielt not recognized");
  }
};

export const validate2 = (name, data, required) => {
  switch (name) {
    case "name":
    case "surname":
    case "nombre":
    case "apellido":
      //Aqui evaluaremos strings que NO pueden tener números

      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validated: false };

        //Evaluamos mediante la expresión regular
      } else if (!/[a-z]/gi.test(data)) {
        return { message: "No puede contener numeros", validated: false };
      }

      return { message: "", validated: true };

    case "email":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validated: false };
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
      ) {
        return { message: "Formato de email no valido", validated: false };
      }

      return { message: "", validated: true };

    case "password":
      if (data === "" && required === true) {
        return {
          message: "Rellena los campos vacios",
          validated: false,
        };
      }
      if (data.length < 5) {
        return {
          message: "El password tiene que tener mas de 4 caracteres",
          validated: false,
        };
      }
      if (data.length > 16) {
        return {
          message: "El campo no puede tener mas de 16 caracteres",
          validated: false,
        };
      } else {
        return { message: "", validated: true };
      }

    case "tfno":
    case "phonenumber":
    case "telefono":
    case "phone":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validation: false };
      }
      if (!/[0-9]/.test(data)) {
        return {
          message: "El telefono solo puede contener numeros",
          validated: false,
        };
      }
      if (data.length > 9) {
        return {
          message: "El campo no puede tener mas de 9 caracteres",
          validated: false,
        };
      }
      return { message: "", validated: true };

    case "level":
    case "lvl":
    case "nivel":
      if (data === "" && required === true) {
        return { message: "Rellena los campos vacios", validation: false };
      }
      if (!/[0-9]/.test(data)) {
        return {
          message: "El nivel solo puede contener numeros",
          validated: false,
        };
      }
      if (data.length > 3) {
        return {
          message: "El campo no puede tener mas de 9 caracteres",
          validated: false,
        };
      }
      return { message: "", validated: true };

    case "dni":
    case "document":
    case "nif":
      break;

    default:
      console.log("Fielt not recognized");
  }
};
