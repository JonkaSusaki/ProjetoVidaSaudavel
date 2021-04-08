import React, { useContext } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/navbar.module.scss';

import Hamburguer from './Hamburguer';

import { NavOpenContext } from '../contexts/navOpen';

/* Framer Motion */
const variants = {
	closed: {
		x: -210,
	},
	open: {
		x: 0,
		transition: {
			stiffness: 120,
		},
	},
};

export default function Navbar() {
	const { open } = useContext(NavOpenContext);
	const router = useRouter();
	const { user } = router.query;

	const animation = open ? 'open' : 'closed';

	return (
		<motion.div
			animate={animation}
			variants={variants}
			className={styles.container}
		>
			<div className={styles.top}>
				<div className={styles.toggle}>
					<Hamburguer />
				</div>
			</div>

			<div className={styles.list}>
				<Link href={`/${user}/1`}>
					<li className={styles.listItem}>Definindo seus objetivos</li>
				</Link>
				<Link href={`/${user}/2`}>
					<li className={styles.listItem}>As 5 partes de nossas vidas</li>
				</Link>
				<Link href={`/${user}/3`}>
					<li className={styles.listItem}>Começando pelo pensamento</li>
				</Link>
				<Link href={`/${user}/4`}>
					<li className={styles.listItem}>Identificando e avaliando o humor</li>
				</Link>
				<Link href={`/${user}/5`}>
					<li className={styles.listItem}>Registrando seus pensamentos</li>
				</Link>
			</div>

			<div className={styles.bottom}>
				<div className={styles.help}>
					<FontAwesomeIcon icon={faHandsHelping} className={styles.icon} />
					Fale conosco
				</div>
			</div>
		</motion.div>
	);
}
