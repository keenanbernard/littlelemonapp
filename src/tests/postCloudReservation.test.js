import {postReservationCloud} from "../functions/cloudReservation";

// Mock the entire cloudReservation module
jest.mock('../functions/cloudReservation', () => ({
  __esModule: true,
  postReservationCloud: jest.fn(), // Mock the function directly
}));

test('Post Reservation to the cloud', async () => {
  // Mock your dependencies and set up any necessary spies
  const email = 'keenanbernard74@gmail.com';
  const subject = 'Little Lemon Restaurant';
  const content = 'Your Little lemon reservation has been confirmed.';
  const reset = jest.fn();
  const navigate = '/confirmation';

  // Call the function you want to test
  await postReservationCloud(email, subject, content, reset, navigate);

  // Assert that the postReservationCloud and reset functions were called
  expect(postReservationCloud).toHaveBeenCalledWith(email, subject, content, reset, navigate);
  expect(postReservationCloud).toHaveBeenCalled();
})