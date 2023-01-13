import React from 'react';

import lackeHouse from '../../assets/icons/lakeHouse.png';
import magento from '../../assets/icons/magento.png';
import microsoft from '../../assets/icons/microsoft.png';
import Title from '../Title/Title';

import styles from './scss/Partners.module.scss';

const Partners = () => (
	<div className={styles.partners}>
		<div className={styles.container}>
			<Title title='Our Partners' subTitle='Network' />
			<div className={styles.logosWrap}>
				<div>
					<img src={microsoft} alt='microsoft' />
				</div>
				<div>
					<img src={magento} alt='microsoft' />
				</div>
				<div>
					<img src={lackeHouse} alt='microsoft' />
				</div>
			</div>
		</div>
	</div>

);

export default Partners;
