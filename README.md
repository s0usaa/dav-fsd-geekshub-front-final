<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo-🎯">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto-🔎">Sobre el proyecto</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#funcionamiento-de-la-web">Funcionamiento de la web</a></li>
    <li><a href="#vistas">Vistas</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#errores-conocidos">Errores Conocidos</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo 🎯
En este proyecto requeriamos conectar la API de nuestra base de datos ya creada y usar React para crear el frontend en una pagina web de padel.

## Sobre el proyecto 🔎
El proyecto es una web para poder realizar clases de padel con un entrenador ya asignado eligiendo las pistas disponibles y un horario de reserva. Tendremos que registrarnos y loguearnos para poder hacer uso de los servicios de la web.    
  
## Deploy 🚀
<div align="center">
    <a href="https://deploy01.dr0ge7zyjpyoi.amplifyapp.com/"><strong>URL PARA VER EL  FRONTEND </strong></a>🚀🚀🚀
</div>

## Stack
<div align="center">
<a href="https://www.reactjs.com/">
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://lenguajehtml.com/html/"/>
    <img src= "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/>
</a>
<a href="https://desarrolloweb.com/manuales/css3.html"/>
    <img src= "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
</a>
<a href="https://nodejs.org/es"/>
    <img src= "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://react-bootstrap.github.io/getting-started/introduction/"/>
    <img src= "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
</a>
<a href="https://es.redux.js.org/"/>
    <img src= "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>
</a>
<a href="https://reactrouter.com/en/main"/>
    <img src= "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
</a>
<a href="https://aws.amazon.com/es"/>
    <img src= "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
</a>
 </div>

## Funcionamiento de la web
- Desde la pagina inicial tendremos informacion sobre la web, un navbar en el que tendrás que registrarte y serás nuevo usuario de la web. A continuación te redigiran a la vista del login, la cual tendremos que insertar los campos requeridos para iniciar sesion.
- Una vez logueados el navbar cambiara y podremos acceder a nuestro perfil para ver nuestra informacion, poder crear una partida, ver las reservas que tenemos como usuario y por ultimo, hacer logout para poder salir de nuestro perfil de usuario.
- Los doctores por el contrario son puestos por el admin y solo tendran acceso a ver las citas que tienen con los pacientes asignados.
- Y por ultimo el admin tiene el poder de ver todos los usuarios registrados, ya sean pacientes o doctores, y poder ver la informacion de cada usuario.

## Vistas
- Home
<img width="363" alt="Captura de pantalla 2023-03-29 a las 1 10 07" src="https://user-images.githubusercontent.com/120210515/228387059-ff0aed88-bc3e-4821-840f-c53107549c69.png">

- Perfil de Usuario
<img width="362" alt="Captura de pantalla 2023-03-29 a las 1 14 49" src="https://user-images.githubusercontent.com/120210515/228387657-89f5767b-70e3-4240-9fdb-deda25f8a650.png">

- Crear una partida
<img width="362" alt="Captura de pantalla 2023-03-29 a las 1 15 31" src="https://user-images.githubusercontent.com/120210515/228387730-0e875a9e-ddec-4acd-951f-012e3e114a5e.png">

- Ver tus reservas
<img width="366" alt="Captura de pantalla 2023-03-29 a las 1 17 49" src="https://user-images.githubusercontent.com/120210515/228388008-bf1e2e3d-68aa-4102-a06c-61a3e3818339.png">


- Ver Usuarios como Admin
<img width="363" alt="Captura de pantalla 2023-03-29 a las 1 16 47" src="https://user-images.githubusercontent.com/120210515/228387892-7bbe2bd3-c402-4911-bd7b-543634fbeb8f.png">

- Eliminar y modificar pistas como Admin
<img width="363" alt="Captura de pantalla 2023-03-29 a las 1 16 47" src="https://user-images.githubusercontent.com/120210515/228387892-7bbe2bd3-c402-4911-bd7b-543634fbeb8f.png">

- Eliminar y modificar entrenadores como Admin
<img width="363" alt="Captura de pantalla 2023-03-29 a las 1 16 47" src="https://user-images.githubusercontent.com/120210515/228387892-7bbe2bd3-c402-4911-bd7b-543634fbeb8f.png">

## Futuras funcionalidades
- Poder borrar usuarios como Admin
- Poder asignar Roles como Admin

## Licencia
Todo el contenido del repositorio se encuentra bajo licencia MIT. Las fotos usadas en el proyecto son obra de <a href="https://www.freepik.es/">freepik</a>.

## Errores conocidos
- Se puede poner cualquier numero a la hora de seleccionar una pista, con lo que te daria un fallo a la hora de registrar una partida si no existiera esa pista.
- Dos usuarios pueden coincidir en la misma pista y a la misma hora.
- Algunas validaciones faltan por pulir.

## Agradecimientos:

Agradezco a mis compañeros el tiempo dedicado a este proyecto:

- *Jose*  
<a href="https://github.com/JoseMarin" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **David**  
<a href="https://github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

- ***Mara***  
<a href="https://github.com/MaraScampini" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

- ***Dani***
<a href="https://github.com/datata" target="_blank">
    <img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank">
</a>

- ***Alvaro***
<a href="https://github.com/alvarito101093" target="_blank">
    <img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank">
</a>

- ***Felipe***
<a href="https://github.com/felipebaguena" target="_blank">
    <img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank">
</a>

## Contacto

<a href="https://github.com/s0usaa" target="_blank">
    <img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank">
</a>
