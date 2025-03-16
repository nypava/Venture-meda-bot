export interface FormField {
    title: string,
    required: boolean,
    value: string,
    field: "input" | "select",
    options?: {"name": string, title: string}[]
}

export interface FormSection {
    [key: string]: FormField[];
}

const form:FormSection = {
    name: [
        {
            title: "First name",
            value: "first_name",
            required: true,
            field: "input",
        },
        {
            title: "Father's name",
            value: "father_name",
            required: true,
            field: "input"
        },
        {
            title: "GrandFather's name",
            value: "grand_father_name",
            required: true,
            field: "input"
        }
    ],
    miscellanoues: [
        {
            title: "Gender",
            value: "gender",
            required: true,
            field: "select",
            options: [{
                name: "Male",
                title: "male"
            }, {
                name: "Female",
                title: "female",
            }]
        },
        {
            title: "Age group",
            required: true,
            value: "age_group",
            field: "select",
            options: [{
                name: "15 - 35",
                title: "15_35"
            },
            {
                name: "35 +",
                title: "35_plus"
            }
            ]
        },
        {
            title: "Employment type",
            required: true,
            value: "employment_type",
            field: "select",
            options: [{
                name: "Full-time Employee",
                title: "full_time_employee"
            },
            {
                name: "Part-time Employee",
                title: "part_time_employee"
            },
            {
                name: "Private Business",
                title: "private_business"
            },
            {
                name: "Job Seeker",
                title: "job_seeker"
            },
            {
                name: "Student",
                title: "student"
            },
            {
                name: "Other",
                title: "other"
            }],
        },
        {
            title: "Email address",
            value: "email_address",
            required: false,
            field: "input"
        },
    ],
    location: [
        {
            title: "Region",
            required: true,
            value: "region",
            field: "select",
            options: [
                {
                    name: "Addis Ababa",
                    title: "addis_ababa"
                },
                {
                    name: "Afar",
                    title: "afar"
                },
                {
                    name: "Amhara",
                    title: "amhara"
                },
                {
                    name: "Tigray",
                    title: "tigray"
                },
                {
                    name: "Benishangul Gumuz",
                    title: "benishangul_gumuz"
                },
                {
                    name: "Gambla",
                    title: "gambela"
                },
                {
                    name: "Harari",
                    title: "harari"
                },
                {
                    name: "Oromia",
                    title: "oromia"
                },
                {
                    name: "Sidama",
                    title: "sidama"
                },
                {
                    name: "South Western",
                    title: "south_western"
                },
                {
                    name: "Cental Ethiopia",
                    title: "central_ethiopia"
                },
                {
                    name: "Other",
                    title: "other"
                }]
        },
        {
            title: "Area",
            required: true,
            value: "area",
            field: "select",
            options: [{
                name: "Urban",
                title: "urban"
            },
            {
                name: "Suburban",
                title: "suburban"
            },
            {
                name: "Rural",
                title: "rural"
            }]
        },
        {
            title: "Faction",
            value: "faction",
            required: true,
            field: "select",
            options: [{
                name: "Domestic migrant",
                title: "domestic_migrant"
            }, {
                name: "Migrant",
                title: "migrant"
            }, {
                name: "Has disability",
                title: "has_disability"
            }, {
                name: "Not applicable (N/A)",
                title: "not_applicable"
            }],
        },
    ]
}

export default form;
