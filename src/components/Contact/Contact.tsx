import type { NextPage } from "next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Gmail from "../assets/gmail.webp";
import { ContactWrapper } from "./Contact.styles";
import {
  Column,
  Container,
  Flex,
  Row,
  Title,
} from "../../styles/GlobalComponents";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import FadeInWhenVisible from "../../helpers/FadeIn";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface IFormErrorValues {
  name: boolean;
  email: boolean;
  message: boolean;
}

export const Contact: NextPage = () => {
  const [values, setValues] = useState<IFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errorsFlag, setErrorsFlag] = useState<IFormErrorValues>({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const objFlag = { name: false, email: false, message: false };
    const obj = { name: "", email: "", message: "" };
    const lettersregex = /^[a-zA-Z ]*$/;
    const mailregex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (values?.name?.trim().length === 0) {
      objFlag.name = true;
      obj.name = "*Name cannot be empty !";
    } else if (values?.name.replace(/\s+/g, "").length <= 2) {
      objFlag.name = true;
      obj.name = "*Name cannot be less than 3 characters !";
    } else if (values?.name.replace(/\s+/g, "").length > 20) {
      objFlag.name = true;
      obj.name = "*Name cannot be greater than 20 characters !";
    } else if (!values?.name.match(lettersregex)) {
      objFlag.name = true;
      obj.name = "*Name can only contain alphabets";
    } else {
      objFlag.name = false;
      obj.name = "";
    }

    if (values?.email?.trim().length === 0) {
      objFlag.email = true;
      obj.email = "*Email cannot be empty !";
    } else if (values?.email.length > 40) {
      objFlag.email = true;
      obj.email = "*Email should be less than 40 characters !";
    } else if (!values?.email.match(mailregex)) {
      objFlag.email = true;
      obj.email = "*Please enter valid Email !";
    } else {
      objFlag.email = false;
      obj.email = "";
    }

    if (values?.message?.trim().length === 0) {
      objFlag.message = true;
      obj.message = "*Message cannot be empty !";
    } else if (values?.message.length > 200) {
      objFlag.message = true;
      obj.message = "*Please write a short message(Max 200 Characters) !";
    } else {
      objFlag.message = false;
      obj.message = "";
    }

    setErrorsFlag((errorsFlag) => ({ ...errorsFlag, ...objFlag }));
    setErrors({ ...errors, ...obj });

    if (!objFlag.name && !objFlag.email && !objFlag.message) {
      setValues({ name: "", email: "", message: "" });
      setLoading(true);
 

      toast('Vous avez soumis mon formulaire, merci de patienter', {
        duration: 2000,
       
        icon: '👏',
      
      });




      try {
        const response = await emailjs.sendForm(
          "service_rqo05ka",
          "template_e9yqtvb",
          form.current!,
          "_RfEsbn6g4z24LUv6"
        );

        if (response.status === 200) {

          setLoading(false);
          toast.success("Votre mail est arrivé dans ma boite mail",{duration:3000});

    
    

        }
      } catch (err) {
        // console.log(err);
        setLoading(false);
        toast.error(
          "Une erreur est survenu, pensez à vérifier votre connexion internet"
        );      }
    }
  };

  return (
    <ContactWrapper>
  
      <Container>
   
      <Title>Contact</Title>

        <Row>
          <Flex>
            <Column md={12}>
              <form className="contact_form" autoComplete="off" ref={form}>
                <div className="contact_form_formcontrol">
                  <label
                    htmlFor="name"
                    className="contact_form_formcontrol_label"
                  >
                    Name :
                  </label>
                  <input
                    className="contact_form_formcontrol_input"
                    id="name"
                    name="name"
                    type="text"
                    value={values?.name ?? ""}
                    onChange={handleChange}
                  />
                  <p className="contact_form_formcontrol_error">
                    {errorsFlag?.name && errors?.name}
                  </p>
                </div>
                <div className="contact_form_formcontrol">
                  <label
                    htmlFor="email"
                    className="contact_form_formcontrol_label"
                  >
                    Email :
                  </label>
                  <input
                    className="contact_form_formcontrol_input"
                    id="email"
                    name="email"
                    type="email"
                    value={values?.email ?? ""}
                    onChange={handleChange}
                  />
                  <p className="contact_form_formcontrol_error">
                    {errorsFlag?.email && errors?.email}
                  </p>
                </div>
                <div className="contact_form_formcontrol">
                  <label
                    htmlFor="message"
                    className="contact_form_formcontrol_label"
                  >
                    Message :
                  </label>
                  <textarea
                    className="contact_form_formcontrol_input"
                    id="message"
                    name="message"
                    value={values?.message ?? ""}
                    onChange={handleChange}
                  />
                  <p className="contact_form_formcontrol_error">
                    {errorsFlag?.message && errors?.message}
                  </p>
                </div>
                <div className="contact_form_formcontrol">
                  <button
                    className="contact_form_formcontrol_submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Column>

            {/* <Column md={6}>
              <Player
                autoplay
                loop
                src="lotties/contact.json"
                style={{ height: "300px", width: "300px" }}
              ></Player>
            </Column> */}
          </Flex>
        </Row>
      </Container>

    </ContactWrapper>
  );
};
