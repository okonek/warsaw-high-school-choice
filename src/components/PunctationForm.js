import React from "react"
import { connect } from 'react-redux';
import { Field, FieldArray,reduxForm, submit } from "redux-form";
import AsyncSelect from 'react-select/lib/Async';
import Competitions from "../logic/honoredCompetitions/competitions.json";

let competitionsDropdownOptions = Competitions.competitions;
let allValues = [];
let printed = [];
for(let i = 0; i < competitionsDropdownOptions.length; i++) {
    if(!allValues.includes(competitionsDropdownOptions[i][1])) {
        allValues.push(competitionsDropdownOptions[i][1]);
    }
    competitionsDropdownOptions[i] = {
        label: competitionsDropdownOptions[i][0],
        value: [competitionsDropdownOptions[i][1], competitionsDropdownOptions[i][2]]
    }
    if(!printed.includes(competitionsDropdownOptions[i].value[1])) {
        printed.push(competitionsDropdownOptions[i].value[1]);
    }
}

const filterCompetitions = inputValue => competitionsDropdownOptions.filter(c => c.label.toLowerCase().includes(inputValue.toLowerCase()));

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterCompetitions(inputValue));
    }, 1000);
};

const RenderSelectInput = ({input, name}) => (
    <AsyncSelect 
         {...input}
         name={name}
         value={input.value}
         onChange={(value) => input.onChange(value)}
         
         loadOptions={loadOptions} 
    />
);

const Competition = ({input, name}) => (
    <div name={input.name} key={parseInt(input.name.replace("competitionsList[", "").replace("]", ""))}>{input.value}</div>
);


let PunctationForm = (props) => {
    const { handleSubmit } = props;

    const renderCompetitionsList = ({fields}) => {
        const newFields = fields.map((competition, index) => {
            return (
                <div>
                    <Field name={competition} key={index} component={Competition} />
                    <button type="button" onClick={() => {
                        fields.remove(index);
                        setTimeout(() => props.dispatch(submit("punctation")), 100)
                    }}>Usuń</button>
                </div>
            )
        });
        return (
            <div>
                <div>
                    <Field name="competitions" component={RenderSelectInput} onChange={(value) => {
                        fields.push(value.label);
                        setTimeout(() => props.dispatch(submit("punctation")), 100)
                    }}/>
                </div>
                {newFields}
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Egzamin ósmoklasisty</h2>
                <div>
                    <label>Wynik egzaminu ósmoklasisty z języka polskiego</label>
                    <div>
                        <Field
                        name="polishExam"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
                <div>
                    <label>Wynik egzaminu ósmoklasisty z matematyki</label>
                    <div>
                        <Field
                        name="mathematicsExam"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
                <div>
                    <label>Wynik egzaminu ósmoklasisty z języka angielskiego</label>
                    <div>
                        <Field
                        name="englishExam"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h2>Oceny</h2>
                <div>
                    <label>Ocena z języka polskiego</label>
                    <div>
                        <Field
                        name="polishGrade"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
                <div>
                    <label>Ocena z matematyki</label>
                    <div>
                        <Field
                        name="mathematicsGrade"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
                <div>
                    <label>Ocena z 1. przedmiotu</label>
                    <div>
                        <Field
                        name="firstGrade"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
                <div>
                    <label>Ocena z 2. przedmiotu</label>
                    <div>
                        <Field
                        name="secondGrade"
                        component="input"
                        type="number"
                        onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <label>Świadectwo z paskiem</label>
                <div>
                    <label><Field name="redStripe" component="input" type="radio" value="yes" onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)} />Tak</label>
                    <label><Field name="redStripe" component="input" type="radio" value="no" onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}/>Nie</label>
                </div>
            </div>
            <div>
                <label>Wolontariat</label>
                <div>
                    <label><Field name="volounteering" component="input" type="radio" value="yes" onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)} />Tak</label>
                    <label><Field name="volounteering" component="input" type="radio" value="no" onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}/>Nie</label>
                </div>
            </div>
            <div>
                <label>Konkursy</label>
                <div>
                    <FieldArray name="competitionsList" component={renderCompetitionsList}></FieldArray>

                    <div>
                        <label>Liczba tytułów finalisty konkursów przedmiotowych organizowanych przez kuratora oświaty</label>
                        <div>
                            <Field
                            name="highestCompetition"
                            component="input"
                            type="number"
                            onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Liczba tytułów laureata konkursów tematycznych lub interdyscyplinarnych organizowanych przez kuratora oświaty</label>
                        <div>
                            <Field
                            name="secondHighestCompetitionWinner"
                            component="input"
                            type="number"
                            onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Liczba tytułów finalisty konkursów tematycznych lub interdyscyplinarnych organizowanych przez kuratora oświaty</label>
                        <div>
                            <Field
                            name="secondHighestCompetitionFinalist"
                            component="input"
                            type="number"
                            onChange={() => setTimeout(() => props.dispatch(submit("punctation")), 100)}
                            />
                        </div>
                    </div>

                </div>
            </div>
            
        </form>
    );
}

PunctationForm = reduxForm({
  form: "punctation",
  initialValues: {
      polishExam: 0,
      mathematicsExam: 0,
      englishExam: 0,

      polishGrade: 1,
      mathematicsGrade: 1,
      firstGrade: 1,
      secondGrade: 1,
      competitionsList: [],
      highestCompetition: 0,
      secondHighestCompetitionWinner: 0,
      secondHighestCompetitionFinalist: 0
  }
})(PunctationForm)

export default connect()(PunctationForm)