/* eslint-disable arrow-body-style */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './scss/Navigation.module.scss';

const Navigation = ({goToActivitiesRef, goToAboutUsRef, goToDestinationsRef, goToContactRef}) => {
	return (
		<div className={styles.nawWrap}>
			<a href='#destinations' onClick={goToDestinationsRef} className={styles.link}>Destinations</a>
			<a href='#activities' onClick={goToActivitiesRef} className={styles.link}>Activities</a>
			<a href='#AboutUs' onClick={goToAboutUsRef} className={styles.link}>About Us</a>
			<a href='#contact' onClick={goToContactRef} className={styles.link}>Contact</a>
		</div>

	);
};

Navigation.propTypes = {
	goToActivitiesRef: PropTypes.func.isRequired,
	goToDestinationsRef: PropTypes.func.isRequired,
	goToAboutUsRef: PropTypes.func.isRequired,
	goToContactRef: PropTypes.func.isRequired,
};

export default Navigation;
