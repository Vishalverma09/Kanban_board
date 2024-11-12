import React from 'react';

// Example user profile image URL
const profileImageUrl = 'https://example.com/profile.jpg';

function Card() {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.header}>
        <span style={styles.cardId}>CAM-11</span>
        <img src={profileImageUrl} alt="Profile" style={styles.profileImage} />
      </div>
      <h2 style={styles.title}>Conduct Security Vulnerability Assessment</h2>
      <div style={styles.tags}>
        <div style={styles.tag}>
          <span style={styles.icon}>!</span>
        </div>
        <span style={styles.tagText}>Feature Request</span>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '300px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardId: {
    color: '#6B7280',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  profileImage: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
  title: {
    color: '#111827',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
  },
  icon: {
    color: '#111827',
    fontWeight: 'bold',
  },
  tagText: {
    color: '#6B7280',
    fontSize: '14px',
  },
};

export default Card;
