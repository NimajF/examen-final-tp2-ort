# 🕹️ Exámen Final - Taller de Programación 2 - Sistema de Gestión de Inventarios para Juegos de Mesa 🎲
Un sistema backend desarrollado en Node.js y Express para administrar inventarios y ventas en una tienda especializada en juegos de mesa. Este proyecto incluye funcionalidades como registro de juegos, ventas y generación de estadísticas, todo siguiendo una arquitectura limpia y modular.

*Este repo solo cuenta con el PUNTO 1 del enunciado, ventaja por haber obtenido +8 como nota final de cursada*

### 📋 Descripción del Proyecto
Este sistema permite:

### Administración de Juegos:
Registrar nuevos juegos con datos como nombre, categoría, precio y stock.
Listar el inventario completo.
Gestión de Ventas:

Registrar ventas de juegos con la cantidad vendida.
Validar el stock antes de realizar una venta.
Generación de Estadísticas:

Obtener el total de unidades vendidas.
Consultar las ventas por categoría.
### 🚀 Características Clave
Sistema modular basado en arquitectura limpia.
Validaciones robustas para garantizar la consistencia de los datos.
Persistencia de datos en memoria para facilitar pruebas locales.
### 🛠️ Tecnologías Utilizadas
Node.js: Plataforma de ejecución para el backend.
Express.js: Framework para crear aplicaciones web y APIs.
Arquitectura Limpia: Separación clara en capas para un código limpio y mantenible.
### ⚙️ Instalación y Ejecución
Requisitos Previos
Tener instalado Node.js.
Un cliente para probar la API, como Postman o Thunder Client.

Pasos de Instalación

Clonar el repositorio:
git clone https://github.com/tuusuario/nombre-del-repo.git
Navegar al directorio del proyecto:

cd nombre-del-repo
Instalar las dependencias:

npm install
Iniciar el servidor:

node app.js
El servidor estará corriendo en: http://localhost:3000

📖 Uso de la API
1. Registrar un Juego
Endpoint: POST /api/games
Body Ejemplo:

json
```
{
  "nombre": "Catan",
  "categoria": "estrategia",
  "precio": 50,
  "stock": 10
}
```
2. Listar Inventario
Endpoint: GET /api/games
Respuesta Ejemplo:
json
```
[
  {
    "id": 1,
    "nombre": "Catan",
    "categoria": "estrategia",
    "precio": 50,
    "stock": 10
  }
]
```

3. Registrar una Venta
Endpoint: POST /api/sales
Body Ejemplo:
json

```
{
  "idJuego": 1,
  "cantidad": 2
}
```

Respuesta Ejemplo:
json
```
{
  "idJuego": 1,
  "cantidad": 2,
}
```
4. Obtener Estadísticas
Endpoint: GET /api/sales/statistics
Respuesta Ejemplo:
json
```
{
  "unidadesVendidas": {
    "estrategia": 10,
    "familiar": 5
  }
}
```

### 🧪 Pruebas y Validaciones
El sistema incluye validaciones estrictas:

# Enunciado
Todos los campos son obligatorios al registrar un juego.
El precio debe ser un número positivo.
El stock debe ser mayor o igual a 0.
La venta verifica que el stock sea suficiente antes de procesarse.
Enunciado: Sistema de Gestión de Inventarios
Se busca desarrollar un sistema, con persistencia en la memoria del servidor, que administre los
productos y ventas de una tienda especializada en juegos de mesa, permitiendo llevar un control del
inventario y reportar estadísticas de ventas.
Los requerimientos son:
1. Implementar endpoints de administración:
a. Registrar un juego con los siguientes datos: id (autogenerado por el servidor e irrepetible),
nombre, categoría (estrategia, rol, cartas, familiar, etc), precio, cantidad en stock.
***Realizar las validaciones necesarias!
En caso de NO cumplir con los valores estipulados para cada campo se debe retornar un
mensaje. Ejemplo : “Los datos ingresados no son válidos”, caso contrario retornar el objeto
correspondiente.
b. Registrar una venta con los siguientes datos: id del juego, cantidad vendida.
c. Listar el inventario completo con todos los juegos.
2. Crear endpoints para estadísticas:
a. Total de unidades vendidas en número de todos los juegos.
b. Total de unidades vendidas por categoría. La respuesta deberá tener por ejemplo, el
siguiente formato:
{
unidadesVendidas: {
{ estrategia: 12 },
{ rol: 5 },
{ cartas: 9 }
}
}
El servidor recibirá y responderá desde y hacia el frontend con los datos requeridos en formato JSON. En
caso de inconvenientes, el servidor responderá con un objeto con un campo ‘errorMsg’ informando el
motivo de la falla. Todas las respuestas deberán estar correctamente adosadas con su código de estado
correspondiente, según el resultado de la operación. En el caso de realizar notificaciones, modularizar
adecuadamente. La notificación en sí puede simularse con un mensaje por terminal.
Aclaraciones sobre el desarrollo esperado:
1. El proyecto debe incluir únicamente el backend del sistema, utilizando Node.js + express. El
formato del servidor es de tipo RESTful. Tener en cuenta los lineamientos de dicho formato,
especialmente a la hora de elegir los nombres de las rutas de acceso al sistema, los verbos que
accionan sobre ellas, y cómo pasar datos adicionales a la consulta.
2. El sistema debe estar correctamente separado en capas y componentes, y esta separación debe
estar claramente puesta de manifiesto en la estructura de carpetas y archivos. Entre los
componentes que esperamos que estén presentes encontramos: router/controlador, casos de
uso, modelo/s, DAO/s, repositorios, servicios de terceros, factories, commands (los que
correspondan de acuerdo al sistema modelado y se hayan visto en cursada).
3. La validación de datos es una parte importante del negocio, por lo tanto, observar cómo y dónde
realizarla.
4. No es necesario utilizar una conexión a base de datos real; es posible persistir en el
DAO/Repositorio usando memoria del servidor.
5. Recordar el rol de las factories, que nos permiten desacoplar las dependencias de nuestros
componentes a la hora necesitar una instancia de los mismos. Recordar esto especialmente a la
hora de decidir cómo obtener los casos de uso para invocarlos desde la capa de ruteo.
6. Pueden reutilizar código de proyectos realizados durante el cuatrimestre, siempre y cuando el
código se utilice y realmente aporte al desarrollo de las funcionalidades pedidas. La inclusión de
código innecesario o fuera de lugar será penalizada.
