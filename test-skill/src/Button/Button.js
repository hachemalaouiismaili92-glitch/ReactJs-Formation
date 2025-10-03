import './Button.css'


function Botona({ count, onClick }) {

  return (
    <button onClick={onClick} className="btn">
      Clicked {count} times
    </button>
  );
}

export default Botona;