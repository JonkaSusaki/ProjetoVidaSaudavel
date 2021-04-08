import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

import { useRouter } from 'next/router';

import { Tabs, Tab } from '@material-ui/core';
import ReactPlayer from 'react-player';

/* ----------------Content------------------- */
import content from '../../content.json';

import styles from '../../styles/pages/user.module.scss';

import Navbar from '../../components/Navbar';
import NavProvider from '../../contexts/navOpen';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const moduleId = context.params ? context.params.module : undefined;

	const module = await content.modulePage.modules[
		parseInt(moduleId as string, 10) - 1
	];

	return {
		props: {
			module,
		},
	};
};

export default function User(props) {
	const [tabValue, setTabValue] = useState(0);
	console.log(props.module);

	const router = useRouter();
	const { module } = router.query;

	const feedbackDisable = parseInt(module as string, 10) > 3;

	function handleTabs(e, number: number) {
		setTabValue(number);
	}

	return (
		<NavProvider>
			<div className={styles.container}>
				<Navbar />

				<div className={styles.content}>
					<div className={styles.card}>
						<div className={styles.header}>
							<Tabs
								indicatorColor="primary"
								textColor="primary"
								aria-label="disabled tabs example"
								centered
								value={tabValue}
								onChange={handleTabs}
							>
								<Tab label="Aula" className={styles.tab} />
								<Tab label="Exercício" className={styles.tab} />
								<Tab
									label="Feedback"
									className={styles.tab}
									disabled={feedbackDisable}
								/>
							</Tabs>
						</div>

						<div className={styles.body}>
							{tabValue === 0 && (
								<>
									<div className={styles.title}>
										<strong>{props.module.moduleTitle}</strong>
									</div>
									<ReactPlayer
										url={props.module.videoUrl}
										controls
										className={styles.reactPlayer}
									/>
								</>
							)}
							{tabValue === 1 && (
								<div className={styles.form}>
									<form>
										<div className={styles.title}>{props.module.title}</div>
										{props.module.questions.map((question) => (
											<div className={styles.formGroup}>
												<div className={styles.question}>{question.q}</div>
												<div className={styles.subquestion}>{question.sq}</div>
												<textarea className={styles.input} />
											</div>
										))}
										<div className={styles.button}>Enviar!</div>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</NavProvider>
	);
}
