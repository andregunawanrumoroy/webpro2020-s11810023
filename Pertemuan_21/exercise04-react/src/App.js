import './App.css';
import Header from "./components/Header";
import Hello from "./components/Hello";
import Content from "./components/Content";
import Card from "./components/Card";
import {person} from "./utils/person";
import Counter from "./components/Counter";

//harus menggunakan Huruf Kapital diawal kata
function App() {
  return (
    <>
      <Header />
      <Hello />
      <Content />

       {person.map((item) => {
          return (
            <Card
              name={item.name}
              institution={item.institution}
              address={item.address}
              phoneNumber={item.phoneNumber}
              />
           );
          }
         )
       }
       <Counter title="Counter component" />
    </>
  );
}

export default App;
