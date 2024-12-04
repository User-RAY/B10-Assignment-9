import { useLoaderData, useParams } from "react-router-dom";
import AdventureDetail from "../components/AdventureDetail/AdventureDetail";
import { useContext, useEffect, useState } from "react";
import { TitleContext } from "../providers/TitleProvider";

const AdventureDetails = () => {

    const catData = useLoaderData();

    const {adventure} = useParams();

    const [, setTitle] = useContext(TitleContext);

    useEffect(()=>{
        setTitle(adventure);
    },[adventure, setTitle])

    const [card, setCard] = useState({});

    useEffect(() =>{
        const filterCard = [...catData].find(c => c.title.replace(/\s+/g, "") === adventure);
        
        setCard(filterCard);
    }, [adventure, catData])



    return (
        <div className="mt-4 w-5/6 mx-auto">
            {

               <AdventureDetail key={card.id} data={card} ></AdventureDetail>
            }
        </div>
    );
};

export default AdventureDetails;