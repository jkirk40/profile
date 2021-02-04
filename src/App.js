import BasicField from './Components/BasicField';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Profile</h3>
      <BasicField field="firstName"></BasicField>
      <BasicField field="lastName"></BasicField>
      <BasicField field="phone"></BasicField>
      <BasicField field="email"></BasicField>
    </div>
  );
}

export default App;
