const modal = document.getElementById("result");
reset();


const correctAnswers = {
        q1: ["19"],
        q2: ["2"],
        q3: ["2", "3", "6"],
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
function reset(){
    document.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = false;
        } else {
            el.value = '';
        }
    });
}
function checkQuizAnswers() {

    let compt_correct_answers = 0;
    for (const [question, correct] of Object.entries(correctAnswers)) {
        const input = document.querySelector(`[name="${question}"]`);
        if (input.type == "checkbox") {
            const checkedInputs = Array.from(document.querySelectorAll(`[name="${question}"]:checked`)).map(input => input.value);
            if (correct.every(value => checkedInputs.includes(value)) && checkedInputs.length === correct.length) {
                compt_correct_answers++;

            }
        } else if (input.type == "radio") {
            const checkedInput = document.querySelector(`[name="${question}"]:checked`);
            if (checkedInput && correct.includes(checkedInput.value)) {
                compt_correct_answers++;

            }
        } else if (input.value == correct) {
            compt_correct_answers++;
        }
    }
    const result_p = document.getElementById("result_text");
    result_p.innerHTML = `Vous avez ${compt_correct_answers} réponses correctes sur les  ${Object.keys(correctAnswers).length} questions. (<b>${((compt_correct_answers / Object.keys(correctAnswers).length) * 100).toFixed(2)}%</b>)`;
    const emoji = document.getElementById("emoji");
    if (compt_correct_answers == Object.keys(correctAnswers).length) {
        emoji.innerHTML = "&#128526;";
    } else if (compt_correct_answers >= Object.keys(correctAnswers).length / 2) {
        emoji.innerHTML = "&#128578;";
    } else {
        emoji.innerHTML = "&#128577;";
    }
    modal.showModal();

}
function correctQuizAnswers(){
    reset();
    modal.close();
    for (const [question, correct] of Object.entries(correctAnswers)) {
        const select = document.querySelector(`select[name="${question}"]`);
        if (select) {
            Array.from(select.options).forEach(option => {
                if (correct.includes(option.value)) {
                    option.selected = true;
                    select.classList.add("correction");
                }
            });
        }
        const inputs = document.querySelectorAll(`[name="${question}"]`);
        inputs.forEach(input => {
            if(input.type == "number") {
                input.value = correct[0];
                input.classList.add("correction");
                input.previousElementSibling.value=input.value;
            }
            if (correct.includes(input.value)) {
                const label = document.querySelector(`label[for="${input.id}"]`);
                if (label) {
                    label.classList.add("correction");
                }
            }
        });
    }
}

document.getElementById("submit").addEventListener("click", () => checkQuizAnswers());

document.getElementById("close_dialog").addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();

    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        modal.close();
    }
})

document.getElementById("view_correction").addEventListener("click", () =>  correctQuizAnswers());