export const CharacterInfo = ({ character }) => {
  const imageUrl = `https://cdn.thesimpsonsapi.com/200/character/${character.id}.webp`; //url de la imagen 
 
  return (
    <div>
        {/* mostramos la imgane  */}
      <img 
        src={imageUrl}  
      />
      {/* el nombre y su id */}
      <h3>ID: {character.id} - {character.name}</h3>
      {/* sus propiedads, clave -valor  */}
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Ocupación:</strong> {character.occupation}</p>
      <p><strong>Edad:</strong> {character.age}</p>
      <p><strong>Estado:</strong> {character.status}</p>
      
      {character.phrases && character.phrases.length > 0 && (
        <p><strong>Frase famosa:</strong> "{character.phrases[0]}"</p>
      )}
    </div>
  );
};