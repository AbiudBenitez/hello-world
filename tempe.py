op = int(input("Ingrese la opción que desee: 1.-Celsius 2.-Fahrenheit\n"))
if op == 1:
    tempe = int(input("Ingrese su temperatura: "))
    cel = (tempe * 1.8) + 32
    print("Su temperatura en Fahrenheit es de: " + str(cel))
else:
    tempe = int(input("Ingrese su temperatura: "))
    far = (tempe - 32) / 1.8
    print("Su temperatura en Celsius es de: " + str(far))