/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Sep 2023
 * This program ...
 * /// this program tell the temperature in kelvin
*/
// our variable for a random number
let temperatureCelsius: number
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperatureCelsius = input.temperature()
  temperatureKelvin = temperatureCelsius + 273.15
  temperatureKelvin = Math.round(temperatureKelvin)

  basic.showString('temperature is: ' + (temperatureKelvin).toString() + 'K')
})
