#Imagen base: imagen oficial de Node.js
# (alpine es una versión ligera)
FROM node:18-alpine

#Directorio de trabajo: crear una carpeta dentro del contenedor
WORKDIR /usr/src/app

#Copiar dependencias: solo el package.json para aprovechar la caché de Docker si no cambian las dependencias.
COPY package*.json ./

#Instalar dependencias
RUN npm install

#Copiar el resto del código: copiar index.js y lo demás
COPY . .

#Exponer el puerto: Le decimos a Docker que el contenedor usará el puerto 3001 (el que pusimos en index.js)
EXPOSE 3001

#Comando de inicio: El comando para correr la app
CMD ["node", "index.js"]