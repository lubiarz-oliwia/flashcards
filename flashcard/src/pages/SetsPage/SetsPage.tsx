import SetCard from "../../components/SetCard/SetCard";
import { sets } from "../../mock";

function SetsPage() {
 return (
  <>
   <div>Your collection</div>
   <button>Add new collection </button>
   <h2>Your current sets</h2>
   {sets.map((set) => (
    <SetCard
     title={set.name}
     words={set.words}
     language1={set.language1}
     language2={set.language2}
    />
   ))}
  </>
 );
}

export default SetsPage;
