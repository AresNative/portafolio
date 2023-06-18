# Mi portafolio

Proyecto generado con Vite - React este mismo es ceado para mostrar un poco de mis capacidades y experiencia en el desarrollo con React se utilizo firebase para el hosting de la pagina wep

## Plugins - Programas necesarios

Lo necesario para que funcione el codigo es:

✅ Vite

https://vitejs.dev/

✅ Node - 16.13.1 en adelante

https://nodejs.org/es

✅ Firebase

https://firebase.google.com/

## Documentation

👉 Manejo de JSON's para la simulación del manejo de información con servicion API

/pages/Json-modify

👉 Experiencia laboral - recopila links de las empresas para las que trabaje o trabajo actualmente

/pages/Experience

👉 Copia de pagina web landing page | Twitter | - demostración del manejo de estilos customs simulando el estilo de la pagina web de Twitter

## Firebase - HOSTING

👉 Se crea el proyecto por medio de Vite

~ npm create vite@latest

👉 Se realiza la instalación de firebase para la utilización del hosting

~ npm i firebase --save

**OPCIONAL**

👉 Instalación de plugin para la gestion de PWA Vite

~ npm install -D vite-plugin-pwa

Se configura el archivo vite.config.ts

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
});

```

**OPCIONAL**

👉 Crear build para la publicación del proyecto

~ npm run build

👉 se inicia sesion en firebase en la terminarl firebase-tools

~ firebase init

👉 se asocia con el proyecto firebase creado para el proyecto

👉 Se selecciona

~ (\*)Hosting: Configure and deploy Firebase Hosting sites

👉 Defines tu directorio público

~ dist

👉 ¿Configurar como una aplicación de una sola página

~ (reescribir todas las direcciones URL en /index.html)? y

👉 El archivo dist/index.html ya existe. ¿Sobrescribir?

~ N
