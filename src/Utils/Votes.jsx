import React from 'react';
import {useParams} from 'react-router-dom'

const Votes = ({votes, review_id}) => {
    const [upVote, setUpVote] = useState(votes);
    const params = useParams
    console.log(params)
} => {
    return (
        <div>
            hi
        </div>
    );
};

export default Votes;