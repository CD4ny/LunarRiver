/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const corePath = path.join(__dirname, '..', 'src', 'Core');

// Crear la estructura de carpetas de Core
fs.mkdirSync(path.join(corePath, 'config', 'environment'), {
  recursive: true,
});
fs.mkdirSync(path.join(corePath, 'global', 'context'), {
  recursive: true,
});
fs.mkdirSync(path.join(corePath, 'global', 'styles'), {
  recursive: true,
});
fs.mkdirSync(
  path.join(
    corePath,
    'presentation',
    'components',
    'shared',
  ),
  { recursive: true },
);
fs.mkdirSync(
  path.join(corePath, 'presentation', 'styles'),
  {
    recursive: true,
  },
);
fs.mkdirSync(path.join(corePath, 'domain', 'entity'), {
  recursive: true,
});
fs.mkdirSync(
  path.join(corePath, 'domain', 'repositories'),
  { recursive: true },
);
fs.mkdirSync(
  path.join(corePath, 'application', 'services'),
  { recursive: true },
);
fs.mkdirSync(
  path.join(corePath, 'application', 'use-cases'),
  { recursive: true },
);
fs.mkdirSync(path.join(corePath, 'infrastructure', 'api'), {
  recursive: true,
});
fs.mkdirSync(
  path.join(corePath, 'infrastructure', 'database'),
  { recursive: true },
);
fs.mkdirSync(
  path.join(corePath, 'infrastructure', 'adapters'),
  { recursive: true },
);
fs.mkdirSync(path.join(corePath, 'utils', 'constants'), {
  recursive: true,
});
fs.mkdirSync(path.join(corePath, 'utils', 'helpers'), {
  recursive: true,
});

// Crear archivos .gitkeep para mantener las carpetas en Git
fs.writeFileSync(
  path.join(corePath, 'config', 'environment', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'global', 'context', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'global', 'styles', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(
    corePath,
    'presentation',
    'components',
    'shared',
    '.gitkeep',
  ),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'presentation', 'styles', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'domain', 'entity', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'domain', 'repositories', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(
    corePath,
    'application',
    'services',
    '.gitkeep',
  ),
  '',
);
fs.writeFileSync(
  path.join(
    corePath,
    'application',
    'use-cases',
    '.gitkeep',
  ),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'infrastructure', 'api', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(
    corePath,
    'infrastructure',
    'database',
    '.gitkeep',
  ),
  '',
);
fs.writeFileSync(
  path.join(
    corePath,
    'infrastructure',
    'adapters',
    '.gitkeep',
  ),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'utils', 'constants', '.gitkeep'),
  '',
);
fs.writeFileSync(
  path.join(corePath, 'utils', 'helpers', '.gitkeep'),
  '',
);

console.log('Estructura de Core creada exitosamente.');
