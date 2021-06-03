import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInput = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInput.current.value;

    const reqBody = { email: enteredEmail, text:enteredFeedback };

     // { email: 'test@test.com', text: 'Some feedback text'}
    fetch('/api/feedback', { 
      method: 'POST', 
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInput}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
