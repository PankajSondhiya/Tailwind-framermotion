import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// scan({
//   enabled: true,
// });

createRoot(document.getElementById("root")).render(<App />);
