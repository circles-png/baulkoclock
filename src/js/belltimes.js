"use strict";
const belltimes = {
    Monday: {
        period: [
            "Period 1",
            "Period 2",
            "Assembly",
            "Recess",
            "Period 3",
            "Period 4",
            "Break",
            "Period 5",
            "Period 6",
            "Lunch 1",
            "Lunch 2",
            "Period 7",
            "Period 8",
            "End",
        ],
        times: [
            518,
            557,
            594,
            619,
            639,
            676,
            713,
            718,
            755,
            792,
            812,
            832,
            869,
            906
        ]
    },
    Tuesday: {
        period: [
            "Period 1",
            "Period 2",
            "Recess",
            "Period 3",
            "Period 4",
            "Break",
            "Period 5",
            "Period 6",
            "Lunch 1",
            "Lunch 2",
            "Period 7",
            "Period 8",
            "End"
        ],
        times: [
            518,
            561,
            601,
            621,
            661,
            701,
            706,
            746,
            786,
            806,
            826,
            866,
            906
        ]
    },
    Wednesday: {
        period: [
            "Period 1",
            "Period 2",
            "Recess",
            "Period 3",
            "Period 4",
            "Period 5",
            "Lunch 1",
            "Lunch 2",
            "Period 6",
            "Period 7",
            "Period 8",
            "End"
        ],
        times: [
            518,
            558,
            596,
            611,
            649,
            687,
            725,
            738,
            751,
            791,
            830,
            870
        ]
    },
    Thursday: {
        period: [
            "Period 1",
            "Period 2",
            "Recess",
            "Period 3",
            "Period 4",
            "Break",
            "Period 5",
            "Period 6",
            "Lunch 1",
            "Lunch 2",
            "Period 7",
            "Period 8",
            "End"
        ],
        times: [
            518,
            561,
            601,
            621,
            661,
            701,
            706,
            746,
            786,
            806,
            826,
            866,
            906
        ]
    },
    Friday: {
        period: [
            "Period 1",
            "Period 2",
            "Recess",
            "Period 3",
            "Period 4",
            "Break",
            "Period 5",
            "Period 6",
            "Lunch 1",
            "Lunch 2",
            "Period 7",
            "Period 8",
            "End"
        ],
        times: [
            518,
            561,
            601,
            626,
            666,
            706,
            711,
            751,
            791,
            809,
            826,
            866,
            906
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVsbHRpbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVsbHRpbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFNBQVMsR0FBRztJQUNkLE1BQU0sRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNKLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFFBQVE7WUFDUixVQUFVO1lBQ1YsVUFBVTtZQUNWLE9BQU87WUFDUCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsVUFBVTtZQUNWLFVBQVU7WUFDVixLQUFLO1NBQ1I7UUFDRCxLQUFLLEVBQUU7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztTQUNOO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxNQUFNLEVBQUU7WUFDSixVQUFVO1lBQ1YsVUFBVTtZQUNWLFFBQVE7WUFDUixVQUFVO1lBQ1YsVUFBVTtZQUNWLE9BQU87WUFDUCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsVUFBVTtZQUNWLFVBQVU7WUFDVixLQUFLO1NBQ1I7UUFDRCxLQUFLLEVBQUU7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1NBQ047S0FDSjtJQUNELFNBQVMsRUFBRTtRQUNQLE1BQU0sRUFBRTtZQUNKLFVBQVU7WUFDVixVQUFVO1lBQ1YsUUFBUTtZQUNSLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsS0FBSztTQUNSO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1NBQ047S0FDSjtJQUNELFFBQVEsRUFBRTtRQUNOLE1BQU0sRUFBRTtZQUNKLFVBQVU7WUFDVixVQUFVO1lBQ1YsUUFBUTtZQUNSLFVBQVU7WUFDVixVQUFVO1lBQ1YsT0FBTztZQUNQLFVBQVU7WUFDVixVQUFVO1lBQ1YsU0FBUztZQUNULFNBQVM7WUFDVCxVQUFVO1lBQ1YsVUFBVTtZQUNWLEtBQUs7U0FDUjtRQUNELEtBQUssRUFBRTtZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7U0FDTjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osTUFBTSxFQUFFO1lBQ0osVUFBVTtZQUNWLFVBQVU7WUFDVixRQUFRO1lBQ1IsVUFBVTtZQUNWLFVBQVU7WUFDVixPQUFPO1lBQ1AsVUFBVTtZQUNWLFVBQVU7WUFDVixTQUFTO1lBQ1QsU0FBUztZQUNULFVBQVU7WUFDVixVQUFVO1lBQ1YsS0FBSztTQUNSO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztTQUNOO0tBQ0o7Q0FDSixDQUFDIn0=