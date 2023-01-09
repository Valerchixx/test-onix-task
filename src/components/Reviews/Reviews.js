import React from 'react';

import {reviewers} from '../../constants/reviewers';
import ReviewCard from '../ReviewCard/ReviewCard';

import styles from './scss/Reviews.module.scss';

const Reviews = () => (
	<div className={styles.reviews}>
		<div className={styles.container}>
			<div className={styles.reviewsWrap}>
				{reviewers.map(item => (
					<ReviewCard key={item.id} {...item} />
				))}
			</div>
		</div>
	</div>
);

export default Reviews;
