import styles from "./SimpleCard.module.css";

const SimpleCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.title}>Card Title</div>
			<div className={styles.description}>
				This is a short description of the card to showcase how tailwind
				compare to regular CSS
			</div>
			<button className={`${styles.button} ${styles.primary}`}>
				Action 1
			</button>
			<button className={`${styles.button} ${styles.secondary}`}>
				Action 2
			</button>
		</div>
	);
};

export default SimpleCard;
