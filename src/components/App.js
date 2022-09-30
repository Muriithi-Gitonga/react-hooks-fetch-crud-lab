import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [form, setForm] = useState(true)

  function updated() {
    return setForm(form => !form)
  }

  function handleDelete (id) {
    const newQuestions = questions.filter((q) => q.id !== id)
    setQuestions((questions) => newQuestions)
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => setQuestions((questions) => data))
      .catch(err=> console.log(err))
  }, [form])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm formSubmittedFunction={updated} /> : <QuestionList questionArray={questions} deleteQuestion={handleDelete}/>}
    </main>
  );
}

export default App;
