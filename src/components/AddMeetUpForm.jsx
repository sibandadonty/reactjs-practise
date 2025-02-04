import React, { useRef } from "react";

function AddMeetUpForm(props) {
  const titleRef = useRef();
  const imageUrlRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();

    const meetupData = {
        title: titleRef.current.value,
        imageUrl: imageUrlRef.current.value,
        address: addressRef.current.value,
        description: descriptionRef.current.value
    }

    props.onAddMeetup(meetupData);
  }

  return (
    <form className="max-w-[500px] mx-auto" onSubmit={submitHandler}>
      <div className="mb-2">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter meet up title"
          required
          ref={titleRef}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image Url
        </label>
        <input
          type="url"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter meet up image url"
          required
          ref={imageUrlRef}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter meet up address"
          required
          ref={addressRef}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="description"
          id="description"
          required
          ref={descriptionRef}
        ></textarea>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Meetup</button>
    </form>
  );
}

export default AddMeetUpForm;
