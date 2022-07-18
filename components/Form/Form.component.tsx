import { Button } from "components/Button";
import React, {
  ChangeEvent,
  useState,
  FormEventHandler,
  HTMLAttributes,
  createRef,
} from "react";
import styled from "styled-components";
import { Data } from "types";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  submitHandler: FormEventHandler;
}

type Subjects = "Contact" | "Quote" | "Feedback" | "Other";

const Form: React.FC<FormProps> = ({ submitHandler, ...rest }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subject, setSubject] = useState<string>("0");
  const nameRef = createRef<HTMLInputElement>();
  const phoneRef = createRef<HTMLInputElement>();
  const subjectRef = createRef<HTMLSelectElement>();
  const contentRef = createRef<HTMLTextAreaElement>();
  const emailRef = createRef<HTMLInputElement>();
  const loaderRef = createRef<HTMLSpanElement>();
  const successRef = createRef<HTMLDivElement>();

  const updateField = (
    event: React.FormEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const field = event.currentTarget.dataset.field;
    switch (field) {
      case "name":
        setName(event.currentTarget.value);
        break;
      case "phone":
        if (
          /^\d+$/.test(event.currentTarget.value) ||
          !!!event.currentTarget.value
        ) {
          setPhone(event.currentTarget.value);
        }
        break;
      case "email":
        setEmail(event.currentTarget.value);
        break;
      case "content":
        setContent(event.currentTarget.value);
        break;
      case "subject":
        setSubject(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      loaderRef.current?.dataset.active &&
        (loaderRef.current.dataset.active = "true");
      const req = await fetch("/api/mailer", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, content, subject }),
      });
      const res: Data = await req.json();
      if (!!res.errors && res?.errors?.length > 0) {
        setTimeout(() => {
          res?.errors?.forEach((err) => {
            switch (err.field) {
              case "name":
                nameRef.current?.dataset?.error &&
                  (nameRef.current.dataset.error = "true");
                break;
              case "phone":
                phoneRef.current?.dataset?.error &&
                  (phoneRef.current.dataset.error = "true");
                break;
              case "email":
                emailRef.current?.dataset?.error &&
                  (emailRef.current.dataset.error = "true");
                break;
              case "subject":
                subjectRef.current?.dataset?.error &&
                  (subjectRef.current.dataset.error = "true");
                break;
              case "content":
                contentRef.current?.dataset?.error &&
                  (contentRef.current.dataset.error = "true");
                break;
              default:
                break;
            }
          });
        }, 2000);
      } else {
        successRef.current?.dataset.active &&
          (successRef.current.dataset.active = "true");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        loaderRef.current?.dataset.active &&
          (loaderRef.current.dataset.active = "false");
      }, 2000);
    }
  };

  const handleFocus = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    event.currentTarget.dataset.error = "false";
  };

  const closeSuccessMessage = () => {
    successRef.current?.dataset.active &&
      (successRef.current.dataset.active = "false");
    setName("");
    setEmail("");
    setPhone("");
    setContent("");
    setSubject("0");
  };

  return (
    <StyledForm onSubmit={handleSubmit} {...rest}>
      <span ref={loaderRef} data-active="false">
        <span></span>
      </span>
      <div className="form-success" ref={successRef} data-active="false">
        <i>🥳</i>
        <strong>Your message has been sent.</strong>
        <p>
          I will respond to you as soon as possible. Replies are usually sent
          within 2 working days.
        </p>
        <Button role="button" type="button" onClick={closeSuccessMessage}>
          Close
        </Button>
      </div>
      <div className="form-row">
        <input
          type="text"
          name="name"
          data-field="name"
          pattern="^[\w -]+$"
          onChange={updateField}
          placeholder="Enter your name..."
          value={name}
          required
          onFocus={handleFocus}
          ref={nameRef}
        />
        <div className="form-error">Min length 3, only alphabetic</div>
        <input
          ref={phoneRef}
          type="text"
          name="phone"
          placeholder="Enter your phone number..."
          data-field="phone"
          pattern="^[\d +-]+$"
          inputMode="tel"
          maxLength={11}
          minLength={11}
          onChange={updateField}
          value={phone}
          required
          onFocus={handleFocus}
        />
        <div className="form-error">Must contain 11 numbers</div>
      </div>
      <div className="form-row">
        <input
          ref={emailRef}
          placeholder="Enter your email address..."
          type="email"
          name="email"
          value={email}
          data-field="email"
          inputMode="email"
          onChange={updateField}
          onFocus={handleFocus}
          required
        />
        <div className="form-error">Invalid email address</div>
        <select
          ref={subjectRef}
          name="subject"
          value={subject}
          onChange={updateField}
          data-field="subject"
          onFocus={handleFocus}
        >
          <option value="0">Pick a subject</option>
          <option value="Contact">Contact</option>
          <option value="Quote">Quote</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
        <div className="form-error">Please select a subject</div>
      </div>
      <textarea
        ref={contentRef}
        value={content}
        placeholder="Start typing..."
        onFocus={handleFocus}
        onChange={updateField}
        data-field="content"
        rows={10}
      ></textarea>
      <div className="form-error">No special characters allowed</div>
      <Button>Submit</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 6rem 2rem;
  position: relative;

  > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
    
    &[data-active="true"] {
      opacity: 1;
      z-index: 1;
      transition: opacity 0.5s 0.1s ease, z-index 0s 0s;
      > span {
        animation: rotate linear 1s infinite;
      }
    }
    
    &[data-active="false"] {
      transition: opacity 0.5s 0s ease, z-index 0s 0.5s;
      opacity: 0;
      z-index: -1;
    }

    > span {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      content: "";
      border: 6px solid var(--purple);
      top: calc(50% - 40px);
      left: calc(50% - 40px);
      border-bottom-color: var(--lavender);
    }
  }

  .form-success {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--off-white);
    padding: 22px;
    width: 90%;
    box-shadow: 0 0 0.8rem rgba(0,0,0,0.3);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    i {
      font-size: 3rem;
      font-style: unset;
      text-align: center;
      width: 100%;
      display: block;
      margin-bottom: 4px;
    }
    strong {
      margin-top: 0;
      display: block;
      margin-bottom: 12px;
    }
    p {
      text-align: center;
    }

    button {
      display: block;
      margin: 24px auto 12px;
    }

    &[data-active="true"] {
      opacity: 1;
      z-index: 1;
      transition: opacity 0.5s 0.1s ease, z-index 0s 0s;
    }
    
    &[data-active="false"] {
      transition: opacity 0.5s 0s ease, z-index 0s 0.5s;
      opacity: 0;
      z-index: -1;
    }
  }

  input,
  textarea,
  select {
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 12px;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    margin: 12px 12px 0 12px;

    &[data-error="true"] {
      border-color: tomato;
      + div.form-error {
        display: block;
      }
    }
  }
  
  .form-error {
    display: none;
    color: white;
    margin: 4px 12px; 12px 12px;
    background-color: tomato;
    width: 100%;padding: 4px 12px;
    border-radius: 5px;
  }

  textarea {
    max-width: calc(100% - 24px);
    resize: none;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    input,
    select {
      width: 50%;
      flex-grow: 1;
      flex-basis: 300px;
    }
  }
  textarea {
    display: block;
    width: 100%;
  }

  button {
    margin-top: 2rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    
    to {
      transform: rotate(360deg);
    }
  }
`;

export { Form };
