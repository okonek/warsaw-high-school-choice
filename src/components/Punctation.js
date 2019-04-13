import React, {Component} from "react";
import PunctationForm from "./PunctationForm";
import Competitions from "../logic/honoredCompetitions/competitions.json";
import "./Punctation.css";

class Punctation extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(values) {
        this.props.setPolishExamPoints(values.polishExam);
        this.props.setMathematicsExamPoints(values.mathematicsExam);
        this.props.setEnglishExamPoints(values.englishExam);

        this.props.setPolishGrade(values.polishGrade);
        this.props.setMathematicsGrade(values.mathematicsGrade);
        this.props.setFirstGrade(values.firstGrade);
        this.props.setSecondGrade(values.secondGrade);
        this.props.setRedStripe(values.redStripe === "yes");
        this.props.setVolounteering(values.volounteering === "yes"); 

        const competitions = values.competitionsList.map(competition => {
            const competitionData = Competitions.competitions.find(competitionArray => competitionArray.label === competition);
            return [competitionData.value[0], competitionData.value[1]];
        });

        for(let i = 0; i < values.highestCompetition; i++) {
            competitions.push(["kuratoryjnyPrzedmiotowy", "finalista"]);
        }

        for(let i = 0; i < values.secondHighestCompetitionWinner; i++) {
            competitions.push(["kuratoryjnyTematyczny", "laureat"]);
        }

        for(let i = 0; i < values.secondHighestCompetitionFinalist; i++) {
            competitions.push(["kuratoryjnyTematyczny", "finalista"]);
        }

        this.props.setCompetitions(competitions);
    }   


    render() {
        return (
            <div>
                <header>
                    <h1 id="page-title">Licznik punktów do liceum</h1>
                </header>
                <section>
                    <PunctationForm onSubmit={this.submit}/>
                    <h2 id="total-points">Liczba punktów: {this.props.totalPoints}</h2>
                </section>
                <footer>
                    <h2>Autor: okonek83</h2>
                </footer>
            </div>
        );
    }
}

export default Punctation;