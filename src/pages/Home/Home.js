import React, {Component, createRef} from 'react';

import AboutUs from '../../components/AboutUs/AboutUs';
import Activities from '../../components/Activities/Activities';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hotels from '../../components/Hotels/Hotels';
import Intro from '../../components/Intro/Intro';
import Partners from '../../components/Partners/Partners';
import Reviews from '../../components/Reviews/Reviews';
import Testimonials from '../../components/Testimonials/Testimonials';

import styles from './scss/Home.module.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.destinationsRef = createRef(null);
		this.activitiesRef = createRef(null);
		this.aboutUsRef = createRef(null);
		this.contactRef = createRef(null);
	}

	goToSection = section => window.scrollTo({top: section.current.offsetTop, behavior: 'smooth'});

	render() {
		return (
			<div className={styles.wrap} >
				<section className={styles.headSection}>
					<Header
						goToDestinationsRef={() => this.goToSection(this.destinationsRef)}
						goToActivitiesRef={() => this.goToSection(this.activitiesRef)}
						goToAboutUsRef={() => this.goToSection(this.aboutUsRef)}
						goToContactRef={() => this.goToSection(this.contactRef)}
					/>
					<Intro/>
					<Testimonials destinationsRef={this.destinationsRef} />
				</section>
				<Activities activitiesRef={this.activitiesRef} />
				<AboutUs aboutUsRef={this.aboutUsRef} />
				<Hotels />
				<Partners />
				<Reviews />
				<Footer
					contactRef={this.contactRef}
					goToDestinationsRef={() => this.goToSection(this.destinationsRef)}
					goToActivitiesRef={() => this.goToSection(this.activitiesRef)}
					goToAboutUsRef={() => this.goToSection(this.aboutUsRef)}
					goToContactRef={() => this.goToSection(this.contactRef)} />
			</div>
		);
	}
}

export default Home;
