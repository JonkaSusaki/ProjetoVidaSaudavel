import React, { useContext } from 'react';

import { motion, useCycle } from 'framer-motion';
import styles from '../styles/components/hamburguer.module.scss';

import { NavOpenContext } from '../contexts/navOpen';

/* Framer Motion */
const topVariants = {
	closed: {
		rotate: 0,
		y: 0,
	},
	open: {
		rotate: 45,
		y: 5,
	},
};

const midVariants = {
	closed: {
		opacity: 1,
	},
	open: {
		opacity: 0,
	},
};

const botVariants = {
	closed: {
		rotate: 0,
		y: 0,
	},
	open: {
		rotate: -45,
		y: -5,
	},
};

/* eslint-disable no-unused-vars */
export default function Hamburguer() {
	const { open, toggle } = useContext(NavOpenContext);

	const [animation, cycleAnimation] = useCycle('open', 'closed');

	function click() {
		toggle();
		cycleAnimation();
	}

	return (
		<div className={styles.container} onClick={click}>
			<motion.div
				animate={animation}
				variants={topVariants}
				className={styles.bar}
			/>
			<motion.div
				animate={animation}
				variants={midVariants}
				className={styles.bar}
			/>
			<motion.div
				animate={animation}
				variants={botVariants}
				className={styles.bar}
			/>
		</div>
	);
}
