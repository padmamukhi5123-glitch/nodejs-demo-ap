# nodejs-demo-ap

Sample Node.js application used to demonstrate a CI/CD pipeline with GitHub Actions and Docker.

## Local run

```bash
npm install
npm test
npm start
```

Open http://localhost:3000

Health endpoint: http://localhost:3000/health

## CI/CD flow

Push to `main` triggers:

1. Checkout source code
2. Install Node.js 22
3. Install dependencies
4. Run tests
5. Build Docker image
6. Push image to Docker Hub

Docker Hub credentials are stored as GitHub repository secrets:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
