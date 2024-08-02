import express from 'express';
import { Resend } from 'resend';
import fs from 'fs';
import { __dirname } from './utils.js';

const app = express();
const resend = new Resend("re_aHkXQc87_BNSEJNTZWZaWQPSZYv8NqoyL");

app.use(express.static(__dirname + "/public"));
// Obtener el equivalente de __dirname


// Ruta a la imagen local (ajusta esta ruta a la ubicación de tu imagen)
const imagePath = 'C:\\Users\\Herberth Mancia\\OneDrive\\Escritorio\\docs\\enviarBoletin\\public\\pictures\\HMI.jpg';

// Leer y codificar la imagen en Base64
let base64Image = '';
try {
  const imageData = fs.readFileSync(imagePath);
  base64Image = imageData.toString('base64');
} catch (err) {
  console.error('Error leyendo o codificando la imagen:', err);
}

// Define el tipo MIME de la imagen JPEG
const mimeType = 'image/jpeg'; 

app.get('/image', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image</title>
    </head>
    <body>
        <h1>Hello, world!</h1>
        <img src="data:${mimeType};base64,${base64Image}" alt="Example Image">
    </body>
    </html>
  `);
});

app.get("/", async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["herberthmeca@gmail.com"],
    subject: "hello world",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image</title>
    </head>
    <body>
        <h1>Hello, world!</h1>
        <img src="data:${mimeType};base64,${base64Image}" alt="Example Image">
    </body>
    </html>
  `,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
