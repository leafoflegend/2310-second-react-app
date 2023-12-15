import styles from './UserButton.module.css';

const UserButton = ({ user, handleClick }) => {
    return (
        <div
            className={styles.user_button}
            onClick={() => {
                handleClick(user);
            }}
        >
            <h4>{user.name}</h4>
        </div>
    );
};

export default UserButton;
