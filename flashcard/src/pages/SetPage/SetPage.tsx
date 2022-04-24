import { useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

let set = {
 name: "Animals",
 language1: "Polish",
 language2: "English",
 words: [
  { word1: "czerwony", word1_translate: "red", status: "Refresh" },
  { word1: "biały", word1_translate: "white", status: "Refresh" },
  { word1: "różowy", word1_translate: "pink", status: "Refresh" },
 ],
};

function SetPage() {
 let { title } = useParams();
 const [showBack, setShowBack] = useState(false);

  function handleClick() {
    
      setShowBack(!showBack);
    
  }

  

 return (
  <>
   {title}
   <button>Add new word</button>
   <button>Learn</button>
   <table>
    <tr>
     <th>{set.language1}</th>
     <th>{set.language2}</th>
     <th>Status</th>
    </tr>

    {set.words.map((word) => (
     <tr>
      <th>{word.word1}</th>
      <th>{word.word1_translate}</th>
      <th>{word.status}</th>
     </tr>
    ))}
   </table>

   {set.words.map((word) => (
    <div
     className={cn("flip-card-outer")}
     onClick={handleClick}
    >
     <div className={cn("flip-card-inner", { showBack })}>
      <div
       className="card front"
       style={{
        backgroundImage: `linear-gradient(#00000000, #00000050), )`,
       }}
      >
       <div className="card-body position-relative d-flex justify-content-center align-items-center">
        {word.word1}
       </div>
      </div>
      <div className="card back">
       <div className="card-body d-flex flex-column justify-content-around align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
         {word.word1_translate}
        </div>
       </div>
      </div>
     </div>
    </div>
   ))}
  </>
 );
}

export default SetPage;
