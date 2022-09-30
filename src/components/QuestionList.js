import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionArray, deleteQuestion}) {
  
  return (

    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questionArray.map(question => {
            return (
              <QuestionItem 
              key={question.id}
              question={question}
              handleDelete={deleteQuestion}
              
              />
            )
          })
        }
          
      </ul>
    </section>
  );
}

export default QuestionList;
