# Usamos Node para construir los archivos estáticos (HTML, CSS, JS)
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
#Este comando (npm run build) crea la carpeta /dist
RUN npm run build


#Usamos un servidor web Nginx (muy ligero) para servir esos archivos
FROM nginx:stable-alpine

# Copiamos los archivos construidos en la etapa anterior 
# a la carpeta donde Nginx sirve los archivos
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 (el puerto por defecto de Nginx)
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]