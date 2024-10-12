import { useNavigate, useParams } from "react-router-dom";
import styles from "/src/components/Recipe.module.css";

const Recipe = ({ items, favorites, toggleFavorite }) => {
  const { id } = useParams(); // Get the id from the URL params
  const navigate = useNavigate();
  const handlerBackHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const selectedItem = items.find((item) => item.id === Number(id));
  const isFavorite = favorites.includes(Number(id)); // Check if the recipe is a favorite

  if (!selectedItem) {
    return <p>Item not found!</p>;
  }

  return (
    <div className={styles.details}>
      <h2>{selectedItem.title}</h2>
      <div>
        <img src={selectedItem.imgSrc} alt={selectedItem.imgAlt}></img>
        <p>{selectedItem.description}</p>
      </div>
      <div>
        <hr />
        <h3>Ingredients</h3>
        <ul className={styles.ingredientsList}>
          {selectedItem.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h3>Steps</h3>
        <ul className={styles.steps}>
          {selectedItem.steps.map((item, index) => (
            <li key={index}>
              <div className={styles.stepNo}>Step {index + 1}:</div>
              <div className={styles.stepDet}>{item}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Favorite/Unfavorite Button */}
      <button onClick={() => toggleFavorite(selectedItem.id)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>

      <button onClick={handlerBackHome}>Home</button>
    </div>
  );
};

export default Recipe;


// import { useNavigate, useParams } from "react-router-dom";
// import styles from "/src/components/Recipe.module.css";

// const Recipe = ({ items, favorites, toggleFavorite }) => {
//   const { id } = useParams(); // Get the id from the URL params
//   const navigate = useNavigate();
//   const handlerBackHome = (event) => {
//     event.preventDefault();
//     navigate(`/`);
//   };

//   const selectedItem = items.find((item) => item.id === Number(id));
//   const isFavorite = favorites.includes(Number(id));

//   console.log("Selected Item:", selectedItem);
//   if (!selectedItem) {
//     return <p>item not found!</p>;
//   }
//   return (
//     <div className={styles.details}>
//       <h2>{selectedItem.title}</h2>
//       <div>
//         <img src={selectedItem.imgSrc} alt={selectedItem.imgAlt}></img>
//         <p>{selectedItem.description}</p>
//       </div>
//       <div>
//         <hr />

//         <h3>Ingredients</h3>

//         <ul className={styles.ingredientsList}>
//           {selectedItem.ingredients.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//       <hr />
//       <div>
//         <h3>Steps</h3>
//         <ul className={styles.steps}>
//           {selectedItem.steps.map((item, index) => (
//             <li key={index}>
//               <div className={styles.stepNo}>Steps {index + 1}:</div>
//               <div className={styles.stepDet}>{item}</div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={() => toggleFavorite(selectedItem.id)}>
//         {isFavorite ? "Unfavorite" : "Favorite"}
//       </button>

//       <button onClick={handlerBackHome}>Home</button>
//     </div>
//   );
// };

// export default Recipe;
