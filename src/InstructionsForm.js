import React from 'react';

export default function InstructionsForm({ handleSubmit, setInstructionInForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setInstructionInForm(e.target.value)} />
      <button>Add instruction</button>
    </form>
  );
}
