import Card from "react";


//props itu seperti objek
const Card = ({name, institution, address, phoneNumber}) => {
    return (
        <div className="card container">
            <p>{name}</p>
            <p>{institutione}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
        </div>
    );
};

export default Card;