import React, { useState } from 'react';
import { ContentBox } from '../components/ContentBox/ContentBox';
import '../pageStyles/calendar.css';

type CalendarPageProps = {
}
const CalendarPage: React.FC<CalendarPageProps> = () => {
	return <>
		<div className="d-flex">
            <iframe src="https://calendar.google.com/calendar/embed?src=c_fdaubt0ku2q57pth0nei9aq740%40group.calendar.google.com&ctz=America%2FLos_Angeles" ></iframe>
        </div>
        <div>
            <h2>Subscribe to the iOrgs calendar</h2>
            <p>
                Follow all your favorite iSchool student organizations by adding this calendar to your own calendar app!
            </p>

            <h3>Google Calendar</h3>
            <p>
                From the <a href="https://calendar.google.com/" target="_blank">Google Calendar website</a>, near the "other calendars" heading on the left, choose "Add new calendar" &gt; "From URL." Use this URL:
            </p>
            <pre>
                https://calendar.google.com/calendar/ical/c_fdaubt0ku2q57pth0nei9aq740%40group.calendar.google.com/public/basic.ics
            </pre>
            
            <h3>Mac Calendar App</h3>
            <p>
                From the Mac Calendar app, choose File &gt; New Calendar Subscription. Use this URL:
            </p>
            <pre>
                https://calendar.google.com/calendar/ical/c_fdaubt0ku2q57pth0nei9aq740%40group.calendar.google.com/public/basic.ics
            </pre>

            <h3>Outlook.com Calendar</h3>
            <p>
                From the <a href="https://outlook.live.com/calendar/" target="_blank">Outlook.com Calendar website</a>, choose "Add calendar" from the left column. Use this URL:
            </p>
            <pre>
                https://calendar.google.com/calendar/ical/c_fdaubt0ku2q57pth0nei9aq740%40group.calendar.google.com/public/basic.ics
            </pre>
        </div>
		<div className="spacer"></div>
	</>
}

export default CalendarPage
