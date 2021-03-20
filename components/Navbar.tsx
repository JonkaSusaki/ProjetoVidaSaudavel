import React, { useContext } from 'react';

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

	const animation = open ? 'open' : 'closed';

	return (
		<motion.div
			animate={animation}
			variants={variants}
			className={styles.container}
		>
			<div className={styles.toggle}>
				<Hamburguer />
			</div>

			<motion.div className={styles.list}>
				<li className={styles.listItem}>(Nome do módulo 1)</li>
				<li className={styles.listItem}>(Nome do módulo 2)</li>
				<li className={styles.listItem}>(Nome do módulo 3)</li>
				<li className={styles.listItem}>(Nome do módulo 4)</li>
				<li className={styles.listItem}>(Nome do módulo 5)</li>
			</motion.div>

			<div className={styles.help}>
				<FontAwesomeIcon icon={faHandsHelping} className={styles.icon} />
				Fale conosco
			</div>
		</motion.div>
	);
}
