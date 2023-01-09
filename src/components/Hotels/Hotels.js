import React from 'react';

import {hotels} from '../../constants/hotelCards';
import HotelCard from '../HotelCard/HotelCard';
import Title from '../Title/Title';

import styles from './scss/Hotels.module.scss';

const Hotels = () => (
	<div className={styles.hotels}>
		<div className={styles.container}>
			<Title title='Hotels and Appartements' subTitle='Beauties' />
			<div className={styles.cardsWrap}>
				{hotels.map(item => (
					<HotelCard key={item.id} {...item} />
				))}
			</div>
		</div>
	</div>
);

export default Hotels;
