import { useCounter } from "../hooks/useCounter.js";
import { useFetch } from "../hooks/useFetch.js";
import { Loading } from "../components/Loading.jsx";
import { CharacterInfo } from "../components/CharacterInfo.jsx";


//quieo el personaje segun el count
export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1); // desestructor la hook y le digo que inicie en 1
  const url = `https://thesimpsonsapi.com/api/characters/${count}`; //url con el count
  const { data, isLoading} = useFetch(url); //llama al custom hook useFetch

  return (
    <>
      <h1>Los Simpsons API</h1>
      <h2>Personajes</h2>

{/* //si esta cargando muestro mi componente loading */}
      {isLoading && <Loading />}
 {/* //si no esta cargando y tengo data muestro el componente characterinfo*/}
      {data && !isLoading && <CharacterInfo character={data} />}  

      <div>
        {/* //botones para cambiar personaje */}
        <button 
          onClick={() => handleDecrement(1)}  //cuando hago click bajo uno 
          disabled={isLoading || count === 1} //pero si es 1 no debo bajar mas
        >
          Anterior
        </button>
        
        
        <button 
          onClick={() => handleIncrement(1)} 
          disabled={isLoading} //desactivo mientras carga
        >
          Siguiente
        </button>
      </div>
    </>
  );
};