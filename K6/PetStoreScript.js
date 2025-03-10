// Creator: Grafana k6 Browser Recorder 1.0.7

import { sleep, group, check } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 1,
  iterations: 1,
  ext: {
    loadimpact: {
      projectID:, // Replace with your project ID
      token: '', // Replace with your API token
    },
  },
};

const BASE_URL = 'https://petstore.octoperf.com';
const USERNAME = 'ayman131331';
const PASSWORD = 'testpassword';
const FIRST_NAME = 'ayman';
const LAST_NAME = 'elgendy';
const EMAIL = 'ayman11@test.com';
const PHONE = '0123456789';
const ADDRESS1 = 'oct';
const ADDRESS2 = 'oct';
const CITY = 'giza';
const STATE = 'giza';
const ZIP = '12345';
const COUNTRY = 'Egypt';

export default function main() {
  let response;
  const jar = http.cookieJar();

  group('Landing Page', function () {
    response = http.get(`${BASE_URL}/actions/Catalog.action`);
    check(response, {
      'Landing page loaded': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Sign In', function () {
    response = http.get(`${BASE_URL}/actions/Account.action?signonForm=`);
    check(response, {
      'Sign in page loaded': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Register', function () {
    response = http.get(`${BASE_URL}/actions/Account.action?newAccountForm=`);
    check(response, {
      'Registration page loaded': (r) => r.status === 200,
    });

    response = http.post(`${BASE_URL}/actions/Account.action`, {
      username: USERNAME,
      password: PASSWORD,
      repeatedPassword: PASSWORD,
      'account.firstName': FIRST_NAME,
      'account.lastName': LAST_NAME,
      'account.email': EMAIL,
      'account.phone': PHONE,
      'account.address1': ADDRESS1,
      'account.address2': ADDRESS2,
      'account.city': CITY,
      'account.state': STATE,
      'account.zip': ZIP,
      'account.country': COUNTRY,
    });
    check(response, {
      'Registration successful': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Browse Fish Category', function () {
    response = http.get(`${BASE_URL}/actions/Catalog.action?viewCategory=&categoryId=FISH`);
    check(response, {
      'Fish category page loaded': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('View Product', function () {
    response = http.get(`${BASE_URL}/actions/Catalog.action?viewProduct=&productId=FI-SW-01`);
    check(response, {
      'Product page loaded': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Add to Cart', function () {
    response = http.get(`${BASE_URL}/actions/Cart.action?addItemToCart=&workingItemId=EST-1`);
    check(response, {
      'Item added to cart': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Update Cart', function () {
    response = http.post(`${BASE_URL}/actions/Cart.action`, {
      quantity: '10',
      updateCartQuantities: 'Update Cart',
    });
    check(response, {
      'Cart updated': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Proceed to Checkout', function () {
    response = http.get(`${BASE_URL}/actions/Order.action?newOrderForm=`);
    check(response, {
      'Checkout page loaded': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Confirm Order', function () {
    response = http.post(`${BASE_URL}/actions/Order.action`, {
      order: 'Proceed to Checkout',
    });
    check(response, {
      'Order confirmed': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Payment Method', function () {
    response = http.post(`${BASE_URL}/actions/Order.action`, {
      order: 'Pay by bank wire',
    });
    check(response, {
      'Payment method selected': (r) => r.status === 200,
    });
    sleep(1);
  });

  group('Order Confirmation', function () {
    response = http.post(`${BASE_URL}/actions/Order.action`, {
    });
    check(response, {
      'Order confirmation page loaded': (r) => r.status === 200,
      'Order submitted': (r) => r.body.includes('Thank you, your order has been submitted.'),
    });
    sleep(1);
  });
}