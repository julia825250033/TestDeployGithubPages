import React, { useState } from 'react';

function TambahKurang() {
    const [hitung, setHitung] = useState(0);

    const handleTambah = () => {
        setHitung(prev => prev + 1);
    };

    const handleKurang = () => {
        setHitung(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Penambahan dan Pengurangan</h2>
            <p>Hasil Hitungan: {hitung}</p>
            <button onClick={handleTambah} style={{ marginRight: '10px' }}>Tambah</button>
            <button onClick={handleKurang}>Kurang</button>
        </div>
    );
}

export default TambahKurang;