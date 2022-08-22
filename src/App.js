import Stepper from "./components/Stepper";
import DetailsProvider from "./context/DetailsContext";

function App() {
  return (
        <div className="app">
          <DetailsProvider>
            <Stepper />
          </DetailsProvider>
        </div>
    
  );
}

export default App;
