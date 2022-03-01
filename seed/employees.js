const db = require('../db');
const Employee = require('../models/employee')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const employees = [
        {
            first_name: "Leandra",
            last_name: "Jacmard",
            email: "ljacmard0@blinklist.com",
            job_title: "Help Desk Technician",
            address: {
              street: "3 West Alley",
              city: "Jackson",
              state: "Mississippi",
              zip: "39216"
            }
          }, {
            first_name: "Marylou",
            last_name: "Revitt",
            email: "mrevitt1@example.com",
            job_title: "Nuclear Power Engineer",
            address: {
              street: "3 Stone Corner Point",
              city: "Tucson",
              state: "Arizona",
              zip: "85710"
            }
          }, {
            first_name: "Beilul",
            last_name: "Waltho",
            email: "bwaltho2@cocolog-nifty.com",
            job_title: "Environmental Specialist",
            address: {
              street: "6 Brentwood Park",
              city: "Lubbock",
              state: "Texas",
              zip: "79452"
            }
          }, {
            first_name: "Hewett",
            last_name: "Scarasbrick",
            email: "hscarasbrick3@w3.org",
            job_title: "Dental Hygienist",
            address: {
              street: "4 Daystar Parkway",
              city: "Saint Louis",
              state: "Missouri",
              zip: "63196"
            }
          }, {
            first_name: "Izaak",
            last_name: "Friedlos",
            email: "ifriedlos4@ask.com",
            job_title: "Compensation Analyst",
            address: {
              street: "12302 Iowa Hill",
              city: "Philadelphia",
              state: "Pennsylvania",
              zip: "19115"
            }
          }, {
            first_name: "Giacobo",
            last_name: "Dreinan",
            email: "gdreinan5@icio.us",
            job_title: "Financial Analyst",
            address: {
              street: "7 Arkansas Terrace",
              city: "Houston",
              state: "Texas",
              zip: "77005"
            }
          }, {
            first_name: "Aldis",
            last_name: "Domenicone",
            email: "adomenicone6@behance.net",
            job_title: "Executive Secretary",
            address: {
              street: "3818 Birchwood Park",
              city: "Springfield",
              state: "Missouri",
              zip: "65805"
            }
          }, {
            first_name: "Giulia",
            last_name: "Ranshaw",
            email: "granshaw7@hc360.com",
            job_title: "Recruiter",
            address: {
              street: "42972 Ridgeway Pass",
              city: "Des Moines",
              state: "Iowa",
              zip: "50936"
            }
        }
    ]
        await Employee.insertMany(employees)
        console.log('Created Employees')
    }

    const run = async () => {
        await main();
        db.close();
    }

    run();
