/** @format */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import illustration_1 from './Assets/Images/Illustration1.png';
import illustration_2 from './Assets/Images/Illustration2.png';
import PostRecipe from './Components/PostRecipe/PostRecipe';
import RecipeSectionHeading from './Components/RecipeSectionHeading/RecipeSectionHeading';
import SearchRecipe from './Components/SearchRecipe/SearchRecipe';
class App extends Component {
	state = {
		recipeList: null,
	};
	componentDidMount() {
		axios
			.get('http://starlord.hackerearth.com/recipe')
			.then((res) => {
				console.log(res.data);
				this.setState({
					recipeList: res.data,
				});
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<div className='App'>
				<img
					src={illustration_2}
					alt='Bg_Image'
					className='bg_top_right-image'
				/>
				<img
					src={illustration_1}
					alt='Bg_Image'
					className='bg_bottom_left-image'
				/>
				<SearchRecipe />
				<RecipeSectionHeading />
				<div className='recipe_list_container'>
					<PostRecipe recipeList={this.state.recipeList} />
				</div>
			</div>
		);
	}
}

export default App;
