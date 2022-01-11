## Line study app initial skeleton
*update this readme as project is developed"

## Todo
- event tag list
- project details export info to .xlsx properly
- Stopwatch functionality
	- timestamp events
	- logic for line study details
- line study details export info to .xlsx properly 
	- some fields auto populate from stopwatch
- event status display 
	- up/down/idle + current speed
- event status control
	- Button press will add new event and can change status
	- buttons (Up/Down, Idle, Speed change, add note)

### plan 
Dec 26 2021

Plan:
- gather and review requirements
- optimize requirements
- design
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



### Actions:

- Figure out problems associted to running line studies and using data internally and with clients.
	- talk to james and alison about tactical side (internal only)
	- talk to phil about how line studies generate value on a larger scale (internal and client use)
	- mark/elena (external selling)

- Gather list of issues and opportunities for improving the line study experience
- Figure out value of solving this problem
- Determine focus on interval vs. external


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
-Build in base functional components


