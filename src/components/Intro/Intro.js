import React from 'react';

import styles from './scss/Intro.module.scss';

const Intro = () => (
	<div className={styles.intro}>
		<div className={styles.container}>
			<div className={styles.introInner}>
				<h6 className={styles.descr}>Explore</h6>
				<h1 className={styles.title}>Norway</h1>
			</div>
		</div>
	</div>
);

export default Intro;
