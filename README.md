## Construcción 🛠️

* Desarrollado con [Create React App](https://github.com/facebook/create-react-app).
* El estilado de la web se realizó en CSS.
* Dependencias adicionales:
   * react-router-dom versión 5.3.0
   * react-bootstrap 2.0.0
   * bootstrap versión 5.1.0
   * firebase versión 9.1.1
   * fontawesome versión 5.15.4

## Deply 📦

El despliegue del sitio se realizó en VERCEL, [ir al sitio](https://coder-phone.vercel.app/).

![Gif](https://s1.gifyu.com/images/CoderPhone-Firefox-Developer-Edition-2021-10-24-23-20-25.gif)

## Configuración 🛠️

Primero deberás clonar el repositorio, desde la consola puedes ejecutar el siguiente comando:

```
git clone https://github.com/FabricioCapiglioni/Proyecto-React.git
```

Una vez clonado, debemos instalar las dependencias desde la carpeta raíz, ejecuta en consola el siguiente comando:

```
npm install
```

Puedes ejecutar la app en modo desarrollo, desde la carpeta raíz:

```
npm start
```

Abra este link para verlo en el navegador [Link](http://localhost:3000)

## Configurando Firebase
* En la carpeta raíz, crea un acrchivo .env
* Utilizando como base el archivo .env.example, copia su contenido y pegalo en el archivo .env que acabas de crear.
* Ingresa a [firebase](https://firebase.google.com/) y haz `log-in` con una cuenta de google.
* Ir a la consola de firebase y crear un nuevo proyecto: (ejemplo: "los-datos-y-vos").
* Hacer clic en el icono "Añade firebase a tu aplicación web", verás un objeto con el siguiente formato: 
```javascript
var config = {
   apiKey: "TuApiKey",
   authDomain: "TuAuthDomain.firebaseapp.com",
   projectId: "TuProjectId",
   storageBucket: "TuStorageBucket",
   messagingSenderId: "TuMessagingSenderId",
   appId: "1:213546321316:web:2abc3d65432135468ab"
  };
```
* Por último, reemplaza el value de cada key que te brinda Firebase, en el archivo .env que creaste.
```
REACT_APP_apiKey="ingresaAquiTuApiKey"
REACT_APP_authDomain="ingresaAquiTuAuthDomain.firebaseapp.com"
REACT_APP_projectId="ingresaAquiTuProjectId"
REACT_APP_storageBucket="ingresaAquiTuStorageBucket.appspot.com"
REACT_APP_messagingSenderId= "1232465132168465413"
REACT_APP_appId= "1:213546321316:web:2abc3d65432135468ba"
```
#### Para mas información visita la siguiente documentación en [Firebase](https://firebase.google.com/docs/web/learn-more#config-object) 


## Autor ✒️

* **Fabricio Capiglioni Dómene** - [
FabricioCapiglioni](https://github.com/FabricioCapiglioni)

