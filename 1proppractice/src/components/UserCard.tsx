// UserCard.tsx
import React from 'react';

import "./UserCard.css";

import ProfilePicture from './ProfilePicture';



interface UserProps {
  name: string;
  age: number;
  location: string;
  isFollowing: boolean;
  onFollow?: () => void;
  //adding more
  bio:string;
  avatarUrl: string;
  //optional follower count
  followerCount: number;
}


const UserCard: React.FC<UserProps> = ({ 
  name,
  age, 
  location, 
  isFollowing, 
  onFollow, 
  bio, 
  avatarUrl,
  followerCount
  }) => {
  
  avatarUrl = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
  
  return (
// style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}
<div className='user_card'>
      <ProfilePicture/>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <button onClick={onFollow} disabled={isFollowing}>
        {/* conditional rendering of words on button */}
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      <p>followerCount: {followerCount}</p>
      <p>avatarUrl: {avatarUrl}</p>
      <article>bio: {bio}</article>

    </div>
  );
};

export default UserCard;
