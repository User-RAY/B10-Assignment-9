

// eslint-disable-next-line react/prop-types
const EcoFeatures = ({ecoFriendlyFeatures, icon='', list=''}) => {

    return (
        <div>
            <ul className={list}>
                { 
                
                // eslint-disable-next-line react/prop-types
                ecoFriendlyFeatures?.map((feature,index) => <li key={index}><i className={icon}></i> {feature} </li> )
                
                }
            </ul>
        </div>
    );
};

export default EcoFeatures;