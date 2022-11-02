import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import "../styles/ContactForm.css"

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  })

  function handleStateChange(e) {
    setMailerState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.phoneNumber]: e.target.value,
      [e.target.message]: e.target.value,
    }))
  }

  const submitEmail = async e => {
    e.preventDefault()
    console.log({ mailerState })
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then(res => res.json())
      .then(async res => {
        const resData = await res
        console.log(resData)
        if (resData.status === "success") {
          alert("Message Sent")
        } else if (resData.status === "fail") {
          alert("Message failed to send")
        }
      })
      .then(() => {
        setMailerState({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        })
      })
  }

  return (
    <div>
      <div className="contact-form-container">
        <div className="contact-form-wrapper">
          <form id="contact-form" onSubmit={submitEmail}>
            <div className="form-inst">
              <p>
                Fill out this form and we will contact you soon afterward &rarr;
              </p>
              <p>Fields that are marked with * are required</p>
            </div>
            <div className="controls">
              <div className="row">
                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label className="field-label">Name *</Form.Label>
                    <Form.Control
                      id="form_name"
                      type="text"
                      value={mailerState.name}
                      name="name"
                      className="form-control"
                      placeholder="Please enter your name *"
                      required="required"
                      data-error="Firstname is required."
                      onChange={handleStateChange}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label className="field-label">Phone *</Form.Label>
                    <Form.Control
                      id="form_phone"
                      value={mailerState.phoneNumber}
                      type="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Please enter your phone number *"
                      onChange={handleStateChange}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Group>
                    <Form.Label className="field-label">Email *</Form.Label>
                    <Form.Control
                      id="form_email"
                      value={mailerState.email}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Please enter your email *"
                      required="required"
                      data-error="Valid email is required."
                      onChange={handleStateChange}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Group>
                    <Form.Label className="field-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="form_message"
                      value={mailerState.message}
                      name="message"
                      className="form-control"
                      placeholder="*Write your message here"
                      rows="6"
                      required="required"
                      data-error="Please, leave us a message."
                      onChange={handleStateChange}
                    ></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-danger mt-3" onClick={submitEmail}>
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
