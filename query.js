//CRUD
const db = require('./db');
const Employee = require('./models/employee');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findAll = async () => {
    const findEmployees = await Employee.find({});
    console.log('Employee found', findEmployees);
} 

const createEmployee = async () => {
    const lackyMackie = new Employee(
        {
        first_name: 'Lakey',
        last_name: 'macky',
        email: 'lacymackie@jackie.au',
        job_title: 'gainfully unemployed',
        address: {
            street: '123 stedman',
            city: 'anytown',
            state: 'iowa',
            zip: 12345
            }
        })
        await lackyMackie.save();
        console.log('Employee Created', lackyMackie)
}

const updateEmployee = async () => {
    const updated = await Employee.updateOne({first_name: 'Lakey', last_name: 'macky'}, 
    {first_name: 'Crazy', last_name: 'Mazy'})
    console.log('Employee record updated', updated)
}

const findEmployee = async () => {
    const findUpdated = await Employee.find({first_name: 'Crazy'})
    console.log('Employee found', findUpdated)
}

const removeEmployee = async () => {
    const remove = await Employee.deleteOne({first_name: 'Crazy'});
    console.log('Employee Deleted', remove)
}

const getFirstLastNames = async () => {
    const getNames = await Employee.find({}, {first_name: 1, last_name: 1})
    console.log('First and last names', getNames)
}

const run = async() => {
    // await findAll();
    // await createEmployee();
    // await updateEmployee();
    // await findEmployee();
    // await removeEmployee();
    await getFirstLastNames();
    db.close()
}

run()