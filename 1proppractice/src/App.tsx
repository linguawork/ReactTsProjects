import React, {useState} from 'react';
import './App.css';
import UserCard from './components/UserCard'


function App() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(true);
  };

  return (
    <div className="App">
      <UserCard
        name="John Doe"
        age={30}
        location="New York, USA"
        isFollowing={isFollowing}
        onFollow={handleFollow}
        avatarUrl=''
        followerCount={11}
        bio = "Lorem ipsum ...."
      />
    </div>
  );

}

export default App;
