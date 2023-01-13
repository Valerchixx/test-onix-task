import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo/logo.png';
import Navigation from '../Navigation/Navigation';

import styles from './scss/Header.module.scss';

const Header = ({goToDestinationsRef, goToActivitiesRef, goToAboutUsRef, goToContactRef}) => (
	<div className={styles.header}>
		<div className={styles.container}>
			<div className={styles.headerWrap}>
				<div className={styles.logoWrap}>
					<img src={logo} alt='' />
				</div>
				<div>
					<Navigation
						goToActivitiesRef={goToActivitiesRef}
						goToAboutUsRef={goToAboutUsRef}
						goToDestinationsRef={goToDestinationsRef}
						goToContactRef={goToContactRef} />
				</div>
			</div>
		</div>
	</div>
);

Header.propTypes = {
	goToDestinationsRef: PropTypes.func.isRequired,
	goToActivitiesRef: PropTypes.func.isRequired,
	goToAboutUsRef: PropTypes.func.isRequired,
	goToContactRef: PropTypes.func.isRequired,
};

export default Header;
