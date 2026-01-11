import { Providers } from "./providers";
import { AppRouter } from "./routes";

export default function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}