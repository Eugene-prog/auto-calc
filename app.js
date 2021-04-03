/*
fuelPrice - Стоимость одного литра топлива
fullTankFuel - Литров в топливном баке
fullTankMileage - Пробег на баке
yearDist - Пробег за 1 год
insuranceOsago - Страховка ОСАГО
insuranceKasko - Страховка КАСКО     
carTax - Транспортный налог
maintranceYear - Стоимость ТО и ремонта в год
additionalCost - Дополнительные расходы
ticket - Штрафы за год<Br>
rentCarPlace - Аренда машиноместа
*/
const form = document.forms['total-form'];
const testBtn = document.querySelector('.test-btn');
const resultBtn = document.querySelector('.result-btn');
const totalCount = document.querySelector('.totalCount');
const costOneKmCount = document.querySelector('.costOneKm');
const resultOneDayCount = document.querySelector('.resultOneDay');
const costMileageCount = document.querySelector('.costMileage');

let fuelPrice;
let fullTankFuel;
let fullTankMileage;
let yearDist;
let insuranceOsago;
let insuranceKasko;
let carTax;
let maintranceYear;
let additionalCost;
let ticket;
let rentCarPlace;

// Итоговые расчетные
let total = 0;
let resultOneYear = 0;
let resultOneDay = 0;
let costMileage = 0;
let costOneKm = 0;

function setFormTestValues() {
  form.elements['fuelPrice'].value = 45;
  form.elements['fullTankFuel'].value = 65;
  form.elements['fullTankMileage'].value = 500;
  form.elements['yearDist'].value = 20000;
  form.elements['insuranceOsago'].value = 4500;
  form.elements['insuranceKasko'].value = 25000;
  form.elements['carTax'].value = 2700;
  form.elements['maintranceYear'].value = 5000;
  form.elements['additionalCost'].value = 15000;
  form.elements['ticket'].value = 1500;
  form.elements['rentCarPlace'].value = 15000;
}

function getFormValues() {
  fuelPrice = +form.elements['fuelPrice'].value;
  fullTankFuel = +form.elements['fullTankFuel'].value;
  fullTankMileage = +form.elements['fullTankMileage'].value;
  yearDist = +form.elements['yearDist'].value;
  insuranceOsago = +form.elements['insuranceOsago'].value;
  insuranceKasko = +form.elements['insuranceKasko'].value;
  carTax = +form.elements['carTax'].value;
  maintranceYear = +form.elements['maintranceYear'].value;
  additionalCost = +form.elements['additionalCost'].value;
  ticket = +form.elements['ticket'].value;
  rentCarPlace = +form.elements['rentCarPlace'].value;
}

function result() {
  total =
    insuranceOsago +
    insuranceKasko +
    carTax +
    maintranceYear +
    additionalCost +
    ticket +
    rentCarPlace;

  costOneKm = (fullTankFuel / fullTankMileage) * 100;
  resultOneYear = total;
  costMileage = resultOneYear / yearDist;
  resultOneDay = resultOneYear / 365;

  totalCount.textContent = String(total.toFixed(2)) + ' руб.';
  costOneKmCount.textContent = String(costOneKm.toFixed(2)) + ' руб.';
  resultOneDayCount.textContent = String(resultOneDay.toFixed(2)) + ' руб.';
  costMileageCount.textContent = String(costMileage.toFixed(2)) + ' руб.';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

testBtn.addEventListener('click', () => {
  setFormTestValues();
});

resultBtn.addEventListener('click', () => {
  getFormValues();
  result();
});
