import React, { useState } from 'react';
import CoachService from '../services/CoachService';

function SearchCoach() {
    const [id, setId] = useState('');
    const [coach, setCoach] = useState(null);

    const handleSearch = () => {
        CoachService.getCoachById(id).then(res => {
            setCoach(res.data);
        }).catch(() => alert("Coach not found!"));
    };

    return (
        <div>
            <h2>Find Coach By ID</h2>
            <input 
                type="number" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>

            {coach && (
                <div>
                    <h3>Coach Details</h3>
                    <p>ID: {coach.id}</p>
                    <p>Name: {coach.name}</p>
                </div>
            )}
        </div>
    );
}

export default SearchCoach;