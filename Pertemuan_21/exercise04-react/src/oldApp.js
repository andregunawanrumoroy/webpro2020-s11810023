import './App.css';
import Header from "./components/Header";
import Hello from "./components/Hello"
import Content from "./components/Content"

function App() {
  return (
    <>
      <Header />
      <Hello />
      <Content />
    </>
  );
}

export default App;

// import './App.css';
// import Card from './components/Card';
// import {person} from './utils/person';
// import Counter from './components/Counter';
 

// function App() {
//   return (
//     <>
//       {person.map((item) =>{
//         return(
//           <Card
//             name={item.name}a
//             institution={item.institution}
//             address={item.address}
//             phone={item.phone}
//           />
//         );
//       })}
      
//       <Counter />
//     </>
//   );
// }

// export default App;