const fs = require("fs");
const path = require("path");

/**
 * Función para actualizar los archivos barrel (index.ts) en una carpeta.
 * @param {string} basePath - Ruta base donde se encuentra la estructura de carpetas.
 */
function updateBarrels(basePath = ".") {
  // Leer el contenido de la carpeta
  const items = fs.readdirSync(basePath, { withFileTypes: true });

  // Filtrar archivos y subcarpetas
  const files = items
    .filter((item) => item.isFile() && path.extname(item.name) !== ".ts") // Ignorar archivos .ts existentes
    .map((item) => item.name.replace(/\.[^/.]+$/, "")); // Quitar extensiones de archivos

  const folders = items
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  // Generar el contenido del archivo barrel
  let barrelContent = "";
  if (files.length > 0) {
    barrelContent +=
      files.map((file) => `export * from './${file}';`).join("\n") + "\n";
  }
  if (folders.length > 0) {
    barrelContent +=
      folders.map((folder) => `export * from './${folder}';`).join("\n") + "\n";
  }

  // Si no hay archivos ni subcarpetas, agregar un comentario
  if (!files.length && !folders.length) {
    barrelContent = "// No exports";
  }

  // Escribir o actualizar el archivo index.ts
  const barrelPath = path.join(basePath, "index.ts");
  fs.writeFileSync(barrelPath, barrelContent);
  console.log(`Barrel actualizado: ${barrelPath}`);

  // Procesar recursivamente las subcarpetas
  for (const folder of folders) {
    const folderPath = path.join(basePath, folder);
    updateBarrels(folderPath);
  }
}

// Función principal
function main() {
  try {
    // Obtener los argumentos de línea de comandos
    const args = process.argv.slice(2); // Ignorar los dos primeros argumentos predeterminados

    if (args.length < 1) {
      throw new Error("Uso: node updateBarrels.js <ruta-base>");
    }

    const basePath = args[0]; // Primer argumento: ruta base de la estructura

    // Validar que la ruta base exista
    if (!fs.existsSync(basePath)) {
      throw new Error(`La ruta '${basePath}' no existe.`);
    }

    // Actualizar los barrels recursivamente
    updateBarrels(basePath);

    console.log("Todos los barrels han sido actualizados exitosamente.");
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

// Ejecutar la función principal
main();
