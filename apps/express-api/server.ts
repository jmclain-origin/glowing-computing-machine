import app from "./app";
import { SECRETS } from "./app.config";

const { PORT } = SECRETS;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}).on('error', (error) => {
  console.error('Failed to start server:', error);
});
