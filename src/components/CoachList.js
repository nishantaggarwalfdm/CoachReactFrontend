import React, { useEffect, useState } from 'react';
import CoachService from '../services/CoachService.js';

function CoachList() {
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        CoachService.getAllCoaches().then(response => {
            setCoaches(response.data);
        });
    }, []);

    return (
        <div>
            <h2>All Coaches</h2>
            <ul>
                {coaches.map(c => (
                    <li key={c.id}>{c.id} - {c.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CoachList;