import { useNavigate } from "react-router-dom";

type SetProps = {
 word1: string;
 word1_translate: string;
 status: string;
};

type SetCardProps = {
 title: string;
 language1: string;
 language2: string;
 words: SetProps[];
};

function SetCard({ title, words, language1, language2 }: SetCardProps) {
 const navigate = useNavigate();

 const goToCollection = (title: any) => {
  navigate(`${title}`);
 };

 return (
  <div onClick={() => goToCollection(title)}>
   <h1>{title}</h1>
   <h2>
    {language1} & {language2}
   </h2>
   <h2>Number of words {words.length}</h2>
  </div>
 );
}

export default SetCard;
