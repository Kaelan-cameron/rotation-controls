def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

radio.set_group(1)

def on_forever():
    basic.show_number(input.rotation(Rotation.ROLL))
basic.forever(on_forever)
