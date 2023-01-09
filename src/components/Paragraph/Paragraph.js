import React from 'react';
import PropTypes from 'prop-types';

import styles from './scss/Paragraph.module.scss';

const Paragraph = ({headTitle, text, index}) => (
	<div className={styles.wrap}>
		<div className={styles.indexWrap}>
			<p className={styles.index}>{index}</p>
		</div>
		<div className={styles.textWrap}>
			<h2 className={styles.headTitle}>{headTitle}</h2>
			<p className={styles.text}>{text}</p>
		</div>
	</div>
);

Paragraph.propTypes = {
	headTitle: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	index: PropTypes.string.isRequired,
};

export default Paragraph;
