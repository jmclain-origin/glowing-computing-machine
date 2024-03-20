import app from "./app";
import { SECRETS } from "./app.config";

const { PORT } = SECRETS;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
