import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const featureName = process.argv[2];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!featureName) {
  console.error(
    'Por favor, proporciona un nombre para la nueva feature.',
  );
  process.exit(1);
}

const featurePath = path.join(
  __dirname,
  '..',
  'src',
  featureName,
);

async function createFeature() {
  try {
    // Crear la estructura de carpetas (usando fs.mkdir)
    await fs.mkdir(featurePath, { recursive: true });
    await fs.mkdir(
      path.join(
        featurePath,
        'domain',
        'entities',
        '__tests__',
      ),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(featurePath, 'domain', 'entities'),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(
        featurePath,
        'application',
        'use-cases',
        '__tests__',
      ),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(featurePath, 'application', 'use-cases'),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(
        featurePath,
        'presentation',
        'components',
        '__tests__',
      ),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(featurePath, 'presentation', 'components'),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(
        featurePath,
        'presentation',
        'screens',
        '__tests__',
      ),
      { recursive: true },
    );
    await fs.mkdir(
      path.join(featurePath, 'presentation', 'screens'),
      { recursive: true },
    );

    // Crear archivos .gitkeep (usando fs.writeFile)
    await fs.writeFile(
      path.join(
        featurePath,
        'domain',
        'entities',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'domain',
        'entities',
        '__tests__',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'application',
        'use-cases',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'application',
        'use-cases',
        '__tests__',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'components',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'components',
        '__tests__',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'screens',
        '.gitkeep',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'screens',
        '__tests__',
        '.gitkeep',
      ),
      '',
    );

    // Crear archivos básicos y barrels (usando fs.writeFile)
    await fs.writeFile(
      path.join(
        featurePath,
        'domain',
        'entities',
        'index.ts',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'domain',
        'entities',
        `${featureName}.ts`,
      ),
      `// src/${featureName}/domain/entities/${featureName}.ts`,
    );

    await fs.writeFile(
      path.join(
        featurePath,
        'application',
        'use-cases',
        'index.ts',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'application',
        'use-cases',
        `Create${featureName}.ts`,
      ),
      `// src/${featureName}/application/use-cases/Create${featureName}.ts`,
    );

    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'components',
        'index.ts',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'components',
        `${featureName}Component.tsx`,
      ),
      `// src/${featureName}/presentation/components/${featureName}Component.tsx`,
    );

    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'screens',
        'index.ts',
      ),
      '',
    );
    await fs.writeFile(
      path.join(
        featurePath,
        'presentation',
        'screens',
        `${featureName}Screen.tsx`,
      ),
      `// src/${featureName}/presentation/screens/${featureName}Screen.tsx`,
    );

    // Actualizar aliases de Babel (babel.config.js) (usando fs.readFile y fs.writeFile)
    const babelConfigPath = path.join(
      __dirname,
      '..',
      'babel.config.js',
    );
    let babelConfig = await fs.readFile(
      babelConfigPath,
      'utf8',
    );

    if (
      !babelConfig.includes(
        `'${featureName}': './src/${featureName}'`,
      )
    ) {
      babelConfig = babelConfig.replace(
        'module.exports = {',
        `module.exports = {\n  plugins: [\n    [
        'module-resolver',
        {
          alias: {
            '${featureName}': './src/${featureName}',
          },
        },
        ],\n  ],`,
      );

      await fs.writeFile(babelConfigPath, babelConfig);
      console.log('Alias de Babel actualizado.');
    } else {
      console.log('Alias de Babel ya existe.');
    }

    // Actualizar aliases de TypeScript (tsconfig.json) (usando fs.readFile y fs.writeFile)
    const tsConfigPath = path.join(
      __dirname,
      '..',
      'tsconfig.json',
    );
    let tsConfig = await fs.readFile(tsConfigPath, 'utf8');
    tsConfig = JSON.parse(tsConfig);

    if (!tsConfig.compilerOptions.paths[featureName]) {
      tsConfig.compilerOptions.paths['@' + featureName] = [
        `./src/${featureName}`,
      ];
      await fs.writeFile(
        tsConfigPath,
        JSON.stringify(tsConfig, null, 2),
      );
      console.log('Alias de TypeScript actualizado.');
    } else {
      console.log('Alias de TypeScript ya existe.');
    }

    console.log(
      `Feature '${featureName}' creada exitosamente.`,
    );
  } catch (err) {
    console.error('Error al crear la feature:', err);
  }
}

createFeature().catch(console.error);
