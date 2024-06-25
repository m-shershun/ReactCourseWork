import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/redux/store';
import Main from '@/core/components/Main';
import { setCategories } from "@/redux/slices/categories";
import { test, expect, beforeEach, describe } from 'vitest';
import {Category} from "@/core/types";


const mockCategories: Category[] = [
  {
    id: 'category-1',
    name: 'Graphics Cards',
    products: [
      {
        id: 3,
        name: 'NVIDIA RTX 3080',
        price: 699,
        description: 'High performance graphics card for gaming and professional use.',
        imagePath: 'rtx3080.jpg',
        weight: ''
      },
      {
        id: 4,
        name: 'AMD Radeon RX 6800 XT',
        price: 649,
        description: 'Powerful graphics card with excellent performance and efficiency.',
        imagePath: 'rx6800xt.jpg',
        weight: ''
      }
    ]
  },
  {
    id: 'category-2',
    name: 'Processors',
    products: [
      {
        id: 9,
        name: 'Intel Core i9-11900K',
        price: 539,
        description: 'High-end processor with 8 cores and 16 threads for demanding tasks.',
        imagePath: 'i9_11900k.jpg',
        weight: ''
      },
      {
        id: 10,
        name: 'AMD Ryzen 9 5900X',
        price: 549,
        description: 'Powerful 12-core processor with exceptional performance for gaming and work.',
        imagePath: 'ryzen_9_5900x.jpg',
        weight: ''
      }
    ]
  }
];
describe('test', () => {
  beforeEach(() => {
    store.dispatch(setCategories(mockCategories));
  });

  test('renders category names', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Graphics Cards/i)).toBeInTheDocument();
    expect(screen.getByText(/Processors/i)).toBeInTheDocument();
  });

  test('renders product names and prices', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/NVIDIA RTX 3080/i)).toBeInTheDocument();
    expect(screen.getByText(/699/i)).toBeInTheDocument();
    expect(screen.getByText(/AMD Radeon RX 6800 XT/i)).toBeInTheDocument();
    expect(screen.getByText(/649/i)).toBeInTheDocument();
  });

  test('navigates to product details on click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );

    const productElement = screen.getByText(/NVIDIA RTX 3080/i).closest('.product');
    expect(productElement).toBeInTheDocument();

    fireEvent.click(productElement as Element);

    // Перевірка, чи змінюється URL після кліку
    expect(window.location.href).toContain('/product/3');
  });

})
// Налаштування мок-даних перед кожним тестом
