"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)



while True:
    if button_a._is_pressed():
        temperature_celsius = display.input.temperature
        temperature_kelvin = temperature_celsius + 273.15
        temperature_kelvin = round(temperature_kelvin)
        display.show(str(temperature_kelvin))
