import './HexColors.css'

function HexColors() {
  const arr = ['#4e417e', '#02dc92', '#dfbaa0', '#d8394e', '#7c31d3', '#7fcfd2', '#0e5d46', '#d98590', 
  '#7923d7', '#6e5eeb', '#2a176b', '#dea1d8', '#cbae6f', '#b6841d', '#62df7d', '#9e4d2c',
  '#393b73', '#8cface', '#1a4f07', '#045529',  '#04e754', '#697980', '#018120', '#5bdcc7',
  '#7010b2', '#c50007', '#cfe583', '#cdb58e', '#298b5d', '#58e253', '#a9c3c5', '#66fec5']
  
  const cell = arr.map(
    (e,i)=><div id='cell2' width="20" style={{ backgroundColor: e }} key={i}>{e}</div>)
  
  return (
    <div className='center'>
      <h2>Hexadecimal Colors</h2>
      <div className='grid-container'>
        {cell}
      </div>
    </div>
  );
}

export default HexColors;
