import { useParams } from "react-router-dom";

const EditNote = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Test bro {id}</h1>
        </div>
    );
};

export default EditNote;
