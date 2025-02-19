"use client";
import { FormEvent } from "react";
import handleRegistration from "../../lib/auth/handleRegistration";
const page = () => {
  //e: FormEvent<HTMLFormElement> https://stackoverflow.com/questions/73819465/argument-of-type-eventtarget-is-not-assignable-to-parameter-of-type-htmlforme
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    return handleRegistration(formData);
  };

  return (
    <>
      Register
      <form className="flex flex-col max-w-[500px]" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border text-black"
        />
        <label htmlFor="username">Username: </label>
        <input
          type="username"
          name="username"
          id="username"
          className="border text-black"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border text-black"
        />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="border text-black"
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default page;
