import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from '../styles/components/header.module.scss';

const Header = () => {
	const [windowScrolled, setWindowScrolled] = useState(false);

	useEffect(() => {
		/* eslint-disable no-undef */
		window.addEventListener('scroll', () => {
			/* eslint-disable no-unused-expressions */
			window.pageYOffset > 60
				? setWindowScrolled(true)
				: setWindowScrolled(false);
		});
	}, []);

	return (
		<div
			className={
				windowScrolled ? styles.containerColored : styles.containerTransparent
			}
			id="container"
		>
			<div className={styles.content}>
				<div className={styles.leftHeader}>
					<div className={styles.logo}>Logo</div>

					<ul className={styles.menu}>
						<a href="#startSection">Início</a>
						<a href="#howSection">Como funciona</a>
						<a href="#aboutSection">Sobre nós</a>
						<a href="#helpSection">Ajuda</a>
					</ul>
				</div>

				<Link href="/user/1">
					<div className={styles.button}>
						<a>Entrar</a>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
