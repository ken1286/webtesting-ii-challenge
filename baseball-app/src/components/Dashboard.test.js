import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard.js';
import { render, fireEvent, getByText, } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';


describe('Dashboard', () => {
  describe('strike button', () => {
    it('increments correctly', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText('Strike'));

      expect(getByText(/Strikes: 1/i)).toBeTruthy();

      fireEvent.click(getByText('Strike'));

      expect(getByText(/Strikes: 2/i)).toBeTruthy();

      fireEvent.click(getByText('Strike'));

      expect(getByText(/Strikes: 0/i)).toBeTruthy();
    });
  });

  describe('balls button', () => {
    it('increments correctly', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText('Ball'));

      expect(getByText(/Balls: 1/i)).toBeTruthy();

      fireEvent.click(getByText('Ball'));

      expect(getByText(/Balls: 2/i)).toBeTruthy();

      fireEvent.click(getByText('Ball'));

      expect(getByText(/Balls: 3/i)).toBeTruthy();

      fireEvent.click(getByText('Ball'));

      expect(getByText(/Balls: 0/i)).toBeTruthy();
    });
  });

  describe('foul button', () => {
    it('increments correctly', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText('Foul'));

      expect(getByText(/Strikes: 1/i)).toBeTruthy();

      fireEvent.click(getByText('Foul'));

      expect(getByText(/Strikes: 2/i)).toBeTruthy();

      fireEvent.click(getByText('Foul'));

      expect(getByText(/Strikes: 2/i)).toBeTruthy();

      fireEvent.click(getByText('Foul'));

      expect(getByText(/Strikes: 2/i)).toBeTruthy();
    });
  });

  describe('hit button', () => {
    it('increments correctly', () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText('Hit'));

      expect(getByText(/Strikes: 0/i)).toBeTruthy();
      expect(getByText(/Balls: 0/i)).toBeTruthy();

      fireEvent.click(getByText('Hit'));

      expect(getByText(/Strikes: 0/i)).toBeTruthy();
      expect(getByText(/Balls: 0/i)).toBeTruthy();
    });
  });
});
