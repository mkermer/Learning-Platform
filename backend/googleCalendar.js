const  { google } = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2('504117259116-rp9nks5ab732vf0vrh3t6a76gu4ddrik.apps.googleusercontent.com',
'QJoHtbak_XFD7TeTRqoA-pbO')

oAuth2Client.setCredentials({refresh_token:'1//043pR_n_PcstNCgYIARAAGAQSNwF-L9Ir0kSUIn9kPKrNLrr9XuKHC1mK8l6nT93oCedmsc_kDxu0YONrCv4L8QPhxzdC5jkagPY',
})


const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })


const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDate() +7 )
eventStartTime.setMinutes(eventStartTime.getMinutes() + 15)


const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDate() + 7)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)


const event = {
  summary: `Lecture with hfddn `,
  location: `online`,
  description: `JS coding`,
  colorId: 6,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Europe/Vienna',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Europe/Vienna',
  },
}


calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'Europe/Vienna',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
  
    if (err) return console.error('Free Busy Query Error: ', err)

    
    const eventArr = res.data.calendars.primary.busy

    
    if (eventArr.length === 0)
   
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          
          if (err) return console.error('Error Creating Calender Event:', err)
          
          return console.log('Calendar event successfully created.')
        }
      )

   
    return console.log('There is another event at the same time')
  }
)