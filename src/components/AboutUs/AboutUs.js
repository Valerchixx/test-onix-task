
import React from 'react';
import PropTypes from 'prop-types';

import aboutUs from '../../assets/images/aboutUs.png';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';

import styles from './scss/AboutUs.module.scss';

const AboutUs = ({aboutUsRef}) => (
	<div ref={aboutUsRef} className={styles.aboutUs}>
		<div className={styles.container}>
			<div className={styles.aboutUsInner}>
				<Title title='Our Philosophy' subTitle='about us' />
				<div className={styles.contentWrap}>
					<div className={styles.imgWrap}>
						<img src={aboutUs} alt='about us img' />
					</div>
					<div className={styles.cardsWrap}>
						<Paragraph
							headTitle='Sustainable'
							text={`Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Morbi
									et nisl hendrerit, aliquet mi sed,
									scelerisque tortor. Aliquam eu scelerisque
									quam, ac tristique dolor.
									Aliquam nulla risus`}
							index='01'
						/>
						<Paragraph
							headTitle='Fair & Share'
							text={`Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Morbi
									et nisl hendrerit, aliquet mi sed,
									scelerisque tortor. Aliquam eu scelerisque
									quam, ac tristique dolor.
									Aliquam nulla risus`}
							index='02'
						/><Paragraph
							headTitle='Experience'
							text={`Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Morbi
								et nisl hendrerit, aliquet mi sed,
								scelerisque tortor. Aliquam eu scelerisque
								quam, ac tristique dolor.
								Aliquam nulla risus`}
							index='03'
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

AboutUs.propTypes = {
	aboutUsRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
	]),
};
export default AboutUs;

