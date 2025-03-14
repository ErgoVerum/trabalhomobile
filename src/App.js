import "./App.css";

const VehicleCard = ({ image, model, year, color }) => {
  return (
    <div className="box vehicle">
      <img src={process.env.PUBLIC_URL + image} alt="Veículo" />
      <p>Modelo: {model}</p>
      <p>Ano: {year}</p>
      <p>Cor: {color}</p>
    </div>
  );
};

export default function App() {
  const vehicles = [
    { image: "/Sedan22.jpg", model: "Sedan", year: "2022", color: "Branco" },
    { image: "/mercedes20.png", model: "Mercedes", year: "2022", color: "Cinza" },
    { image: "/harley2024.jpg", model: "Harley Davidson", year: "2024", color: "Preto" }
  ];

  return (
    <div className="container">
      <div className="title-box">Veículos Disponíveis</div>
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} {...vehicle} />
      ))}
    </div>
  );
}
