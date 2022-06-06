import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { auth, db, logout } from '../Services/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
// import chessSVG from '../media/Chess.svg';

function Dashboard() {
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');

    fetchUserName();
    // }, [user, loading]);
  });

  return (
    <div className="dashboard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="#000000"
        viewBox="0 0 32 45"
      >
        <path
          class="icon"
          d="M10.637 18H8.249c-.844 0-1.522.666-1.522 1.5v3c0 .832.678 1.416 1.522 1.416L9.771 24v.516c0 4.125-.392 8.118-2.283 11.484H24.23c-1.893-3.366-2.283-7.36-2.283-11.484V24h1.522c.844 0 1.522-.668 1.522-1.416v-3c0-.918-.676-1.584-1.522-1.584h-2.39c2.799-1.725 4.673-4.762 4.673-8.25 0-5.39-4.424-9.75-9.979-9.75-5.555 0-9.807 4.36-9.807 9.75 0 3.488 1.878 6.525 4.67 8.25Zm15.876 21H5.12C2.684 39 .64 41.016.64 43.416c0 .909.68 1.584 1.52 1.584h27.395c.841 0 1.522-.672 1.522-1.5 0-2.484-2.045-4.5-4.565-4.5Z"
        ></path>
      </svg>

      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
