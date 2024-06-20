import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hi <span>World!</span>
        </Alert>
      )}
      <Button handleClick={() => setAlertVisibility(true)} variant="secondary">
        show alert
      </Button>
    </div>
  );
}

export default App;
