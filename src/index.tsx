
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import "./styles/debug.css"; // Import des styles de débogage
  import { LanguageProvider } from "./contexts/LanguageContext";

  createRoot(document.getElementById("root")!).render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  