import React from "react";

interface Props {}

const App: React.FC<Props> = (props) => {
	return <div className=" bg-red-800"> App</div>;
};

App.defaultProps = {};

export default React.memo(App);
