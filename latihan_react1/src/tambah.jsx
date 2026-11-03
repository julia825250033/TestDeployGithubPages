import React, { useState } from 'react';
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Penambahan Angka</h2>
            <div>
                <h2>Penambahan Ke: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Tambah 1 Lagi</button>
            </div>
        </div>
    );
}
export default App;