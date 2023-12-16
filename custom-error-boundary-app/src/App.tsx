import "./App.css";
import MyComponent from "./my-component/MyComponent";
import { ErrorBoundary } from "react-error-boundary";

// Fallback ui for error!

function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  try {
    return (
      <div className="App">
        <ErrorBoundary FallbackComponent={Fallback} /*</div>onReset={}*/>
          <MyComponent name={"Ganku"} />
        </ErrorBoundary>
      </div>
    );
  } catch (ex) {
    console.log(ex);
    return <>ERRor Pls Check! {ex}</>;
  }
}

export default App;
