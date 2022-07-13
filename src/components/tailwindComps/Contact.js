import React, { useState, useRef, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import emailjs from 'emailjs-com';

import Confirm from './Confirmation'
import Contact from '../../images/6_ContactMe/PNG/contact.png'
import bg from '../../images/6_ContactMe/PNG/Background_1.png'
import submit from '../../images/6_ContactMe/PNG/button.png'
import UseInput from '../../customHooks/useInput'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const inputs = ['newName', 'email', 'message']
  const UseInputComp = () => {
  for (let i=0;i<inputs.length;i++) {

    return UseInput(inputs[i])
  }
}
const InputComp = UseInputComp().comp
const submitForm =  UseInputComp().submit

  const [agreed, setAgreed] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [validateName, setValidateName] = useState(undefined)
  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validateMessage, setValidateMessage] = useState(undefined)

  const form = useRef()

const handleChange = (e) => {
  switch(e.target.name) {
      case 'email':
           if (validateEmail !== undefined) {
               setValidateEmail(undefined)
           }
          setEmail(e.target.value)
          break;
      case 'name':
          if (validateName !== undefined) {
              setValidateName(undefined)
          }
          setName(e.target.value)
          break;
      case 'message':
          if (validateMessage !== undefined) {
              setValidateMessage(undefined)
          }
          setMessage(e.target.value)
          break;
    }
}
const validateError = (label, which) => {
  const errorMessage = () => (
      <div className="text-red-500 absolute">
      * {which} input is empty
      </div>
  )
  console.log(label)
 switch (label) {
     case name:
          setValidateName(errorMessage)
          break;
     case email:
         setValidateEmail(errorMessage)
         break;
      case message:
          setValidateMessage(errorMessage)
          break;
 }
}
const onSubmit = (e) => {
  switch ('') {
      case name:
          validateError(name, 'name');
          e.preventDefault()
          break;
      case email:
          validateError(email, 'email')
          e.preventDefault()
          break;
      case message:
          validateError(message, 'message');
          e.preventDefault()
          break;

      default:
         /* setURL() */
         setConfirm(true)
         emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
         e.preventDefault()
  }
}
const confirmMessage = ['Thanks for reaching out to Websites By Trevor!', 'We will respond ASAP']

  return (
    <div className=" overflow-hidden sm:px-6 lg:px-8 lg:py-24" style={{gridColumn:"span 7", gridRowStart:"fifth", gridRowEnd:"sixth", zIndex:"22"}}>
      <img src={bg} width="200px" height="100px" className=" bg-contact p-0 m-0 bg-no-repeat  h-72 absolute left-0  w-full" />
      <div className="px-4 relative max-w-xl mx-auto" >

        <div className="text-center pt-16">
          <h2 className="mx-auto">
            <img src={Contact} width="150px" height="100px" className="mx-auto -mt-16" loading="lazy" />
          </h2>

        </div>
        <div className="-mt-10 h-52">
        {confirm ? <Confirm prompt="false" message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
          <form ref={form} onSubmit={onSubmit} id="contact" className="sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">

              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {validateName}
                </label>

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={name}
                  onChange={handleChange}
                  key='name'
                  placeholder="name"
                  className="py-0 px-4 mx-auto mb-4 block text-gray-400 bg-black w-44 shadow-sm  border-0 border-b-2 border-grey-300"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 {validateEmail}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  key='name'
                  placeholder="email address"
                  className="py-0 px-4 mx-auto mb-4 block text-gray-400 bg-black w-44 shadow-sm border-0 border-b-2 border-grey-300 "
                />
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">

              </label> {validateMessage}
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={handleChange}
                  key='name'
                  placeholder="message"
                  className="py-0 px-4 mx-auto text-gray-400 mb-4 block resize-none bg-black w-44 shadow-sm  border-0 border-b-2 border-grey-300"

                />

              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className=" mx-auto block -mt-2"
              >
                <img src={submit} width="200px" height="50px" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}