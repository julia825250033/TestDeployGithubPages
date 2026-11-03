import React from 'react';
import ReactDOM from 'react-dom/client';
import TambahKurang from './tambah_kurang.jsx';
import InputQuiz from './input_quiz.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div>
            <TambahKurang />
            <hr />
            <InputQuiz />
        </div>
    </React.StrictMode>
);