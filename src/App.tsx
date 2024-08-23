import AppProvider from './providers/providers';
import AppRouter from './routes';
export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
