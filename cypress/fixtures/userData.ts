export const generateUser = () => {
  const timestamp = Date.now();
  return {
    name: 'Test User',
    firstName: 'Test',
    lastName: 'User',
    email: `testuser${timestamp}@mailinator.com`,
    password: 'Test@12345',
    company: 'Test Company',
    address1: '123 Test Street',
    address2: 'Suite 456',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '1234567890',
    dayOfBirth: '10',
    monthOfBirth: 'January',
    yearOfBirth: '1990',
  };
};

export const cardDetails = {
  nameOnCard: 'Test User',
  cardNumber: '4111111111111111',
  cvc: '123',
  expirationMonth: '12',
  expirationYear: '2027',
};
