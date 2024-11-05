import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function UpdateForm({ crewmate, refreshCrewmates }) {
  const [attributes, setAttributes] = useState(crewmate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').update(attributes).eq('id', crewmate.id);
    refreshCrewmates();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={attributes.name} onChange={(e) => setAttributes({ ...attributes, name: e.target.value })} />
      {/* Update other attributes */}
      <button type="submit">Update Superhero</button>
    </form>
  );
}
