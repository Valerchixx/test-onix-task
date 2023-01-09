
import React from 'react';
import PropTypes from 'prop-types';

import arrow from '../../assets/icons/arrow.svg';
import {cardTitles} from '../../constants/cardTitles';
import LocationCard from '../LocationCard/LocationCard';

import styles from './scss/Testimonials.module.scss';

const Destinations = ({destinationsRef}) => (
	<div ref={destinationsRef} className={styles.testimonials}>
		<div className={styles.container}>
			<div className={styles.testimonialsInner}>
				<div className={styles.iconWrap}>
					<p className={styles.navTitle}>See more</p>
					<img src={arrow} alt='angle_dwon' />
				</div>
				<div className={styles.cardsWrap}>
					{cardTitles.map(item => <LocationCard key={item} title={item} />)}
				</div>
			</div>
		</div>
	</div>

);

Destinations.propTypes = {
	destinationsRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
	]),
};

export default Destinations;
