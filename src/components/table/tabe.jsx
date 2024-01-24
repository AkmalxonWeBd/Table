import React, { useState, useEffect } from 'react';
import scc from "../style.css";

const TabloComponent = () => {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    Ismi: '',
    Familiyasi: '',
    Jinsi: '',
    Yoshi: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsAddingUser(true);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleAddUser = () => {
    setData([...data, newUser]);
    setNewUser({
      Ismi: '',
      Familiyasi: '',
      Jinsi: '',
      Yoshi: '',
    });
    setIsModalOpen(false);
    setIsAddingUser(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    if (isAddingUser) {
      handleAddUser();
    }
  };

  const handleInputChange = (key, value) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className='button'>
        <input
          type="text"
          placeholder='search...'
        />
        <div>
          <div>
            <button
              onClick={toggleModal}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Toggle modal
            </button>
            {isModalOpen && (
              <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                <div className="bg-white rounded-lg shadow p-4 w-full max-w-md">
                  <div className="relative">
                    <div className="flex items-center justify-between p-4 border-b rounded-t">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Create New Product
                      </h3>
                      <button
                        onClick={toggleModal}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4">
                      <div id='adduserr' className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ismi</label>
                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ismingiz..." required="" onChange={(e) => handleInputChange('Ismi', e.target.value)} />
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Familiya</label>
                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Familiyangiz..." required="" onChange={(e) => handleInputChange('Familiyasi', e.target.value)} />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label htmlFor="Yoshi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yoshi</label>
                          <input type="number" name="Yoshi" id="Yoshi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Yoshingiz..." required="" onChange={(e) => handleInputChange('Yoshi', e.target.value)} />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label htmlFor="Jinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jinsi</label>
                          <select id="Jinsi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={(e) => handleInputChange('Jinsi', e.target.value)}>
                            <option value="" disabled selected>Select Jinsi</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add new product
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <table id='tablo' className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Familiyasi
            </th>
            <th scope="col" className="px-6 py-3">
              Jinsi
            </th>
            <th scope="col" className="px-6 py-3">
              Yoshi
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.Ismi}
              </th>
              <td className="px-6 py-4">
                {item.Familiyasi}
              </td>
              <td className="px-6 py-4">
                {item.Jinsi}
              </td>
              <td className="px-6 py-4">
                {item.Yoshi}
              </td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleDelete(index)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabloComponent;