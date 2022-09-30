import React from "react";

function QuestionItem({ question, handleDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  function deleteQuestion () {
    fetch(`http://localhost:4000/questions/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(() => handleDelete(id))
}

  function handlePatch (e) {
    console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({correctIndex: e.target.value }) 
    })
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handlePatch} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
