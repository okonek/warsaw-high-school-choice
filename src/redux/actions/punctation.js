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

export function setPolishExamPoints(points) {
    if(points === "") {
        points = 0
    } 
    return {
        type: SET_POLISH_EXAM_POINTS,
        payload: parseInt(points)
    }
}

export function setMathematicsExamPoints(points) {
    if(points === "") {
        points = 0
    }
    return {
        type: SET_MATHEMATICS_EXAM_POINTS,
        payload: parseInt(points)
    }
}

export function setEnglishExamPoints(points) {
    if(points === "") {
        points = 0
    }
    return {
        type: SET_ENGLISH_EXAM_POINTS,
        payload: parseInt(points)
    }
}

export function setPolishGrade(grade) {
    if(grade === "") {
        grade = 1
    }
    return {
        type: SET_POLISH_GRADE,
        payload: parseInt(grade)
    }
}

export function setMathematicsGrade(grade) {
    if(grade === "") {
        grade = 1
    }
    return {
        type: SET_MATHEMATICS_GRADE,
        payload: parseInt(grade)
    }
}

export function setFirstGrade(grade) {
    if(grade === "") {
        grade = 1
    }
    return {
        type: SET_FIRST_GRADE,
        payload: parseInt(grade)
    }
}

export function setSecondGrade(grade) {
    if(grade === "") {
        grade = 1
    }
    return {
        type: SET_SECOND_GRADE,
        payload: parseInt(grade)
    }
}

export function setRedStripe(value) {
    return {
        type: SET_RED_STRIPE,
        payload: value
    }
}

export function setVolounteering(value) {
    return {
        type: SET_VOLOUNTEERING,
        payload: value
    }
}

export function setCompetitions(competitions) {
    return {
        type: SET_COMPETITIONS,
        payload: competitions
    }
}