// Button.test.js
import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react-native';
import Button from '../Button';
import { ThemeProvider } from '@Core/presentation/context/ThemeProvider';
import radius from '@Core/presentation/styles/borderRadius';
import { Dark, Light } from '@/Core/utils/constants/Colors';

// Mock del radius
jest.mock('@Core/presentation/styles/borderRadius', () => ({
  button: { borderRadius: 5 },
}));

describe('Button', () => {
  it('debe renderizar el contenido correctamente', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Button>Presionar</Button>
      </ThemeProvider>,
    );
    expect(getByText('Presionar')).toBeTruthy();
  });

  it('debe llamar a onPress cuando se presiona', () => {
    const onPressMock = jest.fn();
    const { getByRole } = render(
      <ThemeProvider>
        <Button onPress={onPressMock}>Presionar</Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('debe llamar a onLongPress cuando se mantiene presionado', () => {
    const onLongPressMock = jest.fn();
    const { getByRole } = render(
      <ThemeProvider>
        <Button onLongPress={onLongPressMock}>
          Presionar
        </Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    fireEvent.press(button, {
      nativeEvent: {
        timestamp: Date.now() + 500, // Simula un tiempo mayor a un toque normal
      },
    });
    expect(onLongPressMock).toHaveBeenCalled();
  });

  it('debe aplicar el color primario por defecto', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button>Presionar</Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    expect(button.props.style[1].backgroundColor).toBe(
      'blue',
    );
  });

  it('debe acolorplicar el color secundario cuando se especifica', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button color="secondary">Presionar</Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    expect(
      button.props.style[1].backgroundColor ===
        Dark.background ||
        button.props.style[1].backgroundColor ===
          Light.background,
    ).toBe(true);
  });

  it('debe aplicar el borderRadius correcto', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button color="secondary">Presionar</Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    expect(button.props.style[2].borderRadius).toBe(
      radius.button.borderRadius,
    );
  });

  it('debe aplicar el color de texto correcto', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Button color="secondary">Presionar</Button>
      </ThemeProvider>,
    );
    const text = getByText('Presionar');
    expect(text.props.style.color).toBe(Light.secondary);
  });
});
