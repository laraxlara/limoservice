import React, { useState }from 'react'
import axios from 'axios'
import Form  from "react-bootstrap/Form";
import { StaticImage } from 'gatsby-plugin-image';

import '../styles/BookingForm.css'

const BookingForm = () => {
    const [sent, setSent] = useState(false)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [numOfPassengers, setNumOfPassengers] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [pickUpAdress, setPickUpAdress] = useState('')
    const [dropOfAdress, setDropOfAdress] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')

    const handleSend = async (e) => {
        e.preventDefault();
        setSent(true)
        try {
            // TODO Replace with config url
            await axios.post('http://executivelimoservice:80/send', {
                name,
                phoneNumber,
                email,
                numOfPassengers,
                type,
                date,
                time,
                pickUpAdress,
                dropOfAdress,
                service,
                message
            })
            console.log(name)
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <div>
      <div className='booking-form-container'>
                        {!sent ? (
                            <div className = "booking-form-wrapper">
                                <form id="form" method='POST' onSubmit={handleSend}>
                                    <div className="controls">
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <p>Fill out this form and we will contact you soon afterward</p>
                                                <p>Fields with * are required</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Name *</Form.Label>
                                                    <Form.Control id="form_name"type="text" value={name} placeholder="Please enter your name *" onChange={(e) => setName(e.target.value)}  />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Phone *</Form.Label>
                                                    <Form.Control id="form_phone"  type="phone" value={phoneNumber} placeholder="Please enter your phone number *" onChange={(e) => setPhoneNumber(e.target.value)}   /> 
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Email *</Form.Label>
                                                    <Form.Control id="form_email" value={email} type="email" placeholder="Please enter your email *" onChange={(e) => setEmail(e.target.value)} />                                            
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Number Of Pasengers *</Form.Label>
                                                    <Form.Select aria-label="Default select example" onChange={(e) => setNumOfPassengers(e.target.value)}>
                                                        <option>--Select Number Of Passengers</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="3">4</option>
                                                        <option value="3">5</option>
                                                        <option value="3">6</option>
                                                        <option value="3">7</option>
                                                        <option value="3">8</option>
                                                        <option value="3">9</option>
                                                        <option value="3">10</option>
                                                        <option value="3">11</option>
                                                        <option value="3">12</option>
                                                        <option value="3">13</option>
                                                        <option value="3">14</option>
                                                    </Form.Select>                                               
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Date *</Form.Label>
                                                    <Form.Control type="date" value={date} className="modalTextField" onChange={(e) => setDate(e.target.value)} />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Time *</Form.Label>
                                                    <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Pick Up Location *</Form.Label>
                                                    <Form.Control id="form_adress" type="text" value={pickUpAdress}  className="form-control" placeholder="Please enter your pick up location adress or point of interest *" data-error="Firstname is required." onChange={(e) => setPickUpAdress(e.target.value)} />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-12">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Drop Off Location *</Form.Label>
                                                    <Form.Control id="form_adress" type="text" value={dropOfAdress} className="form-control" placeholder="Please enter your drop off location adress or point of interest *" data-error="Lastname is required." onChange={(e) => setDropOfAdress(e.target.value)} />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Type Of Service</Form.Label>
                                                    <Form.Select id="form_need" className="form-control" required data-error="Please specify your need." onChange={(e) => setType(e.target.value)}>
                                                        <option value="none" disabled>--Select Type Of Service--</option>
                                                        <option value="PointToPoint">Point-to-Point</option>
                                                        <option value="Hourly">Hourly/As Directed</option>
                                                    </Form.Select>                                                
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Choose Your Vehichle</Form.Label>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <div className="custom-control custom-checkbox image-checkbox">
                                                                <Form.Check type="checkbox" className="custom-control-Form." />
                                                                <Form.Label className="field-label" htmlFor="ck1a">
                                                                    <StaticImage src='../images/fleet1.jpg' alt="#" className="Image-fluid" />
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="custom-control custom-checkbox image-checkbox">
                                                                <Form.Check type="checkbox" className="custom-control-Form." id="ck1b" />
                                                                <Form.Label className="field-label" htmlFor="ck1b">
                                                                    <StaticImage src='../images/fleet2.jpg' alt="#" className="Image-fluid" />
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="custom-control custom-checkbox image-checkbox">
                                                                <Form.Check type="checkbox" className="custom-control-Form." id="ck1c" />
                                                                <Form.Label className="field-label" htmlFor="ck1c">
                                                                    <StaticImage src='../images/fleet3.jpg' alt="#" className="Image-fluid" />
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="custom-control custom-checkbox image-checkbox">
                                                                <Form.Check type="checkbox" className="custom-control-Form." id="ck1d" /> 
                                                                <Form.Label className="field-label" htmlFor="ck1d">
                                                                    <StaticImage src='../images/fleet4.jpg' alt="#" className="Image-fluid" />
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="custom-control custom-checkbox image-checkbox">
                                                                <Form.Check type="checkbox" className="custom-control-Form." id="ck1d" /> 
                                                                <Form.Label className="field-label" htmlFor="ck1d">
                                                                    <StaticImage src='../images/fleet5.jpg' alt="#" className="img-fluid" />
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>                  
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group>
                                                    <Form.Label className='field-label'>Message</Form.Label>
                                                    <Form.Control as="textarea" value={message} className="form-control" placeholder="*Do you have any special requests? *Will there be any stops? How many? *Do you want us to provide special food or drink for your ride? *For what type of special occassion do you need the ride? *Do you have any requests for us to come early? How much early?" rows="6" onChange={(e) => setMessage(e.target.value)}></Form.Control>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-12">
                                                <button type='submit' className='btn btn-danger mt-3'>Send Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ): (
                            <p>Email Sent</p>
                        )}
                    
                        </div>
                    </div>
  )
}

export default BookingForm
