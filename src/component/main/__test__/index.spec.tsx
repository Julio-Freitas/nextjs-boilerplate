import { render, screen } from '@testing-library/react';
import { Main } from '..';

describe('<Main />', () => {
  it('Should be render corretcly', () => {
    const { container } = render(<Main />);
    expect(screen.getByRole('heading')).toHaveTextContent('Olá Mundo...');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should be render corretcly', () => {
    render(<Main />);
    expect(screen.getByRole('heading')).toHaveStyle({ color: '#001523' });
  });
});
