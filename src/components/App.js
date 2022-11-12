import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;

// NG: <a>タグで移動すると、ページ遷移する度にHTMLファイルがリクエストされて、JSファイルは破棄される！
// const Pageone = () => {
// 	return
//    <div>
//       <div>page one</div>
//        <a href="/pagetwo">Navigate to page two</a>
//    </div>;
// };
// const Pagetwo = () => {
// 	return (
// 		<div>
// 			<div>page two</div>
// 			<button>click me</button>
// 		</div>
// 	);
// };
