import { render, screen } from '@testing-library/react';
import { Main } from '..';

jest.mock('../../../hook/useAnimatedRouter', () => ({
  useAnimatedRouter: jest.fn()
}));

describe('<Main />', () => {
  it('Should be render corretcly', () => {
    const { container } = render(<Main />);
    expect(screen.getByRole('heading')).toHaveTextContent('Pagina Home...');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should be render corretcly', () => {
    render(<Main />);
    expect(screen.getByRole('heading')).toHaveStyle({ color: '#001523' });
  });
});
