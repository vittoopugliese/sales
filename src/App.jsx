import {useEffect, useState} from "react";

function App() {
  const [time, setTime] = useState("y");
  const [plata, setPlata] = useState(0);
  const [res, setRes] = useState(0);
  const [blue, setBlue] = useState(0);
  const [euro, setEuro] = useState(0);

  async function getBlue(){
    const data = await fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(res => res.json())
    setBlue(data.blue.value_avg)
    setEuro(data.blue_euro.value_avg)
  }

  getBlue()

  function getPlata() {
    let platita;

    platita = plata / time;

    if (time == "a") return plata * 12;

    return platita ? platita : 0;
  }

  return (
    <div className="container">
      <input
        type="number"
        placeholder="Tu sueldo MENSUAL"
        onChange={(e) => setPlata(e.target.value)}
      />
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="-">queres saber cuanto ganas por:</option>
        <option value="a">Ano</option>
        <option value="1">Mes</option>
        <option value="30">Dia</option>
        <option value="730">Hora</option>
        <option value="43800">Minuto</option>
        <option value="2628000">Segundo</option>
        <option value="2628000000">(extremo) MILI-Segundo</option>
      </select>
      <h1>= {getPlata()}</h1>
      <h1>{getPlata() * blue} peso</h1>
      <h1>{getPlata() * euro} euro</h1>
    </div>
  );
}

export default App;
