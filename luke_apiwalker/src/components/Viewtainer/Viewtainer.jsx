import axios from "axios";
import { useEffect, useState } from "react";
import ListView from "../ListView/ListView";
import StatView from "../StatView/StatView";
import styles from "./Viewtainer.module.css";

const Viewtainer = (props) => {
	const [data, setData] = useState({});
	const [subResourceName, setSubResourceName] = useState("");
	const { resource, id } = props;
	console.log(`Viewtainer(${resource}, ${id})`);
	const baseUrl = "http://swapi.dev/api/";
	const getSubResourceName = (url) => {
		console.log(`Viewtainer.getSubResourceName(${url})`);
		axios
			.get(url)
			.then((response) => {
				console.log(response);
				setSubResourceName(response.data.name);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		let url = `${baseUrl}${resource}`;
		url += id ? `/${id}` : "";
		console.log(`Viewtainer.useEffect.url = ${url}`);
		axios
			.get(url)
			.then((response) => {
				console.log(response);
				const resData = id ? response.data : response.data.results;
				setData(resData);
				if (
					resData.hasOwnProperty("homeworld") &&
					resData.homeworld != null
				)
					getSubResourceName(resData.homeworld);
			})
			.catch((err) => {
				console.log(err);
				setData({
					name: "These are not the droids you're looking for...",
				});
			});
	}, [resource, id]);
	return (
		<div className={styles.Viewtainer}>
			{!id && <ListView resource={resource} items={data} />}
			{id && <StatView stats={data} homeworldName={subResourceName} />}
		</div>
	);
};

export default Viewtainer;
