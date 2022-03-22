import './numberGen.css'

const isPrime = num => {
  if(num == 0 || num == 1 || num == 4) return false
  for (let i=2; i < num/2; i++){
    if (num % i == 0) return false
  }
  return true
}

function NumberGen() {
  const arr = []
  
  for (let i=0; i<32;i++){
    arr.push(i)
  }
  console.log(arr)

  const cell = arr.map(
    e=><div width="20" id ="cell" className={
      isPrime(e)?'prime':
        (e % 2 === 0)?'even': 'odd'
    } key={e}>{e}</div>)
  
  return (
    <div className='center'>
      <h2>Number Generator</h2>
      <div className='grid-container'>
        {cell}
      </div>

    </div>
  );
}

export default NumberGen;
