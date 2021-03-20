import React from 'react';

import styles from '../../styles/pages/user.module.scss';

import Navbar from '../../components/Navbar';
import NavProvider from '../../contexts/navOpen';

export default function User() {
	return (
		<NavProvider>
			<div className={styles.container}>
				<Navbar />
			</div>
		</NavProvider>
	);
}
