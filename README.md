# HUKEAZ Website — Booking + Payment Flow

## Correct order (as you requested)

1. Customer fills booking form (name, phone, date, time, notes)
2. Customer **pays first** on Snipe
3. After payment, booking details are sent to your **WhatsApp automatically**

---

## How it works

1. Form saves booking details in the browser
2. Customer is redirected to that service’s Snipe payment page
3. After payment, Snipe must redirect the customer to:

   `https://YOUR-WEBSITE.com/booking-success.html`

4. That page automatically opens WhatsApp with the booking details (marked as PAID)

---

## What you must set up in Snipe

For **each service payment link**, set the **Success / Redirect / Return URL** to:

```
https://your-domain.netlify.app/booking-success.html
```

(Example if hosted on Netlify)

If Snipe does not redirect after payment, WhatsApp will not open automatically — the customer must land on `booking-success.html`.

---

## What you must set in the code

### 1. WhatsApp number

In `booking-success.html` find:

```js
const WHATSAPP_NUMBER = '255656611169';
```

Change to your number (country code, no + or spaces).

### 2. Snipe links for each service

In `js/data.js` paste real links:

```js
buyLink: "https://your-snipe-payment-link.com/keratin"
```

---

## Test checklist

1. Paste at least one real Snipe `buyLink` in `js/data.js`
2. In Snipe, set success redirect to `booking-success.html`
3. Fill the booking form and click Proceed to Payment
4. Complete (or simulate) payment
5. You should land on success page → WhatsApp opens with booking details
