var config = {
        container: "#basic-example",
        animateOnInit: true,


        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1',
            collapsable: true
        },
        animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }

    },
    film = {
        text: {
            name: "Veerey Ki Wedding",
            // childrenDropLevel: 0,
        },
    },

    cast = {
        parent: film,
        text:{
            name: "Cast",
            title: "92%",
        },
        stackChildren: true,
        collapsed: true,
    },
    music = {
        parent: film,
        stackChildren: true,
        collapsed: true,
        text:{
            name: "Music",
            title: "85%",
        },
    },
    direction = {
        parent: film,
        collapsed: true,
        text:{
            name: "Direction/Story",
            title: "83%",
        },
    },

    dialogues = {
        parent: film,
        collapsed: true,
        text:{
            name: "Dialogues",
            title: "88%"
        }
    },


    cast2 = {
        parent: cast,
        text:{
            name: "Pulkit Sharma",
            title: "88%",
        },
    },
    cast3 = {
        parent: cast,
        text:{
            name: "Kriti Kharbhanda",
            title: "87%"
        },
    },
    cast4 = {
        parent: cast,
        text:{
            name: "Yuvika Chaudhary",
            title: "79%"
        },
    },
    songs = {
        parent: music,
        text:{
            name: "Songs",
            title: "91%"
        },
    },
    bgm = {
        parent: music,
        text:{
            name: "BGM",
            title: "85%"
        }
    },
    director = {
        parent: direction,
        text:{
            name: "Director",
            title: "68%"
        }
    },
    story = {
        parent: direction,
        text:{
            name: "Story",
            title: "66%"
        }
    },



    dialogue1 = {
        parent: dialogues,
        text:{
            name: '"watan aghe kuch bhi nahi khudh bhi nahi"',
            title: "82%"
        }
    },


    chart_config = [
        config,
        film,
        cast,
        music,
        cast2,
        cast3,
        cast4,
        songs,
        bgm,
        direction,
        director,
        story,
        dialogues,
        dialogue1,
    ];
