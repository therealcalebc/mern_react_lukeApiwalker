import { Link } from "@reach/router";
import styles from "./ListView.module.css";

const ListView = (props) => {
	const { items, resource } = props;
	const baseUrl = "http://swapi.dev/api/";
	return (
		<div className={styles.ListView}>
			<h2>{resource} of Star Wars</h2>
			{items.length > 0 &&
				items.map((item, index) => (
					<p>
						<Link
							to={"/" + item.url.substring(baseUrl.length)}
							key={index}
						>
							{item.name}
						</Link>
					</p>
				))}
		</div>
	);
};

export default ListView;
