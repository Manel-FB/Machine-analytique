
function checkQuizAnswers() {
    
    const correctAnswers = {
        q1: ["19"],          
        q2: ["2"],           
        q3: ["2", "3","6"], 
        q4_1: ["2"],
        q4_2: ["1"],
        q5: ["2", "3"],
        q6_1: ["3"],
        q6_2: ["2"],
        q7: ["3"],
        q8_1: ["1"],
        q8_2: ["3"],
        q8_3: ["2"],
        q9: ["4"]
    };

    let compt_correct_answers = 0;
    for (const [question, correct] of Object.entries(correctAnswers)) {
        const input = document.querySelector(`[name="${question}"]`);
        if(input.type=="checkbox"){
            const checkedInputs = Array.from(document.querySelectorAll(`[name="${question}"]:checked`)).map(input => input.value);
            if (correct.every(value => checkedInputs.includes(value)) && checkedInputs.length === correct.length) {
                compt_correct_answers++;

            }
        } else if (input.type=="radio"){
            const checkedInput = document.querySelector(`[name="${question}"]:checked`);
            if (checkedInput && correct.includes(checkedInput.value)) {
                compt_correct_answers++;
                
            }
        }else if (input.value == correct) {
            console.log(question);
            compt_correct_answers++;
        }
    }
    console.log(compt_correct_answers);
}