import Category from "../Category/Category";


// eslint-disable-next-line react/prop-types
const Categories = ({catData}) => {
    return (
        <div>

            {
                // eslint-disable-next-line react/prop-types
                catData.map(cat => <Category key={cat.id} data={cat} ></Category>)
            }
            
        </div>
    );
};

export default Categories;