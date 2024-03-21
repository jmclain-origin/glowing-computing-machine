import app from './src/app';
import { CONFIG, AppConfig } from './app.config';

const { PORT }: AppConfig = CONFIG;

app
  .listen(PORT, () => {
    console.log(
      `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  })
  .on('error', (error) => {
    console.error('Failed to start server:', error);
  });
