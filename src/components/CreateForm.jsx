import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function CreateForm({ refreshCrewmates }) {
  const [name, setName] = useState('');
  const [attributes, setAttributes] = useState({
    strength: 0,
    speed: 0,
    intelligence: 0,
    power_level: 0,
    superpower: 'Flight'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('crewmates')
      .insert([{ name, ...attributes }]);
    if (error) console.error(error);
    refreshCrewmates();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      {/* Superpower selection and other attribute inputs */}
      <button type="submit">Add Superhero</button>
    </form>
  );
}
