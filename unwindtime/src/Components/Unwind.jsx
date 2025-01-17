import React from 'react';
import moment from 'moment';
import './Unwind.css';
import RelaxMethod from '../Components/RelaxMethod';
import { getDistance } from 'geolib';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function Unwind({ unwind, location, unwindID }) {
  const navigate = useNavigate();
  const formatTime = (datestamp) => {
    return moment(new Date(datestamp * 1000)).format('HH:mm');
  };

  const distanceBetween =
    location.latitude && unwind.location.latitude
      ? `Distance: ${getDistance(location, unwind.location, 1)} meters away`
      : '~';

  const conClickToChat = () => {
    navigate(`/unwindchat/${unwindID}`, { text: 'First' });
  };

  return (
    <>
      <motion.button
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
        className="unwind-event-container"
        onClick={conClickToChat}
        unwind={unwind}
      >
        <img className="profile-unwind-img" src={unwind.createdBy.profilePic} alt="" />
        <div className="name-and-time-container">
          <p>{unwind.createdBy.name} </p>
          <p>{`${formatTime(unwind.from)} - ${formatTime(unwind.till)}`}</p>
          <p> {distanceBetween} </p>
        </div>
        <RelaxMethod
          relaxMethod={unwind.relaxMethod}
          classColor="favoriteMethod"
          onClickRelaxMethod={() => 1 + 1}
        ></RelaxMethod>
      </motion.button>
    </>
  );
}
