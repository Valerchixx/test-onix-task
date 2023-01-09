import React from 'react';
import PropTypes from 'prop-types';

import clarityMap from '../../assets/icons/clarityMap.png';

import styles from './scss/LocationCard.module.scss';

const LocationCard = ({title}) => (
	<div className={styles.cardInner}>
		<div className={styles.blurCard}></div>
		<div className={styles.contentWrap}>
			<div>
				<img src={clarityMap} alt='clarity_map' />
			</div>
			<div className={styles.titleWrap}>
				<p className={styles.title}>{title}</p>
				<p className={styles.subTitle}>Plan a trip</p>
			</div>
		</div>
	</div>
);

LocationCard.propTypes = {
	title: PropTypes.string.isRequired,
};

export default LocationCard;
