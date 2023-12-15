import { useState } from 'react'
import { faker } from '@faker-js/faker';
import styles from './App.module.css';
import UserButton from './UserButton.jsx';
import UserProfile from './UserProfile.jsx';

const fakeUsers = new Array(10).fill('').map(() => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.person.bio(),
    profilePic: faker.image.avatar(),
  };
});

function App() {
  const [users, setUsers] = useState(fakeUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserButtonClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>User Database</h1>
      <hr className={styles.divider} />
      {
        selectedUser ? <UserProfile user={selectedUser} /> : null
      }
      {
        users.map((user) => {
          return <UserButton user={user} key={user.name} handleClick={handleUserButtonClick} />;
        })
      }
    </main>
  );
}

export default App
