## Line study app initial skeleton
*update this readme as project is developed"


Dec 26 2021

Todo:
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



#### Actions:

- talk to james about current progress and notes
- Draft list of initial requirements
- Review list with james/Alison/Mel

- Chat with Cooper on best path forward
	- easiest backend dev strategy
	- react changes since 2 years ago
	- wether rented servers are needed

	- prolly do react backend and frontend using mongoose - like IBM-C
	- host on AWS or horoku
		-follow AWS documentation for quick setup

	- amazon email API, mailchimp
	- try typescript instead of javascript? -learning curve but maybe worth it
	- elastic beanstalk - umbrella for connecting components and deployment

	- coop reqs
		-react frontend, express backend, mongoose API for front-back comms
		-deployment: netlify - like horoku but free (probably)
		-start dev without a database and see if data can just be stored local 
		-start with just frontend?

- Find react/python library for creating excel sheets from data


### Done
- draft MVP requirements
- review architecture and deployment plan
- create frontend skeleton
