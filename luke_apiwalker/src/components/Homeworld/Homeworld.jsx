import { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./Homeworld.module.css";

const Homeworld = (props) => {
	const [resourceSelectValue, setResourceSelectValue] = useState("select");
	const [idInputValue, setIdInputValue] = useState(0);
	const onResourceChange = (e) => setResourceSelectValue(e.target.value);
	const onIdChange = (e) => setIdInputValue(e.target.value);
	const onSearchClick = () => {
		navigate(`/${resourceSelectValue}/${idInputValue}`);
	};
	return (
		<div className={styles.Homeworld}>
			<header>
				<div className={styles.title}>
					<h1>Use the API, Luke!</h1>
				</div>
				<div className={styles.selectioners}>
					<div>
						<label htmlFor='resourceSelect'>Search for: </label>
						<select
							name='resource'
							id='resourceSelect'
							value={resourceSelectValue}
							onChange={onResourceChange}
						>
							<option value='select' disabled>
								-select resource-
							</option>
							<option value='people'>Person</option>
							<option value='planets'>Planet</option>
							<option value='species'>Species</option>
						</select>
					</div>
					<div>
						<label htmlFor='idInput'>ID: </label>
						<input
							type='text'
							name='id'
							id='idInput'
							value={idInputValue}
							onChange={onIdChange}
						/>
					</div>
					<div>
						<button type='button' onClick={onSearchClick}>
							Search
						</button>
					</div>
				</div>
			</header>
			<main>{props.children}</main>
		</div>
	);
};

export default Homeworld;
