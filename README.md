# Feedback Sender

A full-stack app for creating and sending email surveys. Users sign in with Google, buy credits via Stripe, then send yes/no surveys to recipient email addresses and see responses in a dashboard.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose), Passport (Google OAuth), Stripe, SendGrid
- **Frontend:** React, Redux, Redux Form, React Router, Materialize CSS

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- Google OAuth credentials
- Stripe account
- SendGrid account

### Installation

1. Clone the repo and install dependencies:

   ```bash
   npm install
   cd client && npm install && cd ..
   ```

2. Create a `config/dev.js` file (it's gitignored) with your local config:

   ```js
   module.exports = {
     googleClientID: 'your-google-client-id',
     googleClientSecret: 'your-google-client-secret',
     mongoURI: 'mongodb://localhost:27017/feedback-sender',
     cookieKey: 'a-random-secret-string',
     stripePublishableKey: 'pk_test_...',
     stripeSecretKey: 'sk_test_...',
     sendGridKey: 'SG....',
     sendGridFromEmail: 'your-sender@example.com',
     redirectDomain: 'http://localhost:3000'
   };
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

   This starts the API on port 5000 and the React app on port 3000.

### Environment variables (production)

For production (e.g. Heroku), set: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `MONGO_URI`, `COOKIE_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `SEND_GRID_KEY`, `SEND_GRID_FROM_EMAIL`, `REDIRECT_DOMAIN`.
