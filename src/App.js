/** @format */

import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import illustration_1 from './Assets/Images/Illustration1.png';
import illustration_2 from './Assets/Images/Illustration2.png';
import Container from './Components/Container';
import FullRecipe from './Components/FullRecipe/FullRecipe';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Route exact path='/:id' component={FullRecipe} />
					<Route exact path='/' component={() => <Container />} />
				</BrowserRouter>
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
			</div>
		);
	}
}

export default App;
