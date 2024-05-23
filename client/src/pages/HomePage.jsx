import { Link } from "react-router-dom";
import uno from'./Images/dog.jpg';

function HomePage() {
  return (
  <section className="bg-[#fed7aa] flex justify-center items-center h-screen">
    <header className="p-10">
    <div className="flex justify-center items-center">
        <img src={uno} alt="Mascota" className="mx-auto"
          style={{ maxWidth: "800px" }} />
      </div>
      
    </header>
  </section>
  );
}

export default HomePage;
