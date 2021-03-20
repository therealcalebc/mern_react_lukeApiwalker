import { Link } from "@reach/router";
import styles from "./StatView.module.css";

const StatView = ({ stats, homeworldName }) => {
	const {
		name,
		birth_year,
		gender,
		eye_color,
		hair_color,
		skin_color,
		height,
		mass,
		population,
		climate,
		terrain,
		diameter,
		rotation_period,
		orbital_period,
		classification,
		designation,
		language,
		eye_colors,
		hair_colors,
		skin_colors,
		avg_height,
		avg_lifespan,
		// species,
		homeworld,
	} = stats;
	const baseUrl = "http://swapi.dev/api/";
	return (
		<div className={styles.StatView}>
			<h2>{name}</h2>
			{birth_year && (
				<p>
					<b>Birth Year: </b> {birth_year}
				</p>
			)}
			{gender && (
				<p>
					<b>Gender: </b> {gender}
				</p>
			)}
			{eye_color && (
				<p>
					<b>Eye Color: </b> {eye_color}
				</p>
			)}
			{hair_color && (
				<p>
					<b>Hair Color: </b> {hair_color}
				</p>
			)}
			{skin_color && (
				<p>
					<b>Skin Color: </b> {skin_color}
				</p>
			)}
			{height && (
				<p>
					<b>Height: </b> {height}
				</p>
			)}
			{mass && (
				<p>
					<b>Mass: </b> {mass}
				</p>
			)}
			{population && (
				<p>
					<b>Population: </b> {population}
				</p>
			)}
			{climate && (
				<p>
					<b>Climate: </b> {climate}
				</p>
			)}
			{terrain && (
				<p>
					<b>Terrain: </b> {terrain}
				</p>
			)}
			{diameter && (
				<p>
					<b>Diameter: </b> {diameter}
				</p>
			)}
			{rotation_period && (
				<p>
					<b>Rotation Period: </b> {rotation_period}
				</p>
			)}
			{orbital_period && (
				<p>
					<b>Orbital Period: </b> {orbital_period}
				</p>
			)}
			{classification && (
				<p>
					<b>Classification: </b> {classification}
				</p>
			)}
			{designation && (
				<p>
					<b>Designation: </b> {designation}
				</p>
			)}
			{language && (
				<p>
					<b>Language: </b> {language}
				</p>
			)}
			{eye_colors && (
				<p>
					<b>Eye Colors: </b> {eye_colors}
				</p>
			)}
			{hair_colors && (
				<p>
					<b>Hair Colors: </b> {hair_colors}
				</p>
			)}
			{skin_colors && (
				<p>
					<b>Skin Colors: </b> {skin_colors}
				</p>
			)}
			{avg_height && (
				<p>
					<b>Average Height: </b> {avg_height}
				</p>
			)}
			{avg_lifespan && (
				<p>
					<b>Average Lifespan: </b> {avg_lifespan}
				</p>
			)}
			{/* {species && (
				<p>
					{species.length > 0 && (
						<Link to={"/" + species.substring(baseUrl.length)}>
							Species
						</Link>
					)}
				</p>
			)} */}
			{homeworld && (
				<p>
					<b>Homeworld: </b>
					<Link to={"/" + homeworld.substring(baseUrl.length)}>
						{homeworldName}
					</Link>
				</p>
			)}
		</div>
	);
};

export default StatView;
