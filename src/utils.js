import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
dotenv.config()
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const emailTransport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user:process.env.GOOGLE_EMAIL,
      pass:process.env.GOOGLE_PASS,
    },
  });

export const hmtlBody =(subject)=>{
  const plantilla = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f4f4f4; /* Gris claro para el fondo */
    }
    
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff; /* Blanco para el contenedor principal */
      border: 1px solid #dddddd;
      border-radius: 5px;
      overflow: hidden;
    }
    
    .email-header {
      background-color: #f1f1f1; /* Naranja claro para el encabezado */
      color: #ffffff; /* Blanco para el texto del encabezado */
      padding: 20px;
      text-align: center;
    }
    
    .logo img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }
    
    .email-body {
      padding: 20px;
    }
    
    .email-body h1 {
      color: #333333; /* Gris oscuro para los encabezados */
    }
    
    .email-body p {
      color: #666666; /* Gris claro para el texto del cuerpo */
      line-height: 1.6;
    }
    
    .email-image {
      text-align: center;
      margin: 20px 0;
    }
    
    .email-image img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }
    
    .email-footer {
      background-color: #f1f1f1; /* Gris muy claro para el pie de página */
      color: #666666; /* Gris claro para el texto del pie de página */
      text-align: center;
      padding: 10px;
      font-size: 12px;
    }
    
    .email-footer a {
      color: #d05e2b; /* Naranja oscuro para los enlaces */
      text-decoration: none;
    }
    
    .email-footer a:hover {
      text-decoration: underline; /* Subraya los enlaces al pasar el cursor */
    }
  </style>
</head>
<body>
  <div class="email-container">
    <header class="email-header">
      <div class="logo">
        <img src="cid:vanity" alt="Descripción de la Imagen">
      </div>
    </header>
    <div class="email-body">
      <h1>${subject}</h1>
      <p>Estimado/a [Nombre],</p>
      <p>Le informamos que tomes los siguientes consejos: </p>
      
      <!-- Sección de Imagen -->
      <div class="email-image">
        <img src="cid:it" alt="Descripción de la Imagen">
      </div>

      <p>Si tiene alguna pregunta, no dude en ponerse en contacto con nosotros.</p>
      <p>Gracias por su atención.</p>
      <p>Atentamente,<br>[Su Nombre]<br>[Su Cargo]<br>[Nombre de la Empresa]</p>
    </div>
    <div class="email-footer">
      <p>© 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
      <p><a href="https://www.vanity.com.mx/">Visite nuestro sitio web</a></p>
    </div>
  </div>
</body>
</html>`
return plantilla

} 