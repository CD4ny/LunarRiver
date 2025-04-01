const fs = require("fs");
const path = require("path");

/**
 * Función para reemplazar claves en un objeto JSON según los parámetros CLI.
 * @param {Object} structure - Estructura JSON a procesar.
 * @param {Object} replacements - Objeto con los reemplazos (clave: nuevoValor).
 * @returns {Object} - Nueva estructura JSON con las claves reemplazadas.
 */
function replaceKeysInStructure(structure, replacements) {
  const newStructure = {};
  for (const key in structure) {
    if (structure.hasOwnProperty(key)) {
      const newKey = replacements[key] || key; // Reemplazar la clave si existe en replacements
      const value = structure[key];

      // Si el valor es un objeto, aplicar recursivamente replaceKeysInStructure
      if (typeof value === "object" && value !== null) {
        newStructure[newKey] = replaceKeysInStructure(value, replacements);
      } else {
        newStructure[newKey] = value;
      }
    }
  }
  return newStructure;
}

/**
 * Función recursiva para replicar una estructura de carpetas y archivos.
 * @param {Object} structure - Estructura JSON a procesar.
 * @param {string} basePath - Ruta base donde se creará la estructura.
 */
function replicateStructure(structure, basePath = ".") {
  for (const key in structure) {
    if (structure.hasOwnProperty(key)) {
      const fullPath = path.join(basePath, key);

      // Si el valor es un objeto {} o un array [], es una carpeta
      if (typeof structure[key] === "object" && structure[key] !== null) {
        // Crear la carpeta si no existe
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath);
          console.log(`Carpeta creada: ${fullPath}`);
        }

        // Procesar recursivamente el contenido de la carpeta
        replicateStructure(structure[key], fullPath);

        // Crear el archivo barrel (index.ts) en la carpeta
        const barrelPath = path.join(fullPath, "index.ts");
        if (!fs.existsSync(barrelPath)) {
          const exports = Object.keys(structure[key])
            .filter((subKey) => typeof structure[key][subKey] === "string") // Solo archivos
            .map(
              (subKey) =>
                `export * from './${subKey.replace(/\.[^/.]+$/, "")}';`
            )
            .join("\n");
          fs.writeFileSync(barrelPath, exports || "// No exports");
          console.log(`Archivo barrel creado: ${barrelPath}`);
        }
      }
      // Si el valor es un string "", es un archivo
      else if (typeof structure[key] === "string") {
        // Crear el archivo con el contenido especificado
        if (!fs.existsSync(fullPath)) {
          fs.writeFileSync(fullPath, structure[key]);
          console.log(`Archivo creado: ${fullPath}`);
        }
      }
    }
  }
}

// Función principal
function main() {
  try {
    // Obtener los argumentos de línea de comandos
    const args = process.argv.slice(2); // Ignorar los dos primeros argumentos predeterminados

    if (args.length < 2) {
      throw new Error("Uso: node script.js <archivo-json> <ruta> [reemplazos]");
    }

    const jsonFilePath = args[0]; // Primer argumento: ruta del archivo JSON
    const targetPath = args[1].split("/"); // Segundo argumento: ruta objetivo (e.g., src/application)
    const basePath = "./output"; // Ruta base donde se creará la estructura

    // Leer el archivo JSON
    const rawData = fs.readFileSync(jsonFilePath, "utf8");
    let folderStructure = JSON.parse(rawData);

    // Extraer los reemplazos dinámicos de los argumentos adicionales
    const replacements = {};
    for (let i = 2; i < args.length; i++) {
      const [key, value] = args[i].split("=");
      if (key && value) {
        replacements[key] = value;
      }
    }

    // Validar que el JSON tenga una clave "arch"
    if (!folderStructure.arch) {
      throw new Error(
        'El JSON debe contener una clave "arch" con la estructura deseada.'
      );
    }

    // Encontrar la ruta objetivo en la estructura original
    let currentStructure = folderStructure.arch;
    for (const part of targetPath) {
      if (!currentStructure[part]) {
        throw new Error(
          `La ruta '${targetPath.join("/")}' no existe en el JSON.`
        );
      }
      currentStructure = currentStructure[part];
    }

    // Aplicar reemplazos dinámicos solo a la estructura objetivo
    const resolvedPath = targetPath.map((part) => replacements[part] || part);
    const resolvedFullPath = path.join(basePath, ...resolvedPath);

    // Crear la carpeta objetivo si no existe
    if (!fs.existsSync(resolvedFullPath)) {
      fs.mkdirSync(resolvedFullPath, { recursive: true });
      console.log(`Carpeta creada: ${resolvedFullPath}`);
    }

    // Aplicar reemplazos dinámicos a la estructura interna
    const modifiedStructure = replaceKeysInStructure(
      currentStructure,
      replacements
    );

    // Replicar la estructura interna de la carpeta objetivo
    replicateStructure(modifiedStructure, resolvedFullPath);

    console.log("Carpeta y su contenido replicados exitosamente.");
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

// Ejecutar la función principal
main();
