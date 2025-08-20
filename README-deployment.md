# Deployment Guide for Ashnoor Singh Portfolio

## Deploy to Render

This portfolio is ready for deployment on Render using Docker or the Node.js environment.

### Option 1: Docker Deployment (Recommended)

1. **Connect Repository to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" > "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Name**: ashnoor-portfolio
   - **Environment**: Docker
   - **Plan**: Free (or upgrade as needed)
   - **Docker Command**: Leave empty (uses CMD from Dockerfile)

3. **Environment Variables**
   Set the following environment variables in Render:
   ```
   NODE_ENV=production
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Database Setup**
   - Create a PostgreSQL database in Render
   - Copy the connection string to DATABASE_URL environment variable
   - The app will automatically create tables on first run

### Option 2: Node.js Environment

1. **Service Configuration**
   - **Environment**: Node.js
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 20

2. **Environment Variables** (same as Docker option)

### Environment Variables Required

- `NODE_ENV`: Set to "production"
- `DATABASE_URL`: PostgreSQL connection string from Render database
- `PORT`: Automatically provided by Render (default: 5000)

### Database Migration

The application uses Drizzle ORM and will automatically:
- Connect to the PostgreSQL database
- Create required tables on startup
- Handle schema changes via `npm run db:push`

### Features

- **Responsive Design**: Works on all devices
- **Contact Form**: Stores messages in PostgreSQL database
- **GitHub Integration**: Links to actual repositories
- **Performance Optimized**: Built with Vite and production-ready

### Monitoring

After deployment:
- Monitor logs in Render dashboard
- Database is accessible via Render's database dashboard
- Contact form submissions are stored securely in the database

### Custom Domain (Optional)

1. Go to your service settings in Render
2. Add your custom domain
3. Configure DNS settings as provided by Render

### Troubleshooting

- **Build fails**: Check build logs for missing dependencies
- **Database connection**: Verify DATABASE_URL is correctly set
- **Port issues**: Render automatically assigns PORT, no manual configuration needed

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Docker, Render