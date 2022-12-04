const personalinfo = [
    {
        "Name" : "Deepa vishali G",
        "Fathername" : "Ganesan J",
        "DOB" : "01-04-2002",
        "Native" : "Madurai",
        "Nationality" : "Indian",
        "Email" : "deepavisahlig@gmail.com",
        "Mobilenumber" : "8681xxxxx6",
        "Address" : "52,West masi street"
    },
    {
       "Qualification" : "Bsc mathematics with computer Applications",
       "WorkExperience" : "LDC Eco Bridge-(LEB)",
    },
]

const skills = [{"1" : "Analytical Skills"},
                 {"2": "Communication and Interpersonal skills"},
                 {"3" : "javascript"},
                 {"4" : "java"}]             
const certificates = ["DCA","PGDMA"]
const Languages = ["Telugu","Tamil","English"]
const Interest = ["Pencil sketching","Cooking","Gardening"]

console.log("Personal Details : ")
console.log(`Name : ${personalinfo[0].Name}`)
console.log(`Father name : ${personalinfo[0].Fathername}`)
console.log(`DOB : ${personalinfo[0].DOB}`)
console.log(`Native : ${personalinfo[0].Native}`)
console.log(`Nationality : ${personalinfo[0].Nationality}`)
console.log(`Email : ${personalinfo[0].Email}`)
console.log(`Mobile Number : ${personalinfo[0].Mobilenumber}`)
console.log(`Address : ${personalinfo[0].Address}`)
console.log(`Qualification : ${personalinfo[1].Qualification}`)
console.log(`Work Experience : ${personalinfo[1].WorkExperience}`)
console.log("")
console.log("Skills : ")
console.log(`1 : ${skills[0][1]}`)
console.log(`2 : ${skills[1][2]}`)
console.log(`3 : ${skills[2][3]}`)
console.log(`4 : ${skills[3][4]}`)
console.log("")
console.log("Certificates : ")
console.log(`1 : ${certificates[0]}`)
console.log(`2 : ${certificates[1]}`)
console.log("")
console.log("Languages : ")
console.log(`1 : ${Languages[0]}`)
console.log(`2 : ${Languages[1]}`)
console.log(`3 : ${Languages[2]}`)
console.log("")
console.log("Interest : ")
console.log(`1 : ${Interest[0]}`)
console.log(`2 : ${Interest[1]}`)
console.log(`3 : ${Interest[2]}`)
