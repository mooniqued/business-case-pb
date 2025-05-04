import { render, screen } from '@testing-library/react';
import Result from '../../../src/app/result/page';
import { FormContext } from '../../../src/app/context';

describe('Result component', () => {
  const renderWithContext = (value: any) => {
    return render(
      <FormContext.Provider value={value}>
        <Result />
      </FormContext.Provider>
    );
  };

  it('render correctly with context', () => {
    renderWithContext({ data: { value: '2.500,00' } });

    expect(screen.getByText('Você pode receber até')).toBeInTheDocument();
    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('2.500,00')).toBeInTheDocument();
  });

  it('render without context', () => {
    renderWithContext({ data: {} });

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
