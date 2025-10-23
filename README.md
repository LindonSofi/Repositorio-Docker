# Proyecto Librería - Ejercicio Docker

Este repositorio contiene la implementación del ejercicio de Docker. El proyecto consta de un backend (Node.js/Express) y un frontend (React) totalmente "dockerizados" y orquestados con Docker Compose.

Alumna
Nombre: Sofia Lindón 
Legajo: 31058
Materia: Desarrollo de software

Tecnologías Utilizadas
Backend: Node.js, Express
Frontend: React (creado con Vite)
Contenedores: Docker & Docker Compose

Para levantar la aplicación completa, solo se necesita tener **Docker Desktop** instalado y corriendo.

1. Clonar el repositorio
  git clone https://github.com/LindonSofi/Repositorio-Docker.git
  cd Repo-docker

2. El proyecto utiliza archivos .env.example como plantillas. Es necesario crear los archivos .env correspondientes para que todo funcione. 

En la carpeta backend/:
a. Crea un archivo llamado .env.
b. Copia el contenido de .env.example y pégarlo en el nuevo .env.
c. Asegurar de que tenga el puerto: PORT=3001

En la carpeta frontend/:
a. Crea un archivo llamado .env.
b. Copia el contenido de .env.example y pégarlo en el nuevo .env.
c. Asegurar de que tenga la URL de la API: VITE_API_URL="http://localhost:3001/api"

3. Levantar los contenedores: docker-compose up --build

4. Una vez que los contenedores estén corriendo, la aplicación estará accesible en:
*Frontend (Aplicación Web): http://localhost:8080
*Backend (Endpoint de prueba): http://localhost:3001/api

