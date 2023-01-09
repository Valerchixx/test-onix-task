import React from 'react';
import PropTypes from 'prop-types';

import styles from './scss/Title.module.scss';

const Title = ({title, subTitle}) => (
	<div>
		<h5 className={styles.subTitle}>{subTitle}</h5>
		<h2 className={styles.title}>{title}</h2>
	</div>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};

export default Title;
