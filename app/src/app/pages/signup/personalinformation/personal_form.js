"use client"; // This is a client component 👈🏽

import { useState } from "react";
import {DatePicker} from "antd"
import dayjs from "dayjs";

export default function signup_form() {

  const [userfirstname, setUserFirstname] = useState("");
  const [userlastname, setUserLastname] = useState("");
  const [userphone, setUserphone] = useState("");
  const [useraddress, setUseraddress] = useState("");
  const [date, setNewDate] = useState(new dayjs(null));
  // console.log(!date.value)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted date: ", date)
    const res = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userfirstname,
        userlastname,
        userphone,
        useraddress,
        date,
      }),
    });

  };

  return (
    <>
      <div className="relative w-screen h-screen bg-registerbg bg-fixed">
        <div className="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
          <img
            className="object-contain w-full h-full  "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute bottom-[20px] left-[120px]  w-[120px] h-[150px]">
          <img
            className="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
          <img
            className="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-none absolute top-0 left-0 right-0 bottom-0  w-2/3 h-3/4 m-auto rounded-[40px] bg-white/70 backdrop-blur-sm">
          <div className=" col-span-1 flex flex-col px-10 py-20 w-auto h-full bg-white">
            <img
              className="object-scale-down w-full h-1/2 "
              src="/image/reg_img1.png"
            ></img>
            <h1 className="font-Gilroy_bd text-blue text-sp leading-10">
              Welcome to<br></br> Literia{" "}
            </h1>
            <h3 className="font-Gilroy_sb text-blue text-sm">
              Hundred of book to choose
            </h3>
          </div>
          <div className="col-span-2 flex flex-col  justify-center items-center w-auto h-full ">
            <h1 className="font-Gilroy_bd text-blue text-sp -ml-[280px]">
              Personal Information
            </h1>
            <div className="flex flex-col w-max h-max">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-none grid-row-4"
                >
                  <input
                    type="text"
                    onChange={(e) => setUserFirstname(e.target.value)}
                    value={userfirstname}
                    id="Firstname"
                    placeholder="First name"
                    className="row-span-1 w-[380px] h-[38px] my-2   "
                  />
                  <input
                    type="text"
                    onChange={(e) => setUserLastname(e.target.value)}
                    value={userlastname}
                    id="Lastname"
                    placeholder="Last name"
                    className="row-span-1 w-[380px] h-[38px] my-2  "
                  />
                   <input
                    type="text"
                    onChange={(e) => setUseraddress(e.target.value)}
                    value={useraddress}
                    id="address"
                    placeholder="Address"
                    className="row-span-1 w-[380px] h-[38px] my-2  "
                  />
                  <input
                    type="text"
                    onChange={(e) => setUserphone(e.target.value)}
                    value={userphone}
                    id="phone"
                    placeholder="Phone number"
                    className="row-span-1 w-[380px] h-[38px] my-2"
                  />
                  <div >
                    <DatePicker
                      placeholder={!date.value? "Date of Birth" : date }
                      className="row-span-1 w-[380px] h-[38px] my-2"
                      onChange={(e) => {
                        setNewDate(e.toDate());
                        console.log(date);
                      }}
                    />
                  </div>
                  <p className="items-end ml-auto font-Gilroy_md text-red text-sm">
                    Already have an account? Sign in
                  </p>
                  <button
                    className=" w-[380px] h-[60px] my-5 bg-blue p-3 rounded-[12px] border-none text-white text-xl font-Gilroy_bd"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}