<img src="https://andrybong.me/wp-content/uploads/2025/03/portfolio-web-tstet_outfit_generator-cover.png"/>

<h2>About the project</h2>
The Eras Tour Outfit Generator is a fan-made web project that allows users to relive the magic of Taylor Swift’s iconic
TS Eras Tour by selecting their favorite outfits and generating a personalized keepsake image.

I designed and developed this interactive tool using JavaScript, Bootstrap and Canvas API, ensuring a seamless
experience for fans to customize and download their own tour memories. The project also tackles technical challenges
like image handling, dynamic DOM manipulation and user-friendly UI design.

This project showcases my skills in front-end development, interactivity, and user experience design, while celebrating
an unforgettable era in music history 🫶🏻✨

// CLIENT<br/>
Personal Project

// SERVICES<br/>
Web Development

// TECHNOLOGIES<br/>
Bootstrap | HTML | JavaScript | WCAG

// LINKS<br/>
<a target="_blank" href="http://www.tstetoutfitgenerator.website">Live preview</a>

<br/><h2>Needs</h2>
<ul>
   <li>Bootstrap for responsive design.</li>
   <li>Provided visual feedback when an image was selected.</li>
   <li>Ensuring the user could easily download their customized image.</li>
   <li>Meet WCAG (Web Content Accessibility Guidelines) compliance to ensure the website is accessible to as many people
      as possible, including those using assistive technologies or with visual, cognitive, or motor impairments.</li>
</ul>

<br/><h2>Workflow</h2>
<ol>
   <li><strong>User interaction – Selecting outfits</strong>
      <ul>
         <li>When users arrive at the homepage, they can choose between visiting the contact page or starting their
            outfit selection journey by clicking the button with the concert leg they attended.</li>
         <li>The user navigates through the eras, selecting one outfit per era. Clicking an outfit highlights the
            selection, automatically moving to the next era.</li>
         <li>If the user changes an outfit, the selection updates dynamically in the JavaScript object, ensuring only
            one outfit per era is stored.</li>
         <li>The selection process continues until all outfits are chosen, unlocking the “Generate” button.</li>
         <li>The user clicks “Generate” to preview the final image.</li>
      </ul>
   </li>
   <li><strong>Image composition – Displaying the selection</strong>
      <ul>
         <li>All the dresses are drawn on a Canvas.</li>
         <li>The script arranges the images in a predefined layout,ensuring a structured and aesthetic composition.</li>
      </ul>
   </li>
   <li><strong>Image download – Generating the final image</strong>
      <ul>
         <li>At this stage, they can choose to “Download” the image as a whole PNG.</li>
         <li>Click “Start Over” to reset the selection and begin again.</li>
      </ul>
   </li>
</ol>

<br/><h2>Technical Challenges</h2>
<ul>
   <li><strong>Data management</strong><br>
      Store all relevant details—including Era ID, Era name, Era leg ID, and associated outfits—within a structured
      JavaScript object.&ZeroWidthSpace; This centralizes the data, making it more manageable and
      accessible.&ZeroWidthSpace; Example:<p></p>
      <pre><code>
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
</code></pre>
   </li>
   <li><strong>Data processing</strong><br>
      Filter the dataset based on the presence of the Era leg ID (whether it is undefined or contains a numerical
      value). Subsequently, sort the filtered data according to the user’s selection from the homepage buttons (First
      Leg or Second Leg). Finally, dynamically generate HTML content for each outfit corresponding to its respective Era
      within the JavaScript object.&ZeroWidthSpace;</li>
   <li><strong>Constructing HTML for each outfit</strong><br>
      Iterate over the sorted eras and their outfits to dynamically generate and insert HTML elements into the DOM.</li>
   <li><strong>User interface initialization</strong><br>
      Ensure that the menu option for the initial Era is visible upon page load and the img title appears in grayscale,
      along with displaying the outfits associated with this first Era.&ZeroWidthSpace;</li>
   <li><strong>Progress bar</strong><br>
      Only visible on mobile devices, appears to show users how far along they are in the process. The active Era
      features an animation.</li>
   <li><strong>User interaction</strong><br>
      Allow users to select only one outfit per Era, with selections dynamically updating the Canvas element to reflect
      the chosen outfits.&ZeroWidthSpace; That selection, changes the img of the active Era (menu) from grayscale to
      color.</li>
   <li><strong>Canvas implementation</strong><br>
      Implement a Canvas element that dynamically loads and draws multiple images.&ZeroWidthSpace; Adjusts each image
      positions based on the selected outfits and the order of the Eras, ensuring a cohesive and visually appealing
      presentation.&ZeroWidthSpace;</li>
</ul>
____________________________

<i>☞ Disclaimer: The images used on this website are not my property. All rights belong to Taylor Swift and her
   respective team. This site is a fan-made project created for entertainment and nostalgic purposes only. No copyright
   infringement is intended. If you are the rightful owner of any content and wish for it to be removed, please contact
   me, and I will take immediate action.</i>
