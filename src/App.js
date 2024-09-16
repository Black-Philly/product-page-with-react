import Image from './Image';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import './App.css';



function App() {

  const firstName = 'Blakky';

  return (
    <div>
      <div className="App">

      <div className='greeting'>
          {firstName ? (
            <>
              <p>Hello, {firstName}! </p>
              <img src='' alt='' />
            </>) :
            (
              <p>Hello, there</p>
            )}
        </div>

        
        <div className='card'>

          <Image />

          <div className='info'>
            <Name />
            <Description />
            <Price />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
