import {connect} from "react-redux";
import Punctation from "../components/Punctation";
import * as punctationActions from "../redux/actions/punctation";

function mapStateToProps(state) {
    let {examPoints, totalPoints, redStripe, competitions} = state.punctation;
    return {
        examPoints: {
            polish: examPoints.polish,
            mathematics: examPoints.mathematics,
            english: examPoints.english
        },
        competitions,
        redStripe, 
        totalPoints
    }
}

const mapDispatchToProps = {
    setPolishExamPoints: punctationActions.setPolishExamPoints,
    setEnglishExamPoints: punctationActions.setEnglishExamPoints,
    setMathematicsExamPoints: punctationActions.setMathematicsExamPoints,
    
    setPolishGrade: punctationActions.setPolishGrade,
    setMathematicsGrade: punctationActions.setMathematicsGrade,
    setFirstGrade: punctationActions.setFirstGrade,
    setSecondGrade: punctationActions.setSecondGrade,

    setRedStripe: punctationActions.setRedStripe,
    setVolounteering: punctationActions.setVolounteering,
    
    setCompetitions: punctationActions.setCompetitions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Punctation);