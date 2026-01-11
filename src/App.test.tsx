import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './app/App';
=======
import App from './App';
>>>>>>> a2f3988cf1e6d225ee3fe30c6af502b915d91e63

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
<<<<<<< HEAD
});
=======
});
>>>>>>> a2f3988cf1e6d225ee3fe30c6af502b915d91e63
