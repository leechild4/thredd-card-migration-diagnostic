# Thredd Card Migration Diagnostic

An interactive web tool that helps Heads of Payments assess whether their current processor is holding them back. Prospects are scored across seven friction dimensions and receive a personalised result with tailored recommendations.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

### Run (production)

```bash
npm start
```

The tool will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── server.js          # Express server
├── package.json
├── public/
│   └── index.html     # Self-contained diagnostic tool (HTML/CSS/JS)
└── README.md
```

## Lead Capture

The tool includes a `/api/leads` POST endpoint that receives form submissions. By default, leads are logged to the console. To connect to your CRM or marketing automation platform, update the handler in `server.js`.

## Deployment

This app can be deployed to any Node.js hosting platform:

- **Heroku**: `git push heroku main`
- **Railway**: connect repo and deploy
- **Render**: connect repo, set start command to `npm start`
- **AWS / GCP / Azure**: standard Node.js deployment

Set the `PORT` environment variable if your platform requires a specific port.
