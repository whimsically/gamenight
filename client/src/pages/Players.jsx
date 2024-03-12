import { useState, useEffect } from 'react';

export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        
        fetchPlayersData()
            .then(data => setPlayers(data))
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    // Function to fetch players' data 
    const fetchPlayersData = async () => {
        
        const response = await fetch('');
        const data = await response.json();
        return data;
    };

    return (
        <main>
            <h1>Players</h1>
            <div>
                {players.map(player => (
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                        <p>Age: {player.age}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

