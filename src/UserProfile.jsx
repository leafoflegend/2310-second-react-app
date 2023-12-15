import styles from './UserProfile.module.css';

const UserProfile = ({ user }) => {
    return (
        <div className={styles.container}>
            <img className={styles.profile_img} src={user.profilePic} />
            <span className={styles.name_header}>{user.name}</span>
            <a className={styles.email_header} href={`mailto:${user.mail}`}>{user.email}</a>
            <p>{user.bio}</p>
        </div>
    );
};

export default UserProfile;
