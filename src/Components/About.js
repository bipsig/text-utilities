import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
	return (
		<div className="container mt-5">
			<div id="accordion">
				<div className="card">
					<div className="card-header" id="headingOne">
						<h5 className="mb-0">
							<button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Streamlining Your Text Updates: Simplify, Edit, Excel
								<span className="arrow-icon">
									<FaAngleDown />
									<FaAngleUp />
								</span>
							</button>
						</h5>
					</div>

					<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
						<div className="card-body">
							Welcome to Text Utilities, where we empower you to streamline your text updates like never before. Our platform is dedicated to providing you with a suite of innovative tools and resources that simplify the process of text management, editing, and refinement. Whether you're a professional writer, a student, or a business owner, our comprehensive range of services is designed to enhance your text experience and elevate your communication game.
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingTwo">
						<h5 className="mb-0">
							<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								Unleashing the Power of Words: Embrace Effective Communication
								<span className="arrow-icon">
									<FaAngleDown />
									<FaAngleUp />
								</span>
							</button>
						</h5>
					</div>
					<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
						<div className="card-body">
							At Text Utilities, we recognize the profound impact words can have on communication and connection. We are committed to helping you unlock the true potential of your words. Our platform offers more than just grammatical corrections; it provides you with in-depth insights and feedback on your writing style, clarity, and coherence. Embrace effective communication and ensure your message resonates with purpose and influence.
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingThree">
						<h5 className="mb-0">
							<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								AI-Powered Innovation: Elevating Textual Excellence
								<span className="arrow-icon">
									<FaAngleDown />
									<FaAngleUp />
								</span>
							</button>
						</h5>
					</div>
					<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
						<div className="card-body">
							Embracing the latest advancements in artificial intelligence, Text Utilities employs cutting-edge algorithms that go beyond simple corrections. Our AI-powered technology analyzes your text, offering personalized suggestions and solutions to elevate your writing to new heights. Seamlessly access real-time text analysis, automatic proofreading, and style enhancement to ensure your content stands out with professionalism and precision.
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingFour">
						<h5 className="mb-0">
							<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Your Partner in Textual Mastery: From Novice to Expert
								<span className="arrow-icon">
									<FaAngleDown />
									<FaAngleUp />
								</span>
							</button>
						</h5>
					</div>
					<div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
						<div className="card-body">
							Whether you're an aspiring writer looking to hone your skills or a seasoned wordsmith aiming for perfection, Text Utilities is your dedicated partner in textual mastery. With a user-friendly interface and a plethora of features at your fingertips, we make it easy for both beginners and experts to embrace the art of impactful communication.
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingFive">
						<h5 className="mb-0">
							<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Join Text Utilities Today: Redefine Your Textual Journey
								<span className="arrow-icon">
									<FaAngleDown />
									<FaAngleUp />
								</span>
							</button>
						</h5>
					</div>
					<div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
						<div className="card-body">
							The world of text awaits your exploration. Join thousands of satisfied users who have already redefined their textual journey with Text Utilities. Elevate your writing, simplify your editing, and excel in communication with our powerful tools and resources. Embrace the art of wordsmithery and make a lasting impression with every sentence you craft. The power of effective communication is within your grasp – embark on your text transformation journey with Text Utilities today.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
