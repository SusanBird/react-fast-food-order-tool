import { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {

  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInForm]);

    setInstructionInForm('');
  }

  function handleInstructionChange(e) {
    setInstructionInForm(e.target.value);
  }

  return <form onSubmit={handleSubmit}>
    <label>
           New instruction
      <input required value={instructionInForm} onChange={handleInstructionChange} />
    </label>
    <button>Add Instruction</button>
  </form>;
}