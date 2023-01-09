import React from 'react';
import PropTypes from 'prop-types';

import quotes from '../../assets/icons/quotes.svg';

import styles from './scss/ReviewCard.module.scss';

const ReviewCard = ({name, position, img}) => (
	<div className={styles.reviewCardWrap}>
		<div className={styles.conatiner}>
			<div className={styles.reviewWrap}>
				<div className={styles.buble}>
					<div className={styles.contentWrap}>
						<img src={quotes} alt='quotes' />
						<p className={styles.text}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Auctor neque sed imperdiet nibh
                            lectus feugiat nunc sem. consectetur
                            adipiscing elit. nibh lectus feugiat
                             nunc
						</p>
					</div>
				</div>
				<div className={styles.pointer}>p</div>
				<div className={styles.aboutPerson}>
					<div className={styles.iconWrap}>
						<img src={img} alt='personIcon' />
					</div>
					<div>
						<h4 className={styles.name}>{name}</h4>
						<p className={styles.position}>{position}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

ReviewCard.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
};
export default ReviewCard;
