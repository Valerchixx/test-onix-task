
import React from 'react';
import PropTypes from 'prop-types';

import logoFooter from '../../assets/logo/logoFooter.png';
import Navigation from '../Navigation/Navigation';

import styles from './scss/Footer.module.scss';

const Footer = ({contactRef}) => (
	<div ref={contactRef} className={styles.footer}>
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logoWrap}>
					<img src={logoFooter} alt='logo footer' />
				</div>
				<div className={styles.navWrap}>
					<Navigation />
				</div>
			</div>
			<div className={styles.creditsWrap}>
				<div>
					<p>© 2022 Bikart Design. All rights reserved</p>
				</div>
				<div>
					<p>Author: Valeria Proshachenko</p>
				</div>
			</div>

		</div>
	</div>
);

Footer.propTypes = {
	contactRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
	]),
};

export default Footer;
