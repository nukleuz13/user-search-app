import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './styles.css';

const App = () => {
    const [users, setUsers] = useState([
        { id: '1', name: 'Колесников Кирилл', avatarUrl: 'https://avatarko.ru/img/kartinka/12/film_robot_11011.jpg' },
        { id: '2', name: 'Дмитрий Данилин', avatarUrl: 'https://avavatar.ru/images/original/3/vhzdfjfms99k3gsH.jpg' },
        { id: '3', name: 'Дарт Вейдер', avatarUrl: 'https://avavatar.ru/images/full/21/5tghQsXJ4Zw482Bd.jpg' },
        { id: '4', name: 'Арнольд Зингерштольц', avatarUrl: 'https://avavatar.ru/images/full/21/vvH3OoimWLJ3x7Fq.jpg' },
        { id: '5', name: 'Хендай Туссанов', avatarUrl: 'https://avavatar.ru/images/full/19/SKj3WDu8Yriy4pnr.jpg' }
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Поиск пользователей бота</h1>
            <SearchBar searchTerm={searchTerm} onChange={handleSearchChange} />
            <UserList users={filteredUsers} />
        </div>
    );
};

export default App;
