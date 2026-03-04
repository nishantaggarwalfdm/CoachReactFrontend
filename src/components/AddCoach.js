import React, { useState } from 'react';
import CoachService from '../services/CoachService.js';

function AddCoach() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const coach = { name };

        CoachService.createCoach(coach).then(() => {
            alert("Coach added successfully!");
            setName("");
        });
    };

    return (
        <div>
            <h2>Add New Coach</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name}
                    placeholder="Coach Name"
                    onChange={e => setName(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddCoach;