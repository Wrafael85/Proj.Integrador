
import "./PetDiary.css";
import { Link } from "react-router-dom";

// Interface que define a estrutura de dados de um Pet
interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  image?: string;
}

// Componente principal do Diário Pet
// Esta é a função que será usada pelas rotas
export default function PetDiary() {
  // Array com dados de exemplo dos pets
  const pets: Pet[] = [
    {
      id: 1,
      name: "Alfredo",
      species: "Cachorro",
      breed: "Golden Retriever",
      age: 3,
      weight: 28.5,
      image: "/assets/alfredo.jpg"
    },
    {
      id: 2,
      name: "Valentina",
      species: "Gato", 
      breed: "Siamês",
      age: 2,
      weight: 4.2,
      image: "/assets/valentina.jpg"
    },
    {
      id: 3,
      name: "Seu Pet",
      species: "Escolha a espécie",
      breed: "Raça",
      age: 0,
      weight: 0,
      // Sem imagem - vai mostrar placeholder
    }
  ];

  return (
    <div className="pet-diary">
      <div className="pet-diary-container">
        {/* Título principal da página */}
        <h1 className="pet-diary-title">Meus Pets</h1>
        
        {/* Grid que organiza os cards dos pets */}
        <div className="pets-grid">
          {/* Para cada pet no array, cria um card */}
          {pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              
              {/* Área da imagem do pet */}
              <div className="pet-image">
                {pet.image ? (
                  <img src={pet.image} alt={pet.name} />
                ) : (
                  <div className="pet-image-placeholder">📷</div>
                )}
              </div>
              
              {/* Informações do pet */}
              <div className="pet-info">
                <h2 className="pet-name">{pet.name}</h2>
                
                {/* Detalhes do pet em lista */}
                <div className="pet-details">
                  <div className="detail-item">
                    <span className="label">Espécie:</span>
                    <span className="value">{pet.species}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Raça:</span>
                    <span className="value">{pet.breed}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Idade:</span>
                    <span className="value">
                      {pet.age} {pet.age === 1 ? 'ano' : 'anos'}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Peso:</span>
                    <span className="value">{pet.weight} kg</span>
                  </div>
                </div>
                
                {/* Links para páginas detalhadas do pet */}
                <div className="pet-actions">
                  <Link to={`/pet/${pet.id}/info`} className="action-link">
                    Informações
                  </Link>
                  <Link to={`/pet/${pet.id}/vaccines`} className="action-link">
                    Vacinas
                  </Link>
                  <Link to={`/pet/${pet.id}/records`} className="action-link">
                    Registros
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}