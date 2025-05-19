import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_nkv10l6', 'template_bvtxt9j', form.current, {
          publicKey: '7SWs3PpwBtvP3nax8',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <form
      id="contact"
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-md border border-white"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>
      <label className="block mb-2 font-medium text-gray-700" htmlFor="user_name">
        Name
      </label>
      <input
        id="user_name"
        type="text"
        name="user_name"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label className="block mb-2 font-medium text-gray-700" htmlFor="user_email">
        Email
      </label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        required
      />
      <button
        type="submit"
        className="w-full mt-6 bg-[#FF5722] text-white font-semibold py-3 rounded-xl shadow-[0_0_20px_#FF5722] hover:bg-[#e64a19] transition duration-300 flex items-center justify-center gap-2"
      >
        Send Message
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10l9-6 9 6-9 6-9-6zM21 10v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10"
          />
        </svg>
      </button>
    </form>
  );
};
