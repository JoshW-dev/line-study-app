## Line study app initial skeleton
*update this readme as project is developed"

### Actions:

- create events list
	- timestamp events start properly - done (jank)
	- calculate stop time and duration logic

	- make all entries editable
	- make event tags apear as dropdown for easy tagging
- complete stopwatch functionality
	- start line study on stopwatch start - done
	- add lap functionality - done
	- send timer data on event create - broken - trying other solution

- Design layout better
	- ensure proper scaling and grid layout of all compoenents
	- make components collapsable
	- use Stroud colours

### plan 
Dec 26 2021

Plan:
- gather and review requirements
- optimize requirements
- design - https://proto.io/
- Create web app skeleton
	- reactJS frontend
	- Express backend
		- determine what needs to be saved in backend
		- if database is needed, use mongo db
		- mongoose for comms between components
- Deploy webapp
	- Host on AWS - reac documentation for guide
	- deploy using netlify

### MVP Requirements

- Functionality for replacing paper line study tracking
	- Input fields for project information
		- User's name
		- Project title
		- Location
	- Input fields for line study information
		- Line sub-process
		- Product type
		- Start and end time (stopwatch time)
		- Starting speed
		- Unit counts (start and end)

	- Input field for downtime and idle time table
		- down/idle
		- reason
		- notes 
		- start/stop time
			-should automatically determine these times based on line study start time information
			-determine duration of each event
	- Input fields for speed changes table
		- new speed
		- change time (should do automatically)
		- notes

- Output formated data
	- .xlsx file that can be copied into Stroud line study excel template
	- ideally something better



## Problem Definition:
- what problems exist running line studies internally
- what problems exist running line studies with clients

**Interview Questions: Internal**
1. How many line studies would you typically do in a project?
2. What is your process for running line studies?
3. Roughly how long do you spend in each step of your process?
4. Are there any aspects of running line studies that you find annoying or inefficient
5. What would make running line studies easier for you?  
6. what would make gathered data from line studies more useful for you?


**Interview Questions: External**
1. How to line studies generate value on a large scale? 
2. How often do clients use line studies?
3. What process do clients use when running their own line studies?
4. How does their process compare to Stroud's? Efficiency, usefulness of data, etc.
5. Do they have any of their own tools for gathering and processing line study data?
6. Have clients given any feedback on lines studies?
	- what doesnt and doesnt work for them
	- what would make running line studies easier
	- what would make training to use line studies easier

### Visual Review Notes
Proto.io review of intended functionality complete on Jan 21, 2022

- [Proto.io visual draft](https://pr.to/YQ0YHA/)

Proto.io free trial ends soon, PDF of screens stored in drive

#### Feedback Notes:

- Allow line study start without filling in any line study/project info
- Key Info (must be filled in to start)
	- Start Count
	- Starting Speed
- Aim to design buttons on bottom half of screen for easy access if using phone
- Start and end times should be fully automatic, allow users to change in excel if they want
- Track speed at every single event and include in excel output
- For output excel sheet format down/idle column to include all reasons (down/idle/speed change/note/pause/start)
- Make line study and project info all one component
- Make info component collapsable
	- Hide by default
- Add "end study" button before letting users export to excel
- Combine stopwatch, display, buttonsinto one component
- Record all pause/play and lap data as regular events
- Add Note/mark time event
- Timestamp all events

- Data Security
	- Ensure users cannot add excel formulas with input
	- Put in character limit
	- Clean any inputs before export
	- Cut any excel key characrters (=, +, -, etc.)







### Key Internal Issues
1. fast events are difficult to track and provide good timestamp
2. Written notes are prone to spelling mistakes
3. Written notes can have inconsistent naming and formatting convensions 
4. Transcribing data from paper is annoying and time consuming
5. Transitioning paper notes is bad




### Done
- draft MVP requirements
- review architecture and deployment plan
- create frontend skeleton
- Chat with Cooper on best path forward
	- prolly do react backend and frontend using mongoose - like IBM-C
	- host on AWS or horoku
		-follow AWS documentation for quick setup
	- amazon email API, mailchimp
	- try typescript instead of javascript? -learning curve but maybe worth it
	- elastic beanstalk - umbrella for connecting components and deployment

	- coop reqs
		- react frontend, express backend, mongoose API for front-back comms
		- deployment: netlify - like horoku but free (probably)
		- start dev without a database and see if data can just be stored local 
		- start with just frontend?
- Build in base functional components
- project details export info to .xlsx properly



