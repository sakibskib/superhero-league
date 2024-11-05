import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useParams } from 'react-router-dom';

export default function CrewmateDetail() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmate();
  }, []);

  const fetchCrewmate = async () => {
    const { data } = await supabase.from('crewmates').select('*').eq('id', id).single();
    setCrewmate(data);
  };

  return (
    crewmate && (
      <div>
        <h2>{crewmate.name}</h2>
        <p>Strength: {crewmate.strength}</p>
        {/* Display other attributes */}
      </div>
    )
  );
}
