import {
    SET_POLISH_EXAM_POINTS,
    SET_ENGLISH_EXAM_POINTS,
    SET_MATHEMATICS_EXAM_POINTS,
    SET_POLISH_GRADE,
    SET_MATHEMATICS_GRADE,
    SET_FIRST_GRADE,
    SET_SECOND_GRADE,
    SET_RED_STRIPE,
    SET_VOLOUNTEERING,
    SET_COMPETITIONS
} from "../constants/punctation";

const initialState = {
    examPoints: {
        polish: 0,
        mathematics: 0,
        english: 0
    },
    grades: {
        polish: 1,
        mathematics: 1,
        firstGrade: 1,
        secondGrade: 1
    },
    competitions: [],
    redStripe: false,
    volounteering: false,
    totalPoints: 0
}

const getGradePoints = grade => {
    switch(grade) {
        case 6:
            return 18;
                
        case 5:
            return 17;

        case 4:
            return 14;

        case 3:
            return 8;

        case 2:
            return 2;

        default:
            return 0;
    }
}

const calculateCompetitionPoints = competition => {
    if((competition[1] === "ogólnopolski" || competition[1] === "międzynarodowy") && competition[0] === "artystyczny") {
        return 10;
    }
    else if((competition[1] === "wojewódzki" || competition[1] === "ogólnopolski" || competition[1] === "międzynarodowy") && competition[0] === "artystyczny") {
        return 10;
    }
    else if(competition[1] === "międzynarodowy") {
        return 4;
    }
    else if(competition[1] === "ogólnopolski") {
        return 3;
    }
    else if(competition[1] === "wojewódzki") {
        return 2;
    }
    else if(competition[1] === "powiatowy") {
        return 1;
    }
    else if(competition[0] === "kuratoryjnyPrzedmiotowy") {
        return 10;
    }
    else if(competition[0] === "kuratoryjnyTematyczny") {
        if(competition[1] === "laureat") {
            return 7;
        }
        else if(competition[1] === "finalista") {
            return 5;
        }
    }
    return 0;
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_POLISH_EXAM_POINTS:
            return {
                ...state,
                examPoints: {
                    ...state.examPoints,
                    polish: action.payload
                },
                totalPoints: state.totalPoints - state.examPoints.polish * .35 + action.payload * .35
            }
            

        case SET_MATHEMATICS_EXAM_POINTS:
            return {
                ...state,
                examPoints: {
                    ...state.examPoints,
                    mathematics: action.payload
                },
                totalPoints: state.totalPoints - state.examPoints.mathematics * .35 + action.payload * .35
            }

        case SET_ENGLISH_EXAM_POINTS:
            return {
                ...state,
                examPoints: {
                    ...state.examPoints,
                    english: action.payload
                },
                totalPoints: state.totalPoints - state.examPoints.english * .3 + action.payload * .3

            }

        case SET_POLISH_GRADE:
            return {
                ...state,
                grades: {
                    ...state.grades,
                    polish: action.payload
                },
                totalPoints: state.totalPoints - getGradePoints(state.grades.polish) + getGradePoints(action.payload)
            }

        case SET_MATHEMATICS_GRADE:
            return {
                ...state,
                grades: {
                    ...state.grades,
                    mathematics: action.payload
                },
                totalPoints: state.totalPoints - getGradePoints(state.grades.mathematics) + getGradePoints(action.payload)
            }

        case SET_FIRST_GRADE:
            return {
                ...state,
                grades: {
                    ...state.grades,
                    firstGrade: action.payload
                },
                totalPoints: state.totalPoints - getGradePoints(state.grades.firstGrade) + getGradePoints(action.payload)
            }

        case SET_SECOND_GRADE:
            return {
                ...state,
                grades: {
                    ...state.grades,
                    secondGrade: action.payload
                },
                totalPoints: state.totalPoints - getGradePoints(state.grades.secondGrade) + getGradePoints(action.payload)
            }

        case SET_RED_STRIPE:
            let previousStripePoints = state.redStripe ? 7 : 0;
            let currentStripePoints = action.payload ? 7 : 0;
            
            return {
                ...state,
                redStripe: action.payload,
                totalPoints: state.totalPoints - previousStripePoints + currentStripePoints
            }

        case SET_VOLOUNTEERING:
            let previousVolounteeringPoints = state.volounteering ? 3 : 0;
            let currentVolounteeringPoints = action.payload ? 3 : 0;
            return {
                ...state,
                volounteering: action.payload,
                totalPoints: state.totalPoints - previousVolounteeringPoints + currentVolounteeringPoints
            }

        case SET_COMPETITIONS:
            let currentCompetitionPoints = 0;
            state.competitions.forEach(competition => {
                currentCompetitionPoints += calculateCompetitionPoints(competition);
                if(currentCompetitionPoints > 18) {
                    currentCompetitionPoints = 18;
                }
            });

            let newCompetitionPoints = 0;
            action.payload.forEach(competition => {
                newCompetitionPoints += calculateCompetitionPoints(competition);
                if(newCompetitionPoints > 18) {
                    newCompetitionPoints = 18;
                }
            });
            return {
                ...state,
                competitions: action.payload,
                totalPoints: state.totalPoints + newCompetitionPoints - currentCompetitionPoints
            }

        default:
            return state
    }
}