<strong>The Eras Tour Outfit Generator</strong> is a fan-made web project that allows users to relive the magic of Taylor Swift’s iconic
Eras Tour by selecting their favorite outfits and generating a personalized keepsake image.

I designed and developed this interactive tool using JavaScript, Bootstrap and Canvas API, ensuring a seamless
experience for fans to customize and download their own tour memories. The project also tackles technical challenges
like image handling, dynamic DOM manipulation and user-friendly UI design.

This project showcases my skills in front-end development, interactivity, and user experience design, while celebrating
an unforgettable era in music history 🫶🏻✨

• <strong>Company:</strong> Personal Project<br />
• <strong>Buildout</strong>: Bootstrap | HTML | CSS | JavaScript | WCAG<br />
• <strong>Needs</strong>:<br />
<ul>
	<li>Bootstrap for responsive design.</li>
	<li>Provided visual feedback when an image was selected.</li>
	<li>Ensuring the user could easily download their customized keepsake.</li>
</ul>

• </i><strong>Technical Challenges</strong>:
<ol>
	<li><strong>Data Management</strong><br />
		Store all relevant details—including Era ID, Era name, Era leg ID, and associated outfits—within a structured
		JavaScript object.​ This centralizes the data, making it more manageable and accessible.​ Example:
		<pre>
			<code>
const eras = [
	{
		discID: 6,
		name: "Reputation",
		firstLegID: 4,
		firstLegOutfits: ["Red &amp; Black"],
		lastLegID: 5,
		lastLegOutfits: ["Red &amp; Black", "Gold &amp; Black"]
	}
]
			</code>
		</pre>
	</li>
	<li><strong>Data Processing</strong><br />
		Filter the dataset based on the presence of the Era leg ID (whether it is undefined or contains a numerical
		value). Subsequently, sort the filtered data according to the user's selection from the homepage buttons (First
		Leg or Second Leg). Finally, dynamically generate HTML content for each outfit corresponding to its respective
		Era within the JavaScript object.​</li>
	<li><strong>Constructing HTML for Each Outfit</strong><br />
		Iterate over the sorted eras and their outfits to dynamically generate and insert HTML elements into the DOM.
	</li>
	<li><strong>User Interface Initialization</strong><br />
		Ensure that the menu option for the initial Era is visible upon page load and the img title appears in
		grayscale, along with displaying the outfits associated with this first Era.​</li>
	<li><strong>Progress Bar</strong><br />
		Only visible on mobile devices, appears to show users how far along they are in the process. The active Era
		features an animation.</li>
	<li><strong>User Interaction</strong><br />
		Allow users to select only one outfit per Era, with selections dynamically updating the Canvas element to
		reflect the chosen outfits.​ That selection, changes the img of the active Era (menu) from grayscale to color.
	</li>
	<li><strong>Canvas Implementation</strong><br />
		Implement a Canvas element that dynamically loads and draws multiple images.​ Adjusts each image positions based
		on the selected outfits and the order of the Eras, ensuring a cohesive and visually appealing presentation.​
	</li>
</ol>

• <strong>Workflow</strong>:
<ol>
	<li><strong>User Interaction - Selecting Outfits</strong>
		<ul>
			<li>When users arrive at the homepage, they can choose between visiting the contact page or starting their
				outfit selection journey by clicking the button with the concert leg they attended.</li>
			<li>The user navigates through the eras, selecting one outfit per era. Clicking an outfit highlights the
				selection, automatically moving to the next era.</li>
			<li>If the user changes an outfit, the selection updates dynamically in the JavaScript object, ensuring only
				one outfit per era is stored.</li>
			<li>The selection process continues until all outfits are chosen, unlocking the "Generate" button.</li>
			<li>The user clicks "Generate" to preview the final image.</li>
		</ul>
	</li>
	<li><strong>Image Composition - Displaying the Selection</strong>
		<ul>
			<li>All the dresses are drawn on a Canvas.</li>
			<li>The script arranges the images in a predefined layout,ensuring a structured and aesthetic composition.
			</li>
		</ul>
	</li>
	<li><strong>Image Download - Generating the Final Keepsake</strong>
		<ul>
			<li>At this stage, they can choose to "Download" the image as a whole PNG.</li>
			<li>Click "Start Over" to reset the selection and begin again.</li>
		</ul>
	</li>
</ol><br /><br /><br />
<i>☞ Disclaimer: The images used on this website are not my property. All rights belong to Taylor Swift and her
	respective team. This site is a fan-made project created for entertainment and nostalgic purposes only. No copyright
	infringement is intended. If you are the rightful owner of any content and wish for it to be removed, please contact
	me, and I will take immediate action.</i>
