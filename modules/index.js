import * as percentage from "./percentage.js"

const modulo_1 = document.getElementById("modulo_1")
const modulo_2 = document.getElementById("modulo_2")

const percentage_1 = document.getElementById("percentage_1")
const percentage_2 = document.getElementById("percentage_2")

const percentageOf_1 = document.getElementById("percentageOf_1")
const percentageOf_2 = document.getElementById("percentageOf_2")

const diff_1 = document.getElementById("difference_1")
const diff_2 = document.getElementById("difference_2")


document.addEventListener("keyup", () => {
    let moduloResult = document.getElementById("modulo_result");
    moduloResult.value = percentage.modulo(modulo_1.value, modulo_2.value);

    let percentageResult = document.getElementById("percentage_result")
    percentageResult.value = percentage.percentage(percentage_1.value, percentage_2.value);

    let percentageOfResult = document.getElementById("percentageOf_result")
    percentageOfResult.value = percentage.percentageOf(percentageOf_1.value, percentageOf_2.value);

    let differenceResult = document.getElementById("difference_result")
    differenceResult.value = percentage.difference(diff_1.value, diff_2.value)

})

import { calculateAspectRatio } from "./aspect-ratio.js"

const ratio_1 = document.getElementById("ratio_1");
const ratio_2 = document.getElementById("ratio_2");

const ratioResultWidth = document.getElementById("ratio_result-width")
const ratioResultHeight = document.getElementById("ratio_result-height")

ratioResultWidth.addEventListener("keyup", () => {
    ratioResultHeight.value = calculateAspectRatio(ratio_1.value, ratio_2.value, ratioResultWidth.value);
})

ratioResultHeight.addEventListener("keyup", () => {
    ratioResultWidth.value = calculateAspectRatio(ratio_1.value, ratio_2.value, ratioResultHeight.value);
})









