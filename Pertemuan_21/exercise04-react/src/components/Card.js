import Card from 'react';

//pertemuan 21
//props itu seperti objek
/*
const Card = (props) => {
    return (
        <div className="card container">
            <p>{props.name}</p>
            <p>{props.institutione}</p>
            <p>{props.address}</p>
            <p>{props.phoneNumber}</p>
        </div>
    );
};
*/

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