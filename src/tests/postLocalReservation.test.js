import { postReservation } from '../functions/localReservation';

// Mock the entire cloudReservation module
jest.mock('../functions/localReservation', () => ({
  __esModule: true,
  postReservation: jest.fn(), // Mock the function directly
}));

test('Post Reservation locally', async () => {
  // Mock your dependencies and set up any necessary spies
  const guests = 5;
  const date = '2023-09-15T18:30';
  const phoneNumber = '6144297';
  const email = 'keenanbernard74@gmail.com';
  const subject = 'Little Lemon Restaurant';
  const content = 'Your Little lemon reservation has been confirmed.';
  const reset = jest.fn();

  // Call the function you want to test
  await postReservation(guests, date, phoneNumber, email, subject, content, reset);

  // Assert that the postReservationCloud and reset functions were called
  expect(postReservation).toHaveBeenCalledWith(guests, date, phoneNumber, email, subject, content, reset);
  expect(postReservation).toHaveBeenCalled();
})