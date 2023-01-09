import React from 'react';
import PropTypes from 'prop-types';

import raiting from '../../assets/icons/raiting.png';

import styles from './scss/HotelCard.module.scss';
const HotelCard = ({price, name, img}) => (
	<div className={styles.hotelCardWrap}>
		<div className={styles.imgWrap}>
			<img src={img} alt='hotel' />
		</div>
		<div className={styles.titleWrap}>
			<div className={styles.hotelNameWrap}>
				<p className={styles.hotelName}>{name}</p>
			</div>
			<div>
				<img src={raiting} alt='raiting' />
			</div>
		</div>
		<p className={styles.price}>{`$${price}`}</p>
	</div>
);

HotelCard.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};
export default HotelCard;
