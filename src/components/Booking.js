import React from 'react';
import styled from 'styled-components';


const Booking = () => {
    return (
        <div>
        <div className="form">
          <FormBody>
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="fullname">
                  <label className="form__label" for="lastName">Full Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="FullName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">NID Number </label>
                  <input className="form__input" type="number"  id="password" placeholder="NID"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Religion </label>
                  <input className="form__input" type="text" id="confirmPassword" placeholder="Religion"/>
              </div>
          </FormBody>

          
          <ButtonAlign>
              <BookingBtn type="submit" class="btn">Book Now!!!</BookingBtn>
          </ButtonAlign>
          </div>
        </div>
    );
};

export default Booking;

const FormBody=styled.div`
    margin-top:50px;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
    padding:20px;
`
const BookingBtn=styled.button`
    border-radius:10px;
    background-color: lightblue;
    color:gray;
    padding:10px;
    border:1px solid lightblue;
   
`
const ButtonAlign=styled.div`
    margin-top:80px;
    display:flex;
    justify-content:center;
`