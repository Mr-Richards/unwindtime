import './Dashboard.css';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, logout } from '../Services/firebase';

import RelaxMethod from '../Components/RelaxMethod';
import { useSelector } from 'react-redux';

import { relaxMethods } from '../Media/relaxMethodsSVG';
import { updateProfile } from '../Services/firestore';

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Redux state setting
  const profile = useSelector((state) => state.profile.value);
  const favoRelaxMethods = useSelector((state) => state.favoRelaxMethods);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
  }, [user]); //eslint-disable-line

  const clickEventSaveProfile = async (e) => {
    e.preventDefault();

    updateProfile(profile, favoRelaxMethods);
    return navigate('/unwinds');
  };

  return (
    <div className="dashboard-container">
      <div className="introtext-container">
        <p>Welcome, {profile.name} </p>
        <p>please select a cool profile pic:</p>
      </div>

      <div className="relaxmethods-parent-container">
        <h3 className="relaxmethodspicker-title text-style-h-3">
          {' '}
          What are your favorite unwind activities?
        </h3>
        <div className="relaxmethods-container">
          {relaxMethods
            .sort((a, b) => a.id - b.id)
            .map((relaxMethod) => {
              return <RelaxMethod key={relaxMethod.id} relaxMethod={relaxMethod} />;
            })}
        </div>
      </div>

      <div className="dashboard__container">
        Logged in as
        <div>{profile.displayName}</div>
        <div>{profile.email} </div>
        <button className="dashboard__btn" onClick={clickEventSaveProfile}>
          {' '}
          Okay, let's unwind!
        </button>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
