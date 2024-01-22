import React, { useState } from 'react';
// import './TabloComponent.css';

const TabloComponent = () => {
  const [data, setData] = useState([
    { id: 1, ad: 'John', soyad: 'Doe', yosh: 25 },
    { id: 2, ad: 'Jane', soyad: 'Doe', yosh: 30 },
    { id: 3, ad: 'Bob', soyad: 'Smith', yosh: 22 },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [newItem, setNewItem] = useState({ ad: '', soyad: '', yosh: '' });

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setEditIndex(null);
  };

  const handleSave = (index) => {
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleInputChange = (e, key) => {
    const value = e.target.value;
    setNewItem((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { id: prevData.length + 1, ...newItem }]);
    setNewItem({ ad: '', soyad: '', yosh: '' });
  };

  return (
    <div className='tabloo'>
      <table className="tablo">
        <thead>
          <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Yosh</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((satir, index) => (
            <tr key={satir.id}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newItem.ad}
                    onChange={(e) => handleInputChange(e, 'ad')}
                  />
                ) : (
                  satir.ad
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newItem.soyad}
                    onChange={(e) => handleInputChange(e, 'soyad')}
                  />
                ) : (
                  satir.soyad
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newItem.yosh}
                    onChange={(e) => handleInputChange(e, 'yosh')}
                  />
                ) : (
                  satir.yosh
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={() => handleSave(index)}>Saqlash</button>
                    <button onClick={handleCancel}>Bekor qilish</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Tahrirlash</button>
                    <button onClick={() => handleDelete(index)}>O'chirish</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ekle-form">
        <h2>Yangi ma'lumot qo'shish</h2>
        <input
          type="text"
          placeholder="Ism"
          value={newItem.ad}
          onChange={(e) => handleInputChange(e, 'ad')}
        />
        <input
          type="text"
          placeholder="Familiya"
          value={newItem.soyad}
          onChange={(e) => handleInputChange(e, 'soyad')}
        />
        <input
          type="text"
          placeholder="Yosh"
          value={newItem.yosh}
          onChange={(e) => handleInputChange(e, 'yosh')}
        />
        <button onClick={handleAdd}>Qo'shish</button>
      </div>
    </div>
  );
};

export default TabloComponent;
