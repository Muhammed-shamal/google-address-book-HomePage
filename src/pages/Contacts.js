import React from 'react'
import { contactsData } from '../Components/Functions/ContactList'
import contactIcon from '../Components/UI/svg_img/unnamed.webp'
import { BiDotsHorizontal, BiPrinter, BiShare } from 'react-icons/bi'
import './contact.css'

export default function Contacts() {
  return (
    <div className='container'>
      <div className="tb-hd">Contacts</div>
      <div className='main mt-1 mb-0'>
        <table>
          <thead>
            <tr >
              <th scope="col" id="title-column">Name</th>
              <th scope="col" id="email-column">Email</th>
              <th scope="col" id="phone-column">Phone Number</th>
              <th scope="col" id="job-column">Job Title</th>
              <th scope="col" id="labels-column">Labels</th>
              <th className='dots-button'><BiPrinter /></th>
              <th className='dots-button'><BiShare /> </th>
              <th className='dots-button'><BiDotsHorizontal /></th>
            </tr>
          </thead>
          <tbody>
            <div className="mb-3">
              <small style={{ color: 'gray', fontWeight: "bold" }}>Contacts</small>
            </div>
            {contactsData.map((contact, index) => (
              <tr key={index} >
                <td><img src={contactIcon} className='me-3 mb-1 tbl-icon' alt='icon' width="24" height="auto" />
                  {contact.name}
                </td>
                <td className="me-3">{contact.email}</td>
                <td className="me-3">{contact.phoneNumber}</td>
                <td>{contact.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
