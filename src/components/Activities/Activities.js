
import React from 'react';
import PropTypes from 'prop-types';

import {activities} from '../../constants/activities';
import ActivityCard from '../ActivityCard/ActivityCard';
import Title from '../Title/Title';

import styles from './scss/Activities.module.scss';

const Activities = ({activitiesRef}) => (
	<div ref={activitiesRef} className={styles.activities}>
		<div className={styles.container}>
			<div className={styles.activitiesInner}>
				<Title title='Activities for Everyone' subTitle='Hungreds of' />
				<div className={styles.activityCardsWrap}>
					{activities.map(item => <ActivityCard key={item.id} {...item} />)}
				</div>
			</div>
		</div>
	</div>

);

Activities.propTypes = {
	activitiesRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
	]),
};
export default Activities;
