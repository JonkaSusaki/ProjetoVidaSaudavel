import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import content from '../content.json';

import styles from '../styles/pages/index.module.scss';

import Header from '../components/Header';

export const getStaticProps: GetStaticProps = async () => {
	const {
		startSection,
		howSection,
		aboutSection,
		helpSection,
	} = content.homePage;

	return {
		props: {
			startSection,
			howSection,
			aboutSection,
			helpSection,
		},
	};
};

export default function Home(props) {
	const [howItemsVisible, setHowItemsVisible] = useState(false);

	return (
		<div className={styles.container}>
			<Header />

			<div className={styles.content}>
				<div className={styles.titleSection} id="startSection">
					<img
						src="/vectors/wanderingMind.svg"
						alt="Imagem pensante"
						height={300}
					/>

					<div className={styles.title} id="title">
						{props.startSection.title}
					</div>
					<div className={styles.subTitle}>{props.startSection.subTitle}</div>
				</div>

				<div className={styles.howSection} id="howSection">
					<div className={styles.content}>
						<img src="/vectors/mindMap.svg" alt="Mapa mental" height={300} />

						<div className={styles.howSectionText}>
							<div className={styles.title}>{props.howSection.title}</div>
							<div className={styles.subTitle}>{props.howSection.subTitle}</div>
						</div>
					</div>
				</div>

				<div className={styles.aboutSection} id="aboutSection">
					<div className={styles.content}>
						<div className={styles.aboutSectionText}>
							<div className={styles.title}>{props.aboutSection.title}</div>
							<div className={styles.subTitle}>
								{props.aboutSection.subTitle} <br />
								<div className={styles.more}>
									<strong onClick={() => setHowItemsVisible(!howItemsVisible)}>
										{howItemsVisible ? 'Menos' : 'Saiba mais...'}
									</strong>
								</div>
								<div
									className={howItemsVisible ? styles.items : styles.noItems}
								>
									<div className={styles.title}>Missão</div>

									<div className={styles.subTitle}>
										{props.aboutSection.mission}
									</div>
									<div className={styles.title}>Visão</div>

									<div className={styles.subTitle}>
										{props.aboutSection.vision}
									</div>
									<div className={styles.title}>Valores</div>

									<div className={styles.subTitle}>
										{props.aboutSection.values.map((item) => (
											<li>{item}</li>
										))}
									</div>
								</div>
							</div>
						</div>

						<img
							src="/vectors/formingIdeas.svg"
							alt="Formação de ideias"
							height={300}
						/>
					</div>
				</div>

				<div className={styles.helpSection} id="helpSection">
					<div className={styles.helpSectionText}>
						<div className={styles.title}>{props.helpSection.title}</div>
						<div className={styles.subTitle}>{props.helpSection.subTitle}</div>

						<form className={styles.form}>
							<div className={styles.formGroup}>
								<label className={styles.label}>Nome: </label>
								<input type="text" className={styles.input} />
							</div>

							<div className={styles.formGroup}>
								<label className={styles.label}>Email: </label>
								<input type="text" className={styles.input} />
							</div>

							<div className={styles.formGroup}>
								<label className={styles.label}>Mensagem: </label>
								<textarea className={styles.textarea} />
							</div>

							<button className={styles.button}>Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
