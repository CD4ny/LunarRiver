export const Palette = {
  russian_violet: {
    DEFAULT: '#251351',
    100: '#070411',
    200: '#0f0821',
    300: '#160c32',
    400: '#1e1042',
    500: '#251351',
    600: '#432395',
    700: '#6439d0',
    800: '#977be0',
    900: '#cbbdef',
  },
  light_red: {
    DEFAULT: '#ff7477',
    100: '#4a0001',
    200: '#950002',
    300: '#df0004',
    400: '#ff2b2e',
    500: '#ff7477',
    600: '#ff9193',
    700: '#ffacae',
    800: '#ffc8c9',
    900: '#ffe3e4',
  },
  oxford_blue: {
    DEFAULT: '#040926',
    100: '#010207',
    200: '#02040f',
    300: '#020516',
    400: '#03071e',
    500: '#040926',
    600: '#0d1d7a',
    700: '#1631cf',
    800: '#556ced',
    900: '#aab5f6',
  },
  slate_gray: {
    DEFAULT: '#767b91',
    100: '#18191d',
    200: '#2f313b',
    300: '#474a58',
    400: '#5e6376',
    500: '#767b91',
    600: '#9296a8',
    700: '#adb0be',
    800: '#c9cbd3',
    900: '#e4e5e9',
  },
  snow: {
    DEFAULT: '#fffafb',
    100: '#650014',
    200: '#ca0028',
    300: '#ff3059',
    400: '#ff95aa',
    500: '#fffafb',
    600: '#fffbfc',
    700: '#fffcfd',
    800: '#fffdfd',
    900: '#fffefe',
  },
  rich_black: {
    DEFAULT: '#011627',
    100: '#000408',
    200: '#000910',
    300: '#010d18',
    400: '#011220',
    500: '#011627',
    600: '#034a83',
    700: '#067ddf',
    800: '#48aafa',
    900: '#a4d5fd',
  },
  marian_blue: {
    DEFAULT: '#1e3888',
    100: '#060b1c',
    200: '#0c1737',
    300: '#122253',
    400: '#182e6e',
    500: '#1e3888',
    600: '#2b50c2',
    700: '#5778da',
    800: '#8fa5e6',
    900: '#c7d2f3',
  },
  argentinian_blue: {
    DEFAULT: '#57b8ff',
    100: '#002844',
    200: '#005089',
    300: '#0078cd',
    400: '#129cff',
    500: '#57b8ff',
    600: '#78c7ff',
    700: '#9ad5ff',
    800: '#bce3ff',
    900: '#ddf1ff',
  },

  asparagus: {
    DEFAULT: '#7fb069',
    100: '#192513',
    200: '#324927',
    300: '#4b6e3a',
    400: '#63934d',
    500: '#7fb069',
    600: '#99c087',
    700: '#b2cfa5',
    800: '#ccdfc3',
    900: '#e5efe1',
  },
  chili_red: {
    DEFAULT: '#ca3c25',
    100: '#290c07',
    200: '#51180f',
    300: '#7a2416',
    400: '#a22f1e',
    500: '#ca3c25',
    600: '#dd5c48',
    700: '#e68576',
    800: '#eeaea4',
    900: '#f7d6d1',
  },
  sandy_brown: {
    DEFAULT: '#f6af65',
    100: '#422404',
    200: '#834708',
    300: '#c56b0b',
    400: '#f28e23',
    500: '#f6af65',
    600: '#f8c084',
    700: '#facfa2',
    800: '#fbdfc1',
    900: '#fdefe0',
  },
} as const;

export const Dark = {
  primary: Palette.russian_violet[800], //"#432395"
  secondary: Palette.light_red[500], //"#950002"
  surface: Palette.slate_gray[300], //"#2f313b"
  background: Palette.slate_gray[100], //"#18191d"
  success: Palette.asparagus[300], //"#4b6e3a"
  error: Palette.chili_red[400], //"#a22f1e"
  warning: Palette.sandy_brown[200], //"#834708"
  text: Palette.snow[900], //"#fffefe"
};
export const Light = {
  primary: Palette.russian_violet[700], //"#977be0"
  secondary: Palette.light_red[700], //"#ffacae"
  surface: Palette.slate_gray[700], //"#adb0be"
  background: Palette.snow[600], //"#fffbfc"
  success: Palette.asparagus[600], //"#b2cfa5"
  error: Palette.chili_red[700], //"#e68576"
  warning: Palette.sandy_brown[600], //"#f8c084"
  text: Palette.slate_gray[100], //"#18191d"
};
