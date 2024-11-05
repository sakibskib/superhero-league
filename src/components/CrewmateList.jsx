import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function CrewmateList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data } = await supabase.from('crewmates').select('*');
    setCrewmates(data);
  };

  const handleDelete = async (id) => {
    await supabase.from('crewmates').delete().eq('id', id);
    fetchCrewmates();
  };

  return (
    <div>
      {crewmates.map((crewmate) => (
        <div key={crewmate.id}>
          <h3>{crewmate.name}</h3>
          <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
