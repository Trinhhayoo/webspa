
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";

import skincare1 from "../skincare2.jpg";

import "./Form.css";
const baseURL = "http://devdb.klabs.life/api/advises";
const options = ["Chân Mày", "Môi", "Trị Mụn", "Chăm Sóc Da", "Triệt Lông"];
const Main = styled("div")`
  font-family: sans-serif;
  ${'' /* background: #f0f0f0; */}
  height: 70vh;
`;

const DropDownContainer = styled("div")`
  width: 15em;
 
`;

const DropDownHeader = styled("div")`
  ${'' /* margin-bottom: 0.8em; */}
  padding: 0.2em 2em 0.2em 1em;

  border: 5px;
  background-color: grey;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;

`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
const defaultFormFields = {
    phoneNumber: '',
    service: '',
    name: '',
    message: '',
    image: '',
}
const FormTuVan = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { phoneNumber, service, name, message, image } = formFields;

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });

    }
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts",

        headers: {
            'Content-type': 'application/json'
        }
    });
 

   
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = (event) => () => {
       
        setSelectedOption(event);
        setIsOpen(false);
                const newList = () => {
                    if (formFields.service !== event) {
                        

                        const updatedItem = {
                            ...formFields,
                            service: event,
                        };
                       
        return updatedItem;
                    }

                }
  
        const newForm = newList();
        setFormFields( newForm);

        console.log(newForm)
      




        
        const getCustomersData = () => {
            client
                .get("http://devdb.klabs.life/api/advises")
                .then(data =>
                    console.log(data.data.data))

                .catch(error => console.log(error));
        };
        getCustomersData();
    };


    const submitHandler = async (event) => {

        event.preventDefault();
        console.log(formFields)

        await axios.post("http://devdb.klabs.life/api/advises", {
            data: {
                phoneNumber,
                service,
                name,
                message,
                image
            }
        }).then(res => {
            
            setFormFields(defaultFormFields);
            this.input.value = '';
            this.setState({ value: '' })
        })
        .catch(error => console.log(error));
    };
    return (
        <div className="TV">

            <div className="itemTV title-TV">
                <h2 className=" title-tv1">TƯ VẤN</h2>
                {/* <h2 className="title-feedback2">FEEDBACK</h2> */}
                <hr className="titleTV-line" />

            </div>
            <div className="itemTV skincareTV ">
                <img className=" skincare-image" src={skincare1} />
            </div>


            <div className="itemTV conclusionTV">
                <h1 className="title-tv2">BEAUTY PROFESSIONALS</h1>

                <h1 className="title-tv2">FOR SPA </h1>


            </div>

            <div className="itemTV formItem name">
                <label for="input" className="Input-label">Your Name</label>
                <br className="straight-line" />
                <input type="text name"
                    className="Input-text input"
                    label="name"
                    required
                    onChange={handleChange}
                    name="name"
                    value={name}
                     />
            </div>
            <div className="itemTV formItem phone">
                <label for="input" className="Input-label">Phone Number</label>
                <br className="straight-line" />
                <input type="text phoneNumber " className="Input-text input"
                    label="phoneNumber"
                    required
                    onChange={handleChange}
                    name="phoneNumber"
                    value={phoneNumber}
                />
            </div>
            <div className="itemTV formItem ser ">
                <label for="input" className="Input-label">Select Service</label>

                <DropDownContainer className="hover-drop">
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || "Service"}
                    </DropDownHeader>
                    {isOpen && (
                        <DropDownListContainer>
                            <DropDownList>
                                {options.map(option => (
                                    <ListItem type="service" label="service"
                                        required
                                        name="service" onClick={onOptionClicked(option)} key={Math.random()}>
                                        {option}
                                    </ListItem>
                                ))}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>

            </div>
            <div className="itemTV formItem demand">
                <label for="input" className="Input-label demand-text">Your demand</label>
                <br className="straight-line" />
                <textarea type="text message" className="Input-text input-demand" placeholder="type text here"
                    label="message"
                    required
                    onChange={handleChange}
                    name="message"
                    value={message}
                ></textarea>
                {/* <input type="text" className="Input-text input-demand" /> */}
            </div>

            <div className="itemTV but">
                <button className="submit-demand" onClick={submitHandler}>Send Your Demand</button>
            </div>



        </div>
    );
}
export default FormTuVan;