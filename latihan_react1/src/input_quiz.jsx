import React, { useState } from 'react';

function InputQuiz() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        alamat: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Input Data</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                <label>
                    Nama: {' '}
                    <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        placeholder="Masukkan Nama ..."
                    />
                </label>
                <label>
                    Email: {' '}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Masukkan Email ...."
                    />
                </label>
                <label>
                    Alamat: {' '}
                    <input
                        type="text"
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                        placeholder="Masukkan Alamat..."
                    />
                </label>
            </div>

            <div style={{ marginTop: '15px' }}>
                <p><strong>Hasil Inputan:</strong></p>
                <p>Nama: {formData.nama}</p>
                <p>Email: {formData.email}</p>
                <p>Alamat: {formData.alamat}</p>
            </div>
        </div>
    );
}

export default InputQuiz;