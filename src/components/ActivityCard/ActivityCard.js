import React from 'react';
import PropTypes from 'prop-types';

import styles from './scss/ActivityCard.module.scss';

const ActivityCard = ({img, title, quantity}) => (
	<div className={styles.cardWrap}>
		<img src={img} alt='activity' />
		<div className={styles.overlay}>
			<div className={styles.titleWrap}>
				<p className={styles.title}>{title}</p>
				<p className={styles.quantity}>{`${quantity} Activities`}</p>
			</div>
		</div>
	</div>

);

ActivityCard.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	quantity: PropTypes.string.isRequired,
};
export default ActivityCard;
