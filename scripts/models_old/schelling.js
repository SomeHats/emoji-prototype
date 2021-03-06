Model.init({
    "states": [
        {
            "id": 0,
            "icon": "",
            "name": "blank",
            "actions": []
        },
        {
            "id": 1,
            "icon": "▲",
            "name": "triangle",
            "actions": [
                {
                    "sign": "<",
                    "num": 3,
                    "stateID": "1",
                    "actions": [
                        {
                            "space": 0,
                            "spotStateID": 0,
                            "leaveStateID": 0,
                            "type": "move_to"
                        }
                    ],
                    "type": "if_neighbor"
                }
            ]
        },
        {
            "id": 2,
            "icon": "▦",
            "name": "square",
            "actions": [
                {
                    "sign": "<",
                    "num": 3,
                    "stateID": "2",
                    "actions": [
                        {
                            "space": 0,
                            "spotStateID": 0,
                            "leaveStateID": 0,
                            "type": "move_to"
                        }
                    ],
                    "type": "if_neighbor"
                }
            ]
        }
    ],
    "world": {

        "size": {
            "width": 25,
            "height": 25
        },

        "proportions":[
            {stateID:0, parts:8},
            {stateID:1, parts:1},
            {stateID:2, parts:1}
        ],

        "neighborhood": "moore"

    }
});