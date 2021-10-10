import { useEffect, useState } from "react";
import { PUBLIC_URL } from "../../utils/constants";

export const Civilizations = () => {
    const [articles, setArticles] = useState([]);

useEffect(() => {
    fetch(PUBLIC_URL)
    .then((response) => {
        if(!response.ok) {
            throw new Error(`error ${response.status}`);
        }
        return response.json();
    }).then((result) => {
        setArticles(result);
    }).catch((e) =>{
        console.log(e);
    });
}, []);
return(
    <div>
        <h2>Civilizations</h2>
        {articles.map((art) => (
            <article key={art.id}>
                <h4>{art.name}</h4>
            </article>
))}
</div>
    
        );
};