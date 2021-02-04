import BasicField from './Components/BasicField';
import ListField from './Components/ListField';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Profile</h3>
      <BasicField field="firstName"></BasicField>
      <BasicField field="lastName"></BasicField>
      <BasicField field="phone"></BasicField>
      <BasicField field="email"></BasicField>
      <ListField field="stations"></ListField>
      <ListField field="transactions"></ListField>
    </div>
  );
}

export default App;
