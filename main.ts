/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
 * /// this program tell the temperature
*/

// our variable for a random number
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature() + (273.15)
  temperature = Math.round(temperature) 
  
  basic.showString('temperature is: ' + temperature.toString() + 'K')
 })